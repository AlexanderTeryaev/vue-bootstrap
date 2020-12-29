<template>
    <div>
        <b-modal :id="modalId" hide-footer size="xl">
            <div class="modal-body">
                <b-row class="register">
                    <b-col md="6" class="form_left_main">
                        <div class="register p-2">
                            <header class="page-header">
                            <h1>{{ $t('register.create_an_account') }}</h1>
                            </header>
                            <div class="page-content">
                            <div class="register-form register-form-mt">
                                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-row>
                                    <b-col cols="12" class="text-center p-2" v-if="failedMessage">
                                        <span class="failed-info"> {{failedMessage}} </span>
                                        </b-col>
                                        <b-col cols="12 text-left">
                                        <label class="form-control-label">
                                            {{$t('register.social_title')}}
                                        </label>
                                    </b-col>
                                    <b-col cols="12 text-left">
                                        <b-form-group id="input-group-4">
                                            <b-form-checkbox-group id="checkboxes-sex">
                                            <b-form-radio v-model="form.id_gender" name="some-radios" :value="1">{{$t('register.Mr')}}</b-form-radio>
                                            <b-form-radio v-model="form.id_gender" name="some-radios" :value="0">{{$t('register.Mrs')}}</b-form-radio>
                                            </b-form-checkbox-group>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12" xm="12">
                                        <b-form-group id="input-group-first-name" label-for="input-first">
                                            <b-form-input
                                            id="input-first"
                                            v-model="form.firstname"
                                            type="text"
                                            required
                                            :placeholder="$t('register.first_name')"
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12" xm="12">
                                        <b-form-group id="input-group-last-name" label-for="input-last">
                                            <b-form-input
                                            type="text"
                                            id="input-last"
                                            v-model="form.lastname"
                                            required
                                            :placeholder="$t('register.last_name')"
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col md="12" xm="12">
                                        <b-form-group id="input-group-1" label-for="input-1">
                                            <b-form-input
                                            id="input-1"
                                            v-model="form.email"
                                            type="email"
                                            required
                                            :placeholder="$t('register.email')"
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12" xm="12">
                                        <b-form-group id="input-group-2" label-for="input-2">
                                            <b-input-group>
                                            <b-form-input
                                                :type="password_hidden?'password':'text'"
                                                id="input-2"
                                                v-model="form.password"
                                                required
                                                :placeholder="$t('register.password')"
                                            ></b-form-input>
                                            <b-input-group-append>
                                                <b-button variant="primary" @click="password_hidden = !password_hidden">Show</b-button>
                                            </b-input-group-append>
                                            </b-input-group>
                                        </b-form-group>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col md="12" xm="12">
                                        <b-form-group id="input-group-birthday" label-for="input-birthday">
                                            <b-form-input
                                            id="input-birthday"
                                            v-model="form.birthday"
                                            type="text"
                                            :placeholder="$t('register.birthday')"
                                            ></b-form-input>
                                            <span class="form-control-comment">
                                            ({{$t('register.eg')}}: 1970-05-31 Optional)
                                            </span>
                                        </b-form-group>
                                    </b-col>
                                </b-row>

                                <b-row class="text-left mt-3">
                                    <b-col>
                                    <b-form-checkbox
                                    id="checkbox-1"
                                    v-model="form.optin"
                                    name="checkbox-1"
                                    :value="1"
                                    :unchecked-value="0"
                                    >
                                    <label>{{$t('register.receive_offers_from_our_partners')}}</label>
                                    </b-form-checkbox>
                                    </b-col>
                                </b-row>

                                <b-row class="text-left">
                                    <b-col>
                                    <b-form-checkbox
                                    id="checkbox-2"
                                    v-model="form.newsletter"
                                    name="checkbox-2"
                                    :value="1"
                                    :unchecked-value="0"
                                    >
                                    <label>{{$t('register.sign_up_for_our_newsletter')}}</label>
                                    <br>
                                    <label>{{$t('register.you_may_unsubscribe_at_any_moment_for_that_purpose_please_find_our_contact_info_in_the_legal_notice')}}</label>
                                    </b-form-checkbox>
                                    </b-col>
                                </b-row>

                                <b-row class="text-left">
                                    <b-col>
                                    <b-form-checkbox
                                    id="checkbox-3"
                                    v-model="is_checked_terms_privacy"
                                    name="checkbox-3"
                                    :value="1"
                                    :unchecked-value="0"
                                    >
                                    <p>{{$t('register.i_accept_the_terms_an_conditions_and_the_privacy_policy')}}</p>
                                    </b-form-checkbox>
                                    </b-col>
                                </b-row>

                                <b-button type="submit" variant="danger" class="submit-register">
                                    <span class="text-capitalize">{{$t('register.save')}}</span>
                                </b-button>
                                </b-form>
                            </div>
                            <hr>
                            <b-row class="select-options">
                                <b-col cols="12 text-center">
                                    <p>
                                    {{$t('register.already_have_an_account')}}
                                    <a href="javascript:void(0);" @click="openLoginModal">
                                        {{$t('register.log_in_instead')}}
                                    </a>
                                    </p>
                                </b-col>
                            </b-row>
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
import { REGISTER_MODAL, LOGIN_MODAL } from '@/constants/modal'
import { loadingSpinnerConfig } from '@/config/settings'
export default {
  data () {
    return {
      modalId: REGISTER_MODAL,
      form: {
        id_gender: 1,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthday: '',
        optin: 0,
        newsletter: 0
      },
      is_checked_terms_privacy: 0,
      show: true,
      password_hidden: true,
      failedMessage: ''
    }
  },
  mounted () {
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.failedMessage = ''
      if (this.is_checked_terms_privacy === 0) {
        this.failedMessage = 'Please accept our Terms And Conditions'
      }
      if (this.failedMessage === '') {
        this.loader = this.$loading.show(loadingSpinnerConfig)
        this.$store.dispatch('register', this.form).then(response => {
          if (!response.customer) {
            this.failedMessage = response.errors[0].message
          } else {
            this.$router.push({ name: 'home' }).catch(() => {})
          }
          this.loader.hide()
        }).catch(err => {
          console.log(err)
          this.loader.hide()
        })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.id_gender = 'male'
      this.form.firstname = ''
      this.form.lastname = ''
      this.form.email = ''
      this.form.password = ''
      this.form.birthday = ''
      this.form.optin = 0
      this.form.newsletter = 0
      this.form.is_checked_terms_privacy = 0
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    closeModal () {
      this.$bvModal.hide(REGISTER_MODAL)
    },
    openLoginModal () {
      this.$bvModal.hide(REGISTER_MODAL)
      this.$bvModal.show(LOGIN_MODAL)
    }
  }
}
</script>

<style scoped lang="scss">
.register {
  .form_left_main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    .page-content {
      padding-top: 40px;
      padding-bottom: 30px;
      .register-form-mt {
        margin-left: auto;
        margin-right: auto;
        float: none;
        width: 92%;
        #checkboxes-sex {
          position: relative;
          display: flex;
          .custom-radio {
            margin-left: 10px;
          }
        }
        .submit-register {
          float: right;
        }
        label {
          text-align: left;
          font-size: 13px !important;
          color: #303030;
          margin-bottom: 0px;
        }
        .text-left {
          font-size: 13px;
        }
      }
      hr {
        margin-top: 50px;
      }
      .select-options p {
        padding-bottom: 1rem;
        font-size: .9375rem;
        color: #7a7a7a;
        font-weight: 400;
      }
      a {
        font-weight: 500;
        color: #303030;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        font-size: 15px;
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
