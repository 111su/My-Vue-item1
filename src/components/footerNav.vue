<template>
  <div>
    <div class="footer">
      <div class="nav">
        <router-link to="/home" tag="div" class="item">
          <span class="iconfont icon-weibiaoti-4"></span><br />首页
        </router-link>

        <router-link to="/menu" tag="div" class="item">
          <span class="iconfont icon-zu"></span><br />菜单
        </router-link>

        <router-link to="/cart" tag="div" class="item">
          <span class="iconfont icon-icon_shoppingcart"></span><br />购物车
        </router-link>

        <router-link to="/mine" tag="div" class="item">
          <span class="iconfont icon-wode"></span><br />我的
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
// 全部用统一格式，不然会有适配问题
.footer {
  width: 100%;
  height: 1.4375rem;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #dbecec;
  .nav {
    top: 0;
    display: flex;
    box-sizing: border-box;
    padding: 0.1875rem 0;
    box-shadow: 1rem 1rem 0.03125rem 1rem #abaebb;
    .item {
      flex: 1;
      font-size: 0.3125rem;
      text-align: center;
      .iconfont {
        font-size: 0.625rem;
      }
      &.router-link-active {
        color: #f29b76;
      }
    }
  }
}
</style>