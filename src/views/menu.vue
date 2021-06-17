<template>
  <div>
    <div class="text">
    </div>
    <div class="menu">
      <p class="menu-text">正在热销</p>
      <ul>
        <li v-for="(item,index) in goodstype" :key="index" @click="btn(item)">
          <span>
            <img src="../assets/images/coffce.png" />
            <h3>{{item.typeDesc}}</h3>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getType } from "../api/menu.js";
export default {
  data() {
    return {
      goodstype: [],
      coffeeimgs:[
        "../assets/images/coffce.png",
        "../assets/images/qingshi.png",
        "../assets/images/yinpin.png",
        "../assets/images/yinpin2.png",
      ]
    };
  },
  methods: {
    getTypeFun() {
      getType({ appkey: this.appkey }).then((data) => {
        if (data.code == 400) {
          this.goodstype = data.result;
          console.log('data',data);
        }
        console.log("getTypeFun", data);
      });
    },
    btn(item){
      console.log(item);
      // this.$router.push({path:'/home'})
      this.$router.push({path:'/menulist',query:{type:item.type}})
    }
  },
  created() {
    this.getTypeFun();
  },
};
</script>

<style lang="less" scoped>
.text {
  width: 100%;
  height: 3.96875rem;
  background: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2225169879,2955566165&fm=26&gp=0.jpg) no-repeat;
  background-size: cover;
  border-radius: 0 0 10px 10px;
  // box-shadow: 0px 15px 25px 5px #dedede
}
.menu {
  box-sizing: border-box;
  margin: 0 0.0625rem;
  .menu-text {
    height: 0.625rem;
    font-size: .625rem;
    line-height: 0.625rem;
    margin: 0.546875rem 0 0.375rem 0.4375rem;
    font-weight: bold;
  }
  ul {
    width: 78%;
    height: 7.125rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    li {
      width: 50%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      span {
        display: block;
        text-align: center;
        box-sizing: border-box;
        margin: 0 .3125rem .53125rem .3125rem;
        padding: .390625rem .78125rem .15625rem .78125rem;
        box-shadow: 0 0 .15625rem .03125rem #dedede;
        border-radius: 0.15625rem;

        img {
          width: 1.328125rem;
          height: 1.328125rem;
        }
        h3 {
          display: block;
          height: 0.3125rem;
          font-size: 0.3125rem;
          line-height: 0.3125rem;
          margin-top: 0.234375rem;
        }
      }
    }
  }
}
</style>