<template>
  <b-container class="offene-posten mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">Offene Posten</h1>
        <div class="table-responsive div-border">
          <b-table striped hover :items="items" :fields="fields" responsive="sm">
            <template v-slot:cell(order_reference)="data">
              <router-link :to="$i18nRoute({ name: 'order-history', query: { controller: 'order-detail', id_order: data.item.details.id_order }})">
                {{data.item.order_reference}}
              </router-link>
            </template>
            <template v-slot:cell(status)="data">
              <span :style="data.item.status.type === 0 ? 'background-color:rgba(54, 217, 79, .2)': ''">{{data.item.status.value}}</span>
            </template>
            <template v-slot:cell(invoice)="data">
              <router-link :to="$i18nRoute({ name: 'order-history', query: { controller: 'pdf_invoice', id_order: data.item.details.id_order }})">
                <b-icon icon="file-text"></b-icon>
              </router-link>
            </template>
            <template v-slot:cell(details)="data">
              <router-link :to="$i18nRoute({ name: 'order-history', query: { controller: 'order-detail', id_order: data.item.details.id_order }})">
                <b-icon icon="eye"></b-icon>
              </router-link>
            </template>
          </b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { i18n } from '@/lang/i18n'
import AccountNav from '@/components/common/AccountNav'
export default {
  components: {
    AccountNav
  },
  data () {
    return {
      fields: [
        {
          key: 'order_reference',
          label: i18n.t('account.order_reference')
        },
        {
          key: 'date',
          label: i18n.t('account.date')
        },
        {
          key: 'total_price',
          label: i18n.t('account.total_price')
        },
        {
          key: 'payment',
          label: i18n.t('account.payment')
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'invoice',
          label: i18n.t('account.invoice')
        },
        {
          key: 'details',
          label: i18n.t('account.details')
        }
      ],
      items: [
        { order_reference: 'QGJDRHWDD', date: '2020-09-08', total_price: '€0.00', payment: 'Free Order', status: { type: 0, value: 'Payment accepted' }, invoice: '', details: { id_order: 23 } },
        { order_reference: 'YTUSNTOMX', date: '2020-09-08', total_price: '€0.00', payment: 'Free Order', status: { type: 1, value: 'Awaiting bank wire payment' }, invoice: '', details: { id_order: 27 } },
        { order_reference: 'QGJDRHWDD', date: '2020-09-08', total_price: '€0.00', payment: 'Free Order', status: { type: 0, value: 'Payment accepted' }, invoice: '', details: { id_order: 235 } }
      ]
    }
  },
  watch: {
    $route (to, from) {
      this.fields = [
        {
          key: 'order_reference',
          label: i18n.t('account.order_reference')
        },
        {
          key: 'date',
          label: i18n.t('account.date')
        },
        {
          key: 'total_price',
          label: i18n.t('account.total_price')
        },
        {
          key: 'payment',
          label: i18n.t('account.payment')
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'invoice',
          label: i18n.t('account.invoice')
        },
        {
          key: 'details',
          label: i18n.t('account.details')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.account-right {

  .div-border {
    box-shadow: 0px 3px 6px #00000029 !important;
    border-radius: 8px;
    overflow: hidden;
    padding: 0px !important;
  }
  .table-responsive {
    display: block;
    width: 100%;
    min-height: 0;
    overflow-x: auto;
    td {
      color: #303030;
      a {
        color: #707070 !important;
      }
    }
  }
}
</style>
