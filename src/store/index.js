import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
  state: { //数据源唯一
    // 设置初始值
    menulistData:{},
    historyseachData:[],
    car:[],
    countnum:""
  },
  mutations: {  //定义方法，只能通过定义方法修改state值，同步操作
    // 商品详情页添加的数据放进购物车
    addCartData(state,data){
      console.log("111",data)
      state.menulistData = data;
    },
    // 商品数量
    countnum(state,count){
      state.countnum = count;
    },
    // 保存的历史搜索记录
    History(state,historyData){
      state.historyseachData = historyData;
      localStorage.setItem('historyseachData',JSON.stringify(state.historyseachData))
      console.log("666",historyData);
    },
    // 添加商品
    addToCar(state,goodsdata){
      var flag = false;           //假设没有商品
      this.state.car.some(item => {    //some方法:如果有一个元素满足条件，则表达式返回true 
        if(item.pid == goodsdata.pid) {
          flag = true;
          return true;
        }
      })
      if(!flag){
        this.state.car.push(goodsdata);
        // 更新car之后，将car数组存到本地的localStorage里面
        localStorage.setItem('car',JSON.stringify(state.car))
      }

    },
    // 删除商品
    delCar(state,pid){
      state.car.some((item,i)=> {
        if(item.pid == pid) {
          state.car.splice(i,1);
            return true;
          }
        });
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  actions: {  ////定义方法，异步操作
  //   //// 可以操作promise等
  //   vuexop(context){
  //     ////调用mutations方法  通过改变mutations 最后改变state
         ////可以用定时器
  //     context.commit("vuexop")
  //   }
  },
  getters: {  ////提供只能读取state数据，不能修改数据，可以当做是state的计算属性
    // 计算选中商品金额
    allMoney(state){
      let all_money = 0
      state.car.forEach((item,index)=>{
          if(item.options){
              all_money += state.car[index].goodsnum*item.price
          }
      })
      return state.all_money = all_money
    },
  },
  modules: {  ////对上面四个对象划分

  },
  plugins: [createPersistedState()]
})