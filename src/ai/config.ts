/**
 * 支持的 AI 模型列表
 * @type {Record<string, string>}
 */
export const AI_MODELS = {
  GPT35: "gpt-3.5-turbo",
  GPT4: "gpt-4",
  KIMI_MOONSHOT_128K: "moonshot-v1-128k",
  DEEPSEEK_REASONER: "deepseek-reasoner",
} as const;

/**
 * AI 全局配置
 */
export const AI_CONFIG = {
  /** 是否展示流式输出 */
  stream: true,
  /** 当前使用的 AI 提供商 */
  provider: import.meta.env.VITE_AI_PROVIDER || "openai",
  /** 温度参数，控制响应的随机性 */
  temperature: 0.7,
  /** 最大令牌数 */
  maxTokens: 1000,
  /** 系统提示词 */
  systemPrompt: "你是一个有帮助的AI助手。",
} as const;

/**
 * 聊天消息接口
 */
export interface ChatMessage {
  /** 消息角色：系统/用户/助手 */
  role: "system" | "user" | "assistant";
  /** 消息内容 */
  content: string;
}
