// npm i --save-dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-standard babel-eslint eslint-loader eslint-plugin-vue
module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'plugin:vue/recommended',
        'standard'
    ],
    plugins: [
        'vue'
    ],

    // npm i --save-dev jest babel-jest vue-jest jest-serializer-vue @vue/test-utils
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    globals: {
        expect: true
    }
}
