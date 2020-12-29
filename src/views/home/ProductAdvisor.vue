<template>
  <b-container>
    <b-row class="product_advisor">
      <b-col cols="12" class="header_block"></b-col>
      <b-col cols="12" lg="12" class="question_block">
        <b-card>
          <div class="advisor_head mb-3">
            <h2>{{$t('product_advisor.title')}}</h2>
            <p>{{$t('product_advisor.description')}}</p>
          </div>
          <div class="advisor_contents">
            <b-collapse id="contents"  class="contents pt-3 pb-3">
              <QuestionBox v-if="question_answers_loaded"
              :currentQuestion="questions.length > index?questions[index]:null"
              :next="next"
              :register="register"
              :view_products="view_products"
              />
            </b-collapse>
            <div class="nav-link-up-question" v-if="questions.length > index" v-b-toggle.contents>
                <b-icon icon="chevron-down" class="collapsed-icon"></b-icon>
                <b-icon icon="chevron-up" class="opened-icon"></b-icon>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col cols="12" sm="7" class="canvas_block"></b-col>
    </b-row>
  </b-container>
</template>
<script>
import QuestionBox from './QuestionBox'
import { HomeServices } from '@/services/index'
import { Trans } from '@/lang/Translation'
export default {
  components: {
    QuestionBox
  },
  data () {
    return {
      question_answers_loaded: false,
      questions: [
        // {
        //   question: 'Do you like fashion?',
        //   answers: [
        //     'Yes, I totally become one with my clothes',
        //     'Yes, a bit',
        //     'Not so much...'
        //   ]
        // },
        // {
        //   question: 'Do you like art?',
        //   answers: [
        //     'Totally',
        //     'I appreciate it',
        //     'No, i dont like it'
        //   ]
        // },
        // {
        //   question: 'What is your opinion about hanging images on your wall?',
        //   answers: [
        //     'I do it, already having several images in my livingroom!',
        //     'Maybe one image here and there...',
        //     'I prefer function over design with some shelfes',
        //     'Clean walls all the way!'
        //   ]
        // },
        // {
        //   question: 'How does your work desk look like?',
        //   answers: [
        //     'Clean and Tidy',
        //     'I am the master of chaos'
        //   ]
        // },
        // {
        //   question: 'Are you open minded?',
        //   answers: [
        //     'Yes, I don\'t like boundaries',
        //     'I think so',
        //     'No, I need structure'
        //   ]
        // },
        // {
        //   question: 'Do you think the climate change exists?',
        //   answers: [
        //     'Yes, definetely',
        //     'No, Trump is right'
        //   ]
        // },
        // {
        //   question: 'Do you do something active against it?',
        //   answers: [
        //     'Yes, I want solar panels on my roof at some time!',
        //     'I just accept it.'
        //   ]
        // }
      ],
      index: 0,
      selectedAnswers: []
    }
  },
  created () {
    this.getQuestions()
    // this.getAnswers()
  },
  methods: {
    getQuestions () {
      HomeServices.getQuestions(Trans.getLangId(Trans.currentLanguage)).then(resp => {
        // console.log(resp)
        // get all questions
        this.questions = resp.roccproductadvisor
        this.getAnswers()
      })
    },
    getAnswers () {
      HomeServices.getAnswers(Trans.getLangId(Trans.currentLanguage)).then(resp => {
        // add answers field to each question
        var that = this
        this.questions.forEach(function (question, index) {
          that.questions[index].answers = resp.roccproductadvisor.filter((answer) => that.filterAnswers(answer, question.id))
        })
        this.question_answers_loaded = true
        // console.log(this.questions)
      })
    },
    filterAnswers (answer, questionId) {
      return answer.id_roccproductadvisor_question === questionId
    },
    next (answer) {
      //  save selected question and answer id
      const selectedAnswer = {
        question: this.questions[this.index].id,
        answer: this.questions[this.index].answers[answer].id
      }
      this.index++
      this.selectedAnswers.push(selectedAnswer)
    },
    register () {
      // console.log(this.selectedAnswers)
      this.$router.push(this.$i18nRoute({ name: 'login' }))
    },
    view_products () {
      this.$router.push(this.$i18nRoute({ name: 'recommend-products' }))
    }

  }
}
</script>
<style lang="scss" scoped>
  .product_advisor {
    .header_block {
      display: none;
    }
    .question_block {
      float: none;
      margin: auto;
      text-align: center;
      .card {
        border-radius: 8px;
        padding-top: 100px;
        // margin-top: -110px;
        position: relative;
        background: rgba(255,255,255,.2);
        @media screen and (max-width: 768px) {
          background: rgba(112,112,112,.2);
        }
        padding: 60px 0px;
        padding-bottom: 20px;
        .advisor_head {
          color: #303030;
          h2 {
            font-weight: 500;
            font-size: 22px;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          p {
            font-weight: 300;
            font-family: 'Lato';
            font-size: 14px;
            opacity: .8;
            margin-bottom: 30px;
            margin-top: 25px;
          }
        }
        .advisor_contents {
          .contents {
            border-top: 1px solid #eee;
          }
          .nav-link-up-question{
            outline: none;
            .b-icon {
              font-size: 30px;
              color: #B2162C;
            }
          }
        }
      }
    }
    .canvas_block {
      display: none;
    }
  }
</style>
