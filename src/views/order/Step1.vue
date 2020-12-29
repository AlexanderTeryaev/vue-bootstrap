<template>
    <section id="checkout-personal-information-step" class="checkout-step">
        <h1 class="step-title h3">
            <span class="step-number">1</span>
            {{$t('order.personal_information')}}
        </h1>
        <div class="page-content">
            <b-nav class="nav_create_account">
                <b-nav-item class="order-btn-primary" v-if="show" @click="switchView">{{$t('login.sign_in')}}</b-nav-item>
                <b-nav-item class="order-btn-primary" v-if="!show" @click="switchView">{{$t('order.new_user')}}</b-nav-item>
            </b-nav>
            <div class="register-form register-form-mt">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-row>
                        <b-col cols="12 text-left">
                        <label class="form-control-label">
                            {{$t('register.social_title')}}
                        </label>
                        </b-col>
                        <b-col cols="12 text-left">
                            <b-form-group id="input-group-4">
                                <b-form-checkbox-group id="checkboxes-sex">
                                <b-form-radio v-model="form.sex" name="some-radios" value="male">{{$t('register.Mr')}}</b-form-radio>
                                <b-form-radio v-model="form.sex" name="some-radios" value="female">{{$t('register.Mrs')}}</b-form-radio>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xm="12">
                            <b-form-group id="input-group-first-name" label-for="input-first">
                                <b-form-input
                                id="input-first"
                                v-model="form.firstName"
                                type="text"
                                required
                                :placeholder="$t('register.first_name')"
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xm="12">
                            <b-form-group id="input-group-last-name" label-for="input-last">
                                <b-form-input
                                type="text"
                                id="input-last"
                                v-model="form.lastName"
                                required
                                :placeholder="$t('register.last_name')"
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="6" xm="12">
                        <b-form-group id="input-group-1" label-for="input-1">
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                            autocomplete="username"
                            :placeholder="$t('register.email')"
                            ></b-form-input>
                        </b-form-group>
                        </b-col>
                        <b-col md="6" xm="12">
                        <b-form-group id="input-group-2" label-for="input-2">
                            <b-input-group>
                            <b-form-input
                                :type="password_hidden?'password':'text'"
                                id="input-2"
                                v-model="form.password"
                                required
                                autocomplete="current-password"
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
                        <b-col md="6" xm="12">
                        <b-form-group id="input-group-birthday" label-for="input-birthday">
                            <b-form-input
                            id="input-birthday"
                            v-model="form.birthday"
                            type="text"
                            :placeholder="$t('register.birthday')"
                            ></b-form-input>
                        </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="text-left">
                        <b-col>
                        <b-form-checkbox
                        id="checkbox-1"
                        v-model="form.check1"
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
                        v-model="form.check2"
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
                            v-model="form.check3"
                            name="checkbox-3"
                            :value="1"
                            :unchecked-value="0"
                            >
                            <p>{{$t('register.i_accept_the_terms_an_conditions_and_the_privacy_policy')}}</p>
                            </b-form-checkbox>
                        </b-col>
                    </b-row>

                    <b-col cols="12" class="col-checkout-footer">
                        <router-link :to="$i18nRoute({ name: 'cart'})">
                            <b-button type="button" variant="primary" class="order-btn-primary float-xs-left">
                                {{$t('order.back')}}
                            </b-button>
                        </router-link>
                        <b-button type="submit" variant="primary" class="order-btn-primary float-xs-right">
                            {{$t('order.further')}}
                        </b-button>
                    </b-col>
                </b-form>

                <b-form @submit="onSubmitLogin" @reset="onResetLogin" v-if="!show">
                    <b-row>
                        <b-col md="6" xm="12">
                            <b-form-group id="input-group-1" label-for="input-1">
                                <b-form-input
                                id="input-1"
                                v-model="loginform.email"
                                type="email"
                                required
                                :placeholder="$t('login.email')"
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xm="12">
                            <b-form-group id="input-group-2" label-for="input-2">
                                <b-input-group>
                                    <b-form-input
                                        :type="login_password_hidden?'password':'text'"
                                        id="input-2"
                                        v-model="loginform.password"
                                        required
                                        autocomplete="current-password"
                                        :placeholder="$t('login.password')"
                                    ></b-form-input>
                                    <b-input-group-append>
                                        <b-button variant="primary" @click="login_password_hidden = !login_password_hidden">Show</b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div>
                        <router-link :to="$i18nRoute({ name: 'password-recovery'})" class="float-xs-left">
                            {{$t('login.forgot_your_password')}}
                        </router-link>
                        <span class="float-xs-right">
                            <b-form-checkbox
                            v-model="remember_me"
                            :value="1"
                            :unchecked-value="0"
                            > {{$t('login.remember_me')}} </b-form-checkbox>
                        </span>
                    </div>
                    <b-col cols="12" class="col-checkout-footer">
                        <router-link :to="$i18nRoute({ name: 'cart'})">
                            <b-button type="button" variant="primary" class="order-btn-primary float-xs-left">
                                {{$t('order.back')}}
                            </b-button>
                        </router-link>
                        <b-button type="submit" variant="primary" class="order-btn-primary float-xs-right">
                            Login
                        </b-button>
                    </b-col>
                </b-form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      form: {
        sex: 'male',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        check1: 0,
        check2: 0,
        check3: 0
      },
      password_hidden: true,
      loginform: {
        email: '',
        password: ''
      },
      remember_me: 0,
      login_password_hidden: true
    }
  },
  methods: {
    switchView () {
      this.show = !this.show
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.sex = 'male'
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.password = ''
      this.form.birthday = ''
      this.form.check1 = 0
      this.form.check2 = 0
      this.form.check3 = 0
      this.show = false
    },
    onSubmitLogin (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.loginform))
    },
    onResetLogin (evt) {
      evt.preventDefault()
      this.loginform.email = ''
      this.loginform.password = ''
    }
  }
}
</script>

<style scoped lang="scss">
.checkout-step {
    padding-top: 20px;
    box-shadow: 0px 3px 6px #00000029;
    border-bottom: none;
    padding: .9375rem;
  .step-title {
    color: #303030;
    font-size: 16px;
    text-transform: unset;
    border-bottom: none !important;
    text-align: left;
    .step-number {
        display: inline-block;
        padding: .625rem;
    }
  }
  .page-content {
    padding-top: 40px;
    padding-bottom: 30px;
    .nav_create_account {
        li a {
            color: white !important;
        }
    }
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
        font-size: 14px !important;
        color: #303030;
        margin-bottom: 0px;
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
    .col-checkout-footer {
        padding: 20px 30px 0;
        border-top: 0.5px solid #E9E9E9;
        margin-top: 30px;
    }
    .nav_create_account {
        padding-left: 15px;
        position: absolute;
        right: 0px;
        top: 30px;
        padding-right: 44px;
        display: flex;
        flex-flow: row-reverse;
    }
  }
}
@media screen and (max-width: 768px) {
    .nav_create_account {
        padding-left: 15px;
        position: absolute;
        right: 0px;
        top: 30px;
        padding-right: 44px;
        display: flex;
        flex-flow: row-reverse;
        top: 55px !important;
    }
    .checkout-step .page-content .col-checkout-footer {
        padding: 20px 0px 0 !important;
    }
}
</style>
