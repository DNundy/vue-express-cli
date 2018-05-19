<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
    <img src="./static/girl.png" alt="">
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue'
    }
  }
}
</script>
<style lang="less">
html{
  height: 100%;
}
</style>
<style lang="scss">
html{
  height: 100%;
}
</style>


