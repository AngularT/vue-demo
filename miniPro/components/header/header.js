
Component({
  data: {
    
  },
  properties: {
    value1: String,
    obj1: Array,
  },
  methods: {
    fun(e){
      var that = this;
      var val = e.detail.value; //通过这个传递数据
      var myEventDetail = {
        val: val
      } // detail对象，提供给事件监听函数
      this.triggerEvent('myevent', myEventDetail) //myevent自定义名称事件，父组件中使用
    },
  },
})