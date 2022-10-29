<template>
  <div class="topImg" v-show="topFlag">
    <img :src="require('@/assets/imgFlow' + curImgTop)" alt="" />
  </div>
  <div
    class="movieImgFlowContainer"
    :class="{ movieMoveClass: flag }"
    ref="movieImgFlowContainer"
  >
    <img :src="require('@/assets/imgFlow' + curImgList[0])" alt="" />
    <img :src="require('@/assets/imgFlow' + curImgList[1])" alt="" />
    <img :src="require('@/assets/imgFlow' + curImgList[2])" alt="" />
    <img :src="require('@/assets/imgFlow' + curImgList[3])" alt="" />
    <img :src="require('@/assets/imgFlow' + curImgList[4])" alt="" />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      flag: false,
      topFlag: false,
      ImgList: [],
      curImgList: ['', '', '', '', ''],
      curImgTop: '',
      start: Number,
      movieImgFlowContainer: null
    }
  },
  computed: {
    ImgLen: function () {
      return this.ImgList.length
    }
  },
  watch: {
    flag: function (newValue, oldValue) {
      // 动画刚进行完一小会,移动背后图片
      if (oldValue) {
        this.forwardImg()
      }
    }
  },
  methods: {
    initImgList: function () {
      const files = require.context('@/assets/imgFlow', false, /.jpg$/)
      files.keys().forEach((data) => {
        this.ImgList.push(data.slice(1))
      })
    },
    forwardImg: function () {
      this.start = this.start == this.ImgLen - 1 ? 0 : this.start + 1
      for (let i = this.start; i < this.start + 5; i++) {
        let ii = i < this.ImgLen ? i : i - this.ImgLen
        this.curImgList[i - this.start] = this.ImgList[ii]
      }
    }
  },
  created() {
    this.initImgList()
    this.start = this.ImgLen - 1
    this.forwardImg()
    this.curImgTop = this.ImgList[3]
  },
  mounted() {
    this.movieImgFlowContainer = this.$refs.movieImgFlowContainer
    var thiss = this
    var setcurImgTop = function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
          thiss.curImgTop = thiss.curImgList[3]
        }, 250)
      })
    }
    var showTop = async function () {
      await setcurImgTop()
      thiss.topFlag = true
    }
    var hideTop = async function () {
      thiss.topFlag = false
    }
    this.movieImgFlowContainer.addEventListener('webkitAnimationEnd', () => {
      showTop()
    })
    this.movieImgFlowContainer.addEventListener('webkitAnimationStart', () => {
      hideTop()
    })
    setInterval(() => {
      this.flag = !this.flag
    }, 4000)
  }
}
</script>
<style lang="less" scoped>
.topImg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.movieImgFlowContainer {
  position: absolute;
  height: 100%;
  width: 500%;
  left: -200%;
  background: rgba(0, 0, 0, 0.5);
  animation-fill-mode: forwards;
  img {
    height: 100%;
    width: 20%;
    object-fit: cover;
    box-sizing: border-box;
  }
}
.movieMoveClass {
  animation: movieMove;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes movieMove {
  0% {
    left: -200%;
    transform: scale(1, 1);
  }
  50% {
    left: -220%;
    transform: scale(0.35, 0.35);
  }
  100% {
    left: -300%;
    transform: scale(1, 1);
  }
}
</style>
