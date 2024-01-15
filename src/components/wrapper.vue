<template>
  <div class="mlb-wrapper">
    <slot />

    <p class="mlb-footer">平台保留对兔嘚萌挖晶石的比例调整权力</p>
  </div>
</template>

<style lang="less">
@import url('@style/var.less');

.mlb-wrapper{
  padding: 0 10px;
  background-color: @tab-bg;
  border: 1px solid @tab-bg;

  .mlb-footer{
    padding: 40px 0;
    color: #42464A;
    font-size: 12px;
    text-align: center;

    &::before{
      content: '-';
      margin-right: 4px;
    }

    &::after{
      content: '-';
      margin-left: 4px;
    }
  }
}
</style>