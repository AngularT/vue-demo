<template>
  <div class="result">
    <!-- <p>{{url}}</p> -->
    <p><span>今日提醒：</span><span>{{content.day_notice}}</span></p>
    <p><span>上升星座：</span><span>{{content.grxz}}</span></p>
    <p><span>运势简评：</span><span>{{content.general_txt}}</span></p>
    <p><span>综合指数：</span><span>{{content.summary_star}}</span></p>
    <p><span>爱情运势：</span><span>{{content.love_txt}}</span></p>
    <p><span>爱情指数：</span><span>{{content.love_star}}</span></p>
    <p><span>工作运势：</span><span>{{content.work_txt}}</span></p>
    <p><span>工作指数：</span><span>{{content.work_star}}</span></p>
    <p><span>财富运势：</span><span>{{content.money_txt}}</span></p>
    <p><span>财富指数：</span><span>{{content.money_star}}</span></p>
    <p><span>幸运色：</span><span>{{content.lucky_color}}</span></p>
    <p><span>幸运数字：</span><span>{{content.lucky_num}}</span></p>
    
  </div>
</template>
<script>
import axios from 'axios'
import link from '../../base/handle.js'
export default {
  name: 'result',
  data () {
    return {
      star: '',
      // url: link.URL.star
      content: {}
    }
  },
  created () {
    this.star = this.$route.query.starName;
    axios.get(link.URL.star,
    {
      params:{
        "showapi_timestamp": this.formatterDateTime(),
        "showapi_appid": 74353,
        "showapi_sign": '9031fff33f1c49fa9dadbcee844ea5ac',
        "star": this.star,
        "needTomorrow":"0",
        "needWeek":"1",
        "needMonth":"0",
        "needYear":"0"
      }
    })
    .then(res => {
      this.content = res.data.showapi_res_body.day
      console.log(this.content)
    })
    .catch(error => {

    })
  },
  methods: {
    formatterDateTime (){
      let date=new Date()
      let month=date.getMonth() + 1
        let datetime = date.getFullYear()
            + ""// "年"
            + (month >= 10 ? month : "0"+ month)
            + ""// "月"
            + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
            + ""
            + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
            + ""
            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
            + ""
            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        return datetime;
    }
  }
}
</script>
<style>

</style>
