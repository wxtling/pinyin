<template>
  <div class="tab-con">
    <div class="tab-con-box">
      <slot name="header" />

      <div class="box" ref="TabItemRef">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, PropType, inject } from "vue";
import BScroll from "./BScroll";
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
});
const tabs = inject<string[]>("tabs");
tabs?.push(props.name);

const TabItemRef = ref<HTMLElement>("" as unknown as HTMLElement);
onMounted(() => {
  BScroll(TabItemRef.value, {
    observeDOM: true,
    scrollbar: true,
  });
});
</script>
<style lang="less" scoped>
.tab-con {
  height: 100%;
  display: inline-block;
  overflow: hidden;
  .tab-con-box {
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    .box {
      flex: 1;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
  }
}
</style>
