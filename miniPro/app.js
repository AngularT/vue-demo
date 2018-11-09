//app.js
App({
  onLaunch: function (obj) {
    console.log(obj)
    this.getUserInfo();
  },
  //登录-微信授权
  getUserInfo: function (t) {
    var that = this;
    //调用登录接口
    wx.login({
      success: function (result) {
        if (result.code) {
          //获取微信用户信息
          wx.getUserInfo({
            success: function (res) { //授权成功
              //调登录接口
              
            },
            fail: function (res) {  //授权失败
              wx.showModal({
                title: '登录失败',
                content: '拒绝授权小程序将无法使用商品下单、优惠券获取、查看订单等功能。',
                showCancel: false,
                success: function (res) {
                  that.wxLoginAgain();
                }
              });
            }
          })
        } else {
          console.log('获取用户登录态失败！' + result.errMsg);
        };
      }
    })
  },
  // 微信 再次授权
  wxLoginAgain: function (t) {
    let that = this;
    wx.showModal({
      content: '访问...需允许授权，是否进入并允许授权？',
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({
            success: (res) => {
              that.getUserInfo(t);
            }
          });
        };
      }
    });
  },
})