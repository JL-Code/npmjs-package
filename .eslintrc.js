module.exports = {
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    // 项目运行环境
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
}
