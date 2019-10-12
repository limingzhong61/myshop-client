<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { reqFoodCategorys } from "./api/index.js";
import axios from "axios";
export default {
  created() {
    // 异步获取 address
    this.$store.dispatch("getShopInfo");
    // axios.get("http://localhost:4000/index_category").then(res => {
    //   console.log(res);
    // }).catch(err =>{
    //   console.log(err)
    // });
  },
  // async mounted(){
  //  const result = await reqFoodCategorys()
  //  console.log(result)
  // },
  components: {
    FooterGuide
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>