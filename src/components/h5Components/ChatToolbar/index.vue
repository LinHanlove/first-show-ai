<template>
  <div class="tool-bar flex items-center">
    <button class="tool-btn" title="选择表情" @click="$emit('emoji')">
      <Icon icon="solar:emoji-funny-square-bold" width="20" />
    </button>
    <button class="tool-btn" title="发送图片" @click="$emit('image')">
      <Icon icon="solar:gallery-add-bold" width="20" />
    </button>
    <button class="tool-btn" title="发送文件" @click="$emit('file')">
      <Icon icon="solar:folder-with-files-bold" width="20" />
    </button>
  </div>
</template>

<script setup lang='ts'>
import { Icon } from '@iconify/vue';

</script>

<style lang="scss" scoped>
  .tool-btn {
    cursor: pointer;
    margin: 0 2px;
    background: transparent;
    online: 0;
    border: 0;
    padding:0;
  }
</style>