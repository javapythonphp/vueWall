<template>
  <div class="ImgContainer" :class="{ move: flag }">
    <img :src="require('@/assets/imgFlow' + this.Img1)" alt="" />
    <img :src="require('@/assets/imgFlow' + this.Img2)" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      ImgList: [],
      Img1: '',
      Img2: ''
    }
  },
  computed: {
    ImgListLen: function () {
      return this.ImgList.length
    }
  },
  methods: {
    initImgList: function () {
      const files = require.context('@/assets/imgFlow', false, /.jpg$/)
      files.keys().forEach((data) => {
        this.ImgList.push(data.slice(1))
      })
    },
    initImg: function () {
      let random1 = Math.floor(Math.random() * this.ImgListLen)
      let random2 = Math.floor(Math.random() * this.ImgListLen)
      while (random1 == random2) {
        random2 = Math.floor(Math.random() * this.ImgListLen)
      }
      this.Img1 = this.ImgList[random1]
      this.Img2 = this.ImgList[random2]
    },
    ImgChange: function (value) {
      if (value) {
        let random2 = Math.floor(Math.random() * this.ImgListLen)
        while (
          this.Img1 == this.ImgList[random2] ||
          this.ImgList[random2] == this.Img2
        ) {
          random2 = Math.floor(Math.random() * this.ImgListLen)
        }
        this.Img2 = this.ImgList[random2]
      } else {
        let random1 = Math.floor(Math.random() * this.ImgListLen)
        while (
          this.Img2 == this.ImgList[random1] ||
          this.ImgList[random1] == this.Img1
        ) {
          random1 = Math.floor(Math.random() * this.ImgListLen)
        }
        this.Img1 = this.ImgList[random1]
      }
    },
    moveImg: function () {
      setInterval(() => {
        this.flag = !this.flag
      }, 4000)
    }
  },
  watch: {
    flag: function (newValue, oldValue) {
      setTimeout(() => {
        this.ImgChange(oldValue)
      }, 1500)
    }
  },
  created() {
    this.initImgList()
    this.initImg()
  },
  mounted() {
    this.moveImg()
  }
}
</script>
<style lang="less" scoped>
.ImgContainer {
  position: absolute;
  height: 100%;
  width: 200%;
  transform: translate(0, 0);
  transition: transform 1s ease-in-out;
  background: rgba(0, 0, 0, 0.1);
  img {
    height: 100%;
    width: 50%;
    object-fit: cover;
  }
}
.move {
  transform: translate(-50%, 0);
  transition: transform 1s ease-in-out;
}
</style>
