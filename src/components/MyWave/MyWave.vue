<template>
  <div class="waveContainer" @click="play">
    <img
      :src="require('@/assets/imgFlow/4.jpg')"
      alt=""
      style="display: none"
      id="musicImg"
    />
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      height: Number,
      width: Number,
      musicContext: null,
      mediaElement: null,
      analyser: null,
      musicData: null,
      barCount: Number,
      barHeight: Number,
      barWidth: Number,
      imgOffX: Number,
      imgOffY: Number
    }
  },
  getters: {},
  methods: {
    play: function () {
      this.$store.state.audioElement.play()

      this.initMusic()

      setInterval(() => {
        this.draw()
      }, 20)
    },
    initData: function (canvasId) {
      this.canvas = document.getElementById(canvasId)
      this.ctx = this.canvas.getContext('2d')
      this.canvas.height = this.height = 300
      this.canvas.width = this.width = 1920
      this.barCount = 100
      this.barWidth = 20
      this.barHeight = 300
      this.imgOffX = 0
      this.imgOffY = 0
    },
    initMusic: function () {
      if (this.musicContext == null) {
        this.musicContext = new AudioContext()
        this.mediaElement = this.musicContext.createMediaElementSource(
          this.$store.state.audioElement
        )
        this.analyser = this.musicContext.createAnalyser()
        this.mediaElement.connect(this.analyser)
        this.analyser.connect(this.musicContext.destination)
        this.musicData = new Uint8Array(this.analyser.frequencyBinCount)
      }
    },
    draw: function () {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.drawImage(this.musicWave_img, this.imgOffX, this.imgOffY)
      this.analyser.getByteFrequencyData(this.musicData)

      var step = Math.round(this.musicData.length / this.barCount)
      for (var i = 0; i < this.barCount; i++) {
        var currentData = this.musicData[step * i]
        this.ctx.clearRect(
          this.barWidth * i,
          0,
          this.barWidth - 1,
          300 - currentData * 0.8
        )
        this.ctx.clearRect(
          this.barWidth * i + this.barWidth - 1,
          0,
          1,
          this.height
        )
      }
    },
    start: function () {}
  },
  mounted() {
    this.musicWave_img = document.getElementById('musicImg')
    this.initData('canvas')
  }
}
</script>
<style lang="less" scoped>
.waveContainer {
  position: absolute;
  height: 300px;
  width: 100%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
