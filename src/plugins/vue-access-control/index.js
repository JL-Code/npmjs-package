import { auth } from '@/utils'
/**
 * 访问控制插件
 */
const LOGIN_ROUTE_NAME = 'Login'
const WHITE_LIST = [LOGIN_ROUTE_NAME]
export default {
    install(Vue, options) {
        const { loginRoute = LOGIN_ROUTE_NAME, whiteList = [] } = options
        const _whiteList = Object.assign({}, WHITE_LIST, whiteList)
        console.debug('[vue-access-control] installed')
        const { router } = options
        router.beforeEach((to, from, next) => {
            console.debug('[router beforeEach]', to.fullPath, from.fullPath)
            if (auth.verifyToken() || _whiteList.includes(to.name)) {
                next()
            } else {
                next({ name: loginRoute })
            }
        })
    },
}
