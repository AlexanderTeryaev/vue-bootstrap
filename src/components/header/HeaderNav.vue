<template>
  <div class="app-header">
    <nav class="header-nav">
      <b-container>
        <b-row>
          <b-col md="8" sm="12" class="left_nav_section">
            <div class="top_hint">
              <b-icon icon="check-circle" font-scale="1.2"></b-icon>
              AB 99€ FREI HAUS
            </div>
            <div class="top_treker">
              <div class="top_counter">
                <span id="tp_timer"></span>
                <span class="red_triger" id="red_triger"></span>
                <span class="target">
                  <b-icon icon="truck"></b-icon>
                </span>
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="right_nav_section">
            <div id="_desktop_language_selector" class="mt-2">
              <TheLanguageSwitcher/>
            </div>
            <b-col>
              <ul class="navbar-icon">
                <li><a href class="topicon">
                  <b-icon icon="cash-stack" id="topicon1"></b-icon>
                  <b-tooltip v-if="this.$store.state.header && this.$store.state.header.topnavbar" target="topicon1"><span v-html="this.$store.state.header.topnavbar.descw1"></span></b-tooltip>
                </a></li>
                <li><a href class="topicon">
                  <b-icon icon="truck" id="topicon2"></b-icon>
                  <b-tooltip v-if="this.$store.state.header && this.$store.state.header.topnavbar" target="topicon2"><span v-html="this.$store.state.header.topnavbar.descw2"></span></b-tooltip>
                </a></li>
                <li><a href class="topicon">
                  <b-icon icon="telephone-plus" id="topicon3"></b-icon>
                  <b-tooltip v-if="this.$store.state.header && this.$store.state.header.topnavbar" target="topicon3"><span v-html="this.$store.state.header.topnavbar.descw3"></span></b-tooltip>
                </a></li>
                <li><a href class="topicon">
                  <b-icon icon="question-circle" id="topicon4"></b-icon>
                  <b-tooltip v-if="this.$store.state.header && this.$store.state.header.topnavbar" target="topicon4"><span v-html="this.$store.state.header.topnavbar.descw4"></span></b-tooltip>
                </a></li>
              </ul>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
    </nav>
  </div>
</template>

<script>
import TheLanguageSwitcher from '@/components/common/TheLanguageSwitcher'
import { Trans } from '@/lang/Translation'
export default {
  components: {
    TheLanguageSwitcher
  },
  mounted () {
    this.topCounter()
    setTimeout(() => {
      this.$store.dispatch('get_topnavbar', Trans.getLangId(Trans.currentLanguage))
    }, 200)
  },
  methods: {
    topCounter () {
      // Set the date we're counting down to
      const d = new Date()
      const today = new Date().toISOString().slice(0, 10)
      const startDate = new Date(today + ' 08:00:00').getTime()
      let targetDate = new Date(today + ' 19:00:00').getTime()
      if (d.getDay() === 5) {
        targetDate = new Date(today + ' 17:00:00').getTime()
      }
      let message = ''
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        if ((d.getDay() !== 0 && d.getDay() !== 6) && (d.getDay() + 1 !== 0 && d.getDay() + 1 !== 6)) {
          message = ''
        }
        // Update the count down every 1 second
        const x = setInterval(function () {
          // Get today's date and time
          const now = new Date().getTime()
          const compleatDistance = now - startDate
          const width = (compleatDistance * 100) / (targetDate - startDate)
          // Find the distance between now and the count down date
          const distance = targetDate - now
          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24))
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((distance % (1000 * 60)) / 1000)
          // Display the result in the element with id="tp_timer"
          let Timer = ''
          Timer += days > 0 ? days + 'd ' : ''
          Timer += hours > 0 ? hours + 'h ' : ''
          Timer += (minutes > 0) && (hours => 0) ? minutes + 'm ' : '00m'
          Timer += seconds > 0 ? seconds + 's ' : '00s'
          if (document.getElementById('tp_timer')) {
            document.getElementById('tp_timer').innerHTML = Timer
          }
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x)
            if (document.getElementById('tp_timer')) {
              document.getElementById('tp_timer').innerHTML = message
            }
          } else {
            if (document.getElementById('red_triger')) {
              document.getElementById('red_triger').style.width = width + '%'
            }
          }
        }, 1000)
      } else {
        if (document.getElementById('tp_timer')) {
          document.getElementById('tp_timer').innerHTML = 'Wochenende'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-nav {
  background: #f0f0f0;
  height: 54px;
  margin-bottom: 0em;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 14px;

  .left_nav_section {
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between !important;

    .top_hint {
      color: #4E4E4E;
      font-family: 'Lato';
      font-weight: 300;
      font-size: 14px;
      line-height: 50px;
      padding-left: 24px;
    }

    .top_treker {
      max-width: 272px;
      margin-left: auto;
      margin-top: 14px;

      .top_counter {
        background-color: #12407E;
        border-radius: 9px;
        height: 20px;
        width: 271px;
        position: relative;
        #tp_timer {
          color: #fff;
          font-weight: 300;
          -webkit-transition: all .5s ease;
          transition: all .5s ease;
          z-index: 3;
          font-size: 12px;
          position: absolute;
          left: 40%;
        }

        .red_triger {
          background-color: #B2162C;
          border-radius: 9px;
          height: 20px;
          display: block;
          width: 0px;
          -webkit-transition: all .5s ease;
          transition: all .5s ease;
          float: left;
        }

        .target {
          position: relative;
          float: right;
          right: 7px;
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }

  .right_nav_section {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between !important;

    .navbar-icon {
      list-style: none;
      margin-left: 0em;
      display: flex;

      li {
        display: inline;
        text-align: center;

        .topicon {
          width: 50px;
          height: 48px;
          text-decoration: none;
          -webkit-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
          display: block;
          line-height: 60px;
        }

        svg {
          font-size: 25px;
          color: #818181;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header-nav .right_nav_section {
    display: none !important;
  }
  .left_nav_section {
    display: inline-flex !important;
  }
  .header-nav .top_treker {
    margin-left: 0px !important;
    margin-right: 0px !important;
    max-width: 200px !important;
  }
  .top_treker .top_counter {
    width: 200px !important;
  }
}
@media screen and (max-width: 410px) {
  .left_nav_section {
    .top_hint {
      padding-left: 0px !important;
      font-size: 12px !important;
      font-weight: 400 !important;
    }
  }
}
@media screen and (max-width: 370px) {
  .left_nav_section .top_treker {
    display: none !important;
  }
}
</style>
