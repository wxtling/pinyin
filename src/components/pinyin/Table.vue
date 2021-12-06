<template>
  <div class="table-box">
    <div class="title">声母</div>
    <div class="initial">
      <div class="initial-item" v-for="(v, k) in InitialsZH" :key="v">
        <div class="pinyin-title">
          {{ k }}
        </div>
        <div class="name">{{ v }}</div>
      </div>
    </div>
    <div class="title">韵母</div>
    <div class="initial">
      <div class="initial-item" v-for="(v, k) in rhymeZH" :key="v">
        <div class="pinyin-title">
          {{ k }}
        </div>
        <div class="name">{{ v }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InitialsZH } from "/@/lib/pinyin/data/Initials-zh";
import { rhymeZH } from "/@/lib/pinyin/data/rhyme-zh";
</script>
<style lang="less" scoped>
.table-box {
  padding: 7px;
  padding-bottom: 50px;
}
.title {
  padding-top: 14px;
  padding-bottom: 0;
  padding-left: 14px;
  font-size: 14px;
  line-height: 1.5;
}

.initial {
  display: flex;
  flex-wrap: wrap;
}

.initial-item {
  min-width: calc(100% / 6);
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.6;
  .pinyin-title {
    font-size: 20px;
  }
  .name {
    font-size: 14px;
    color: #666;
  }
}
</style>
