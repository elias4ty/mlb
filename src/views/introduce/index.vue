<template>
  <Layout class="introduce tab-bg" needBack="/">
    <Tab  
      headerClassName="introduce-dig"
      :tabs="tabs"
      :tabComps="tabComps"
      :initTab="index"
    />
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from '@com/layout/index.vue';
import Tab from '@com/tab/index.vue';
import Low from './low.vue';
import Mid from './mid.vue';
import High from './high.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const index = ref(route.params.level || 0);

const tabs = [
  {
    name: '初级介绍',
    val: 'low'
  },
  {
    name: '进阶介绍',
    val: 'mid'
  },
  {
    name: '高阶介绍',
    val: 'high'
  }
];

const tabComps = [Low, Mid, High];
</script>

<style lang="less">
@import url('@style/var.less');

.introduce{
  padding: 0 18px;

  .introduce-dig{
    height: 30px;
    width: 60%;
    background-color: #1A1D22;
    border-radius: 21px;
    padding: 6px;
    margin: 12px auto 0;
    
    .tab-item{
      font-size: 13px;
      color: @vice-color;
      line-height: 30px;
    }

    .tab-active{
      background-color: #252A31;
      color: #fff;
      border-radius: 15px;
    }
  }
}
</style>