import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { VueAccessControl, VueDialog } from '../../../dist/plugins'
import { VueAccessControl, VueDialog } from 'npmjs-package/dist/plugins'
import { directives } from 'npmjs-package'

Vue.config.productionTip = false

Vue.use(VueAccessControl, { router })
Vue.use(VueDialog)

// TODO: 可以考虑提供一个统一注册函数（指令、插件一起注册）
// 注册 Vue 指令。
directives.forEach((directive) =>
    Vue.directive(directive.name, directive.handler)
)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
