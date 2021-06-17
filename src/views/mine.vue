<template>
  <div>
    <div class="user-datum">
      <div class="top">
        <span>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fassets.jc258.cn%2Fassets%2Fpictures%2F12940%2Foriginal_2.jpg%3F1401071027&refer=http%3A%2F%2Fassets.jc258.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621908110&t=3d39380cc2d80636500b1c69327fefb1"
          />
          
          <h1>阿斗</h1>
          <h2>13238473638</h2>
        </span>
        <div class="icon iconfont icon-youjiantou" @click="gopersonage"></div>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <h1>50.00</h1>
            <h2>账户余额</h2>
          </li>
          <li>
            <h1>8</h1>
            <h2>微信钱包</h2>
          </li>
          <li>
            <h1>0</h1>
            <h2>优惠券</h2>
          </li>
          <li>
            <h1>0</h1>
            <h2>礼品卡</h2>
          </li>
        </ul>
      </div>
      <div class="null"></div>
    </div>
    <div class="user-list">
      <dl>
        <dt>
          <h1>我的订单</h1>
          <ul>
            <li>
              <img
                src=".././assets/images/付款.png"
              />待付款
            </li>
            <li>
              <img
                src=".././assets/images/咖啡.png"
              />待取餐
            </li>
            <li>
              <img
                src=".././assets/images/评价.png"
              />待评价
            </li>
            <li>
              <img
                src=".././assets/images/售后退款.png"
              />售后/退款
            </li>
          </ul>
        </dt>
        <dd class="iconfont icon-kafeidougaishu">
          地址管理
          <span class="iconfont icon-youjiantou"></span>
        </dd>
        <dd class="iconfont icon-lingdang">
          发票管理
          <span class="iconfont icon-youjiantou"></span>
        </dd>
        <dd class="iconfont icon-denglu">
          企业账户
          <span class="iconfont icon-youjiantou"></span>
        </dd>
        <dd class="iconfont icon-pingjia" style="border: none;">
          帮助反馈 
          <span class="iconfont icon-youjiantou"></span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
    
  },
  methods:{
    gopersonage(){
      this.$router.push('/personage')
    }
  }
};
</script>

<style lang="less" scoped>
.user-datum {
  width: 100%;
  height: 4.34375rem;
  background-color: #f29b76;
  color: #c1e0e3;
  .top {
    width: 100%;
    height: 2.5rem;
    box-sizing: border-box;
    padding: 0.46875rem 0.3125rem;
    span {
      display: block;
      width: 50%;
      height: 1.5625rem;
      box-sizing: border-box;
      float: left;
      img {
        width: 1.5625rem;
        height: 1.5625rem;
        border-radius: 50%;
        float: left;
      }
      h1 {
        display: block;
        width: 60%;
        height: 0.65625rem;
        line-height: 0.65625rem;
        font-size: 0.65625rem;
        margin: 0.21875rem 0 0.15625rem 0;
        float: right;
      }
      h2 {
        display: block;
        width: 60%;
        height: 0.3125rem;
        line-height: 0.3125rem;
        font-size: 0.3125rem;
        float: right;
      }
    }
    .icon {
      width: 0.625rem;
      height: 1.5625rem;
      float: right;
      font-size: 0.625rem;
      box-sizing: border-box;
      padding: 0.46875rem 0;
    }
  }
  .bottom {
    width: 100%;
    height: 1.5625rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        width: 25%;
        text-align: center;
        box-sizing: border-box;
        padding: 0.390625rem 0;
        h1 {
          height: 0.390625rem;
          font-size: 0.390625rem;
          line-height: 0.390625rem;
          margin-bottom: 0.078125rem;
        }
        h2 {
          height: 0.3125rem;
          font-size: 0.3125rem;
          line-height: 0.3125rem;
        }
      }
    }
  }
  .null{
      width: 100%;
      height: .296875rem;
      background-color: #ffffff;
      border-radius: 0.28125rem 0.28125rem 0 0;
  }
}
.user-list {
  width: 100%;
  height: 9.46875rem;
//   background-color: #ffffff;
  dl {
      background-color: #ffffff;
    dt {
      width: 100%;
      height: 3.859375rem;
      box-sizing: border-box;
      h1 {
        width: 90%;
        height: 0.546875rem;
        font-size: 0.546875rem;
        line-height: 0.546875rem;
        padding: 0.6875rem 0.46875rem 0 0.46875rem;
      }

      ul {
        width: 100%;
        height: 2.625rem;
        box-sizing: border-box;
        display: flex;
        li {
          width: 25%;
          height: 100%;
          box-sizing: border-box;
          margin: 0.265625rem 0;
          font-size: .3125rem;
          line-height: .3125rem;
          text-align: center;
          margin-top: 0.234375rem;
          padding: .46875rem 0;
          color: #6c4b41;
          font-weight: bold;
          img {
            width: .625rem;
            height: .625rem;
            padding: 0 .8125rem 0.234375rem .8125rem;
          }
        }
      }
    }
    dd {
      width: 85%;
      height: 31px;
      padding: 0.46875rem 0 0.546875rem 0;
      margin: 0 0.703125rem;
      font-size: 0.46875rem;
      line-height: 30px;
      border-bottom: 1px solid #dedede;
      span {
        width: 0.46875rem;
        height: 100%;
        font-size: 0.46875rem;
        line-height: 0.46875rem;
        float: right;
        margin-top: .109375rem;
      }
    }
  }
}
</style>