<template>
  <div>
    <div class="flexd">
      <div class="index">
        <router-link
          to="/login"
          tag="h1"
          class="iconfont icon-denglu"
        ></router-link>
        <h2>首页</h2>
        <h3 class="iconfont icon-zujian-icon-19"></h3>
      </div>
    </div>
    <!-- 导航栏部分 -->
    <div class="seach">
      <input type="text" placeholder="搜索咖啡" @click="goseach"/>
    </div>
    <!-- 轮播图部分 -->
    <div class="banner">
      <div class="imgs">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in banners" :key="index">
            <img :src="item.bannerImg" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="slogan"><img src="../assets/images/coff.png" alt="" /></div>
    <!-- 列表 -->
    <div class="list">
      <h1>
        <van-divider
          :style="{
            color: '#f29b76',
            borderColor: '#f29b76',
            padding: '0 16px',
          }"
        >
          <span class="iconfont icon-icon-"></span>
          快速导航
          <span class="iconfont icon-icon-"></span>
        </van-divider>
      </h1>

      <div class="card">
        <ul>
          <li>
            <img src="../assets/images/01.png" /><br />
            推荐
          </li>
          <li @click="goMenu">
            <img src="../assets/images/02.png" /><br />
            菜单
          </li>
          <li @click="goCart">
            <img src="../assets/images/03.png" /><br />
            购物车
          </li>
        </ul>
      </div>
    </div>
    <div class="goods">
      <h1>
        <van-divider
          :style="{
            color: '#6c4b41',
            borderColor: '#6c4b41',
          }"
        >
          <span class="iconfont icon-kafeidougaishu"></span>
          每日推荐
          <span class="iconfont icon-kafeidougaishu"></span>
        </van-divider>
      </h1>
      <ul>
        <router-link
          tag="li"
          :to="'/menudetails?pid=' + item.pid"
          v-for="(item, index) in hot"
          :key="index"
        >
          <img :src="item.largeImg" alt="" />
          <h2>{{ item.name }}</h2>
          <h3>{{ item.enname }}</h3>
        </router-link>
      </ul>
    </div>

    <div class="null"></div>
  </div>
</template>

<script>
// 第一步引入
import { getBanners, getHotProducts } from "../api/home";

export default {
  data() {
    return {
      // 第二步初始化
      banners: "",
      hot: [],
    };
  },
  methods: {
    // 创建一个函数方法
    getBannersFun() {
      getBanners({ appkey: this.appkey }).then((data) => {
        if (data.code == 300) {
          // console.log(data);
          this.banners = data.result;
        }
        console.log("getBannersFun", data);
      });
    },
    getHotProductsFun() {
      getHotProducts({ appkey: this.appkey, key: "isHot", value: 1 }).then(
        (data) => {
          this.hot = data.result;
          console.log("hot", this.hot);
        }
      );
    },
    goMenu(){
      this.$router.push('/menu')
    },
    goCart(){
      this.$router.push('/cart')
    },
    goseach(){
      this.$router.push('/seach')
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //监控滑动，运行handleScroll 函数
    // Notify({ type: "login", message: "登录成功",duration:1000 });
    this.$nextTick(()=>{
      // Notify({ type: "login", message: "登录成功",duration:1000,background:"red" });
    })
  },
  created() {
    this.getBannersFun();
    this.getHotProductsFun();
  },
};
</script>

<style lang="less" scoped>
body {
  background-color: #f7f7f7;
}
.flexd {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #dbecec;
  z-index: 999;
  width: 100%;
  height: 0.9375rem;
  min-height: 0.9375rem;
}

.index {
  display: flex;
  height: 0.9375rem;
  text-align: center;
  line-height: 0.9375rem;
  box-sizing: border-box;
  // border-bottom: .007813rem solid #24a19c;

  .iconfont {
    font-size: 0.390625rem;
  }
}
h1 {
  // 扫一扫
  display: block;
  flex: 0 0 10%;
}
h2 {
  display: block;
  flex: 0 0 80%;
  font-size: 0.390625rem;
}
h3 {
  // 登录
  display: block;
  flex: 0 0 10%;
}

.seach {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 0 0.546875rem;
  display: flex;
  align-items: center;
  margin-top: 0.9375rem;
  input {
    width: 100%;
    height: 0.78125rem;
    outline: none;
    border: none;
    font-size: 0.390625rem;
    text-align: center;
    border-radius: 0.46875rem;
    border: 2px dashed #24a19c;
    background-color: #f2c4b5;
  }
}

.banner {
  position: relative;
  width: 100%;
  height: 6.125rem;
  min-height: 6.125rem;
  // margin-top: 1.8125rem;
  .imgs {
    height: 5.125rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    img {
      width: 100%;
      height: 6.125rem;
    }
  }
}
.slogan {
  width: 100%;
  height: 1.25rem;
  margin: 0.15625rem 0;
  img {
    width: 100%;
    height: 100%;
  }
}
.list {
  width: 100%;
  height: 3rem;
  text-align: center;
  font-size: 0.390625rem;
  line-height: 0.625rem;
  background-color: #ffffff;
  h1 {
    display: block;
    font-size: 0.46875rem;
    height: 0.46875rem;
    line-height: 0.46875rem;
    margin: 0.3125rem 0;
  }
  .iconfont {
    font-size: 0.390625rem;
  }
  .card {
    width: 100%;
    height: 2.21875rem;
    ul {
      width: 96%;
      height: 2.21875rem;
      display: flex;
      margin: 0 auto;
      border-right: none;
      box-shadow: 0px 0px 6px 0px #f2c4b5;
      border-radius: 0.15625rem;
      li {
        flex: 1;
        padding-top: 0.3125rem;
        img {
          width: 0.90625rem;
          height: 0.90625rem;
        }
      }
    }
  }
}
.goods {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.1875rem 0.375rem 0.1875rem;
  h1 {
    display: block;
    font-size: 0.46875rem;
    height: 0.46875rem;
    line-height: 0.46875rem;
    margin: 0.3125rem 0;
    .iconfont {
      font-size: 0.3125rem;
    }
  }
  ul {
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    flex-wrap: wrap;
    li {
      width: 30.33%;
      height: 100%;
      background-color: #dedede;
      box-sizing: border-box;
      margin: 0 0.09375rem 0.1875rem 0.1875rem;
      border-radius: 0.15625rem;
      img {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.15625rem;
      }
      h2 {
        height: 0.3125rem;
        font-size: 0.3125rem;
        line-height: 0.3125rem;
        margin: 0 0.0625rem 0.125rem;
        color: #6c4b4a;
      }
      h3 {
        font-size: 0.25rem;
        line-height: 0.3125rem;
        margin: 0 0.0625rem 0.125rem;
        color: #aaaaaa;
        white-space: nowrap; /* 文本不换行 */
        overflow: hidden; /* 文本溢出隐藏 */
        // text-overflow: ellipsis; /* 超出省略号代替 */
      }
    }
  }
}
.null {
  width: 100%;
  height: 1.203125rem;
}
</style>