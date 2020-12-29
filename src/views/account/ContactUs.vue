<template>
  <b-container class="support mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <div class="contact-rich">
            <h4>Store information</h4>
            <div class="block">
                <div class="icon">
                    <b-icon icon="geo-alt"></b-icon>
                </div>
                <div class="data">Ekugellager<br>Germany</div>
            </div>
                <hr>
                <div class="block">
                <div class="icon">
                    <b-icon icon="telephone-fill"></b-icon>
                </div>
                <div class="data">
                    Call us:<br>
                    <a href="tel:+49 (0)234 5450120">+49 (0)234 5450120</a>
                </div>
                </div>
                    <hr>
                <div class="block">
                <div class="icon">
                    <b-icon icon="envelope-fill"></b-icon>
                </div>
                <div class="data email">
                    Email us:<br>
                </div>
                <a href="mailto:info@ekugellager.de">info@ekugellager.de</a>
                </div>
            </div>
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <b-form @submit="onSubmit">
          <h4 class="text-uppercase text-left">{{$t('account.contact_us')}}</h4>
          <b-form-group label-cols="12" label-cols-sm="3" label="Subject" label-for="subject" class="text-left">
            <template v-slot:label>
              <span class="text-danger">* </span>{{$t('support.subject')}}
            </template>
            <b-col cols="12" sm="8"><b-form-select v-model="form.selected_subject" :options="form.subject_options" required></b-form-select></b-col>
          </b-form-group>
          <b-form-group label-cols="12" label-cols-sm="3" label="Email Address" label-for="email" class="text-left">
            <template v-slot:label>
              <span class="text-danger">* </span>{{$t('support.email')}}
            </template>
            <b-col cols="12" sm="8"><b-form-input id="email" v-model="form.email_address" required></b-form-input></b-col>
          </b-form-group>
          <b-form-group label-cols="12" label-cols-sm="3" :label="$t('support.order')" label-for="order" class="text-left">
            <b-col cols="12" sm="8"><b-form-select v-model="form.selected_order" :options="form.order_options"></b-form-select></b-col>
          </b-form-group>
          <b-form-group label-cols="12" label-cols-sm="3" :label="$t('support.attachment')" label-for="attachment" class="text-left">
            <b-col cols="12" sm="8">
              <b-form-file
                v-model="form.attachment"
                placeholder=""
                drop-placeholder=""
              ></b-form-file>
            </b-col>
          </b-form-group>
          <b-form-group label-cols="12" label-cols-sm="3" label="Message" label-for="message" class="text-left">
            <template v-slot:label>
                <span class="text-danger">* </span>{{$t('support.message')}}
              </template>
            <b-col cols="12">
              <b-form-textarea
                id="message"
                v-model="form.message"
                :placeholder="$t('support.message_placeholder')"
                rows="6"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-col>
          </b-form-group>
          <b-form-group label-cols="12" label-cols-sm="3" class="text-left">
            <b-col cols="12">
              <b-form-checkbox
                id="status"
                v-model="form.status"
                name="status"
                :value="true"
                :unchecked-value="false"
                required
              >
                Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt.
              </b-form-checkbox>
            </b-col>
          </b-form-group>
          <b-col cols="12">
            <b-button type="submit" variant="primary" class="float-right text-uppercase" :disabled="!form.status">{{$t('support.send')}}</b-button>
          </b-col>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      form: {
        selected_subject: 1,
        subject_options: [
          { value: 1, text: 'customer service' },
          { value: 2, text: 'webmaster' }
        ],
        email_address: 'topdev.star@gmail.com',
        selected_order: null,
        order_options: [
          { value: null, text: 'Select reference' },
          { value: 1, text: 'SUBHQQBUY' },
          { value: 2, text: 'BQQCQZGYI' }
        ],
        attachment: null,
        message: '',
        status: false
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped lang="scss">
.contact-rich {
    color: #7a7a7a;
    margin-bottom: 2rem;
    h4 {
        text-transform: uppercase;
        color: #232323;
        margin-bottom: 2rem;
    }
    .block {
        height: auto;
        overflow: hidden;
        .icon {
            float: left;
            width: 3.5rem;
            font-size: 1.4rem;
        }
        .data {
            text-align: left;
            color: #232323;
            font-size: .875rem;
            width: auto;
            overflow: hidden;
        }
        a {
            color: #2fb5d2 !important;
            text-decoration: none;
        }
        a[href^="mailto:"] {
            float: left;
        }
    }
}
.account-right {
  .btn-primary {
    background: #B2162C 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 4px;
    color: #fff;
    border: none;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    font-size: 16px;
    font-weight: 500;
  }
  .btn-primary:hover {
    outline: none;
    background: #113d79;
  }
  .btn-primary.disabled {
    cursor: not-allowed;
  }
  .btn-primary.disabled:hover {
    background-color: #2fb5d2;
    border-color: transparent;
  }
}
</style>
