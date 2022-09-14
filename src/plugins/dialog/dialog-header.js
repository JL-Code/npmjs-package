export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  render() {
    return (
      <template>
        {this.title}
        <div class="dialog-header__content"></div>
        <button class="header-btn_maximizable el-dialog__headerbtn">
          <i class="el-icon-full-screen"></i>
        </button>
      </template>
    );
  }
};
