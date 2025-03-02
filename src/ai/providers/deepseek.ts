import { AIProvider } from "./types";
import { AI_MODELS, AI_CONFIG } from "../config";

/**
 * DeepSeek 提供商实现
 * @implements {AIProvider}
 */
export class DeepSeekProvider implements AIProvider {
  name = "DeepSeek";

  /**
   * 发送聊天请求到 DeepSeek API
   * @param {string} message - 用户消息
   * @returns {Promise<Response>} API 响应
   * @throws {Error} 当 API 请求失败时抛出错误
   */
  async chat(message: string): Promise<Response> {
    const response = await fetch(
      `${import.meta.env.VITE_DEEPSEEK_BASE_URL}/v1/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: AI_MODELS.DEEPSEEK_REASONER,
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
          stream: AI_CONFIG.stream,
          temperature: AI_CONFIG.temperature,
        }),
      }
    );

    return response;
  }
}
