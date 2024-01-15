<template>
  <figure class="game-dig">
    <div class="game-dig-wrapper" />

    <p v-if="props.count" class="game-dig-count">
      <span class="game-dig-sum">
        累计
        <i class="icon-gold"/>
        0.0000
      </span>

      <span class="game-dig-person">
        <i class="icon-person" />
        1073 人正在挖矿
      </span>
    </p>
    <slot />
  </figure>  
</template>

<script setup>
const props = defineProps({
  count: {
    default: true,
    type: Boolean
  }
});
</script>

<style lang="less">
@import url('@style/var.less');

.game-dig{
  #bg-icon();
  background-image: url('@image/game/dig.png');
  width: 100%;
  height: 186px;
  position: relative;
  padding: 16px 20px;
  box-sizing: border-box;

  .game-dig-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('@image/game/dig-border.png');
    z-index: 1;
    #bg-icon();
    left: 0;
    top: 0;
  }

  .game-dig-count{
    font-size: 12px;
    color: @vice-color;

    .game-dig-sum{
      float: left;

      .icon-gold{
        #icon(13px, 14px; '@image/gold.png');
        opacity: .5;
      }
    }

    .game-dig-person{
      float: right;

      .icon-person{
        #icon(13px; '@image/rabbit3.png');
      }
    }
  }  
}
</style>