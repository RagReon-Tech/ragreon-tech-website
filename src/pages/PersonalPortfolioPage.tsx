import React, { useEffect, useMemo } from 'react'
import { getPersonalPortfolio } from '@/data/personalPortfolios'
import { PersonalPortfolioLayout } from '@/components/personal-portfolio/PersonalPortfolioLayout'
import { PersonalHero } from '@/components/personal-portfolio/PersonalHero'
import { PersonalAboutSection } from '@/components/personal-portfolio/PersonalAboutSection'
import { PersonalSkillsSection } from '@/components/personal-portfolio/PersonalSkillsSection'
import { PersonalProjectsSection } from '@/components/personal-portfolio/PersonalProjectsSection'
import { PersonalContactSection } from '@/components/personal-portfolio/PersonalContactSection'
import type { PersonalPortfolioId } from '@/types/personal-portfolio.types'

interface PersonalPortfolioPageProps {
  portfolioId: PersonalPortfolioId
}

/**
 * Helper to update or create a meta tag in document.head for dynamic SPA SEO.
 */
function upsertMetaTag(
  selector: string,
  attrName: 'name' | 'property',
  attrValue: string,
  content: string,
) {
  let tag = document.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attrName, attrValue)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export const PersonalPortfolioPage: React.FC<PersonalPortfolioPageProps> = ({
  portfolioId,
}) => {
  const portfolio = useMemo(
    () => getPersonalPortfolio(portfolioId),
    [portfolioId],
  )

  useEffect(() => {
    const prevTitle = document.title
    const descTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const prevDescription = descTag?.getAttribute('content') || ''

    document.title = portfolio.seo.title
    upsertMetaTag(
      'meta[name="description"]',
      'name',
      'description',
      portfolio.seo.description,
    )
    upsertMetaTag(
      'meta[property="og:title"]',
      'property',
      'og:title',
      portfolio.seo.title,
    )
    upsertMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      portfolio.seo.description,
    )

    return () => {
      document.title = prevTitle
      if (prevDescription) {
        upsertMetaTag(
          'meta[name="description"]',
          'name',
          'description',
          prevDescription,
        )
      }
    }
  }, [portfolio.seo.title, portfolio.seo.description])

  return (
    <PersonalPortfolioLayout portfolio={portfolio}>
      <PersonalHero portfolio={portfolio} />
      <PersonalAboutSection portfolio={portfolio} />
      <PersonalSkillsSection portfolio={portfolio} />
      <PersonalProjectsSection portfolio={portfolio} />
      <PersonalContactSection portfolio={portfolio} />
    </PersonalPortfolioLayout>
  )
}

export default PersonalPortfolioPage
