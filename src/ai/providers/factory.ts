import { AIProvider } from "./types";
import { OpenAIProvider } from "./openai";
import { KimiProvider } from "./kimi";
import { DeepSeekProvider } from "./deepseek";
import { AI_MODELS, AI_CONFIG } from "../config";
import { prompt } from "../prompt";

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

/**
 * @function 提供ai的请求体
 */
export const getRequestBody = (name, message): any => {
  console.log(`name: ${name}, message: ${message}`);

  const models = function () {
    switch (name) {
      case "Kimi":
        return AI_MODELS.KIMI_MOONSHOT_128K;
      case "DeepSeek":
        return AI_MODELS.DEEPSEEK_REASONER;
      case "OpenAI":
        return AI_MODELS.GPT35;
      default:
        return AI_MODELS.GPT35;
    }
  };
  return {
    model: models(),
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: message },
    ],
    temperature: AI_CONFIG.temperature,
  };
};
