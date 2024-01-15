<template>
  <Wrapper>
    <Card 
      title="如何组队挖晶石?"
      content="team-card1"
      more="注：人脸识别未通过的队友会停止挖晶石"
    />

    <Card 
      title="队友如何挖晶石?"
      content="team-card2"
    />

    <Card 
      title="我的兔嘚萌挖晶石"
      content="team-card3"
    />

    <Card 
      title="初阶队伍玩法"
      content="team-card4"
    />

    <Card 
      title="进阶/高阶队伍玩法"
      content="team-card5"
    />  
  </Wrapper>
</template>

<script setup>
import Wrapper from '@com/wrapper.vue';
import Card from './card.vue';
</script>

<style lang="less">
.team-card1{
  background-image: url('@image/team/card1.png');
}
.team-card2{
  background-image: url('@image/team/card2.png');
  height: 166px !important;
}
.team-card3{
  background-image: url('@image/team/card3.png');
}
.team-card4{
  background-image: url('@image/team/card4.png');
  height: 170px !important;
}
.team-card5{
  background-image: url('@image/team/card5.png');
}
</style>