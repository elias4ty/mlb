<template>
  <section :class="{'introduce-card':true, 'introduce-card-last': last}">
    <p 
      v-if="$slots.title || props.title"
      class="introduce-card-title"
    >
      {{ props.title }}

      <slot name="title" />
    </p>

    <summary v-if="props.summary">{{ props.summary }}</summary>

    <p v-if="props.more" class="introduce-card-more">{{ props.more }}</p>

    <slot />
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  summary: {
    type: String
  },  
  more: {
    type: String
  }, 
  last: {
    default: false,
    type: Boolean
  }
})
</script>

<style lang="less">
@import url('@style/var.less');

.introduce-card{
  background-color: #131619;
  border-radius: 10px;
  margin-top: 16px;
  padding: 23px;

  &.introduce-card-last{
    margin-bottom: 50px;
  }

  .introduce-card-title{
    font-size: 16px;
    font-family: 'mlb';
    font-weight: bold;
    color: @main-color;
    margin-bottom: 10px;
  }

  summary{
    font-size: 13px;
    color: @main-color;
    line-height: 19px;
  }

  .introduce-card-more{
    margin-top: 10px;
    font-size: 10px;
    color: @vice-color;
  }
}

</style>
