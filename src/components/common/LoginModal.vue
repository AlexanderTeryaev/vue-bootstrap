<template>
    <div>
        <b-modal :id="modalId" hide-footer size="xl">
            <div class="modal-body">
                <b-row class="login">
                    <b-col md="6" class="form_left_main">
                        <div class="form_left">
                            <b-row>
                            <b-col md="12" class="form_header">
                                <img src="../../assets/img/justlogo-icon.png">
                                <span>Anmelden</span>
                            </b-col>
                            </b-row>
                            <b-row>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-row>
                                <b-col cols="12" class="text-center p-2" v-if="failedMessage">
                                    <span class="failed-info"> {{failedMessage}} </span>
                                </b-col>
                                <b-col cols="12" class="text-center p-2" v-if="successMessage">
                                    <span class="success-info"> {{successMessage}} </span>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-group id="input-group-1" label-for="input-1">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        placeholder="Email"
                                    ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-group id="input-group-2" label-for="input-2">
                                    <b-input-group>
                                        <b-form-input
                                        :type="password_hidden?'password':'text'"
                                        id="input-2"
                                        v-model="form.password"
                                        required
                                        placeholder="Password"
                                        ></b-form-input>
                                        <b-input-group-append>
                                        <b-button variant="primary" @click="password_hidden = !password_hidden">Show</b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                    </b-form-group>
                                </b-col>
                                </b-row>
                                <b-button type="submit" variant="danger" class="submit-login mt-3">
                                <span class="text-capitalize">{{$t('login.sign_in')}}</span>
                                </b-button>
                            </b-form>
                            </b-row>
                            <div class="no-account col-lg-12 col-xm-12">
                            <a href="javascript:void(0);" @click="openRegisterModal">
                                {{$t('register.register')}}
                            </a>
                            <a href="javascript:void(0);" @click="openForgotModal" class="forgot-pass">
                                {{$t('login.forgot_your_password')}}
                            </a>
                            </div>
                        </div>
                        <b-icon icon="x" class="opened-icon" @click="closeModal"></b-icon>
                    </b-col>
                    <b-col md="6" class="register_right">
                        <img src="../../assets/img/logo-eku.png">
                        <b-icon icon="x" class="opened-icon" @click="closeModal"></b-icon>
                    </b-col>
                </b-row>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { LOGIN_MODAL, REGISTER_MODAL, FORGOT_MODAL } from '@/constants/modal'
import { loadingSpinnerConfig } from '@/config/settings'
export default {
  data () {
    return {
      modalId: LOGIN_MODAL,
      form: {
        email: '',
        password: ''
      },
      show: true,
      password_hidden: true,
      failedMessage: '',
      successMessage: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.failedMessage = ''
      this.loader = this.$loading.show(loadingSpinnerConfig)
      this.$store.dispatch('login', this.form).then(response => {
        if (!response.customer) {
          this.failedMessage = response.errors[0]
        } else {
          this.successMessage = 'You have successfully logged in'
          const self = this
          setTimeout(function () {
            self.$bvModal.hide(LOGIN_MODAL)
            self.$router.push({ name: 'home' }).catch(() => {})
          }, 1000)
        }
        this.loader.hide()
      }).catch(err => {
        console.log(err)
      })
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    closeModal () {
      this.$bvModal.hide(LOGIN_MODAL)
    },
    openRegisterModal () {
      this.$bvModal.hide(LOGIN_MODAL)
      this.$bvModal.show(REGISTER_MODAL)
    },
    openForgotModal () {
      this.$bvModal.hide(LOGIN_MODAL)
      this.$bvModal.show(FORGOT_MODAL)
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.login {
  .form_left_main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    .form_left {
      text-align: center;
      padding: 0 40px 40px;
    }
    .form_header {
      margin-bottom: 50px;
      img {
        max-width: 80px;
      }
      span {
        display: block;
        font-size: 16px;
        padding-top: 10px;
      }
    }
    .no-account {
      text-align: center;
      font-size: 1rem;
      position: absolute;
      bottom: 40px;
      left: 0;
      right: 0;
      a {
        font-weight: 500;
        color: #303030;
        transition: all .3s ease;
        font-size: 14px;
      }
      .forgot-pass:before {
        content: '';
        width: 1px;
        height: 15px;
        background: #113d79;
        position: absolute;
        left: 0;
        top: 2px;
      }
      .forgot-pass {
        margin-left: 20px;
        position: relative;
        padding-left: 20px;
      }
    }
    svg {
        font-size: 35px;
        position: absolute;
        right: 25px;
        top: 15px;
        cursor: pointer;
        display: none;
    }
  }
  .register_right {
    background: url('../../assets/img/bg-animation.png') 0 0 no-repeat #0f3568;
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: center;
    position: relative;
    svg {
        color: white;
        font-size: 35px;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
    .form_left_main {
        svg {
            display: block !important;
        }
    }
    .register_right {
        display: none !important;
    }
}
</style>
