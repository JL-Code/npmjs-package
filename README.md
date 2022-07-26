# 发包步骤
1. 使用 npm init 初始化一个项目
2. 使用 npm adduser 添加用户信息（第一次发包是需要执行该步骤，后续则不需要）填写邮箱后会收到验证码，收到后继续输入验证码即可。
![npm-adduser](./npm-adduser-%E6%88%AA%E5%9B%BE.png)
3. 使用 npm login 登录 npmjs (如果执行了第二步，则此步骤无需执行)
4. 使用 npm publish 将本地包发送到 npmjs 服务端
![npm-publish](./npm-publish-%E6%88%AA%E5%9B%BE.png)
5. 使用 npm search <包名> 可检索是否已经发送成功
![npm-search](./npm-search-%E6%88%AA%E5%9B%BE.png)


## 缩小npm包体积

### 外部扩展(Externals)
> https://webpack.docschina.org/configuration/externals/
### 白名单模式
> 只有 dist、src 目录会被包含在 npm 包中。
package.json 
```json
{
  "files": [
    "dist",
    "src"
  ],
}
```

### 移除未使用的 lodash 功能

```shell
npm install lodash-webpack-plugin --save-dev
```

webpack.config.js 查看
> https://www.npmjs.com/package/lodash-webpack-plugin
```js
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
```

### pkgfiles
> pkgfiles 查看 npm publish 包含哪些文件

1. 安装依赖
```json
"dependencies": {
    "pkgfiles": "^2.3.2"
}
```
2. 执行 `npx pkgfiles` 命令
```shell
PATH                                     SIZE     %   
src\utils\index.js                       85 B     2%  
src\main.js                              98 B     2%  
src\plugins\index.js                     128 B    3%  
src\utils\util.auth.js                   414 B    9%  
package.json                             494 B    10% 
src\plugins\vue-access-control\index.js  505 B    10% 
README.md                                799 B    17%
dist\mcsdk.js                            1.14 kB  24%
dist\plugins.js                          1.15 kB  24%

DIR                                      SIZE     %
src\utils/                               499 B    10%
src\plugins\vue-access-control/          505 B    10%
src\plugins/                             633 B    13%
src/                                     1.23 kB  26%
dist/                                    2.29 kB  48%
.                                        4.81 kB  100%

PKGFILES SUMMARY
Size on Disk with Dependencies  ~166 MB
Size with Dependencies          ~127 MB
Publishable Size                ~4.81 kB
Number of Directories           6
Number of Files                 9
```