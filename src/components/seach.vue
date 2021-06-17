<template>
  <div>
    <van-nav-bar title="立即搜索，畅享咖啡" left-arrow @click-left="gohome" />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      id="value"
      @keydown="submit($event)"
    />
    <!-- 搜索后 -->
    <div class="search-content">
      <ul>
        <router-link
          tag="li"
          :to="'/menudetails?pid=' + item.pid"
          v-for="(item, index) in bigData"
          :key="index"
          v-show="!flag"
        >
          <span class="search-content-img">
            <img :src="item.largeImg" />
          </span>
          <span class="search-content-text">
            <h1 class="content-text-name">{{ item.name }}</h1>
            <h2 class="content-text-desc">{{ item.desc }}</h2>
            <h3 class="content-text-price">￥{{ item.price }}</h3>
          </span>
        </router-link>
      </ul>
    </div>
    <!-- 搜索前 -->
    <div class="search-content-history" v-show="flag">
      <h4 class="content-history-title">搜索历史</h4>
      <ul>
        <li v-for="(i, k) in $store.state.historyseachData" :key="k">
          <label @click="search(k)" >{{ i }}</label>
          <span class="iconfont icon-x" @click="remove(k)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var historypushData = [];
import { getsearch } from "../api/seach";
export default {
  data() {
    return {
      // 输入框内容
      value: "",
      // 全部搜索数据
      seachData: [],
      // 当前的搜索框内容
      getvalue: "",
      flag: true,
    };
  },
  methods: {
    getsearchFun() {
      getsearch({ appkey: this.appkey, name: this.getvalue }).then((data) => {
        this.seachData = data.result;
        console.log("data", this.seachData);
      });
    },
    gohome() {
      this.$router.push("/home");
    },
    submit(ev) {
      if (ev.keyCode === 13) {
        // 初始全部数据隐藏，显示历史搜索
        this.flag = false;
        // 获取输入框内容
        var text = document.getElementById("value").value;
        this.getvalue = text;
        // 输入框不为空时添加历史记录,否则显示历史搜索
        if (this.getvalue != "") {
          historypushData.push(text);
        } else {
          this.flag = true;
        }
        // 数组去重
        var historyData = Array.from(new Set(historypushData));
        console.log("111", historyData);
        // 将历史数据放到vuex遍历
        this.$store.commit("History", historyData);
      }
    },
    // 删除历史记录
    remove(index) {
      this.$store.state.historyseachData.splice(index, 1);
    },
    //点击再次搜索
    search(k) {
      this.value = this.$store.state.historyseachData[k];
    },
  },
  computed: {
    bigData() {
      var getvalue = this.getvalue;
      if (getvalue) {
        return this.seachData.filter(function (product) {
          return Object.keys(product).some(function (key) {
            return String(product[key]).toLowerCase().indexOf(getvalue) > -1;
          });
        });
      }
      return this.seachData;
    },
    historyseachData() {
      return this.$store.state.historyseachData;
    },
  },
  created() {
    this.getsearchFun();
    console.log(this.$store.state.historyseachData);
  },
};
</script>

<style lang="less">
// 搜索后
.search-content {
  width: 94%;
  margin: 0 auto;
  border-radius: 0.234375rem;
  ul {
    li {
      width: 100%;
      height: 1.875rem;
      border-radius: 0.234375rem;
      box-sizing: border-box;
      padding: 0.15625rem;
      margin-bottom: 10px;
      background-color: #dedede;
      display: flex;
      .search-content-img img {
        flex: 1;
        width: 1.5625rem;
        height: 100%;
        border-radius: 0.234375rem;
        margin-right: 0.234375rem;
      }
      .search-content-text {
        flex: 4;
        height: 100%;
        // background-color: darkcyan;
        .content-text-name {
          height: 0.40625rem;
          font-size: 0.40625rem;
          line-height: 0.40625rem;
          margin-bottom: 0.125rem;
        }
        .content-text-desc {
          height: 24px;
          font-size: 12px;
          line-height: 12px;
          margin-bottom: 6px;
          color: #857d7d;
          overflow: hidden;
        }
        .content-text-price {
          height: 0.25rem;
          font-size: 0.25rem;
          line-height: 0.25rem;
          color: #f29b76;
        }
      }
    }
  }
}
// 搜索前
.search-content-history {
  width: 94%;
  height: 100%;
  margin: 0 auto;
  background-color: #f7f8fa;
  box-sizing: border-box;
  padding: 0 0.15625rem;
  .content-history-title {
    height: 0.46875rem;
    font-size: 0.46875rem;
    line-height: 0.46875rem;
    padding-top: 0.15625rem;
    margin-bottom: 0.234375rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      // width: 50px;
      display: inline-block;
      height: 0.390625rem;
      font-size: 0.390625rem;
      line-height: 0.453125rem;
      padding: 0.15625rem;
      color: #333333;
      text-align: center;
      background-color: #f2f3f4;
      border: 2px solid #857d7d;
      border-radius: 5px;
      margin: 0 8px 8px 0;
      .iconfont {
        font-size: 0.3125rem;
        margin-left: 0.078125rem;
        font-weight: bold;
      }
    }
  }
}
</style>