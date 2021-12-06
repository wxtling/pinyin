<template>
  <div class="textarea-box">
    <textarea
      class="textarea"
      rows="3"
      placeholder="请输入汉字"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
const props = defineProps({
  modelValue: String as PropType<string | undefined>,
});
const emit = defineEmits(["update:modelValue"]);

function onInput(e) {
  emit("update:modelValue", e.target.value);
}

</script>
<style lang="less" scoped>
.textarea-box {
  padding: 14px;
  background: #ffffff;
  position: relative;
  z-index: 100;
  .textarea {
    width: 100%;
    height: auto;
    line-height: 1.5;
    min-height: 32px;
    overflow: auto;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
    resize: none;
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 8px 11px;
    color: #000000;
    font-size: 14px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    background-color: #ffffff;
    -webkit-tap-highlight-color: transparent;
    &:focus {
      outline: 0;
      border-color: #40a9ff;
      border-right-width: 1px !important;
      box-shadow: 0 0 0 2px #1890ff33;
    }
    &:hover {
      border-color: #40a9ff;
      border-right-width: 1px !important;
    }
  }
}
</style>
