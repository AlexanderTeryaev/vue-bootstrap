<template>
  <b-container class="identity mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{$t('account.information')}}</h1>
        <div class="page-content">
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
                    <span class="form-control-comment">
                    ({{$t('register.eg')}}: 1970-05-31 Optional)
                    </span>
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

              <b-button type="submit" variant="danger" class="submit-register">
                <span class="text-capitalize">{{$t('register.save')}}</span>
              </b-button>
            </b-form>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
export default {
  components: {
    AccountNav
  },
  data () {
    return {
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
      show: true,
      password_hidden: true
    }
  },
  methods: {
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
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.account-right {

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
  }
}
</style>
