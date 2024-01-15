<template>
  <section class="mlb-tab">
    <nav class="mlb-tab-header">
      <ul :class="headerClassName" v-col>
        <li 
          v-for="(tab, index) in tabs"
          :key="`tab-${index}`"
          @click="changeTab(index)"
          :value="tab.val"
          :class="{ 'tab-active': curIndex === index, 'tab-item': true }"
        >
          <span>
            <i v-if="tab.icon" :class="`mlb-tab-icon ${tab.icon}`" />
            {{ tab.name }}
          </span>
        </li>
      </ul>
    </nav>

    <section class="mlb-tab-card">
      <keep-alive>
        <component :is="curComponent" />
      </keep-alive>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  tabs: {
    required: true,
    default() {
      return [];
    },
    type: Array
  },
  headerClassName: {
    type: String
  },
  cardClassName: {
    type: String
  },
  tabComps: {
    required: true,
    default() {
      return [];
    },
    type: Array    
  },
  initTab: {
    default: 0,
    type: Number
  }
});
const curComponent = ref(null);
const curIndex = ref(Number(props.initTab));
const vCol = {
  mounted(el) {
    el.style['grid-template-columns'] = '1fr '.repeat(props.tabs.length);
  },
}

onMounted(() => {
  curComponent.value = props.tabComps[props.initTab];  
});

function changeTab(index) {
  curIndex.value = index;
  curComponent.value = props.tabComps[index];
}
</script>

<style lang="less">
@import url('@style/var.less');

.mlb-tab{
  .mlb-tab-header{
    ul{
      display: grid;
      
      li{
        display: inline-block;
        text-align: center;

        .mlb-tab-icon{
          margin-right: 4px;
          opacity: 0.5;

          &.icon-team{
            #icon(20px, '@image/team-tab.png');
          }

          &.icon-energy{
            #icon(20px, '@image/energy-tab.png');
          }
        }
      }

      .tab-active{
        .mlb-tab-icon{
          opacity: 1;
        }
      }
    }

  }
}
</style>