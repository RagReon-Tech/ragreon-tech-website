import React from 'react'
import {
  Activity,
  AlertTriangle,
  Award,
  BarChart2,
  BarChart3,
  Brain,
  BrainCircuit,
  Calculator,
  Camera,
  Check,
  CheckSquare,
  Clock,
  Code,
  Code2,
  Cpu,
  Database,
  Eye,
  FileCheck,
  FileCode,
  FileSpreadsheet,
  FileText,
  Layers,
  Layout,
  LayoutDashboard,
  Lock,
  Package,
  Radio,
  Scale,
  ScanEye,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Workflow,
  Zap,
} from 'lucide-react'

interface ServiceIconProps {
  name?: string
  className?: string
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Activity':
      return <Activity className={className} />
    case 'AlertTriangle':
      return <AlertTriangle className={className} />
    case 'Award':
      return <Award className={className} />
    case 'BarChart2':
      return <BarChart2 className={className} />
    case 'BarChart3':
      return <BarChart3 className={className} />
    case 'Brain':
      return <Brain className={className} />
    case 'BrainCircuit':
      return <BrainCircuit className={className} />
    case 'Calculator':
      return <Calculator className={className} />
    case 'Camera':
      return <Camera className={className} />
    case 'Check':
      return <Check className={className} />
    case 'CheckSquare':
      return <CheckSquare className={className} />
    case 'Clock':
      return <Clock className={className} />
    case 'Code':
      return <Code className={className} />
    case 'Code2':
      return <Code2 className={className} />
    case 'Cpu':
      return <Cpu className={className} />
    case 'Database':
      return <Database className={className} />
    case 'Eye':
      return <Eye className={className} />
    case 'FileCheck':
      return <FileCheck className={className} />
    case 'FileCode':
      return <FileCode className={className} />
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} />
    case 'FileText':
      return <FileText className={className} />
    case 'Layers':
      return <Layers className={className} />
    case 'Layout':
      return <Layout className={className} />
    case 'LayoutDashboard':
      return <LayoutDashboard className={className} />
    case 'Lock':
      return <Lock className={className} />
    case 'Package':
      return <Package className={className} />
    case 'Radio':
      return <Radio className={className} />
    case 'Scale':
      return <Scale className={className} />
    case 'ScanEye':
      return <ScanEye className={className} />
    case 'Search':
      return <Search className={className} />
    case 'Server':
      return <Server className={className} />
    case 'ShieldAlert':
      return <ShieldAlert className={className} />
    case 'ShieldCheck':
      return <ShieldCheck className={className} />
    case 'Sliders':
      return <Sliders className={className} />
    case 'Target':
      return <Target className={className} />
    case 'Terminal':
      return <Terminal className={className} />
    case 'TrendingUp':
      return <TrendingUp className={className} />
    case 'Workflow':
      return <Workflow className={className} />
    case 'Zap':
      return <Zap className={className} />
    case 'Sparkles':
    default:
      return <Sparkles className={className} />
  }
}

export default ServiceIcon

