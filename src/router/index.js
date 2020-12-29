import Vue from 'vue'
import VueRouter from 'vue-router'
import { Trans } from '@/lang/Translation.js'
import store from '../store'

import Home from '../views/home/Home.vue'
import Login from '../views/account/Login.vue'
import Register from '../views/account/Register.vue'
import MyAccount from '../views/account/MyAccount.vue'
import PasswordRecovery from '../views/account/PasswordRecovery.vue'
import OrderHistory from '../views/account/OrderHistory.vue'
import OrderFollow from '../views/account/OrderFollow.vue'
import Addresses from '../views/account/Addresses.vue'
import Address from '../views/account/Address.vue'
import Advisor from '../views/account/Advisor.vue'
import Comparator from '../views/account/Comparator.vue'
import Identity from '../views/account/Identity.vue'
import OffenePosten from '../views/account/OffenePosten.vue'
import Rank from '../views/account/Rank.vue'
import Wishlist from '../views/account/Wishlist.vue'
import ContactPerson from '../views/account/ContactPerson.vue'
import OrderTemplates from '../views/account/OrderTemplates.vue'
import Support from '../views/account/Support.vue'
import ContactUs from '../views/account/ContactUs.vue'

import Category from '../views/products/Category.vue'
import Product from '../views/products/Product.vue'
import Search from '../views/products/Search.vue'
import Cart from '../views/products/Cart.vue'
import RecommendProducts from '@/views/products/RecommendProducts'
import BrandProducts from '@/views/products/BrandProducts'
import Order from '../views/order/Order.vue'
import Error404 from '../views/errors/404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
        meta: {
          layout: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
        meta: {
          layout: false
        }
      },
      {
        path: 'password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery,
        meta: {
          layout: false
        }
      },
      {
        path: 'my-account',
        name: 'my-account',
        component: MyAccount,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'order-history',
        name: 'order-history',
        component: OrderHistory,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'order-follow',
        name: 'order-follow',
        component: OrderFollow,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'addresses',
        name: 'addresses',
        component: Addresses,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'address',
        name: 'address',
        component: Address,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'advisor',
        name: 'advisor',
        component: Advisor,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'comparator',
        name: 'comparator',
        component: Comparator,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'identity',
        name: 'identity',
        component: Identity,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'offene-posten',
        name: 'offene-posten',
        component: OffenePosten,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'rank',
        name: 'rank',
        component: Rank,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: Wishlist,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'contact-person',
        name: 'contact-person',
        component: ContactPerson,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'order-templates',
        name: 'order-templates',
        component: OrderTemplates,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'support',
        name: 'support',
        component: Support,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'contact-us',
        name: 'contact-us',
        component: ContactUs,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'product/:id_product',
        name: 'product',
        component: Product
      },
      {
        path: 'brand/:id_brand',
        name: 'brand',
        component: BrandProducts
      },
      {
        path: 'category/:id_category',
        name: 'category',
        component: Category
      },
      {
        path: 'search',
        name: 'search',
        component: Search
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart
      },
      {
        path: 'order',
        name: 'order',
        component: Order,
        meta: {
          layout: 'order'
        }
      },
      {
        path: 'recommend-products',
        name: 'recommend-products',
        component: RecommendProducts
      },
      {
        path: 'content/:content_key',
        name: 'content',
        component: () => import('../views/ContentModule.vue')
      },
      {
        path: '*',
        name: '404',
        component: Error404
      }
    ]
  },
  {
    path: '*',
    redirect (to) {
      return Trans.getUserSupportedLang()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
