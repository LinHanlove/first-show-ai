import { createAIProvider } from "./providers/factory";

/**
 * 处理 AI 响应
 * @param {string} provider - AI 提供商名称
 * @param {Response} response - API 响应
 * @returns {Promise<string>} 解析后的消息内容
 */
const onAIResponse = async (
  provider: string,
  response: Response
): Promise<string> => {
  console.log(`Received response from AI: ${response}`, provider);

  // 将字符串解析为 JSON
  const data = await response.json();

  switch (provider) {
    case "OpenAi":
      return data.choices[0].message.content;
    case "DeepSeek":
      return data.choices[0].message.content;
    case "Kimi":
      console.log("返回数据--->", data.choices[0].message.content);
      return data.choices[0].message.content;
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
};

/**
 * 发送聊天请求到当前选择的 AI 提供商
 * @async
 * @param {string} message - 用户输入的消息
 * @returns {Promise<string>} AI 的响应内容
 * @throws {Error} 当 AI 请求失败时抛出错误
 */
export const chat = async (message: string): Promise<string> => {
  console.log(`Sending message to AI: ${message}`, import.meta.env);

  const provider = createAIProvider(import.meta.env.VITE_AI_PROVIDER);
  console.log("发送聊天请求到当前选择的 AI 提供商", provider);

  const response = await provider.chat(message);
  return await onAIResponse(provider.name, response);
};
