<template>
  <div class="team-card">
    <p 
      v-if="$slots.title || props.title"
      class="team-card-title"
    >
      {{ props.title }}

      <slot name="title"/>
    </p>

    <figure :class="{ 
      'team-card-content': true, 
      [props.content]: true
    }"/>

    <p v-if="$slots.more || props.more" class="team-card-more">
      <slot name="more" />

      {{ props.more }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    default: '',
    type: String
  },
  content: {
    type: String
  },
  more: {
    type: String
  }
})
</script>

<style lang="less">
@import url('@style/var.less');

.team-card{
  margin-top: 30px;

  .team-card-title{
    font-size: 20px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #F9E9C3 0%, #F9D6A3 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'mlb';
    margin-bottom: 22px;
    font-weight: bold;
  }

  .team-card-content{
    height: 200px;
    border: 1px dotted #ccc;
    margin-bottom: 8px;
    #bg-icon();
  }

  .team-card-more{
    color: @vice-color;
    font-size: 12px;
    font-weight: 400;
  }
}
</style>