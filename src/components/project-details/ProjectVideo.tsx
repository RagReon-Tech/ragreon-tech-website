import React, { useState } from 'react'
import { Play, VideoOff, Clock, Sparkles } from 'lucide-react'
import type { ProjectVideo as IProjectVideo } from '@/types/project-details.types'

interface ProjectVideoProps {
  video?: IProjectVideo
  projectTitle: string
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      return `https://www.youtube-nocookie.com/embed/${match[2]}?autoplay=1&rel=0`
    }
  } catch {
    return null
  }
  return null
}

export const ProjectVideo: React.FC<ProjectVideoProps> = ({ video, projectTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  // If no video configured, return null (section hides cleanly as per Section 3 & 8)
  if (!video || !video.url) {
    return null
  }

  const isYouTube = video.type === 'youtube' || video.url.includes('youtube.com') || video.url.includes('youtu.be')
  const youtubeEmbedUrl = isYouTube ? getYouTubeEmbedUrl(video.url) : null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="project-video">
      <div className="container-custom space-y-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demonstration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            {video.title || 'Project Demonstration Video'}
          </h2>
          <p className="text-sm text-slate-600">
            {video.description ||
              `Watch the live walkthrough showcasing the technical workflow of ${projectTitle}.`}
          </p>
        </div>

        {/* 16:9 Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-2xl">
            {!isPlaying ? (
              /* Video Poster / Thumbnail with Large Centered Play Button */
              <div className="w-full h-full relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={`${projectTitle} Video Thumbnail`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Ambient Dark Video Placeholder */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#060B18] via-[#0B132B] to-[#111C3D] select-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                      RagReon Tech Demo
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white text-center max-w-md">
                      {projectTitle}
                    </div>
                  </div>
                )}

                {/* Duration Badge if available */}
                {video.duration && (
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-slate-200 border border-slate-700/60 flex items-center gap-1.5 shadow-md">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{video.duration}</span>
                  </div>
                )}

                {/* Large Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 group-hover:bg-slate-950/40 transition-colors">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsPlaying(true)
                    }}
                    className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:bg-[#0052CC] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                    aria-label="Play project demonstration video"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white fill-current" />
                  </button>
                </div>
              </div>
            ) : isYouTube && youtubeEmbedUrl ? (
              /* Embedded YouTube Player */
              <iframe
                src={youtubeEmbedUrl}
                title={`${projectTitle} Demo Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              /* Local HTML5 MP4 Video Player */
              <video
                src={video.url}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={video.url} type="video/mp4" />
                <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm gap-2">
                  <VideoOff className="w-6 h-6" />
                  <span>Your browser does not support the video tag.</span>
                </div>
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectVideo

