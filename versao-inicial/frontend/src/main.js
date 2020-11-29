import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO! 
//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNhcmxvcyBTaWx2YSIsImVtYWlsIjoiY2FybG9zbHVpemVjb21wLnVlZnNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNjYwMTEyMiwiZXhwIjoxNjA2ODYwMzIyfQ.Jojmz7EDntin3eoON9YYjchbm_pjGSBLHzHNEBrOYpM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')