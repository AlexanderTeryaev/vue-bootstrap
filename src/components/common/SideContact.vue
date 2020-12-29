<template>
    <div>
        <div v-if="this.$store.getters.isLoggedIn" :class="opened ? 'side_contact open' : 'side_contact'">
            <ul>
                <li>
                    <div class="left_col">
                        <a href="javascript:void(0)" class="icon-tab1 opentab" @click="opened = !opened">
                            <span class="red-icon">
                                <b-icon :icon="opened ? 'chevron-right' : 'chevron-left'" ></b-icon>
                            </span>
                        </a>
                        <router-link :to="$i18nRoute({ name: 'my-account'})" class="icon-tab1">
                            <span class="red-icon">
                                <b-icon icon="person"></b-icon>
                            </span>
                        </router-link>
                    </div>
                    <div class="right_col">
                        <span class="right"><a href="#">Kd Nr: 21</a></span>
                        <span class="right text-left">
                            <a href="#">Kontakt<span>+49 (0)234 5450120</span><em>Mo.-Fr. 8:00 bis 17:00 Uhr</em></a>
                        </span>
                        <span class="right kontaktformular">
                            <router-link :to="$i18nRoute({ name: 'contact-us'})">
                                Kontaktformular
                                <b-icon icon="question-circle" class="icon-bubble-question"></b-icon>
                            </router-link>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  }
}
</script>

<style lang="scss" scoped>
.side_contact {
    position: fixed;
    width: 330px;
    right: -245px;
    border-radius: 10px 0 0 10px;
    z-index: 100;
    color: #000;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    ul {
        margin: 0;
        padding: 0;
        li:first-child {
            z-index: 2;
        }
        li {
            margin: 0;
            padding: 0;
            display: table;
            align-items: flex-start;
            font-size: 20px;
            a {
                color:#000 !important;
            }
            .left_col {
                position: relative;
                top: 0;
                left: 0;
                /* height: 95px; */
                border-radius: 10px 0 0 10px;
                overflow: hidden;
                width: 85px;
                background: #b2162c;
                a {
                    display: inline-block;
                }
                [class^="icon-"] {
                    font-family: 'Linearicons';
                    font-style: normal;
                    font-weight: normal;
                    font-variant: normal;
                    text-transform: none;
                    line-height: 1;
                }
                .icon-tab1:first-child .red-icon {
                    border-top: 0;
                }
                .red-icon {
                    border-top: 1px solid #c65262;
                    transition: all 0.5s ease 0s;
                    width: 85px;
                    display: flex;
                    color: #ffff;
                    padding: 0;
                    text-align: center;
                    font-size: 24px;
                    margin-right: 0;
                    position: relative;
                    overflow: hidden;
                    height: 95px;
                    align-items: center;
                    justify-content: center;
                }
                .red-icon:hover {
                    background: #e1213c;
                }
            }
            .right_col {
                padding: 0;
                width: 100%;
                height: 100%;
                background: #f0f0f0;
                display: table-cell;
                .right:first-child {
                    border-top: 0;
                }
                .right {
                    display: block;
                    height: 92px;
                    display: flex;
                    align-items: center;
                    padding: 0 25px 0 25px;
                    border-top: 1px solid #ffff;
                    width: 100%;
                    line-height: 130%;
                    span {
                        display: block;
                        font-weight: 300;
                    }
                }
                .kontaktformular {
                    font-weight: 300;
                }
                em {
                    display: block;
                    font-weight: 300;
                    font-style: normal;
                    font-size: 14px;
                }
            }
        }
    }
}
.side_contact.open {
    right: 0px !important;
}
</style>
