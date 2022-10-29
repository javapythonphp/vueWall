<template>
  <div class="testContainer">
    <my-progress></my-progress>
  </div>
</template>
<script>
import MyProgress from '../components/MyPlayer/MyProgress.vue'
export default {
  components: {
    MyProgress: MyProgress
  }
}
</script>
<style scoped>
.testContainer {
  height: 500px;
  width: 1000px;
  margin-left: 100px;
  margin-top: 100px;
}
</style>
