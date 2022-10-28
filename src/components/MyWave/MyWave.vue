<template>
  <div class="waveContainer">
    <img src="" alt="" />
    <canvas></canvas>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  getters: {
    ...mapState(['audioElement'])
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.waveContainer {
  position: absolute;
  height: 300px;
  width: 100%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
