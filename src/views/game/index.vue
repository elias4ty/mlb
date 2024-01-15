<template>
  <Layout class="game" :needBack="false">
    <template #nav>
        <span class="game-main-title">兔嘚萌闪卡</span>
        <span class="game-second-title">商业版权</span>
        <i class="icon-search" />
    </template>

    <figure class="mlb-banner">
      <p class="game-banner"><i /></p>
    </figure>

    <div class="game-info">
      <div class="game-info-btn">
        <p>
          <i class="icon-gold">0.00000</i>
          <p>我的晶石</p>
        </p>
      </div>

      <div class="game-info-more">
        晶石可开启兔嘚萌能量基地
        <span><i class="icon-gold"/> 0/天</span>
      </div>
    </div>

    <div class="game-main">
      <div class="game-main-person">
        <figure class="game-my-friend">
          <i class="game-my-icon" />
          <p>0</p>
          <p>我的好友</p>
        </figure>

        <figure class="game-my-self">
          <i class="game-my-icon" />
          <p>0</p>
          <p>我的兔嘚萌</p>
        </figure>        
      </div>

      <Card
        title="初阶挖矿"
      >
        <template #titleMore>
          <span class="game-more" @click="go('/introduce/0')">初阶挖矿<i class="game-icon-go"/></span>
        </template>

        <Dig>
          <ul class="game-dig-list">
            <li>
              <p>+0.000</p>
              <i />
            </li>
            <li>
              <p>+0.000</p>
              <i />
            </li>
            <li>
              <p>+0.000</p>
              <i />
            </li>
          </ul>

          <div class="game-dig-progress">
            <p></p>
            <span>升级进度 20%</span>
          </div>
        </Dig>

        <template #more>
          <span class="game-more-left">矿洞 lv.1</span>
          <span class="game-more-right">矿洞 lv.1</span>
        </template>
      </Card>

      <p class="game-btn">
        <figure class="game-btn-buycard" @click="brigeUni('intoCardDetail')">
          <span>买兔嘚萌卡挖晶石</span>
        </figure>
      </p>

      <Card
        title="进阶挖矿"
      >
        <template #titleMore>
          <span class="game-more" @click="go('/introduce/1')">进阶挖矿<i class="game-icon-go"/></span>
        </template>

        <Dig>
          <ul class="game-dig-list">
            <li>
              <p>+0.000</p>
              <i />
            </li>
            <li>
              <p>+0.000</p>
              <i />
            </li>
            <li>
              <p>+0.000</p>
              <i />
            </li>
          </ul>
        </Dig>

        <template #more>
          <span class="game-more-left">矿洞 lv.1</span>
          <span class="game-more-right">
            <i class="icon-gold"/> 0/天
          </span>
        </template>
      </Card>

      <p class="game-btn">
        <figure class="game-btn-friend" @click="brigeUni('intoInvite')">
          <span>邀请好友组队挖晶石</span>
        </figure>
      </p>

      <Card
        title="高阶挖矿"
      >
        <template #titleMore>
          <span class="game-more" @click="go('/introduce/2')">高阶挖矿<i class="game-icon-go"/></span>
        </template>

        <Dig>
          <section class="game-authen">
            <div class="game-authen-wrapper">
              <p>实名认证后即可继续挖晶石</p>
              <button @click="brigeUni('intoRealName')">去实名认证</button>
            </div>
          </section>
        </Dig>

        <template #more>
          <span class="game-more-left">挖矿 2 队</span>
          <span class="game-more-right">考核剩余时间 14 天</span>
        </template>
      </Card>

      <Card>
        <Dig :count="false">
          <section class="game-progress">
            <p class="game-progress-tip">
              挖矿1队挖<i class="icon-gold"/>150 即可开启 >
            </p>

            <p class="game-progress-wrap">
              <i class="game-progress-bar"></i>
              <span>39.176</span>
            </p>
          </section>
        </Dig>

        <template #more>
          <span class="game-more-left">挖矿 3 队</span>
          <span class="game-more-right">考核剩余时间 14 天</span>
        </template>
      </Card>  
      
      <Wrapper>
        <img src="@image/game/share.png" class="game-share" alt="share" />
      </Wrapper>
    </div>
  </Layout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Layout from '@com/layout/index.vue';
import Wrapper from '@com/wrapper.vue';
import Card from './card.vue';
import Dig from './dig.vue';

const router = useRouter();

function go(path) {
  router.push(path);
}

function brigeUni(name) {
  if(uni) {
    uni.postMessage({
      data: {
        action: name,
      }
    });

    console.log(`${name} is be called`);
  } else {
    console.warn('[uni] is not import!');
  }
}
</script>

<style lang="less">
@import url('@style/var.less');

