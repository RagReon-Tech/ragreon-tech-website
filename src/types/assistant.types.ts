export interface ProjectCardData {
  id: string
  slug: string
  title: string
  description: string
  category: string
  domain: string
  status: 'Completed' | 'In Progress'
  techStack: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
  contributorsText?: string
}

export interface ChatHistoryItem {
  role: 'user' | 'assistant'
  text: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
  projectCards?: ProjectCardData[]
  isError?: boolean
  canRetry?: boolean
}

export interface ChatRequestPayload {
  message: string
  conversationHistory?: ChatHistoryItem[]
  conversationId?: string
  clientTimestamp?: number
}

export interface ChatResponsePayload {
  success: boolean
  reply: string
  suggestions?: string[]
  projectCards?: ProjectCardData[]
  error?: string
}

export interface SuggestedQuestion {
  id: string
  text: string
}
