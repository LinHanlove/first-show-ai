<template>
  <div class="message-group">
    <div class="avatar" :class="{ 'animate-pulse': loading }">
      <Icon v-if="!loading" icon="fluent:bot-24-filled" width="16" />
      <Icon
        v-else
        icon="svg-spinners:pulse-3"
        class="text-blue-500"
        width="16"
      />
    </div>
    <div class="message">
      <div v-if="loading" class="message-content loading">
        <span class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div v-else class="message-content">
        <div class="markdown-body" v-html="formattedContent" />
      </div>
      <span class="time">{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

/**
 * 用户消息组件属性
 */
interface Props {
  /** 消息内容 */
  content: string;
  /** 消息时间 */
  time: string;
  /** 是否正在加载 */
  loading: boolean;
}

const props = defineProps<Props>();

/**
 * 格式化消息内容为 Markdown
 * @returns {string} 格式化后的 HTML 字符串
 */
const formattedContent = computed(() => {
  return props.content;
});

/**
 * 复制消息内容到剪贴板
 * @async
 * @returns {Promise<void>}
 */
const copyContent = async () => {
  return props.content;
};
</script>

<style lang="scss" scoped>
.message-group {
  width: 100%;
  margin-top: 20px;
  display: flex;

  .avatar {
    margin-right: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid;
    border-color: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .message {
    flex: 1;
    position: relative;

    .message-content {
      position: relative;
      padding: 4px 8px;
      border-radius: 0 8px 8px 8px;
      border: 1px solid;
      border-color: #e5e7eb;
      background: $white;
      box-shadow: 0 1px 2px $gray-4;
    }

    .markdown-body {
      font-size: 14px;
      line-height: 1.5;

      p {
        margin: 0;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;
        }
      }

      pre {
        margin: 8px 0;
        padding: 12px;
        border-radius: 8px;
        background-color: #f3f4f6;
        overflow-x: auto;
        code {
          font-size: 12px;
        }
      }

      code {
        padding: 2px 4px;
        border-radius: 4px;
        background-color: #f3f4f6;
        font-size: 14px;
      }

      ul,
      ol {
        padding-left: 24px;
        margin: 8px 0;
        li {
          margin-bottom: 8px;
        }
      }

      a {
        color: #3490dc;
        &:hover {
          text-decoration: underline;
        }
      }

      blockquote {
        padding-left: 12px;
        border-left: 4px solid;
        border-color: #e5e7eb;
        margin: 8px 0;
        color: #6b7280;
      }
    }

    .time {
      position: absolute;
      bottom: -20px;
      right: 20px;
      font-size: 10px;
      opacity: 60%;
    }
  }

  .typing-dots {
    display: inline-flex;
    gap: 4px;

    span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #d1d5db; 
      animation: typing 1.4s infinite both;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }

  @keyframes typing {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }
}
</style>
