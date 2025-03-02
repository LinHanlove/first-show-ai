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
      <template v-for="(msg, index) in messageList" :key="index">
        <UserMessage
          v-if="msg.type === 'user'"
          :content="msg.content"
          :time="msg.time"
        />
        <AiMessage
          v-else
          :content="msg.content"
          :time="msg.time"
          :loading="loading && index === messages.length - 1"
        />
      </template>
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
        />
      </div>
      <div class="send flex items-center justify-between">
        <div class="tool-bar">
          <ChatToolbar/>
        </div>
        <div class="send-btn flex items-center justify-center" @click="onSend">
          <van-icon name="guide-o" color="#fff" />
        </div>
      </div>
    </div>
    <!-- E 操作区 -->
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import AiMessage from '@/components/h5Components/Message/AiMessage.vue'
import UserMessage from '@/components/h5Components/Message/UserMessage.vue'
import ChatToolbar from '@/components/h5Components/ChatToolbar/index.vue'
// 消息
const message = ref("");

const messageList = ref([
  {
    type: 'ai',
    content: '你好！我是首展客服',
    time: new Date().toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  },
  {
    type: 'user',
    content: '你好！我是首展客服',
    time: new Date().toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }
]);

/**
 * @function 点击发送消息
 */
const onSend = () =>{
  if(message.value === '') return;
  messageList.value.push({
    type: 'user',
    content: message.value,
    time: new Date().toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  });
  message.value = '';
  // 模拟发送消息
  setTimeout(() => {
    messageList.value.push({
      type: 'ai',
      content: '你好！我是首展客服',
      time: new Date().toLocaleTimeString('zh-CN', { 
        hour: '2-digit',
         minute: '2-digit' 
      })
    });
  }, 1000);

}

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>