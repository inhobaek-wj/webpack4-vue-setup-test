# webpack4-vue-setup-test

### Goal
Practice Vue.js & Webpack

### Feature
- Vue.js
- Webpack
- ESLint
- Hot Module Reloading and HTML injection
- Babel
- Jest

### Initail Setting
```
mkdir webpack4-vue-setup-test
cd webpack4-vue-setup-test
npm init
npm i --save-dev vue vue-router
npm i --save-dev webpack webpack-cli
```

### Reference
https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a

### Issues
There is an issue when I test with jest becuase of version of babel-core, even though I have @babel/core.

solution

package.json -> "vue-jest": "^4.0.0-beta.2"

'''
npm install
```
