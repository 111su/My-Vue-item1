<template>
  <div>
    <div class="title">购物车</div>
    <!-- <p class="all">
      <van-checkbox @click="checkAnti" v-model="checked" class="van">全选</van-checkbox>
    </p> -->
    <div>
      <div
        class="goods-lists"
        v-for="(item, index) in $store.state.car"
        :key="index"
      >
        <div
          class="iconfont icon-x"
          style="position: absolute; right: 22px"
          @click.prevent="remove(item.id, index)"
        ></div>
        <div class="content">
          <van-checkbox
            value=""
            v-model="item.options"
            class="van"
          ></van-checkbox>
          <h1 class="imgs">
            <img :src="item.img" />
          </h1>
          <router-link tag="span" :to="'/menudetails?pid=' + item.pid" class="text">
            <h2 class="goods-name">{{ item.name }}</h2>
            <h3 class="goods-option">{{item.descdatas[0]}} {{item.descdatas[1]}} {{item.descdatas[2]}} {{item.descdatas[3]}}</h3>
            <h4 class="goods-price">￥{{ item.price }}</h4>
          </router-link>
          <div class="count">
            <span class="count-left" @click="reduce(index)">-</span>
            <!-- {{ $store.state.car[index].goodsnum }} -->
            <span class="count-num">{{ $store.state.car[index].goodsnum }}</span>
            <span class="count-right" @click="add(index)">+</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-null" v-show="!imgshow"></div>
    <div class="bottom">
      <p class="all">
        <van-checkbox @click="checkAnti" v-model="checked" class="van"
          >全选</van-checkbox
        >
      </p>
      <div class="left">
        应付合计
        <label style="color: #f29b76">￥{{$store.getters.allMoney}}</label>
      </div>
      <div class="right" @click="gopay()">去结算</div>
    </div>
    <!-- 没有商品时 -->
    <div class="null-img" v-show="imgshow">
      <img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2469474622,2269078342&fm=26&gp=0.jpg"
        alt=""
      />
      <h1 class="null-img-text">还没有商品哦！去逛一逛吧！</h1>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  created() {
    if(this.$store.state.car.length == 0){
      this.imgshow = true
    }
    console.log("11111111111", this.$store.state.car);
    console.log("999", this.$store.state.car);
  },
  data() {
    return {
      addCartlistData: [],
      imgshow: false,
      checked: false,
      // 选中商品金额
      totalmoney: 0,
    };
  },
  computed: {
    car() {
      return this.$store.state.car;
    },
  },

  methods: {
    // 删除商品
    remove(pid, index) {
      this.$store.state.car.splice(index, 1);
      this.$store.commit("delCar", pid);
      if (!this.$store.state.car.length) {
        this.imgshow = true;
      }
    },
    // 全选
    checkAnti() {
      this.$store.state.car.forEach((item) => {
        item.options = !item.options;
      });
    },
    // 减法
    reduce(index) {
      if(this.$store.state.car[index].goodsnum >1){
        this.$store.state.car[index].goodsnum -= 1
      }
    },
    // 加法
    add(index) {
      this.$store.state.car[index].goodsnum += 1
    },
    // 没有商品显示提示框
    gopay() {
      if (this.$store.getters.allMoney == 0) {
        Toast("请选择商品");
        this.$router.push("/cart");
      } else {
        this.$router.push("/pay");
      }
    },
  }
};
</script>

<style lang="less" scoped>
.title {
  display: block;
  height: 0.5625rem;
  font-size: 0.5625rem;
  line-height: 0.5625rem;
  padding: 0.28125rem 0 0.28125rem 0.46875rem;
  box-shadow: 0 0.03125rem 0.125rem 0 #dedede;
  color: #6c4b41;
}
.all {
  height: 0.3125rem;
  font-size: 0.3125rem;
  line-height: 0.3125rem;
  padding: 0.15625rem 0;
}
.goods-lists {
  width: 100%;
  box-sizing: border-box;
  padding: 0.375rem 0.5rem;
  border-bottom: 2px solid #dedede;
  .content {
    width: 100%;
    height: 1.5625rem;
    .van {
      margin: 0.625rem 0.234375rem 0.625rem 0;
      float: left;
    }
    .imgs img {
      float: left;
      width: 1.5625rem;
      height: 1.5625rem;
      border-radius: 0.15625rem;
      margin-right: 0.234375rem;
    }
    .text {
      height: 100%;
      float: left;
      .goods-name {
        height: 0.390625rem;
        font-size: 0.390625rem;
        line-height: 0.390625rem;
        margin-top: 0.078125rem;
      }
      .goods-option {
        height: 0.265625rem;
        font-size: 0.265625rem;
        line-height: 0.265625rem;
        margin-top: 0.25rem;
        color: #5c5c5c;
      }
      .goods-price {
        height: 0.3125rem;
        font-size: 0.3125rem;
        line-height: 0.3125rem;
        margin-top: 0.21875rem;
      }
    }
    .count {
      float: right;
      margin-top: 1rem;
      width: 1.953125rem;
      height: 0.5625rem;
      text-align: center;
      font-size: 0.3125rem;
      line-height: 0.5625rem;
      color: #ffffff;

      .count-left {
        float: left;
        width: 0.5625rem;
        height: 0.5625rem;
        box-sizing: border-box;
        border: 2px solid #f29b76;
        border-radius: 50%;
        line-height: 0.5rem;
        background-color: #f29b76;
      }
      .count-num {
        float: left;
        width: 0.828125rem;
        color: #f29b76;
      }
      .count-right {
        float: right;
        width: 0.5625rem;
        height: 0.5625rem;
        background-color: #f29b76;
        box-sizing: border-box;
        border: 2px solid #f29b76;
        border-radius: 50%;
        line-height: 0.5rem;
      }
    }
  }
}

.bottom-null {
  width: 100%;
  height: 3.84375rem;
}
// 底部下单栏
.bottom {
  position: fixed;
  bottom: 1.4375rem;
  width: 100%;
  height: 2.4375rem;
  box-sizing: border-box;
  padding: 0 0.546875rem;
  text-align: center;
  line-height: 1.34375rem;
  background-color: #ffffff;
  .invert {
    height: 0.3125rem;
    font-size: 0.3125rem;
    line-height: 0.3125rem;
    padding: 0.15625rem 0;
  }
  .left {
    height: 1.34375rem;
    font-size: 0.390625rem;
    float: left;
  }
  .right {
    height: 1.34375rem;
    width: 4.40625rem;
    font-size: 0.46875rem;
    float: right;
    color: #ffffff;
    background-color: #f29b76;
    border-radius: 0.78125rem;
  }
}

// 没有商品时
.null-img {
  width: 4.6875rem;
  height: 4.6875rem;
  margin: 1.25rem auto;
  img {
    width: 4.6875rem;
    height: 4.6875rem;
  }
  .null-img-text {
    width: 100%;
    height: 0.625rem;
    font-size: .3125rem;
    line-height: .3125rem;
    text-align: center;
    margin: 0 auto;
    color: #856c6c7c;
  }
}
</style>

