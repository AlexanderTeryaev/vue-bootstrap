<template>
  <div class="advisor_question_block" v-if="currentQuestion!=null">
    <div class="head mb-1 font-weight-bold"> About you</div>
    <div class="question mb-3 font-weight-bold">{{currentQuestion.question}}</div>
    <b-form>
      <b-form-group class="pl-5 text-left">
        <b-form-radio name="answer" class="pb-1"
          v-for="(answer, index) in currentQuestion.answers"
          :key="index"
          :value="index"
          v-model="selectedIndex"
          >
          {{answer.answer}}
          <!-- test -->
        </b-form-radio>
      </b-form-group>
      <b-button  variant="danger" @click="nextQuestion">{{$t('product_advisor.furthur')}}</b-button>
    </b-form>
  </div>
  <div class="advisor_question_block" v-else>
    <b-button  variant="danger" @click="view_products" v-if="this.$store.getters.isLoggedIn">{{$t('product_advisor.view_products')}}</b-button>
    <b-button  variant="danger" @click="register" v-else>{{$t('product_advisor.register')}}</b-button>
  </div>
</template>
<script>
// import _ from 'lodash'
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    register: Function,
    view_products: Function
  },
  data () {
    return {
      selectedIndex: null,
      questionAnswers: []
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler () {
        this.selectedIndex = null
      }
    }
  },
  methods: {
    nextQuestion () {
      if (this.selectedIndex != null) {
        this.next(this.selectedIndex)
      } else {
        console.log('please select one')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .advisor_question_block {
    .btn{
      background-color: #B2162C;
      width: 60%;
      border: none;
    }
  }
</style>
