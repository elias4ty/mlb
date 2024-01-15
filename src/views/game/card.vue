<template>
  <div class="game-card">
    <nav v-if="props.title || $slots.title" class="game-card-title">
      <i :class="{ [props.icon]: true }" />
      {{ props.title }}

      <slot name="title" />

      <span v-if="$slots.titleMore" class="game-card-title-more">
        <slot name="titleMore" />
      </span>
    </nav>

    <slot />

    <section v-if="$slots.more" class="game-card-more">
      <slot name="more" />
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  icon: {
    type: String,
    default: 'game-card-title-icon'
  }
});
</script>

<style lang="less">
@import url('@style/var.less');

.game-card{
  position: relative;
  padding-top: 18px;

  .game-card-title{
    font-size: 20px;
    margin-bottom: 8px;
    color: #fff;
    font-family: 'mlb';
    padding: 0 14px;

    .game-card-title-icon{
      #icon(14px, 20px; '@image/dig.png');
      margin-right: 4px;
    }

    .game-card-title-more{
      float: right;
    }
  }

  .game-card-more{
    background-color: #22242d;
    padding: 12px;
    font-size: 13px;
    color: @vice-color;
    height: 30px;
  }
}
</style>