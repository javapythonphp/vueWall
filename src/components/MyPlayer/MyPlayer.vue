<template>
  <div class="playerContainer">
    <audio :src="require('@/assets/music/1.mp3')" id="audio">1</audio>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  getters: {},
  methods: {
    ...mapMutations(['setAudioElement'])
  },
  mounted() {
    this.setAudioElement(document.getElementById('audio'))
  }
}
</script>
<style lang="less" scoped>
.playerContainer {
  position: absolute;
  height: 600px;
  width: 400px;
  right: 60px;
  top: 60px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 999;
}
</style>
