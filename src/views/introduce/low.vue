<template>
  <Card summary="矿洞是自己的兔嘚萌挖晶石的地方，购买更多的兔嘚萌闪卡能提高挖晶石的速度。"/>

  <Card
    title="自己的兔嘚萌"
    summary="自己的兔嘚萌会自动进入挖矿1队开始挖晶石，也可被派遣去能量基地进行挖晶石。"
    more="注: 如实名认证未通过，自己的兔嘚萌会停止挖晶石"
  />

  <Card
    title="购买兔嘚萌闪卡挖晶石速度"
    summary="兔嘚萌闪卡越多，矿洞预估每日可挖出的晶石越多。"
  /> 

  <Card
    title="购买兔嘚萌闪卡挖晶石速度"
    summary="兔嘚萌闪卡越多，矿洞预估每日可挖出的晶石越多。"
    last
  >
    <Table class="introduce-table">
      <thead>
        <tr>
          <th>矿洞挖矿卡数</th>
          <th>预估每日可挖出晶石</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1张</td>
          <td>
            <i class="icon-gold" />
            0.16666
          </td>
        </tr>
        <tr>
          <td>1张</td>
          <td>
            <i class="icon-gold" />
            0.16666
          </td>
        </tr>
        <tr>
          <td>1张</td>
          <td>
            <i class="icon-gold" />
            0.16666
          </td>
        </tr>
        <tr>
          <td>1张</td>
          <td>
            <i class="icon-gold" />
            0.16666
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
</template>

<script setup>
import Card from './card.vue';
</script>

<style lang="less">
@import url('@style/var.less');

.introduce-table{
  display: block;
  margin-top: 16px;

  thead{
    color: @vice-color;
    font-size: 11px;
    display: block;
  }

  tbody{
    color: @main-color;
    font-size: 13px;
    display: block;
  }

  tr{
    display: flex;
    justify-content: space-around;   
    margin-bottom: 10px;
  }

  .icon-gold{
    #icon(12px; '@image/gold.png');
    margin-right: 2px;
  }
}
</style>