.game{
  #mlb-header{
    background-color: #fff;
  }

  .mlb-header-wrapper{
    margin-left: 18px;
    letter-spacing: 1px;
    
    .game-main-title{
      font-size: 20px;
      font-weight: bold;
      font-family: 'mlb';
      color: @main-bg;
      margin-right: 18px;
    }

    .game-second-title{
      font-size: 16px;
      color: #989898;
    }

    .icon-search{
      #icon(14px; '@image/search.png');
      position: absolute;
      right: 18px;
      bottom: 4px;
    }
  }

  .game-banner{
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
    width: 100%;

    i{
      #icon(80px, 25px;'@image/guide.png');
    }
  }

  .game-info{
    background-color: #151819;
    margin-bottom: 16px;
    padding: 0 10px;
    position: relative;
    letter-spacing: 1px;

    .game-info-btn{
      background-image: url('@image/btn1.png');
      #bg-icon();
      height: 83px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      color: #eae1c8;

      .icon-gold{
        &::before{
          content: '';
          #icon(20px; '@image/gold.png';@va: baseline);
          margin-right: 4px;
        }

        color: #fff;
        font-size: 26px;
        font-weight: bold;
        font-family: DIN;
      }
    }

    .game-info-more{
      font-size: 12px;
      color: #68686A;
      padding: 8px 0;
      
      span{
        float: right;
        color: @vice-color;

        .icon-gold{
          #icon(10px, 11px; '@image/gold.png';@va: baseline);
          margin-right: 2px;
          opacity: 0.5;
        }
      }
    }
  }

  .game-main{
    background-color: #31333e;
    height: 1000px;

    .game-main-person{
      display: flex;
      justify-content: space-around;
      padding: 35px 14px 0;
      margin-bottom: 30px;

      figure{
        background: linear-gradient(#242930, #1F212A);
        box-shadow: 0px 1px 0px 0px #43454E;
        border-radius: 10px;
        color: #fff;
        position: relative;
        padding: 8px 18px 8px 80px;

        p:nth-child(2){
          font-size: 20px;
          line-height: 24px;
          font-weight: bold;
          margin-bottom: 4px;
        }

        p:last-child{
          font-size: 12px;
          line-height: 14px;
        }
      }
    }

    .game-my-icon{
      content: '';
      height: 80px;
      width: 70px;
      #bg-icon();
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .game-my-friend i {
      background-image: url('@image/rabbit1.png');
    }

    .game-my-self i{
      background-image: url('@image/rabbit2.png');
    }

    .game-more{
      border-radius: 4px;
      border: 1px solid @vice-color;
      padding: 2px 4px;
      font-size: 12px;
      color: @vice-color;
      font-family: PingFangSC;
    }

    .game-icon-go{
      #icon(4px, 6px; '@image/go.png');
      margin-left: 2px;
    }
  }

  .game-dig-progress{
    position: absolute;
    left: 10px;
    right: 0;
    bottom: 10px;
    background-color: #000;
    font-size: 10px;
    color: #8C8F97;
    line-height: 20px;
    height: 20px;

    p{
      position: absolute;
      background-color: #414656;
      left: 0;
      width: 20%;
      height: 100%;
    }

    span{
      position: absolute;
      left: 6px;
    }
  }

  .game-dig-list{
    position: absolute;
    bottom: 30%;
    display: flex;
    justify-content: space-around;
    width: 80%;

    li{
      width: 40px;

      p{
        font-size: 10px;
        color: #fff;
        margin-bottom: 4px;
      }

      i{
        #icon(26px, 38px; '@image/rabbit4.png');
        display: block;
        margin: 0 auto;
      }
    }
  }

  .game-more-left{
    float: left;
    line-height: 30px;
  }

  .game-more-right{
    float: right;
    line-height: 30px;
    color: @vice-color;

    .icon-gold{
      #icon(10px, 11px; '@image/gold.png';@va: baseline);
      margin-right: 2px;
      opacity: 0.5;
    }
  }

  .game-authen{
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
    
    .game-authen-wrapper{
      p{
        font-size: 13px;
        color: #fff;
        margin-bottom: 10px;
      }

      button{
        font-size: 12px;
        background: linear-gradient(180deg, #E6DBB6 0%, #D9BC8C 100%);
        box-shadow: inset 0px -2px 0px 0px #B69477;
        border-radius: 6px;
        padding: 10px 18px;
        color: #574025;
        text-align: center;
        display: block;
        margin: 0 auto;
        width: 70%;
      }
    }

  }

  .game-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: #22242d;

    figure{
      width: 90%;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-family: 'mlb';
      font-weight: bold;
      #bg-icon();
    }

    .game-btn-buycard{
      background-image: url('@image/game/buycard.png');
      color: #1E1F36;
    }

    .game-btn-friend{
      background-image: url('@image/game/friend.png');
      color: #B15D00;
    }
  }

  .game-progress{
    height: 100%;
    z-index: 0;
    position: relative;

    .game-progress-tip{
      color: @vice-color;
      font-size: 16px;
      font-weight: bold;
      line-height: 80px;

      .icon-gold{
        #icon(14px; '@image/gold.png');
        margin: 0 4px;
      }      
    }

    .game-progress-wrap{
      width: 60%;
      background: #262A31;
      border-radius: 14px;
      opacity: 0.85;
      border: 1px solid #363B4F;
      padding: 4px 10px;
      position: relative;

      .game-progress-bar{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, #FEEA73 0%, #FFA105 100%);
        border-radius: 14px;
        width: 20%;
      }

      span{
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        position: relative;
      }
    }
  }

  .game-share{
    width: 100%;
  }
}
</style>