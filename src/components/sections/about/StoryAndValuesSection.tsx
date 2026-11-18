import React from 'react'
import { Lightbulb, Users, ShieldCheck, Target } from 'lucide-react'
import { Card } from '@/components/common/Card'

interface CoreValue {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const coreValues: CoreValue[] = [
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Exploring suitable technologies and new approaches to solve problems creatively.',
    icon: <Lightbulb className="w-5 h-5 text-[#0066FF]" />,
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'Combining our skills, sharing knowledge, and working together to build better solutions.',
    icon: <Users className="w-5 h-5 text-[#0066FF]" />,
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description:
      'Writing maintainable code, testing our work, and communicating clearly throughout a project.',
    icon: <ShieldCheck className="w-5 h-5 text-[#0066FF]" />,
  },
  {
    id: 'practical-impact',
    title: 'Practical Impact',
    description:
      'Focusing on solutions that address real needs and provide clear value to their intended users.',
    icon: <Target className="w-5 h-5 text-[#0066FF]" />,
  },
]

export const StoryAndValuesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/70">
      <div className="container-custom space-y-12">
        {/* Main 3-Column / Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Our Story (5 Cols on LG) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
              <span>OUR STORY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight leading-snug">
              From Ideas to Real-World Impact.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                RagReon Tech brings together two aspiring technology professionals
                with complementary technical interests and a shared vision.
              </p>
              <p>
                We aim to develop practical solutions using data analytics, data
                science, artificial intelligence, software development, Python
                automation, and connected technologies.
              </p>
              <p>
                Our approach is to understand the problem, choose suitable
                technologies, build a practical solution, and improve it through
                testing and feedback.
              </p>
              <p>
                As a remote freelance team, we collaborate online and work
                towards delivering useful solutions based on each project's
                requirements.
              </p>
            </div>
          </div>

          {/* Column 2: Technology Visualization Image (3 Cols on LG) */}
          <div className="lg:col-span-3 flex justify-center items-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900 group">
              <img
                src="/images/about/about-story-tech-office.png"
                alt="RagReon Tech modern technology workspace featuring software development, data analytics dashboards, and AI hardware"
                className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = '/images/about/about-story-tech-office.jpg'
                }}
              />
            </div>
          </div>

          {/* Column 3: What Drives Us / Our Core Values (4 Cols on LG) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
              <span>OUR VALUES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight leading-snug">
              What Drives Us
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {coreValues.map((value) => (
                <Card
                  key={value.id}
                  hoverEffect
                  padding="sm"
                  className="bg-slate-50/70 border-slate-200/80 rounded-xl p-4 transition-all duration-200 flex items-start gap-3.5 group hover:bg-white hover:border-blue-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100/80 transition-colors">
                    {value.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#0B132B] tracking-tight">
                      {value.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryAndValuesSection
