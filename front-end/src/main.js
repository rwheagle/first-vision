import Vue from 'vue'
import App from './App.vue'
import router from './router'
import otherAccounts from './otherAccounts.js'
import accounts from './accounts.js'

Vue.config.productionTip = false

let data = {
  account:accounts,
  other:otherAccounts
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
