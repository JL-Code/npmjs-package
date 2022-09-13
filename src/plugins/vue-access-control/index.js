import { auth } from "@/utils";
/**
 * 访问控制插件
 */
const whiteList = ["Login"];
export default {
  install(Vue, options) {
    console.debug("[vue-access-control] installed");
    const { router } = options;
    router.beforeEach((to, from, next) => {
      console.debug("[router beforeEach]", to.fullPath, from.fullPath);
      if (auth.verifyToken() || whiteList.includes(to.name)) {
        next();
      } else {
        next({ name: "Login" });
      }
    });
  },
};
