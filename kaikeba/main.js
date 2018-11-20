import Vue from "./vue.js"
import App from "./App.js"
import { num1, num2} from "./App.js"
console.log(num1,num2)
new Vue({
  el: "#app",
  components: {
    app: App
  },
  template: `<app/>`
})