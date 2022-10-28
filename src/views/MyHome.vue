<template>
  <div class="homeContainer">
    <img-flow></img-flow>
    <my-player></my-player>
    <my-wave></my-wave>
  </div>
</template>
<script>
import ImgFlow from '../components/MyImgFlow/MyImgFlow.vue'
import MyPlayer from '../components/MyPlayer/MyPlayer.vue'
import MyWave from '../components/MyWave/MyWave.vue'
export default {
  components: {
    ImgFlow: ImgFlow,
    MyPlayer: MyPlayer,
    MyWave: MyWave
  }
}
</script>
<style lang="less" scoped>
.homeContainer {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
