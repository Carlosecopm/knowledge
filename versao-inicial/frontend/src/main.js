import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO! 
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNhcmxvcyBTaWx2YSIsImVtYWlsIjoiY2FybG9zbHVpemVjb21wLnVlZnNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNjMzODAxOCwiZXhwIjoxNjA2NTk3MjE4fQ.3n0qe-i1PHKFN0_nu5iwEsQ4WRWOEh9CktzndnNaH4E'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')