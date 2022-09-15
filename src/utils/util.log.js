const log = typeof console !== 'undefined' && console
let enabled = false

/**
 * log.disable()
 * log.enable()
 * log.debug()
 */

function debug() {
    enabled && log.debug(...arguments)
}

function disable() {
    enabled = false
}
function enable() {
    enabled = true
}

export default {
    enable,
    disable,
    debug,
}
