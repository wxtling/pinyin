<template>
  <div class="tab-box">
    <div class="tabs">
      <div
        class="tab-item"
        v-for="(v, k) in tabs"
        :key="k"
        :class="{ 'tab-select': k == tabIndex }"
        @click="onClicktab(k)"
      >
        {{ v }}
      </div>
    </div>

    <div class="horizontal-scrollbar" ref="horizontalRef">
      <div
        class="horizontal-indicator"
        :style="{
          width: `calc(100% / ${tabs.length})`,
        }"
      ></div>
    </div>

    <div class="slide-wrapper" ref="slideRef">
      <div class="slide-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, provide } from "vue";
import BScroll from "./BScroll";

const tabs = ref<string[]>([]);
const tabIndex = ref(0);

const slideRef = ref<HTMLElement>("" as unknown as HTMLElement);
const horizontalRef = ref<HTMLElement>("" as unknown as HTMLElement);

let slide;
onMounted(() => {
  slide = BScroll(slideRef.value, {
    scrollX: true,
    scrollY: false,
    slide: {
      autoplay: false,
      loop: false,
      startPageXIndex: tabIndex.value,
    },
    momentum: false,
    scrollbar: {
      fade: false,
      customElements: [horizontalRef.value],
    },
    click: true,
  });
  slide.on("slideWillChange", (page) => {
    tabIndex.value = page.pageX;
  });
});

function onClicktab(k: number) {
  if (!slide) return;
  tabIndex.value = k;
  slide.goToPage(k, 0);
}

provide("tabs", tabs.value);
provide("tabIndex", tabIndex.value);
</script>

<style lang="less" scoped>
.tab-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .tabs {
    flex-shrink: 0;
    display: flex;
    .tab-item {
      height: 40px;
      line-height: 40px;
      flex: 1;
      text-align: center;
      color: #666;
    }
    .tab-select {
      font-weight: bold;
      color: #1890ff;
    }
  }

  .horizontal-scrollbar {
    width: 100%;
    height: 2px;
    flex-shrink: 0;
    border-radius: 100px;
    background-color: #fafafa;
    .horizontal-indicator {
      height: 100%;
      width: calc(100% / 3);
      border-radius: 100px;
      background-color: #1890ff;
    }
  }

  .slide-wrapper,
  .slide-content {
    flex: 1;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
