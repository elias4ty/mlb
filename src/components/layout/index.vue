<template>
  <section id="mlb-layout" :class="bg">
    <i v-if="needBack" id="goback" @click="back" />

    <nav v-if="$slots.nav" id="mlb-header">
      <p class="mlb-header-wrapper" @click="back">
        <slot name="nav" />
      </p>
    </nav>

    <main id="mlb-main">
      <slot />
    </main>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  bg: {
    default: 'main-bg',
    type: String
  },
  needBack: {
    default: true,
    type: [Boolean, String]
  }
})

function back() {
  router.push(props.needBack);
}
</script>

<style lang="less">
@import '@style/var.less';

#mlb-layout{
  height: 100%;
  overflow-y: auto;
  position: relative;
  
  #goback{
    #icon(15px; '@image/back.png');
    position: absolute;
    top: 27px;
    left: 18px;    
  }

  &.main-bg{
    background-color: @main-bg;
  }

  &.tab-bg{
    background-color: @tab-bg;
  }

  #mlb-header{
    height: 50px;
    position: relative;

    .mlb-header-wrapper {
      position: absolute;
      bottom: 6px;
      left: 0;
      right: 0;
    }
  }
}
</style>