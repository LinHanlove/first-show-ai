import { AIProvider } from "./types";
import { AI_MODELS, AI_CONFIG } from "../config";

/**
 * Kimi AI 提供商实现
 * @implements {AIProvider}
 */
export class KimiProvider implements AIProvider {
  name: "Kimi";

  /**
   * 发送聊天请求到 Kimi API
   * @param {string} message - 用户消息
   * @returns {Promise<ReadableStream>} AI 响应流
   * @throws {Error} 当 API 请求失败时抛出错误
   */
  async chat(message: string): Promise<ReadableStream> {
    const response = await fetch(
      `${import.meta.env.VITE_KIMI_BASE_URL}/v1/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
        },
        body: JSON.stringify({
          model: AI_MODELS.KIMI_MOONSHOT_128K,
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

    if (!response.ok) {
      const error = (await response.json()) as { message: string };
      throw new Error(
        `Kimi API Error: ${error.message || response.statusText}`
      );
    }

    return response.body;
  }
}
