<template>
  <div class="vocabulary">
    <div class="list">
      <div class="item" v-for="(v, k) in lists[index]" :key="k">
        <div class="pinyin">{{ v }}</div>
        <div class="name">{{ k }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { DICT1 } from "/@/lib/pinyin/data//dict1-pinyin";
import { DICT2 } from "/@/lib/pinyin/data//dict2";
import { DICT3 } from "/@/lib/pinyin/data//dict3";
import { DICT4 } from "/@/lib/pinyin/data//dict4";
import { DICT5 } from "/@/lib/pinyin/data//dict5";

const props = defineProps({
  index: {
    type: Number as PropType<number>,
    default: 0,
  },
});

const lists = [DICT1, DICT2, DICT3, DICT4, DICT5];
</script>
<style lang="less" scoped>
.vocabulary {
  padding: 14px 0 50px;
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 0 14px;
      margin-bottom: 14px;

      display: flex;
      flex-direction: column;
      align-items: center;
      .pinyin {
        font-size: 14px;
        line-height: 1.5;
        color: #333;
        text-align: center;
      }

      .name {
        text-align: center;
        color: #999;
        font-size: 14px;
        line-height: 1.3;
        padding-bottom: 3px;
      }
    }
  }
}
</style>
