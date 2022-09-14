import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { VueAccessControl, VueDialog } from '../../../dist/plugins'
// import { directives, utils, plugins } from '../../../dist'

import { VueAccessControl, VueDialog } from 'npmjs-package/dist/plugins'
import { directives, utils, plugins } from 'npmjs-package'

Vue.config.productionTip = false

console.debug('[npmjs-package]', VueAccessControl, VueDialog)
console.debug('[npmjs-package]', directives, utils, plugins)

Vue.use(VueAccessControl, { router })
Vue.use(VueDialog)

Object.keys(directives).forEach((key) => {
    console.log('key', key)
    Vue.directive(directives[key].name, directives[key].handler)
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
