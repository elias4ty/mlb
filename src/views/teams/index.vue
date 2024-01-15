<template>
  <Layout class="teams" needBack="/">
    <template #nav>
      <span class="teams-title">玩法介绍</span>
    </template>

    <figure class="mlb-banner" />

    <Tab 
      :tabs="tabs"
      :tabComps="tabComps"
      headerClassName="teams-dig"
      :initTab="index"
    />
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Layout from '@com/layout/index.vue';
import Tab from '@com/tab/index.vue';
import Team from './team.vue';
import Energy from  './energy.vue';

const route = useRoute();
const index = ref(Number(route.params.type) || 0);

const tabs = [
  {
    name: '组队挖矿',
    val: 'team',
    icon: 'icon-team'
  },
  {
    name: '能量基地挖矿',
    val: 'energy',
    icon: 'icon-energy'
  }
];

const tabComps = [Team, Energy];
</script>

<style lang="less">
@import url('@style/var.less');

.teams{
  .teams-title{
    font-size: 15px;
    color: #fff;
    margin-left: 40px;
  }

  .teams-dig{
    font-family: 'mlb';
    font-size: 18px;
    font-weight: bold;
    color: #4d4d4d;
    background-color: @main-bg;

    .tab-item{
      padding: 20px;
    }
    
    .tab-active{
      color: #fff;
      background-color: @tab-bg;
    }

    .icon-team{
      background-image: url('@image/team-tab.png');
    }

    .icon-energy{
      background-image: url('@image/energy-tab.png');
    }
  }
}
</style>