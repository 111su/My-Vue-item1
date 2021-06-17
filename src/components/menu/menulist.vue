<template>
  <div>
    <div class="top">
      <span class="iconfont icon-ico_leftarrow" @click="$router.go(-1)"></span>
      <div class="context">
        <h1>大师咖啡</h1>
        <h2>世界级咖啡师大赛冠军配制</h2>
      </div>

    </div>
    <div class="goodslist">
      <ul>
        <li v-for="(item, index) in products" :key="index" :title="title">
          <div class="img">
            <img :src="item.largeImg" />
          </div>

          <div class="text">
            <p>{{ item.name }}</p>
            <span>{{ item.desc }}</span>
            <h3>￥{{ item.price }}</h3>

            <!-- 底部购物车 -->
            <h4 class="iconfont icon-tianjia1" @click="addmenu(item)"></h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTypeProducts } from "../../api/menu";
export default {
  data() {
    return {
      products: [],
      title:"我的",
    };
  },
  created() {
    console.log("query",this.$route.query.type)
    this.getTypeProductsFun(this.$route.query.type)
    // this. getaddShopcartFun()
  },
  methods: {
    getTypeProductsFun(type) {  
      console.log(123);
      getTypeProducts({ appkey: this.appkey, key: "type", value: type }).then(   //key value参数在接口里是必须参数，要写
        (data) => {
          console.log("data", data);
          this.products = data.result;
          console.log(this.products);
          console.log("getTypeProductsFun", data);
        }
      );
    },
    addmenu(item){
      console.log(item);
      this.$router.push({path:'/menudetails',query:{pid:item.pid}})
    }
  },
};
</script>

<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.71875rem;
  box-sizing: border-box;
  padding: 0.25rem 0 0.3125rem 0.46875rem;
  box-shadow: 0px 2px 4px 0px #dedede;
  background-color: #ffffff;
  z-index: 999;
  span {
    display: block;
    width: 0.625rem;
    height: 100%;
    font-size: 0.78125rem;
    float: left;
    margin-top: 0.21875rem;
    margin-right: 0.3125rem;
    color: #fa6f26;
  }
  .context {
    display: inline-block;
    flex: 4;
    h1 {
      display: block;
      font-size: 0.703125rem;
      line-height: 0.703125rem;
      color: #333333;
    }
    h2 {
      display: block;
      font-size: 0.34375rem;
      line-height: 0.34375rem;
      color: #c9c9c9;
      margin-top: 0.125rem;
    }
  }
}
.goodslist {
  width: 100%;
  margin-top: 1.71875rem;
  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.46875rem 0.46875rem 0.46875rem;
    li {
      width: 100%;
      height: 2.125rem;
      padding-top: 0.46875rem;
      display: flex;
      .img {
        flex: 1;
        margin-right: 0.15625rem;
        img {
          width: 2.125rem;
          height: 2.125rem;
          border-radius: 0.234375rem;
        }
      }
      .text {
        flex: 3;
        position: relative;
        p {
          display: block;
          height: 0.4375rem;
          font-size: 0.4375rem;
          line-height: 0.4375rem;
          margin-top: 0.15625rem;
          color: #333333;
          font-weight: bold;
        }
        span {
          display: block;
          font-size: 0.28125rem;
          line-height: 0.34375rem;
          margin-top: 0.15625rem;
          color: #a7a7a8;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //超出x行后隐藏为...
          overflow: hidden;
        }
        h3 {
          display: block;
          font-size: 0.4375rem;
          line-height: 0.4375rem;
          margin-top: 0.25rem;
          color: #fa6f26;
        }
        h4 {
          width: 0.625rem;
          height: 0.625rem;
          font-size: 0.625rem;
          color: #1a70f9;
          position: absolute;
          bottom: 0;
          right: 0;
          .van-nav {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 4.328125rem;
            box-sizing: border-box;
            padding: 0.78125rem 0.4375rem 0.546875rem 0.4375rem;
            box-shadow: 0px 0px 4px 0px #dedede;
            background-color: #ffffff;
            .content {
              height: 0.78125rem;
              font-size: 0.5rem;
              line-height: 0.78125rem;
              margin-bottom: 1.09375rem;
              color: #fa6f26;
              p {
                display: block;
                width: 1.75rem;
                height: 100%;
                float: right;
                font-size: 0.59375rem;
                span {
                  margin: 0;
                }
                .reduce,
                .add {
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
                  display: block;
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
            .van-add {
              width: 100%;
              height: 1.28125rem;
              border-radius: 0.78125rem;
              background-color: #f29b76;
              color: #ffffff;
              text-align: center;
              line-height: 1.28125rem;
            }
          }
          .imgs {
            width: 100%;
            height: 5.78125rem;
            position: relative;
            img {
              width: 100%;
              height: 5.78125rem;
            }
            span {
              display: block;
              position: absolute;
              left: 0;
              bottom: -0.015625rem;
              width: 100%;
              height: 0.546875rem;
              background-color: #fff;
              border-radius: 0.546875rem 0.546875rem 0 0;
            }
          }
          .van-option {
            width: 100%;
            box-sizing: border-box;
            padding: 0 0.5rem 0.5rem 0.5rem;
            margin-bottom: 4.328125rem;
            h1 {
              display: block;
              height: 0.78125rem;
              font-size: 0.78125rem;
              line-height: 0.78125rem;
              font-weight: bold;
              color: #333333;
            }
            .van-option-select {
              width: 100%;
              margin-top: 0.375rem;
              h2 {
                display: inline-block;
                height: 0.65625rem;
                width: 1.359375rem;
                box-sizing: border-box;
                margin-right: 0.46875rem;
                font-size: 0.46875rem;
                line-height: 0.65625rem;
                color: #333333;
              }
              h3 {
                display: inline-block;
                width: 1.875rem;
                height: 0.65625rem;
                margin-right: 0.46875rem;
                font-size: 0.390625rem;
                line-height: 0.65625rem;
                text-align: center;
                background-color: #dedede;
                color: #857d7d;
                border-radius: 0.34375rem;
                &.active {
                  background-color: #f29b76;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
    }
  }
}

/* .v-enter 这个是一个时间点， 是进入之前，元素起始状态 */
        /* .v-leave-to 这个是一个时间点，离开时候状态，此时动画结束 */
        .v-enter,
        .v-leave-to{
            opacity: 0;
            transform: translateY(150px);
        }
        /* .v-enter-active 入场时间段 */
        /* .v-leave-active 离场时间段 */
        .v-enter-active,
        .v-leave-active{
            transition: all 0.8s ease;
        }
</style>