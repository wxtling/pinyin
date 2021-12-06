<template>
  <Tabs>
    <TabsItem name="读取拼音">
      <template #header>
        <ReadPinyinTextarea v-model="pinyin" />
      </template>
      <ReadPinyin v-model="pinyin" />
    </TabsItem>
    <TabsItem name="声母/韵母">
      <Table />
    </TabsItem>
    <TabsItem name="拼音词汇">
      <template #header>
        <div class="tabs">
          <div
            class="tab-item"
            v-for="(v, k) in 5"
            :class="{ 'tab-select': k == VocabularyIndex }"
            :key="v"
            @click="() => (VocabularyIndex = k)"
          >
            词{{ v }}
          </div>
        </div>
      </template>
      <Vocabulary :index="VocabularyIndex" />
    </TabsItem>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs, TabsItem } from "/@/components/tabs";
import ReadPinyinTextarea from "/@/components/pinyin/ReadPinyinTextarea.vue";
import ReadPinyin from "/@/components/pinyin/ReadPinyin.vue";
import Table from "/@/components/pinyin/Table.vue";
import Vocabulary from "/@/components/pinyin/Vocabulary.vue";

const VocabularyIndex = ref(0);

const pinyin = ref();
</script>

<style>
html,
body,
#app {
  color: #333;
  font-size: 14px;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
<style lang="less" scoped>
.tabs {
  display: flex;
  background-color: #fafafa;
  .tab-item {
    flex: 1;
    text-align: center;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #999;
    transition: all 200ms;
  }
  .tab-select {
    color: #1890ff;
    transform: scale(1.1);
  }
}
</style>
