<template>
   <div class="pos">
      <el-row >
        <el-col :span='7'>
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border show-summary style="width: 100%" >
                <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column  label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">增加</el-button>
                    </template>
                </el-table-column>
              </el-table>
              <el-button type="warning" >挂单</el-button>
              <el-button type="danger" >删除</el-button>
              <el-button type="success" >结账</el-button> 
            </el-tab-pane>
            <el-tab-pane label="订单">
              <el-table :data="tableData" border show-summary style="width: 100%" >
                <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column  label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">增加</el-button>
                    </template>
                </el-table-column>
              </el-table>
              <el-button type="warning" >挂单</el-button>
              <el-button type="danger" >删除</el-button>
              <el-button type="success" >结账</el-button>
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="value in oftenGoods">
                  <span>{{value.goodsName}}</span>
                  <span class="o-price">￥{{value.price}}元</span>
                </li>
              </ul>
            </div>
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                    汉堡
                </el-tab-pane>
                <el-tab-pane label="小食">
                    小食
                </el-tab-pane>
                <el-tab-pane label="饮料">
                    饮料
                </el-tab-pane>
                <el-tab-pane label="套餐">
                    套餐
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "Pos",
  data () {
    return {
      tableData: [{
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
          goodsName: '甜筒',
          price: 8,
          count:1
        }],
        oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
      ]
    }
  },
  
}
</script>

<style>
.pos,.el-row,.el-col {
  height: 100%;
}
.title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
}
.often-goods-list ul li{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:5px;
  background-color:#fff;
}
.o-price{
  color:#58B7FF; 
}
</style>
