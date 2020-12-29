<template>
  <div class="header-top">
    <b-container fluid>
      <b-row>
        <b-col md="12" sm="12" class="position-static">
          <div class="mainmenu">
            <b-container>
              <div class="desktop_menu">
                <ul class="menu-desktop-list">
                  <li class="menu-left menu_bar_btn d-none d-md-block" v-b-toggle.collapse-menu>
                    <b-icon icon="list" class="collapsed-icon"></b-icon>
                    <b-icon icon="x" class="opened-icon"></b-icon>
                  </li>
                  <li class="menu-left" v-for="(item, index) in menulist" :key="index">
                    <a href="javascript:void(0)" @click="clickItem(index)" :class="{ 'active': isActive(index) }">
                      <b-img :src="getImgUrl(item.imgname)" class="menu-img"/>
                      <span>{{item.text}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </b-container>
          </div>
          <Menu data="d-none d-md-block"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
  components: {
    Menu
  },
  data () {
    return {
      activeIndex: 0,
      menulist: [
        {
          text: 'Wälzlager',
          imgname: 'waelzlager'
        },
        {
          text: 'Laufrolle',
          imgname: 'laufrolle'
        },
        {
          text: 'Lineartechnik',
          imgname: 'lineartechnik'
        },
        {
          text: 'Gehäuse/-Einheiten',
          imgname: 'gehaeuse-einheiten'
        },
        {
          text: 'Gleitlager',
          imgname: 'gleitlager'
        },
        {
          text: 'Keilriemen',
          imgname: 'keilriemen'
        }
      ]
    }
  },
  methods: {
    getImgUrl (imgname) {
      var images = require.context('../../assets/img', false, /\.jpg$/)
      return images('./' + imgname + '.jpg')
    },
    clickItem (index) {
      this.activeIndex = index
    },
    isActive (index) {
      return index === this.activeIndex
    }
  }
}
</script>

<style scoped lang="scss">
.header-top {
  background: #12407E;
  padding: 0px;
  height: 66px;
  .position-static {
    position: static;
    padding-left: 5px;
    padding-right: 5px;
    .mainmenu {
      line-height: 66px;
      border-top: 0px;
      font-family: 'Lato';
      font-weight: 100;
      background: #12407E;
      .menu-desktop-list {
        margin-bottom: 0em;
        justify-content: space-between !important;
        display: flex;
        margin: 0px;
        padding: 0px;
        li.menu_bar_btn {
          color: white;
          padding-left: 5px;
        }
        li {
          display: inline;
          position: relative;
          a {
            color: #fff !important;
            font-family: 'Lato';
            font-weight: 300;
            height: 66px;
            transition: all .35s ease-in-out,box-shadow .35s ease-in-out;
            font-size: 15px;
            display: block;
            padding-left: 15px;
            padding-right: 15px;
          }
          a:hover {
            background: #B2162C;
          }
          a.active {
            background: #B2162C;
          }
        }
        .menu-img {
          width: 41px;
          margin-right: 10px;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .desktop_menu span {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .header-top {
    height: 40px;
    background: #fff;
    margin-top: 12px;
    .mainmenu {
      border-radius: 8px;
      overflow: hidden;
      .desktop_menu {
        margin-left: -15px;
        margin-right: -15px;
        ul li.menu_bar_btn {
          padding-top: 4px !important;
        }
        ul li {
          display: block;
          padding: 0 0%;
          text-align: center;
          width: 100%;
          line-height: 2rem;
          a {
            padding-left: 8px !important;
            padding-right: 8px !important;
            height: 40px !important;
            line-height: 35px !important;
            border-radius: 8px !important;
            .menu-img {
              margin-right: 0px !important;
              margin-left: 0px !important;
              width: 30px !important;
            }
          }
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
