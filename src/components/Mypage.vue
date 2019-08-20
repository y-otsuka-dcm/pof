<template>
    <div class=top>
    <h1><img src="../assets/rmel.jpg" class="frame">{{ msg }}</h1>
    <h2>自己紹介</h2>
      <p>大きな事故とかはしたことないです</p>
    <h2>経歴</h2>
      <p></p>
      <p>2017年4月 ドワンゴでエンジニアのアルバイトを始める</p>
      <p>2019年3月 大学卒業に伴いドワンゴを退社</p>
      <p>2019年4月 NTTグループR＆D部門のインフラエンジニアとして勤務</p>
    <h2>スキル</h2>
      <p>・JavaScript(React,Vue)</p>
      <p>・Unity</p>
      <p>・Python</p>
      <p>・AWS、GCP</p>
    </div>
</template>

<script>
export default {
  name: 'Mypage',
  data () {
    return {
      msg: 'RMEL Profile'
    }
  }
}
</script>

<style scoped>
.top {
    background-color:teal;
}

.frame {
  border-radius: 50%;
  width: 80px;
  height: auto;
}
</style>
