var app = {
  template: `<div>我是app组件</div>`
}
// 声明并导出
export var num1 = 1;
// 先声明，再导出
var num2 = 1;
export {num2}
export default app;