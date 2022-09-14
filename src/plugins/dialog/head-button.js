export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass() {
      return {
        iconfont: true,
        "icon-square": !this.fullscreen,
        "el-icon-copy-document": this.fullscreen
      };
    }
  },
  render() {
    const { iconClass, handleClick } = this;
    const attrs = {
      on: {
        click: handleClick
      }
    };
    return (
      <button {...attrs} class="header-btn_maximizable el-dialog__headerbtn">
        <i class={iconClass}></i>
      </button>
    );
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
