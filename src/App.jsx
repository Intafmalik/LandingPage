import React from "react"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import FeatureSection from "./Components/FeatureSection"
import  Workflow from "./Components/workflow"
import Pricing from "./Components/Pricing"
import  Testimonials  from "./Components/Testimonial"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
  <Navbar />
  <HeroSection />
  <FeatureSection />
  <Workflow />
  <Pricing />
  <Testimonials />
  <Footer />
    </>

  )
}

export default App
