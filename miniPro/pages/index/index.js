Page({
  data: {
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  noAlert:function(e){
    console.log(e)
  },
  onLoad(){
    // this.header = this.selectComponent("#header");
    // this.header.fun(9)
    wx.createIntersectionObserver(this, {
      thresholds: [0.1, 1]
    }).relativeTo('.relative-class').relativeToViewport().observe('.target-dom', (res) => {
      console.log(res.intersectionRect)
      res.id // 目标节点 id
      res.dataset // 目标节点 dataset
      res.intersectionRatio // 相交区域占目标节点的布局区域的比例
      res.intersectionRect // 相交区域
      res.intersectionRect.left // 相交区域的左边界坐标
      res.intersectionRect.top // 相交区域的上边界坐标
      res.intersectionRect.width // 相交区域的宽度
      res.intersectionRect.height // 相交区域的高度
    })
  },
  onGetcode(e){
    this.setData({
      value1:e.detail.val
    })
    console.log(e)
  }
})