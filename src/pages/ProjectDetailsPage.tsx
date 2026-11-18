import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetailsBySlug } from '@/data/projectDetails'
import { ProjectBreadcrumb } from '@/components/project-details/ProjectBreadcrumb'
import { ProjectHero } from '@/components/project-details/ProjectHero'
import { ProjectVideo } from '@/components/project-details/ProjectVideo'
import { InteractivePdfViewer } from '@/components/project-details/InteractivePdfViewer'
import { ProjectOverview } from '@/components/project-details/ProjectOverview'
import { ProblemStatement } from '@/components/project-details/ProblemStatement'
import { ProjectSolution } from '@/components/project-details/ProjectSolution'
import { ProjectObjectives } from '@/components/project-details/ProjectObjectives'
import { ProjectPortals } from '@/components/project-details/ProjectPortals'
import { ProjectFeatures } from '@/components/project-details/ProjectFeatures'
import { CognitiveTasksGrid } from '@/components/project-details/CognitiveTasksGrid'
import { ApplicationScreenshots } from '@/components/project-details/ApplicationScreenshots'
import { ModelBenchmarkTable } from '@/components/project-details/ModelBenchmarkTable'
import { MLVisualizations } from '@/components/project-details/MLVisualizations'
import { ProjectArchitecture } from '@/components/project-details/ProjectArchitecture'
import { RagWorkflowTimeline } from '@/components/project-details/RagWorkflowTimeline'
import { BisKnowledgeBase } from '@/components/project-details/BisKnowledgeBase'
import { DocumentUploadProcessing } from '@/components/project-details/DocumentUploadProcessing'
import { SourceReliability } from '@/components/project-details/SourceReliability'
import { FutureScope } from '@/components/project-details/FutureScope'
import { TechnologyStack } from '@/components/project-details/TechnologyStack'
import { ProjectGallery } from '@/components/project-details/ProjectGallery'
import { DevelopmentProcess } from '@/components/project-details/DevelopmentProcess'
import { ProjectContributors } from '@/components/project-details/ProjectContributors'
import { ChallengesSolutions } from '@/components/project-details/ChallengesSolutions'
import { ProjectOutcomes } from '@/components/project-details/ProjectOutcomes'
import { MedicalDisclaimer } from '@/components/project-details/MedicalDisclaimer'
import { ProjectLinks } from '@/components/project-details/ProjectLinks'
import { ProjectCTA } from '@/components/project-details/ProjectCTA'
import { ProjectNotFound } from '@/components/project-details/ProjectNotFound'

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectDetailsBySlug(slug) : undefined

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | RagReon Tech - Software, AI & Automation`
    } else {
      document.title = 'Project Not Found | RagReon Tech'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [project, slug])

  // Handle invalid or unknown project route
  if (!project) {
    return <ProjectNotFound requestedSlug={slug} />
  }

  return (
    <article className="flex flex-col min-h-screen bg-slate-50/40">
      {/* SECTION 1: Breadcrumb Navigation */}
      <ProjectBreadcrumb title={project.shortTitle || project.title} />

      {/* SECTION 2: Project Hero */}
      <ProjectHero project={project} />

      {/* SECTION 3: Project Demo Video */}
      <ProjectVideo video={project.demoVideo} projectTitle={project.title} />

      {/* SECTION 3B: Interactive Power BI Dashboard Report PDF */}
      <InteractivePdfViewer
        pdfReport={project.pdfReport}
        projectTitle={project.title}
      />

      {/* SECTION 4: Project Overview */}
      <ProjectOverview overview={project.overview} />

      {/* SECTION 5: Problem Statement */}
      <ProblemStatement problem={project.problemStatement} />

      {/* SECTION 6: Our Solution */}
      <ProjectSolution solution={project.solution} />

      {/* SECTION 6A: Project Strategic Objectives */}
      <ProjectObjectives
        objectives={project.objectives}
        projectTitle={project.title}
      />

      {/* SECTION 6B: Four Dedicated User Portals */}
      <ProjectPortals portals={project.portals} projectTitle={project.title} />

      {/* SECTION 7: Key Features */}
      <ProjectFeatures features={project.keyFeatures} />

      {/* SECTION 7A: Cognitive Assessment Modules (10 Interactive Tasks) */}
      <CognitiveTasksGrid
        tasks={project.cognitiveTasks}
        projectTitle={project.title}
      />

      {/* SECTION 7B: Application Interface & Features (Dedicated Web App Screenshots) */}
      <ApplicationScreenshots
        screenshots={project.applicationScreenshots}
        projectTitle={project.title}
      />

      {/* SECTION 7C: Official Model Benchmark & Evaluation Table */}
      <ModelBenchmarkTable
        benchmark={project.modelBenchmark}
        projectTitle={project.title}
      />

      {/* SECTION 7D: Machine Learning Analytics & Visualizations Gallery */}
      <MLVisualizations
        mlVisualizations={project.mlVisualizations}
        projectTitle={project.title}
      />

      {/* SECTION 8: System Architecture */}
      <ProjectArchitecture
        architecture={project.architecture}
        assetFolderPath={project.assetFolderPath}
      />

      {/* SECTION 9: Technology Stack */}
      <TechnologyStack
        techStack={project.techStack}
        techStackGrouped={project.techStackGrouped}
      />

      {/* SECTION 9A: RAG Workflow Timeline */}
      <RagWorkflowTimeline
        workflow={project.ragWorkflow}
        projectTitle={project.title}
      />

      {/* SECTION 9B: BIS Knowledge Base & Vector Index */}
      <BisKnowledgeBase
        knowledgeBase={project.bisKnowledgeBase}
        projectTitle={project.title}
      />

      {/* SECTION 9C: Document Upload & Processing Pipeline */}
      <DocumentUploadProcessing
        data={project.documentProcessing}
        projectTitle={project.title}
      />

      {/* SECTION 9D: Source References & Response Reliability */}
      <SourceReliability
        data={project.sourceReliability}
        projectTitle={project.title}
      />

      {/* SECTION 10: Project Screenshots & Gallery */}
      <ProjectGallery gallery={project.gallery} projectTitle={project.title} />

      {/* SECTION 11: Development Process */}
      <DevelopmentProcess stages={project.developmentProcess} />

      {/* SECTION 11B: Future Scope & Planned Development */}
      <FutureScope
        futureScope={project.futureScope}
        projectTitle={project.title}
      />

      {/* SECTION 12: Project Contributors */}
      <ProjectContributors
        contributors={project.contributors}
        projectTitle={project.title}
      />

      {/* SECTION 13: Challenges & Solutions */}
      <ChallengesSolutions challenges={project.challenges} />

      {/* SECTION 14: Project Outcomes */}
      <ProjectOutcomes outcomes={project.outcomes} />

      {/* SECTION 14B: Responsible AI & Medical Disclaimer */}
      <MedicalDisclaimer disclaimer={project.disclaimer} />

      {/* SECTION 15: Project Links */}
      <ProjectLinks links={project.links} projectTitle={project.title} />

      {/* SECTION 16: Final Call to Action */}
      <ProjectCTA projectTitle={project.title} />
    </article>
  )
}

export default ProjectDetailsPage

