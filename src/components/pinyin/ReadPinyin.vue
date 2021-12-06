<template>
  <div class="read-pinyin">
    <div class="item" v-for="v in list" :key="v.name">
      <div class="pinyin-title">
        {{ v.pinyin.initial }} {{ v.pinyin.final }}
      </div>
      <div class="name">{{ v.name }}</div>
      <div class="pinyin-m">
        声：{{ v.pinyin.initial }} ({{ InitialsZH[v.pinyin.initial] }})
      </div>
      <div class="pinyin-m">
        韵：{{ v.pinyin.final }} ({{ rhymeZH[v.pinyin.final] }})
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { pinyin } from "/@/lib/pinyin/lib/index";
import { InitialsZH } from "/@/lib/pinyin/data/Initials-zh";
import { rhymeZH } from "/@/lib/pinyin/data/rhyme-zh";

const props = defineProps({
  modelValue: String as PropType<string | undefined>,
});

const list = computed(() =>
  (props.modelValue || "")
    .split("")
    .filter((n) => n !== "\n")
    .map((v) => ({
      name: v,
      pinyin: pinyin(v),
    }))
);

</script>
<style lang="less" scoped>
.read-pinyin {
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  .item {
    margin-left: 16px;
    margin-bottom: 20px;
    line-height: 1;
  }
  .pinyin-title {
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    font-weight: bold;
    text-align: center;
  }
  .name {
    text-align: center;
    color: #333;
    font-size: 14px;
    line-height: 1.3;
    padding-bottom: 3px;
  }
  .pinyin-m {
    margin-top: 4px;
    font-size: 12px;
    color: #999;
  }
}
</style>
