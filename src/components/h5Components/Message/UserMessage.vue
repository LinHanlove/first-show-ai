<template>
  <div class="message-group user">
    <div class="avatar">
      <Icon icon="solar:user-bold" width="16" />
    </div>
    <div class="message">
      <div class="message-content">
        <div class="markdown-body" v-html="formattedContent" />
      </div>
      <span class="time">{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

/**
 * 用户消息组件属性
 */
interface Props {
  /** 消息内容 */
  content: string;
  /** 消息时间 */
  time: string;
}

const props = defineProps<Props>();

/**
 * 格式化消息内容为 Markdown
 * @returns {string} 格式化后的 HTML 字符串
 */
const formattedContent = computed(() => {
  return props.content
});

</script>


<style lang="scss" scoped>
.message-group {
  margin-top:20px;
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;

  .avatar {
    margin-left: 6px;
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
    position: relative;
    min-width: 80px;
    .message-content {
      position: relative;
      padding: 4px 8px;
      border-radius: 8px 0 8px 8px;
      max-width: 96%;
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

      ul, ol {
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
}
</style> 