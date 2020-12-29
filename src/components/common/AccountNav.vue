<template>
    <div class="account-box">
        <div class="accountitems">
            <ul class="link-list">
                <li :class="routePath === 'my-account' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'my-account'})">
                        <span>{{$t('account.my_account')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'order-history' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'order-history'})">
                        <span>{{$t('account.order_history')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'offene-posten' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'offene-posten'})">
                        <span>{{$t('account.offene_posten')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'order-follow' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'order-follow'})">
                        <span>{{$t('account.merchandise_returns')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'addresses' || routePath === 'address' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'addresses'})">
                        <span>{{$t('account.addresses')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'identity' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'identity'})">
                        <span>{{$t('account.information')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'advisor' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'advisor'})">
                        <span>{{$t('account.personal_advisor')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'comparator' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'comparator'})">
                        <span>{{$t('account.compare')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'wishlist' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'wishlist'})">
                        <span>{{$t('account.my_wishlist')}}</span>
                    </router-link>
                </li>
                 <li :class="routePath === 'conatact-preson' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'contact-person'})">
                        <span>{{$t('account.contact_person')}}</span>
                    </router-link>
                </li>
                 <li :class="routePath === 'order-templates' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'order-templates'})">
                        <span>{{$t('account.order_templates')}}</span>
                    </router-link>
                </li>
                 <li :class="routePath === 'support' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'support'})">
                        <span>{{$t('account.support')}}</span>
                    </router-link>
                </li>
                <li :class="routePath === 'rank' ? 'active' : ''">
                    <router-link :to="$i18nRoute({ name: 'rank'})">
                        <span>{{$t('account.rank')}}</span>
                    </router-link>
                </li>
                <li>
                    <a href="javascript:void(0)" @click="logout">
                        <span>{{$t('account.log_out')}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { loadingSpinnerConfig } from '@/config/settings'
export default {
  data () {
    return {
      routePath: this.$route.name
    }
  },
  methods: {
    logout () {
      const user = this.$store.getters.user
      this.loader = this.$loading.show(loadingSpinnerConfig)
      this.$store.dispatch('logout', user.id).then(resp => {
        this.loader.hide()
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.accountitems {
    border-radius: 8px;
    background: #12407E;
    background: linear-gradient(90deg, rgba(18,64,126,1) 0%, rgba(17,61,119,1) 68%, rgba(14,49,96,1) 100%);
    display: block;
    min-height: 400px;
    min-width: 200px;
    margin-bottom: 20px;
    border: 1px solid #12407e;
    box-shadow: 0px 3px 6px #00000029;
    padding: 30px;
    margin-bottom: 50px;
    .link-list {
        li {
            margin-bottom: 15px;
            a {
                border: 1px solid #FFFFFF;
                border-radius: 8px;
                -webkit-transition: all .3s ease;
                transition: all .3s ease;
                text-align: center;
                color: #fff;
                width: 100%;
                display: block;
                line-height: 39px;
                font-size: 1rem;
            }
            a:hover {
                color: #12407D;
                background: #fff;
            }
        }
        li.active a {
            color: #12407D;
            background: #fff;
        }
    }
}
</style>
