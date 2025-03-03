import { AIProvider } from "./types";
import { getRequestBody } from "./factory";

/**
 * Kimi AI 提供商实现
 * @implements {AIProvider}
 */
export class KimiProvider implements AIProvider {
  name = "Kimi";

  /**
   * 发送聊天请求到 Kimi API
   * @param {string} message - 用户消息
   * @returns {Promise<ReadableStream>} AI 响应流
   * @throws {Error} 当 API 请求失败时抛出错误
   */
  async chat(message: string): Promise<any> {
    // 发送 POST 请求到 Kimi API
    const response = await fetch(
      `${import.meta.env.VITE_KIMI_BASE_URL}/v1/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
        },
        body: JSON.stringify(getRequestBody(this.name, message)),
      }
    );

    // 如果请求失败，抛出错误
    if (!response.ok) {
      const error = (await response.json()) as { message: string };
      throw new Error(
        `Kimi API Error: ${error.message || response.statusText}`
      );
    }

    // 返回响应流
    // return response.body;
    return response;
  }
}
