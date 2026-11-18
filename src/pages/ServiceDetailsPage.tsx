import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getServiceDetailsBySlug } from '@/data/serviceDetails'
import { ServiceBreadcrumb } from '@/components/service-details/ServiceBreadcrumb'
import { ServiceHero } from '@/components/service-details/ServiceHero'
import { ServiceOverview } from '@/components/service-details/ServiceOverview'
import { ServiceImportance } from '@/components/service-details/ServiceImportance'
import { ServiceProblemsWeSolve } from '@/components/service-details/ServiceProblemsWeSolve'
import { ServiceSolutionsCapabilities } from '@/components/service-details/ServiceSolutionsCapabilities'
import { ServiceTechStack } from '@/components/service-details/ServiceTechStack'
import { ServiceDevelopmentProcess } from '@/components/service-details/ServiceDevelopmentProcess'
import { ServiceRelatedProjects } from '@/components/service-details/ServiceRelatedProjects'
import { ServiceWhyChooseUs } from '@/components/service-details/ServiceWhyChooseUs'
import { ServiceFAQ } from '@/components/service-details/ServiceFAQ'
import { ServiceCTA } from '@/components/service-details/ServiceCTA'
import { ServiceNotFound } from '@/components/service-details/ServiceNotFound'

export const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceDetailsBySlug(slug) : undefined

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | RagReon Tech Services`
    } else {
      document.title = 'Service Not Found | RagReon Tech'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [service, slug])

  if (!service) {
    return <ServiceNotFound requestedSlug={slug} />
  }

  return (
    <article className="flex flex-col min-h-screen bg-slate-50/40">
      {/* Breadcrumb Navigation */}
      <ServiceBreadcrumb title={service.shortTitle || service.title} />

      {/* 1. Professional Hero Section */}
      <ServiceHero service={service} />

      {/* 2. What Is This Technology Domain? */}
      <ServiceOverview overview={service.overview} serviceTitle={service.title} />

      {/* 3. Why Is This Technology Important? */}
      <ServiceImportance importance={service.importance} />

      {/* 4. Problems We Solve */}
      <ServiceProblemsWeSolve problems={service.problemsSolved} />

      {/* 5. Our Solutions & Capabilities */}
      <ServiceSolutionsCapabilities solutions={service.solutionsCapabilities} />

      {/* 6. Technologies & Tools We Use */}
      <ServiceTechStack technologies={service.technologies} />

      {/* 7. Our Development Approach */}
      <ServiceDevelopmentProcess process={service.developmentProcess} />

      {/* 8. Projects That Demonstrate Our Expertise */}
      <ServiceRelatedProjects
        projectSlugs={service.relatedProjectSlugs}
        serviceTitle={service.shortTitle || service.title}
      />

      {/* 9. Why Choose RagReon Tech? */}
      <ServiceWhyChooseUs items={service.whyChooseUs} />

      {/* 10. Frequently Asked Questions */}
      <ServiceFAQ faqs={service.faqs} serviceTitle={service.shortTitle || service.title} />

      {/* 11. Contact & Project Discussion CTA */}
      <ServiceCTA serviceTitle={service.shortTitle || service.title} />
    </article>
  )
}

export default ServiceDetailsPage

