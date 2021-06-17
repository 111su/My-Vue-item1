<template>
  <div >
    <van-nav-bar
      title="地址管理"
      left-text=""
      left-arrow
      @click-left="gomine"
      style="background-color: #f5f5f5;"
    />
    <div class="address-content">
      <ul>
        <li>
          <span class="address-content-left">头像</span>
          <span class="address-content-right"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2469474622,2269078342&fm=26&gp=0.jpg"/></span>
        </li>
        <li>
          <span class="address-content-left">用户名</span>
          <span class="address-content-right">星星</span>
        </li>
        <li>
          <span class="address-content-left">性别</span>
          <span class="address-content-right">男</span>
        </li>
        <li>
          <span class="address-content-left">绑定手机</span>
          <span class="address-content-right">123-4567-8988</span>
        </li>
        <li @click="goaddress">
          <span class="address-content-left">收货地址</span>
          <span class="address-content-right iconfont icon-youjiantou"></span>
        </li>
      </ul>
    </div>
    <div class="address-footer">
      <p class="address-footer-box">退出登录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    gomine(){
      this.$router.push('/mine')
    },
    goaddress(){
      this.$router.push('/address')
    },
  },
};
</script>

<style lang="less">
body{
  background-color: #f5f5f5;
}
.address-content {
  width: 96%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: .15625rem;
  ul{
    box-sizing: border-box;
    padding: .3125rem 0;
    li{
      width: 100%;
      height: 1.25rem;
      box-sizing: border-box;
      padding: 0 .234375rem;
      margin: .078125rem 0;
      line-height: 1.25rem;
      font-size: .390625rem;
      color: #333333;
      .address-content-left{
        float: left;
        color: #838383;
      }
      .address-content-right{
        float: right;
        height: 100%;
        text-align: right;
        color: #333333;
        margin-right: .25rem;
        img{
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
        }
      }
    }
  }
}
.address-footer{
  position: fixed;
  bottom: .234375rem;
  width: 100%;
  margin: 0 auto;
  
  .address-footer-box{
    width: 96%;
    height: 1.09375rem;
    margin: 0 auto;
    background-color: #6d86c4;
    font-size: .390625rem;
    color: #ffffff;
    text-align: center;
    line-height: 1.09375rem;
    border-radius: .546875rem;
  }
}
</style>