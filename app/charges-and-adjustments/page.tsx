import AmountControlPrinciples from '@/components/charges-and-adjustments/AmountControlPrinciples'
import AmountModelIntro from '@/components/charges-and-adjustments/AmountModelIntro'
import ChargesAndAdjustments from '@/components/charges-and-adjustments/ChargesAndAdjustments'
import React from 'react'

export default function page() {
  return (
    <main>
        <ChargesAndAdjustments />
        <AmountControlPrinciples />
        <AmountModelIntro />
    </main>
  )
}
