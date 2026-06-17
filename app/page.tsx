import React from 'react'
import Herobanner from './Component/Banner/Herobanner'
import Discover from './Component/Boxes/Discover'
import ExperiencesSection from './Component/Boxes/ExperiencesSection'
import DiningSection from './Component/Boxes/DiningSection'
import GallerySection from './Component/Boxes/GallerySection'
import FacilitiesSection from './Component/Boxes/FacilitiesSection'
import ReviewSection from './Component/Boxes/ReviewSection'
export default function Home() {
  return (
    <>
    <Herobanner/>
    <Discover/>
    <ExperiencesSection/>
    <DiningSection/>
    <GallerySection/>
    <FacilitiesSection/>
    <ReviewSection/>
    </>
  )
}
