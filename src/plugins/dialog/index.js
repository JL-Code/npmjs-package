/**
 * @description dialog 插件
 * @see Vue.js JSX 语法参考文档 https://www.yuque.com/zeka/vue/vu60wg
 */

import './dialog.less'
import HeadButton from './head-button'
import { assign } from 'lodash'

const DialogPlugin = {}

/**
 * 弹层插件
 * @example 使用示例
 * 打开一个弹层
 * this.$dialog(ContentComponent,{ // ContentComponent 为内容组件
 *  width:'60vw', // 弹层宽度 默认 60vw
 *  height:'70vh', // 弹层高度 默认 70vh
 *  ... // 其他 element-ui dialog 组件的参数
 *  payload:{
 *    // payload 中的属性将视为ContentComponent的props
 *  }
 * })
 */
DialogPlugin.install = function (Vue, options) {
    /**
     * 创建中间组件
     * @param {*} component Vue 组件
     * @param {*} options 组件选项
     */
    function _create(component, options = {}) {
        const embedded = component
        /**
         * component:{
         *    src:"url",
         *    type:"iframe" // iframe 、window
         * }
         */
        // if (component.type === 'iframe') {
        //   options = component
        //   options.payload = merge(
        //     {},
        //     {
        //       queryParams: {
        //         embedded_iframe: true
        //       }
        //     },
        //     component.payload
        //   )
        //   embedded = VueIframe
        // }
        return new Promise((resolve, reject) => {
            /**
             * @see https://github.com/vuejs/babel-plugin-transform-vue-jsx
             * vue 组件属性分为四种属性：
             * 1. 组件属性 props
             * 2. 普通HTML属性 attrs
             * 3. DOM属性 domProps
             * 4. 事件属性 on、nativeOn
             * babel-plugin-transform-vue-jsx 插件会在编译时通过正则表达式区分这些属性。onXXX的均被认为是事件，   nativeOnXXX是原生事件，domPropsXXX是Dom属性，
             class,staticClass,style,key,ref,refInFor,slot,scopedSlots这些被认为是顶级属性，至于我们属性声明的props，以及html属性attrs，不需要加前缀，插件会将其统一分类到attrs属性下，然后在运行阶段根据是否在props声明来决定属性归属(即属于props还是attrs)。
              */

            // dialog 默认 props
            const defaults = {
                // 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。@see:https://cn.vuejs.org/v2/api/#el
                el: undefined,
                // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
                appendToBody: true,
                // 关闭时销毁 Dialog 中的元素
                destroyOnClose: true,
                // Dialog 标题
                title: '标题',
                // Dialog 距离页面顶部高度
                top: '10vh',
                // Dialog 宽度
                width: '60vw',
                // Dialog 高度
                height: '70vh',
                // maximizable 是否显示最大化按钮
                maximizable: true,
                // fullscreen 是否为全屏 Dialog
                fullscreen: false,
                // 是否可以通过点击 modal 关闭 Dialog
                closeOnClickModal: false,
                // 关闭默认esc关闭弹窗的功能
                closeOnPressEscape: false,
            }

            const { payload } = options
            const handleBeforeClose = options.beforeClose || defaultClose
            options.beforeClose = function beforeCloseProxy(done) {
                // console.debug("before close", done);
                // console.debug("before close", handleBeforeClose);
                vm.$data.done = done
                handleBeforeClose(vm.handleClose)
            }

            // 删除 options payload 属性
            delete options.payload

            const dialogProps = assign({}, defaults, options)

            // 中间组件
            const _component = new Vue({
                name: 'IntermediateComponent',
                components: { embedded, HeadButton },
                // store,
                data() {
                    return {
                        visible: true,
                        done: function () {},
                        ...dialogProps,
                    }
                },
                mounted() {
                    this.visible = true
                    console.debug('IntermediateComponent mounted')
                },
                beforeDestroy() {
                    // 当dialog关闭时从 DOM 中移除
                    this.$el.remove()
                },
                methods: {
                    handleClose() {
                        // 调用dialog的done关闭弹层
                        this.done && this.done()
                        this.handleCancel('取消')
                    },
                    handleSubmit(data) {
                        this.hide()
                        resolve(data)
                    },
                    handleCancel(data) {
                        this.hide()
                        reject(data)
                    },
                    hide() {
                        this.visible = false
                        this.$destroy()
                    },
                    // 设置 Dialog Title
                    setTitle(title) {
                        this.title = title
                    },
                    // 设置全屏
                    setFullscreen() {
                        this.fullscreen = !this.fullscreen
                    },
                },
                render() {
                    const _this = this
                    const {
                        $data,
                        title,
                        setTitle,
                        handleSubmit,
                        handleCancel,
                        // handleClose,
                        setFullscreen,
                    } = _this
                    const calcHeight = isNaN($data.height)
                        ? $data.height
                        : `${$data.height}px`

                    const mixinAttrs = {
                        props: { ...$data },
                        on: {
                            // jsx 的 .sync 语法
                            'update:visible': (val) => (this.visible = val),
                            // close: handleClose
                        },
                    }

                    const embeddedAttrs = {
                        style: { height: calcHeight },
                        class: ['dialog-body__embedded'],
                        props: {
                            ...payload,
                        },
                        on: {
                            title: setTitle,
                            submit: handleSubmit,
                            cancel: handleCancel,
                        },
                    }

                    const maxminAttrs = {
                        props: {
                            fullscreen: $data.fullscreen,
                        },
                        on: {
                            click: setFullscreen,
                        },
                    }

                    // 最大化按钮
                    const maxminFragment = $data.maximizable ? (
                        <template slot="title">
                            <div
                                class="dialog-header__title"
                                ondblclick={setFullscreen}
                            >
                                {title}
                            </div>
                            <head-button {...maxminAttrs}></head-button>
                        </template>
                    ) : (
                        <div slot="title" class="dialog-header__title">
                            {title}
                        </div>
                    )

                    return (
                        <el-dialog
                            {...mixinAttrs}
                            class="fix_dialog"
                            v-draggable
                            v-resizable
                        >
                            {maxminFragment}
                            {/* 弹窗内容组件 */}
                            <embedded {...embeddedAttrs} />
                        </el-dialog>
                    )
                },
            })

            // 将扩展后的组件挂载到DOM树中
            const vm = _component.$mount()
            if (dialogProps.el) {
                dialogProps.el.appendChild(vm.$el)
            } else if (dialogProps.appendToBody) {
                document.body.appendChild(vm.$el)
            } else {
                console.error('Missing required parameter el or appendToBody !')
            }
        })
    }

    Vue.prototype.$dialog = _create

    console.debug('[vue-dialog] installed')
}

/**
 * 默认关闭函数
 *
 * @param {Function} close 关闭Dialog弹层
 */
function defaultClose(close) {
    close()
}

export default DialogPlugin
