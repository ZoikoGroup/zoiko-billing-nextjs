import React from 'react'
import {
  PrivacyNoticePage,
  PrivacyPolicyHero,
} from '@/components/privacy-policy'

export default function Page() {
  return (
    <main>
      <PrivacyPolicyHero />
      <PrivacyNoticePage />
    </main>
  )
}