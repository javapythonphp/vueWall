<template>
  <div class="processContainer" @click="clickProgress" ref="processContainer">
    <div class="process">
      <div class="innerProcess" ref="innerProcess">
        <div class="bar" @mousedown="pressBar" ref="bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      move: {
        toScreen: 0,
        toLeft: 0,
        canMove: false,
        barRadius: 7
      }
    }
  },
  methods: {
    bindBar: function () {
      document.addEventListener('mouseup', this.barUp)
      document.addEventListener('mousemove', this.barMove)
    },
    clickProgress: function (e) {
      let rect = this.$refs.processContainer.getBoundingClientRect()
      let offSet = Math.min(rect.width, Math.max(0, e.clientX - rect.left))
      this.moveBar(offSet)
    },
    pressBar: function (e) {
      this.move.canMove = true
      this.move.toScreen = e.clientX
      this.move.toLeft = this.$refs.innerProcess.clientWidth
    },
    barMove: function (e) {
      if (!this.move.canMove) {
        return false
      }
      e.preventDefault()
      let curXtoScreen = e.clientX
      let offSet = Math.min(
        this.$refs.processContainer.clientWidth,
        Math.max(0, curXtoScreen - this.move.toScreen + this.move.toLeft)
      )
      this.moveBar(offSet)
    },
    barUp: function () {
      if (this.move.canMove) {
        this.move.canMove = false
      }
    },

    moveBar: function (offSet) {
      this.$refs.innerProcess.style.width = `${offSet}px`
    }
  },
  mounted() {
    this.bindBar()
  }
}
</script>
<style lang="less" scoped>
.processContainer {
  height: 20px;
  width: 1000px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .process {
    height: 30%;
    width: 100%;
    border-radius: 10px;
    border: 2px solid aqua;
    .innerProcess {
      height: 100%;
      width: 100px;
      background: red;
      position: relative;
      .bar {
        position: absolute;
        height: 15px;
        width: 15px;
        right: 0;
        top: 50%;
        transform: translate(50%, -50%) scale(1);
        background: white;
        border-radius: 50%;
        border: 3px solid aqua;
        transition: transform 0.2s ease-in-out;
      }
      .bar:hover {
        transform: translate(50%, -50%) scale(1.2);
        transform-origin: center;
        transition: transform 0.2s ease-in-out;
      }
    }
  }
}
</style>
