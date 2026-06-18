import Comparaisons from '@/components/Comparaisons'
import DocumentationPreview from '@/components/DocumentationPreview'
import Features from '@/components/Features'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import ReviewsCTA from '@/components/ReviewsCTA'
 
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
      <FinalCTA></FinalCTA>
      <Footer></Footer>
    </>
  )
}
export default Acceuil;
