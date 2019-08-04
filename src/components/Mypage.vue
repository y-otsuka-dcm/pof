<template>
    <div class=top>
    <h1>{{ msg }}</h1>
    <h2>これからいろいろ書くよー！</h2>
    </div>
</template>

<script>
export default {
  name: 'Mypage',
  data () {
    return {
      msg: '~RMEL Portfolio~'
    }
  }
}
</script>

<style scoped>
.top {
    background-color:teal
}
</style>
