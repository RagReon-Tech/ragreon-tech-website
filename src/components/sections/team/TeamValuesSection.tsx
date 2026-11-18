import React from 'react'
import { Lightbulb, Users, ShieldCheck, Target } from 'lucide-react'
import { Card } from '@/components/common/Card'

interface ValueItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const values: ValueItem[] = [
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Exploring suitable technologies and new approaches to solve problems creatively.',
    icon: <Lightbulb className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'Combining our skills, sharing knowledge, and working together to build better solutions.',
    icon: <Users className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description:
      'Writing maintainable code, testing our work, and communicating clearly throughout a project.',
    icon: <ShieldCheck className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'real-world-impact',
    title: 'Real-World Impact',
    description:
      'Focusing on solutions that address real needs and provide practical value to their intended users.',
    icon: <Target className="w-6 h-6 text-[#0066FF]" />,
  },
]

export const TeamValuesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/70">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>OUR VALUES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            What Drives Us
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            The principles that guide our work and shape our solutions.
          </p>
        </div>

        {/* 4 Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <Card
              key={item.id}
              hoverEffect
              padding="lg"
              className="bg-slate-50/70 border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:bg-white hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-100/70 transition-all duration-200">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-[#0B132B] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamValuesSection
