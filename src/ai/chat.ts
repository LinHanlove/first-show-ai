import { createAIProvider } from "./providers/factory";
import { DeepSeekResponse, OpenAIResponse } from "./providers/types"; // 确保导入响应类型

/**
 * 处理 AI 响应
 * @param {string} provider - AI 提供商名称
 * @param {Response} response - API 响应
 * @returns {Promise<string>} 解析后的消息内容
 */
const handleAIResponse = async (
  provider: string,
  response: Response
): Promise<string> => {
  if (!response.ok) {
    const error = (await response.json()) as { message: string };
    throw new Error(
      `${provider} API Error: ${error.message || response.statusText}`
    );
  }

  const data = await response.json();

  switch (provider) {
    case "openai":
      const openAIData = data as OpenAIResponse;
      return openAIData.choices[0].message.content;

    case "deepseek":
      const deepSeekData = data as DeepSeekResponse;
      return deepSeekData.choices[0].message.content;

    default:
      const defaultData = data as DeepSeekResponse;
      return defaultData.choices[0].message.content;
  }
};

/**
 * 发送聊天请求到当前选择的 AI 提供商
 * @async
 * @param {string} message - 用户输入的消息
 * @returns {Promise<string>} AI 的响应内容
 * @throws {Error} 当 AI 请求失败时抛出错误
 */
export const chatCompletion = async (message: string): Promise<string> => {
  const provider = createAIProvider(import.meta.env.VITE_AI_PROVIDER);
  const response = await provider.chat(message);
  return await handleAIResponse(provider.name, response); // 使用通用处理函数
};
