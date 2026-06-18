import Comparaisons from '@/components/Comparaisons'
import DocumentationPreview from '@/components/DocumentationPreview'
import Features from '@/components/Features'
import FinalCTA from '@/components/FinalCTA'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import ReviewsCTA from '@/components/ReviewsCTA'
FinalCTA
import React from 'react'

 const Acceuil = () => {
  return (
    <>
       <Hero></Hero>
       <Comparaisons></Comparaisons>
       <Features></Features>
       <HowItWorks></HowItWorks>
      <DocumentationPreview></DocumentationPreview>
      <ReviewsCTA></ReviewsCTA>
    </>
  )
}
export default Acceuil;
