import Vue from 'vue'
import App from './App.vue'
import router from './router'
import OtherAccounts from './otherAccounts.js'
import Accounts from './accounts.js'

Vue.config.productionTip = false

let data = [
  accounts = Accounts,
  other = OtherAccounts
];

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
