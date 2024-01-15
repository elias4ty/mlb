<template>
  <Wrapper>
    <Card 
      title="什么是能量基地?"
      content="energy-card1"
    />

    <Card 
      title="在能量基地挖晶石?"
      content="energy-card2"
    />
  </Wrapper>
</template>

<script setup>
import Wrapper from '@com/wrapper.vue';
import Card from './card.vue';
</script>

<style lang="less">
.energy-card1{
  background-image: url('@image/energy/card1.png');
  height: 160px !important;
}
.energy-card2{
  background-image: url('@image/energy/card2.png');
  height: 151px !important;
}
</style>