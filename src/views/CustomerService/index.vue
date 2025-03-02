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
      
      <!-- 内容区域 -->
    </div>
    <!-- E 内容显示区 -->

    <!-- S 操作区 -->
    <div class="operator box-border">
      <div class="chant-input box-border">
        <van-field
          class="message-input"
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="给first-ai发送消息"
          @input="handleInput"
        />
      </div>
      <div class="send flex items-center justify-between">
        <div></div>
        <div class="send-btn flex items-center justify-center" @click="send">
          <van-icon name="guide-o" color="#fff" />
        </div>
      </div>
    </div>
    <!-- E 操作区 -->
  </div>
</template>

<script setup lang="ts">
// 消息
const message = ref("");

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>