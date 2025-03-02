import { AIProvider } from "./types";
import { OpenAIProvider } from "./openai";
import { KimiProvider } from "./kimi";
import { DeepSeekProvider } from "./deepseek";

/**
 * 创建 AI 提供商实例
 * @param {string} provider - AI 提供商名称
 * @returns {AIProvider} AI 提供商实例
 * @throws {Error} 当提供商不存在时抛出错误
 */
export const createAIProvider = (provider: string): AIProvider => {
  switch (provider) {
    case "OpenAI":
      return new OpenAIProvider();
    case "Kimi":
      return new KimiProvider();
    case "DeepSeek":
      return new DeepSeekProvider();
    default:
      throw new Error(`Unknown AI provider: ${provider}`);
  }
};
