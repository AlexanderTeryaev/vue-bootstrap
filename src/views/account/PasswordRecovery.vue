<template>
  <b-container class="password-recovery p-2">
    <header class="page-header">
      <h1>{{$t('password_recovery.title')}}</h1>
    </header>
    <section id="content" class="page-content">
      <div class="no-or-expire-link" v-if="check_link<2">
        <b-form @submit="onSubmit" @reset="onReset" class="forgot-password" v-if="!is_sent">
          <b-alert show variant="danger" v-if="check_link==1">{{$t('password_recovery.wrong_or_expired_link')}}</b-alert>
          <header>
            <p class="send-renew-password-link">{{$t('password_recovery.description')}}</p>
          </header>
          <section class="form-fields">
              <b-col md="5" class="email">
                <b-form-input v-model="form.email" type="email" name="email" :placeholder="$t('placeholder.email')" value="" required=""></b-form-input>
              </b-col>
              <b-button variant="primary" class="d-none d-md-block" name="submit" type="submit">
                {{$t('password_recovery.send_link')}}
              </b-button>
              <b-button variant="primary" class="d-block d-md-none" name="submit" type="submit">
                {{$t('password_recovery.send')}}
              </b-button>
          </section>
        </b-form>
        <b-alert show variant="success" v-else>{{$t('password_recovery.email_sent')}}{{form.email}}</b-alert>
      </div>
      <div class="has-link" v-else>
        <div class="email">
          {{$t('password_recovery.email_address')}}: topdev.star@gmail.com
        </div>
        <b-form @submit="changePassword"  class="forgot-password">
          <section class="password-fields">
            <b-row>
              <b-col cols="12" md="6" class="mx-auto">
                <b-form-group>
                  <b-form-input
                    name="password"
                    v-model="form.new_pass"
                    type="password"
                    required
                    :placeholder="$t('password_recovery.new_password')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6" class="mx-auto">
                <b-form-group>
                  <b-form-input
                    name="password_confirm"
                    v-model="form.new_pass_confirm"
                    type="password"
                    required
                    :placeholder="$t('password_recovery.password_confirm')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-button variant="primary" class="mx-auto" name="submit" type="submit">
                {{$t('password_recovery.change_password')}}
              </b-button>
            </b-row>
          </section>
        </b-form>
      </div>
      <router-link :to="$i18nRoute({ name: 'register'})" class="account-link">
        <b-icon icon="chevron-left"></b-icon>
        <span>{{$t('password_recovery.back_to_login')}}</span>
      </router-link>
    </section>
  </b-container>
</template>

<script>
import { UserServices } from '@/services/index'
export default {
  name: 'password-recovery',
  data () {
    return {
      form: {
        email: '',
        new_pass: '',
        new_pass_confirm: ''
      },
      is_sent: false,
      token: null,
      id_customer: null,
      reset_token: null,
      check_link: 0 // no link
    }
  },
  mounted () {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push({ name: 'home' }).catch(() => {})
    }
    this.token = this.$route.query.token
    this.id_customer = this.$route.query.id_customer
    this.reset_token = this.$route.query.reset_token
    if (this.token && this.id_customer && this.reset_token) {
      this.checkLink(this.token, this.id_customer, this.reset_token)
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      UserServices.forgotPassword(this.form.email).then(res => {
        this.is_sent = true
      })
    },
    onReset (e) {
      e.preventDefault()
    },
    changePassword (e) {
      e.preventDefault()
      if (this.form.new_pass !== this.form.new_pass_confirm) {
        e.target.password_confirm.setCustomValidity('Password doesn\'t match!')
        e.target.password_confirm.reportValidity()
      }
    },
    checkLink (token, customer, reset) {
      this.check_link = 1 // expired or wrong link
      this.check_link = 2 // correct link
    }
  }
}
</script>
<style lang="scss" scoped>
  .page-content {
    padding-top: 40px;
    padding-bottom: 30px;
    box-shadow: none;
    border: none;
    text-align: left;
    .forgot-password {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border: 0;
      border-bottom: 1px solid rgba(0,0,0,.1);
      padding: 4px;
    }
    .form-fields {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      .btn-primary {
        background: #B2162C 0% 0% no-repeat padding-box;
        border: none;
      }
      input {
        height: 50px;
      }
    }
    .email {
      padding-left: 0;
      padding-right: 0;
      width: 430px;
      float: left;
    }
    .send-renew-password-link {
        padding-left: 10px;
        padding-right: 10px;
        font-size: .9375rem;
        color: #7a7a7a;
        font-weight: 400;
    }
    .account-link {
      font-weight: 500;
      color: #303030;
      transition: all .3s ease;
      font-size: 14px;
    }
    .password-fields {
      margin-top: 2rem;
      margin-bottom: 2rem;
      .btn-primary {
        background: #B2162C 0% 0% no-repeat padding-box;
        border: none;
      }
    }
  }
</style>
