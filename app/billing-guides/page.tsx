import ArticleBodyPattern from '@/components/billing-guides/ArticleBodyPattern'
import ArticleStates from '@/components/billing-guides/ArticleStates'
import BillingGuides from '@/components/billing-guides/BillingGuides'
import BrowseByAudience from '@/components/billing-guides/BrowseByAudience'
import BrowseByBillingTopic from '@/components/billing-guides/BrowseByBillingTopic'
import ExampleAdviceBoundaries from '@/components/billing-guides/ExampleAdviceBoundaries'
import FeaturedCurrentGuides from '@/components/billing-guides/FeaturedCurrentGuides'
import GuideArticleTemplate from '@/components/billing-guides/GuideArticleTemplate'
import GuideFinderContract from '@/components/billing-guides/GuideFinderContract'
import GuidesFAQ from '@/components/billing-guides/GuidesFAQ'
import Handoffs from '@/components/billing-guides/Handoffs'
import LearningPaths from '@/components/billing-guides/LearningPaths'
import PracticeCTA from '@/components/billing-guides/PracticeCTA'
import ReadingExp from '@/components/billing-guides/ReadingExp'
import StartByTask from '@/components/billing-guides/StartByTask'
import React from 'react'

export default function page() {
  return (
    <main>
        <BillingGuides />
        <GuideFinderContract />
        <StartByTask />
        <BrowseByBillingTopic />
        <BrowseByAudience />
        <LearningPaths />
        <FeaturedCurrentGuides />
        <GuideArticleTemplate />
        <ArticleBodyPattern />
        <ExampleAdviceBoundaries />
        <ArticleStates />
        <ReadingExp />
        <Handoffs />
        <GuidesFAQ />
        <PracticeCTA />
    </main>
  )
}
