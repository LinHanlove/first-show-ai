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
          :loading="loading && index === messageList.length - 1"
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
          <ChatToolbar />
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
import { Icon } from "@iconify/vue";
import AiMessage from "@/components/h5Components/Message/AiMessage.vue";
import UserMessage from "@/components/h5Components/Message/UserMessage.vue";
import ChatToolbar from "@/components/h5Components/ChatToolbar/index.vue";
import { chat } from "@/ai/chat.ts";

// 消息
const message = ref("");

const loading = ref(false);

const messageList = ref([
  {
    type: "ai",
    content: "你好！我是首展客服",
    time: new Date().toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
]);

/**
 * @function 点击发送消息
 */
const onSend = async () => {
  if (message.value === "") return;
  const content = message.value;
  messageList.value.push({
    type: "user",
    content: message.value,
    time: new Date().toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  message.value = "";

  try {
    loading.value = true;

    // 添加一个空的 AI 消息占位符
    messageList.value.push({
      type: 'ai',
      content: '',
      time: new Date().toLocaleTimeString('zh-CN', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    });
    
    const response = await chat(content);
    console.log("接收消息--->", response);
    messageList.value[messageList.value.length - 1].content = response; // 更新最后一条 AI 消息
   
  } catch (error) {
    console.error("Chat error:", error);
    messageList.value.push({
      type: "ai",
      content: "抱歉，发生了一些错误，请稍后再试。",
      time: new Date().toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
