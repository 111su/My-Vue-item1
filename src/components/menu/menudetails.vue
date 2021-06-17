<template>
  <div>
    <div v-for="(item, index) in goodsdata" :key="index">
      <div class="top-img">
        <img :src="item.large_img" />
        <i class="iconfont icon-x" @click="$router.go(-1)"></i>
      </div>
      <!-- 选择栏 -->
      <div class="coffee-content">
        <h2 class="coffee-name">{{ item.name }}</h2>
        <!-- 选择按钮 -->
        <div class="coffee-option" v-show="isClickeda">
          <h3 class="text">
            <label>{{ item.tem_desc }}</label>
            <h4
              class="select"
              :class="{ active: isActivea === index }"
              @click="changea(index)"
              v-for="(key, index) in tem"
              :key="index"
            >
              {{ key }}
            </h4>
          </h3>
        </div>
        <div class="coffee-option" v-show="isClickedb">
          <h3 class="text">
            <label>{{ item.sugar_desc }}</label>
            <h4
              class="select"
              :class="{ active: isActiveb === index }"
              @click="changeb(index)"
              v-for="(key, index) in sugar"
              :key="index"
            >
              {{ key }}
            </h4>
          </h3>
        </div>
        <div class="coffee-option" v-show="isClickedc">
          <h3 class="text">
            <label>{{ item.milk_desc }}</label>
            <h4
              class="select"
              :class="{ active: isActivec === index }"
              @click="changec(index)"
              v-for="(key, index) in milk"
              :key="index"
            >
              {{ key }}
            </h4>
          </h3>
        </div>
        <div class="coffee-option" v-show="isClickedd">
          <h3 class="text">
            <label>{{ item.cream_desc }}</label>
            <h4
              class="select"
              :class="{ active: isActived === index }"
              @click="changed(index)"
              v-for="(key, index) in cream"
              :key="index"
            >
              {{ key }}
            </h4>
          </h3>
        </div>
        <p class="coffee-title">商品详情</p>
        <span class="coffee-intro"> {{ item.desc }} </span>
      </div>
      <!-- 底部添加价格数量 -->
      <div class="coffee-nav">
        <div class="coffee-nav-content">
          ￥22.00
          <div class="coffee-nav-content-count">
            <span class="minus" style="float: left" @click="reduce(index)">-</span>
            <span class="num">{{ count }}</span>
            <span class="minus" style="float: right" @click="add(index,item)">+</span>
          </div>
        </div>
        <div class="coffee-cart" @click="addToShopCar(item)">加入购物车</div>
      </div>
      <!-- 悬浮跳转购物车 -->
      <div style="position: relative">
        <div class="coffee-gocart iconfont icon-rekafei" @click="gocart">
          <span class="coffee-gocart-num">{{ $store.state.car.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 选择的规格加入数组
var descdatas = [];
import { getproductDetail } from "../../api/menu";
import { Toast } from "vant";
export default {
  data() {
    return {
      isActivea: 0,
      isActiveb: 0,
      isActivec: 0,
      isActived: 0,
      // 当前加上背景颜色显示true
      isClickeda: true,
      isClickedb: true,
      isClickedc: true,
      isClickedd: true,
      // 详情接口的数据
      goodsdata: [],
      tem: [],
      sugar: [],
      milk: [],
      cream: [],
      // 总的规格数量,为false时减少一个
      descnum: 4,
      count: 1,
    };
  },
  created() {
    descdatas = []
    console.log("vuex", this.$store.state.car);
    this.getproductDetailFun(this.$route.query.pid);
    this.$store.commit("countnum", this.count);
    // console.log(this.$store.state.car[0].goodsnum);
    // 让其默认值为1
    if(this.$store.state.car[0].goodsnum){
        this.count = this.$store.state.car[0].goodsnum
    }
  
  },

  methods: {
    getproductDetailFun(pid) {
      getproductDetail({ appkey: this.appkey, pid: pid }).then((data) => {
        if (data.code == 600) {
          console.log(data);
          console.log(data.result);
          this.$store.commit("addCartData", data.result);
          // console.log("data", data.result[0].sugar.split('/'));
          this.goodsdata = data.result;
          let tem = data.result[0].tem.split("/");
          let sugar = data.result[0].sugar.split("/");
          let milk = data.result[0].milk.split("/");
          let cream = data.result[0].cream.split("/");
          this.tem = tem;
          this.sugar = sugar;
          this.milk = milk;
          this.cream = cream;
        }
        // 判断为空 隐藏
        if (this.tem[0] == "") {
          this.isClickeda = false;
          this.descnum -= 1;
        }
        if (this.sugar[0] == "") {
          this.isClickedb = false;
          this.descnum -= 1;
        }
        if (this.milk[0] == "") {
          this.isClickedc = false;
          this.descnum -= 1;
        }
        if (this.cream[0] == "") {
          this.isClickedd = false;
          this.descnum -= 1;
        }
      });
    },
    // 规格的四个索引下标状态
    changea(index) {
      this.isActivea = index;
      if (this.isClickeda) {
        descdatas.splice(0, 1, this.tem[this.isActivea]);
      } else {
        descdatas.splice(0, 1, "");
      }
      console.log(descdatas);
    },
    changeb(index) {
      this.isActiveb = index;
      if (this.isClickedb) {
        descdatas.splice(1, 1, this.sugar[this.isActiveb]);
      } else {
        descdatas.splice(1, 1, "");
      }
      console.log(descdatas);
    },
    changec(index) {
      this.isActivec = index;
      if (this.isClickedc) {
        descdatas.splice(2, 1, this.milk[this.isActivec]);
      } else {
        descdatas.splice(2, 1, "");
      }
      console.log(descdatas);
    },
    changed(index) {
      this.isActived = index;
      if (this.isClickedd) {
        descdatas.splice(2, 1, this.cream[this.isActived]);
      } else {
        descdatas.splice(2, 1, "");
      }
      console.log(descdatas);
    },
    gocart() {
      this.$router.push("/cart");
    },
    addToShopCar(item) {
      // 判断规格选择后储存数据
      if (descdatas.length != this.descnum) {
        Toast({
          message: "请选择剩余规格",
          position: "bottom",
        });
      } else {
        let goodsdata = {
          pid: item.pid,
          img: item.large_img,
          name: item.name,
          desc: item.desc,
          price: item.price,
          descdatas,
          goodsnum: this.count,
          // selected:true 判断是默认为有商品
          selected: true,
          // 判断全选
          options: false,
        };
        // console.log("8798", descdatas);
        console.log(goodsdata);
        console.log(this.descnum);
        console.log(this.car);
        this.$store.commit("addToCar", goodsdata);
      }
      this.count = 1
    },
    // 减法
    reduce() {
      if(this.count >1){
        this.count -= 1
      }              
    },
    // 加法
    add(index,item) {
      this.count += 1
      if(item.id == this.goodsdata.pid) {
        this.$store.state.car[index].goodsnum += this.count
      }
    },
  },
  computed: {
    menulistData() {
      return this.$store.state.menulistData;
    },
    car() {
      return this.$store.state.car;
    },
  },
};
</script>

<style lang="less" scoped>
body {
  color: #333333;
}
.top-img img {
  width: 100%;
  height: 328px;
  position: relative;
}
i {
  position: absolute;
  top: 22px;
  right: 22px;
  color: #ffffff;
}
.coffee-content {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5rem 4.828125rem 0.5rem;
  margin-bottom: 4.328125rem;
  .coffee-name {
    height: 0.78125rem;
    font-size: 0.78125rem;
    line-height: 0.78125rem;
    font-weight: bold;
  }
  .coffee-option {
    width: 100%;
    margin-top: 0.375rem;
    .text {
      display: flex;
      height: 0.65625rem;
      box-sizing: border-box;
      font-size: 0.46875rem;
      line-height: 0.65625rem;
      label {
        margin-right: 0.46875rem;
        width: 40px;
      }
    }
    .select {
      width: 1.875rem;
      height: 0.65625rem;
      margin-right: 0.46875rem;
      font-size: 0.390625rem;
      line-height: 0.65625rem;
      text-align: center;
      background-color: #dedede;
      color: #857d7d;
      border-radius: 0.34375rem;
    }
    .active {
      color: #fff;
      background-color: #f29b76;
    }
  }
  .coffee-title {
    height: 0.65625rem;
    margin-top: 0.375rem;
    font-size: 0.46875rem;
    line-height: 0.65625rem;
    font-weight: bold;
  }
  .coffee-intro {
    display: block;
    width: 100%;
    font-size: 15px;
    line-height: 20px;
    color: #857d7d;
  }
}
.coffee-nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4.328125rem;
  box-sizing: border-box;
  padding: 0.78125rem 0.4375rem 0.390625rem 0.4375rem;
  box-shadow: 0px 0px 4px 0px #dedede;
  background-color: #ffffff;
  .coffee-nav-content {
    height: 0.78125rem;
    font-size: 0.5rem;
    line-height: 0.78125rem;
    margin-bottom: 1.09375rem;
    color: #fa6f26;
    .coffee-nav-content-count {
      display: block;
      float: right;
      width: 1.75rem;
      height: 100%;
      font-size: 0.59375rem;
      box-sizing: border-box;
      padding: 0.09375rem 0;
      .minus {
        display: block;
        width: 0.59375rem;
        height: 0.59375rem;
        line-height: 0.59375rem;
        float: left;
        text-align: center;
        background-color: #dedede;
        border-radius: 50%;
      }
      .num {
        width: 32%;
        height: 100%;
        line-height: 0.59375rem;
        float: left;
        text-align: center;
        color: #333333;
        font-size: 0.5rem;
      }
    }
  }
  .coffee-cart {
    width: 100%;
    height: 1.28125rem;
    border-radius: 0.78125rem;
    background-color: #f29b76;
    color: #ffffff;
    text-align: center;
    line-height: 1.28125rem;
    font-size: 0.625rem;
  }
}
.coffee-gocart {
  position: fixed;
  right: 20px;
  bottom: 170px;
  width: 0.9375rem;
  height: 0.9375rem;
  background-color: #f29b76;
  font-size: 0.78125rem;
  line-height: 0.9375rem;
  text-align: center;
  border-radius: 50%;
  color: #6c4b41;
  opacity: 0.8;
  .coffee-gocart-num {
    position: absolute;
    display: inline-block;
    right: 0.078125rem;
    bottom: 0.46875rem;
    width: 0.3125rem;
    height: 0.3125rem;
    font-size: 0.15625rem;
    line-height: 0.34375rem;
    border-radius: 50%;
    background-color: rgb(189, 0, 0);
    color: #fa6f26;
  }
}
</style>



