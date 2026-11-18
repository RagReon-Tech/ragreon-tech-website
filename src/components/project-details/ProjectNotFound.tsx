import React from 'react'
import { FolderSearch, ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/common/Button'

interface ProjectNotFoundProps {
  requestedSlug?: string
}

export const ProjectNotFound: React.FC<ProjectNotFoundProps> = ({ requestedSlug }) => {
  return (
    <div className="flex-1 py-16 sm:py-24 bg-slate-50 flex items-center justify-center">
      <div className="container-custom max-w-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 text-[#0066FF] flex items-center justify-center mx-auto shadow-sm">
          <FolderSearch className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            404 • Project Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
            Project Record Not Located
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            We couldn't locate a portfolio project matching{' '}
            {requestedSlug ? (
              <code className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-mono">
                {requestedSlug}
              </code>
            ) : (
              'this address'
            )}
            . Please check the project URL or return to our portfolio directory.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            to="/portfolio"
            variant="primary"
            size="md"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Portfolio
          </Button>
          <Button
            to="/"
            variant="outline"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectNotFound
