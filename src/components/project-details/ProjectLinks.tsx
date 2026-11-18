import React from 'react'
import { ExternalLink, FileText, Link as LinkIcon } from 'lucide-react'
import { GitHubIcon } from '@/components/common/SocialIcons'
import type { ProjectLinks as IProjectLinks } from '@/types/project-details.types'

interface ProjectLinksProps {
  links?: IProjectLinks
  projectTitle: string
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ links, projectTitle }) => {
  if (!links) return null

  const hasLinks =
    Boolean(links.github) ||
    Boolean(links.liveDemo) ||
    Boolean(links.documentation) ||
    (Boolean(links.relatedResources) && links.relatedResources!.length > 0)

  if (!hasLinks) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80" id="project-links">
      <div className="container-custom space-y-6">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Project Resources</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Verified Project Links &amp; Documentation
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Explore the public codebase, live deployment, or technical specifications for {projectTitle}.
          </p>
        </div>

        {/* Links Cards */}
        <div className="flex flex-wrap gap-4 pt-2">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 hover:text-[#0066FF] hover:border-blue-300 hover:shadow-md transition-all text-sm font-semibold shadow-xs"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>{links.githubLabel || 'View Source Code'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
            </a>
          )}

          {links.liveDemo && (
            <a
              href={links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0066FF] text-white hover:bg-[#0052CC] hover:shadow-md hover:shadow-blue-500/20 transition-all text-sm font-semibold shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{links.liveDemoLabel || 'Visit Live Application'}</span>
            </a>
          )}

          {links.documentation && (
            <a
              href={links.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 hover:text-[#0066FF] hover:border-blue-300 hover:shadow-md transition-all text-sm font-semibold shadow-xs"
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Technical Documentation</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
            </a>
          )}

          {links.relatedResources?.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 hover:text-[#0066FF] hover:border-blue-300 hover:shadow-md transition-all text-sm font-semibold shadow-xs"
            >
              <LinkIcon className="w-4 h-4 text-cyan-500" />
              <span>{res.title}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectLinks

