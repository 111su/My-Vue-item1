<template>
  <div style="background-color: #6c4b41; padding-bottom: 200px">
    <div class="logo">
      <img src=".././assets/images/咖啡壶.png" alt="" />
    </div>
    <div class="logobox">
      <div class="logobox-header">COFFEE MION</div>
      <div class="logobox-content">
        <div class="logobox-content-form">
          <span class="icon iconfont icon-bodadianhua"></span>
          <input type="text" placeholder="手机号" v-model="phone" />
        </div>
        <div class="logobox-content-form">
          <span class="icon iconfont icon-suo"></span>
          <input type="text" placeholder="输入登录密码" v-model="password" />
        </div>
        <div class="logobox-content-form" style="margin-bottom: none">
          <span class="icon iconfont icon-yuechi"></span>
          <input type="text" placeholder="输入验证码" />
          <p class="logobox-content-send" @click="getCode">发 送 验 证 码</p>
        </div>
      </div>
    </div>
    <div class="login-on" @click="submit">登录</div>
  </div>
</template>
<script>
import { getPassword,getLogin } from "../api/login";
import { Notify } from "vant";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  created(){
    this.getLoginFun()
  },
  methods: {
    // 验证码功能
    getCode() {
      let rega = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      //   test() 方法用于检测一个字符串是否匹配某个模式. 是则返回 true，否则返回 false。
      if (!rega.test(this.phone)) {
        Notify({ type: "warning",duration:1000, message: "请输入正确的手机号码" });
        return;
      }
      console.log(888888);
      getPassword({ phone: this.phone }).then((data) => {
        console.log(89888);
        if (data.code == 200 || this.phone != '') {
          Notify({ type: "success",duration:1000, message: "验证码发送成功" });
        }
      });
    },
    //验证密码
    submit(){
       this.getLoginFun()
       // 6-20 位，字母、数字、字符
        let regb = /^[0-9]{4}$/;
        if(!regb.test(this.password) ){
           Notify({ type: "success",duration:1000, message: "请输入正确的密码" });
           return;
        }
        // this.$router.push("/home")
    },
    getLoginFun(){
      let rega = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      //   test() 方法用于检测一个字符串是否匹配某个模式. 是则返回 true，否则返回 false。
      if (!rega.test(this.phone)) {
        Notify({ type: "warning",duration:1000, message: "请输入正确的手机号码" });
        return;
      }
      getLogin({appkey: this.appkey, password: this.password, phone: this.phone}).then((data)=>{
        if(data.code == 200 || this.password != ''){
           Notify({ type: "login", message: "登录成功",duration:1000,background:"red" });
          this.$router.push("/home")
        }
      });
    }
  },
};
</script>


<style lang="less" scoped>
.logo {
  width: 3.046875rem;
  height: 3.671875rem;
  margin: 0 auto;
  padding: 1.71875rem 0 0.78125rem 0;
  img {
    width: 3.046875rem;
    height: 3.671875rem;
  }
}
.logobox {
  width: 88%;
  margin: 0 auto;
  height: 7.15625rem;
  background-color: #f29b76;
  border-radius: 0.46875rem;
  .logobox-header {
    height: 1.328125rem;
    background-color: #ffffff;
    text-align: center;
    line-height: 1.328125rem;
    font-size: 0.4375rem;
    color: #333333;
    border-radius: 0.46875rem 0.46875rem 0 0;
  }
  .logobox-content {
    height: 5.84375rem;
    box-sizing: border-box;
    padding: 0.59375rem 3.625rem 1.40625rem 0.859375rem;
    position: relative;
    .logobox-content-form {
      width: 100%;
      height: 0.9375rem;
      margin-bottom: 0.59375rem;
      display: flex;
      .icon {
        flex: 0 0 0.9375rem;
        font-size: 0.9375rem;
      }
      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding-left: 0.3125rem;
        font-size: 0.4375rem;
        line-height: 0.9375rem;
        background-color: transparent;
      }
      .logobox-content-send {
        position: absolute;
        right: 0.625rem;
        bottom: 1.28125rem;
        width: 3rem;
        height: 0.84375rem;
        background-color: #ffffff;
        border-radius: 0.125rem;
        text-align: center;
        font-size: 0.40625rem;
        line-height: 0.84375rem;
      }
    }
  }
}
.login-on {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 12.34375rem;
  left: 0;
  margin: 0 auto;
  width: 2.09375rem;
  height: 2.09375rem;
  background-color: red;
  border-radius: 50%;
  text-align: center;
  font-size: 0.46875rem;
  line-height: 1.78125rem;
  box-sizing: border-box;
  border: 0.15625rem solid #ffffff;
  color: #ffffff;
  background: linear-gradient(to bottom, #e7dbc3, #f29b76);
}

// 兼容匹配
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.384);
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: rgba(0, 0, 0, 0.384);
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: rgba(0, 0, 0, 0.384);
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.384);
}
</style>