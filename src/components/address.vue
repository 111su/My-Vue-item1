<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text=""
      left-arrow
      @click-left="gopersonage"
      style="background-color: #f5f5f5;"
    />

    <div class="address">
      <van-address-edit
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      // areaList,
      searchResult: [],
    };
  },
  methods: {
    gopersonage() {
      this.$router.push("/personage");
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>
<style lang="less">
body{
  background-color: #f5f5f5;
}
.address {
  width: 96%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 0.15625rem;
}
</style>

<style>
</style>