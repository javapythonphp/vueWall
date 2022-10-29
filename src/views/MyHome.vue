<template>
  <div class="homeContainer">
    <img :src="require('@/assets/x.jpg')" alt="" />
    <movie-flow></movie-flow>
    <my-player></my-player>
    <my-wave></my-wave>
  </div>
</template>
<script>
/* eslint-disable */
import ImgFlow from '../components/MyImgFlow/MyImgFlow.vue'
import MyPlayer from '../components/MyPlayer/MyPlayer.vue'
import MyWave from '../components/MyWave/MyWave.vue'
import MovieFlow from '../components/MovieImgFlow/MovieImgFlow.vue'
export default {
  components: {
    ImgFlow: ImgFlow,
    MyPlayer: MyPlayer,
    MyWave: MyWave,
    MovieFlow: MovieFlow
  }
}
</script>
<style lang="less" scoped>
.homeContainer {
  height: 100%;
  width: 100%;
  position: relative;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: blur(5px);
  }
}
</style>
