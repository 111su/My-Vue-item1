<template>
  <div>
    <div class="pay-top">
      <h1
        class="pay-top-title iconfont icon-ico_leftarrow"
        @click="$router.go(-1)"
      ></h1>
      <img src=".././assets/images/coffee-1.png" />
    </div>

    <div class="pay-content">
      <div class="padding">
        <h2 class="pay-content-title">商品信息</h2>
        <div class="pay-content-list" v-for="(item,index) in $store.state.car" :key="index">
          <p class="pay-content-list-imgs">
            <img :src="item.img" />
          </p>
          <span class="pay-content-list-text">
            <h3 class="pay-coffee-name">
              {{item.name}}
              <label class="pay-coffee-price">￥{{item.price}}</label>
            </h3>
            <h4 class="pay-coffee-option">
              加奶、多冰、大杯<label class="pay-coffee-num" style="float: right"
                >x{{$store.state.car[index].goodsnum}}</label
              >
            </h4>
          </span>
        </div>
        <h5 class="pay-content-total">
          合计：<span class="price">￥{{$store.getters.allMoney}}</span>
        </h5>
      </div>
    </div>

    <div class="pay-content" @click="goaddress">
      <div class="padding">
        <h2 class="pay-content-title">配送信息</h2>
        <div class="pay-content-site">
          <span class="box">
            <h3 class="content-site-name">孙武</h3>
            <h4 class="content-site-call">先生</h4>
            <h5 class="content-site-number">18320677217</h5>
          </span>
          <p class="content-site-details" style="margin-bottom: 0.078125rem">
            广东省惠州市惠城区
          </p>
          <p
            class="content-site-details"
            style="padding-bottom: 0.3125rem; border-bottom: 1px solid #dedede">
            桥东衡道办壳耀简兰水乡一期3-1803
          </p>
          <p class="content-site-select">
            其他地址
            <span
              class="iconfont icon-youjiantou"
              style="float: right">
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="pay-account">
      <h1 class="pay-account-box">确认结算</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("car", this.$store.state.car);
  },
  data() {
    return {};
  },
  methods:{
    goaddress(){
      this.$router.push('/address')
    }
  },
  computed: {
    car() {
      return this.$store.state.car;
    },
  },
};
</script>

<style lang="less" scoped>
.pay-top {
  width: 100%;
  height: 3.046875rem;
  position: relative;
  .pay-top-title {
    position: absolute;
    top: 0.34375rem;
    left: 0.34375rem;
    height: 0.46875rem;
    font-size: 0.46875rem;
    line-height: 0.46875rem;
    color: #ffffff;
  }
  img {
    width: 100%;
    height: 3.046875rem;
  }
}
.pay-content {
  width: 100%;
  box-sizing: border-box;
  padding: 0.15625rem;
  .padding {
    box-sizing: border-box;
    padding: 0.390625rem 0.234375rem;
    box-shadow: 0 0 0.03125rem 0.03125rem #dedede;
    border-radius: 0.234375rem;
    .pay-content-title {
      height: 0.390625rem;
      font-size: 0.390625rem;
      line-height: 0.390625rem;
      margin-bottom: 0.390625rem;
      color: #333333;
    }
    .pay-content-list {
      display: flex;
      width: 100%;
      height: 1.5625rem;
      margin-bottom: 0.46875rem;
      .pay-content-list-imgs img {
        flex: 1;
        width: 1.5625rem;
        height: 1.5625rem;
        margin-right: 0.234375rem;
        border-radius: 0.234375rem;
      }
      .pay-content-list-text {
        flex: 5;
        box-sizing: border-box;
        padding: 0.3125rem 0 0.234375rem 0;
        .pay-coffee-name {
          height: 0.46875rem;
          font-size: 0.46875rem;
          line-height: 0.46875rem;
          color: #333333;
          margin-bottom: 0.15625rem;
          .pay-coffee-price {
            float: right;
            height: 0.390625rem;
            font-size: 0.390625rem;
            line-height: 0.390625rem;
            padding-top: 0.078125rem;
          }
        }
        .pay-coffee-option {
          height: 0.25rem;
          font-size: 0.25rem;
          line-height: 0.25rem;
          color: #bdbaba;
          padding-top: 0.078125rem;
        }
      }
    }
    .pay-content-total {
      height: 0.46875rem;
      font-size: 0.46875rem;
      line-height: 0.46875rem;
      font-weight: bold;
      margin-top: 0.703125rem;
      .price {
        float: right;
      }
    }
    // 地址部分
    .pay-content-site {
      width: 100%;
      height: 2.953125rem;
      color: #333333;
      border-bottom: 1px solid rgb(222, 222, 222);
      .box {
        display: block;
        height: 0.5rem;
        width: 100%;
        line-height: 0.5rem;
        margin-bottom: 0.3125rem;
        .content-site-name {
          float: left;
          font-size: 0.5rem;
          margin-right: 0.203125rem;
        }
        .content-site-call,
        .content-site-number {
          height: 0.34375rem;
          font-size: 0.34375rem;
          line-height: 0.34375rem;
          margin-top: .0625rem;
        }
        .content-site-call {
          float: left;
        }
        .content-site-number {
          float: right;
          color: #bdbaba;
        }
      }
      .content-site-details {
        height: 0.3125rem;
        font-size: 0.3125rem;
        line-height: 0.3125rem;
      }
      .content-site-select {
        height: 1.09375rem;
        line-height: 1.09375rem;
        font-size: 0.34375rem;
        color: #bdbaba;
      }
    }
  }
}

.pay-account {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5625rem 0.390625rem;
  // padding-bottom: 1.5625rem;
  border-top: 1px solid rgb(222, 222, 222);
  background-color: #ffffff;
  .pay-account-box{
    width: 100%;
    height: 1.09375rem;
    background-color: #f29b76;
    border-radius: .15625rem;
    color: #ffffff;
    text-align: center;
    font-size: .46875rem;
    line-height: 1.09375rem;
  }
}
</style>