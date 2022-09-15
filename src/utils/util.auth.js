/**
 * TODO: 日志输出应该根据场景控制是否输出以及输出什么级别的日志。
 */
import log from '@/utils/util.log'
const TOKEN_KEY = 'TOKEN_KEY'
export default {
    getToken() {
        const token = localStorage.getItem(TOKEN_KEY)
        log.debug(['get token', token])
        return token
    },
    setToken(token) {
        log.debug(['set token', token])
        localStorage.setItem(TOKEN_KEY, token)
    },
    verifyToken() {
        log.debug(['verify token', this.getToken()])
        return !!this.getToken()
    },
}
