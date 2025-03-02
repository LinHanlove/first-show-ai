import { AI_NAME_TYPE } from "../type";

/**
 * AI 提供商接口
 * 定义了所有 AI 提供商必须实现的方法
 */
export interface AIProvider {
  /** 提供商名称 */
  name: string;

  /**
   * 发送聊天消息并获取响应
   * @param {string} message - 用户输入的消息
   * @returns {Promise<string>} AI 的响应内容
   */
  chat(message: string): Promise<any>;
}

export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
  }>;
}

export interface DeepSeekResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
  }>;
}
