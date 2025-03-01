<template>
  <div class="container">
   <van-nav-bar
      title="首展客服"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />


   <!-- S 内容显示区 -->
   <div class="content">

   </div>
   <!-- E 内容显示区 -->

   <!-- S 操作区 -->
   <div class="operator">
    <div class="chant-input">
      <textarea
        v-model="message"
        rows="1"
        placeholder="输入消息，Shift + Enter 换行"
        @keydown="handleKeydown"
        :disabled="loading"
      />
    </div>
   </div>
   <!-- E 操作区 -->
  </div>
</template>

<script setup lang='ts'>

// 消息
const message = ref('')
</script>
<style lang="scss" scoped>
  @use './index';
</style>