import type { ProjectDomain, ProjectStatus } from './project.types'

export type VideoSourceType = 'local' | 'youtube' | 'external'

export interface ProjectVideo {
  type: VideoSourceType
  url: string
  thumbnail?: string
  title?: string
  description?: string
  duration?: string
}

export interface ProjectOverview {
  introduction?: string
  purpose?: string
  targetUsers?: string[]
  mainObjective?: string
  howItWorks?: string
  highlights?: string[]
}

export interface KeyChallengeItem {
  title: string
  description?: string
  iconName?: string
}

export interface ProblemStatement {
  title?: string
  mainProblem: string
  existingLimitations?: string[]
  userChallenges?: string[]
  keyChallenges?: KeyChallengeItem[]
  whyItMatters?: string
}

export interface ProjectSolution {
  title?: string
  approach: string
  technicalSolution?: string
  implementationOverview?: string
  howItSolves?: string[]
}

export interface UserPortalItem {
  name: string
  subtitle?: string
  description: string
  image: string
  iconName?: string
  functionalities: string[]
  badgeColor?: string
}

export interface KeyFeatureItem {
  iconName?: string
  title: string
  description: string
}

export interface SystemArchitecture {
  diagramImage?: string
  interactiveDiagram?: boolean
  description?: string
  frontend?: string
  backend?: string
  database?: string
  apis?: string[]
  aiModels?: string[]
  hardwareSensors?: string[]
  workflow?: string[]
}

export interface TechStackItem {
  name: string
  role?: string
  iconName?: string
}

export interface TechStackGroup {
  category:
    | 'Frontend Development'
    | 'Backend Development'
    | 'Database Management'
    | 'Authentication & Security'
    | 'Deployment & Tools'
    | 'AI & Machine Learning'
    | 'Data Analytics'
    | 'Hardware & IoT'
    | string
  items: TechStackItem[]
}

export interface GalleryItem {
  url: string
  caption?: string
  alt?: string
}

export interface DevelopmentStage {
  stepNumber: number
  title: string
  description: string
  status?: 'Completed' | 'In Progress'
}

export interface ContributorItem {
  name: string
  role: string
  image?: string
  portfolioUrl?: string
  status?: 'Confirmed' | 'Pending'
  responsibilities?: string[]
  technicalContributions?: string[]
  technologiesHandled?: string[]
}

export interface ChallengeItem {
  challenge: string
  explanation?: string
  solution: string
  implementationApproach?: string
}

export interface ProjectOutcomes {
  completedFunctionalities?: string[]
  technicalAchievements?: string[]
  testingResults?: string[]
  demonstratedCapabilities?: string[]
  verifiedMetrics?: string[]
}

export interface RelatedResource {
  title: string
  url: string
  type?: string
}

export interface ProjectLinks {
  github?: string
  githubLabel?: string
  liveDemo?: string
  liveDemoLabel?: string
  documentation?: string
  relatedResources?: RelatedResource[]
}

export interface PdfReportData {
  url: string
  title: string
  description?: string
  buttonLabel?: string
  pageCount: number
  pageTitles?: string[]
  downloadFilename?: string
}

export interface ApplicationScreenshotItem {
  image: string
  title: string
  description: string
  badge?: string
}

export interface ModelBenchmarkRow {
  metric: string
  decisionTreeValue: string
  randomForestValue: string
  absoluteDelta: string
  winner: string
  impact: string
}

export interface ModelBenchmarkData {
  title?: string
  sampleSize: string
  baselineModel: {
    name: string
    params: string
    macroF1: string
    defaulterRecall: string
    balancedAccuracy: string
    flawDescription: string
  }
  championModel: {
    name: string
    params: string
    macroF1: string
    defaulterRecall: string
    balancedAccuracy: string
    winningReason: string
  }
  rows: ModelBenchmarkRow[]
  keyTakeaways?: string[]
}

export interface MLVisualizationItem {
  image: string
  title: string
  description: string
  findings?: string[]
}

export interface MLVisualizationCategoryGroup {
  category: string
  categoryDescription?: string
  visualizations: MLVisualizationItem[]
}

export interface CognitiveTaskItem {
  taskNumber: number
  title: string
  category: string
  cognitiveDomain: string
  purpose: string
  stimulus: string
  interaction: string
  scoringMechanism: string
  iconName?: string
}

export interface ProjectObjectiveItem {
  id: number
  title: string
  description: string
  iconName?: string
}

export interface RagWorkflowStep {
  stepNumber: number
  title: string
  description: string
  detail?: string
  iconName?: string
  badge?: string
}

export interface RagWorkflowData {
  userExampleQuery: string
  steps: RagWorkflowStep[]
  whyRagIsUseful: string
  hallucinationNotice: string
}

export interface BisKnowledgeBaseParameter {
  label: string
  value: string
  detail?: string
}

export interface BisKnowledgeBaseData {
  vectorDatabase: string
  collectionName: string
  historicallyReportedRecords: string
  embeddingModel: string
  retrievalMethod: string
  description: string
  parameters: BisKnowledgeBaseParameter[]
  contents: string[]
  auditNotice: string
}

export interface DocumentProcessingData {
  supportedFormats: string[]
  maxFilesPerRequest: number
  maxFileSizeMb: number
  workflowSteps: string[]
  documentIsolationPrinciple: string
  ocrLimitationNotice: string
}

export interface SourceReliabilityStream {
  title: string
  subtitle: string
  description: string
  examples: string[]
  badge: string
}

export interface SourceReliabilityData {
  bisKnowledgeStream: SourceReliabilityStream
  userDocumentStream: SourceReliabilityStream
  conflictResolution: string
  reliabilityPrinciples: {
    title: string
    description: string
  }[]
}

export interface FutureScopeItem {
  id: number
  title: string
  description: string
  status: 'Planned' | 'In Progress'
  iconName?: string
}

export interface ProjectDetails {
  id: string
  slug: string
  title: string
  shortTitle?: string
  subtitle?: string
  category: string
  domain: ProjectDomain
  domains?: (ProjectDomain | string)[]
  status: ProjectStatus
  shortDescription: string
  assetFolderPath: string
  coverImage?: string
  demoVideo?: ProjectVideo
  pdfReport?: PdfReportData
  overview?: ProjectOverview
  problemStatement?: ProblemStatement
  solution?: ProjectSolution
  portals?: UserPortalItem[]
  cognitiveTasks?: CognitiveTaskItem[]
  objectives?: ProjectObjectiveItem[]
  keyFeatures?: KeyFeatureItem[]
  architecture?: SystemArchitecture
  ragWorkflow?: RagWorkflowData
  bisKnowledgeBase?: BisKnowledgeBaseData
  documentProcessing?: DocumentProcessingData
  sourceReliability?: SourceReliabilityData
  futureScope?: FutureScopeItem[]
  techStack: string[]
  techStackGrouped?: TechStackGroup[]
  applicationScreenshots?: ApplicationScreenshotItem[]
  mlVisualizations?: MLVisualizationCategoryGroup[]
  modelBenchmark?: ModelBenchmarkData
  gallery?: GalleryItem[]
  developmentProcess?: DevelopmentStage[]
  contributors?: ContributorItem[]
  teamContributions?: ContributorItem[]
  challenges?: ChallengeItem[]
  outcomes?: ProjectOutcomes
  disclaimer?: string
  links?: ProjectLinks
}
