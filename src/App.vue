<template>
  <div id="app">
    <div class="main">
      <footer-nav v-if="!$route.meta.headerflag"></footer-nav>
      <!-- 视图 -->
      <!-- <transition :name="tran"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
import footerNav from "./components/footerNav";

export default {
  data() {
    return {
      bool: true,
      tran: "",
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index && to.path =='/menudetails' && from.path =='/menudetails') {
        this.tran = "Sktop";
      } else if (to.meta.index < from.meta.index) {
        this.tran = "Skbottom";
      } else {
        this.tran = "";
      }
    },
  },
  created() {
    console.log(this.$route.meta);
  },

  components: {
    footerNav,
  },
};
</script>

<style lang="less" scoped>
@import "./assets/css/base.css";
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-size: 1rem;
}

.Sktop-enter-active,
.Sktop-leave-active,
.Skbottom-enter-active,
.Skbottom-leave-active {
  transition: all 1s;
}

.Sktop-enter {
  transform: translateY(1000px);
}
.Sktop-leave-to {
  transform: translateY(0);
}
.Skbottom-enter {
  transform: translateY(0);
}
.Skbottom-leave-to {
  transform: translateY(1000px);
}
</style>
