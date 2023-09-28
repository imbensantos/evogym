import { useState, useEffect } from "react"
import { SelectedPage, SelectedPageContext } from "@/contexts/SelectedPageContext"
import Navbar from "@/components/Navbar"
import Hero from "@/scenes/HeroSection"
import Benefits from "@/scenes/BenefitsSection"
import OurClasses from "@/scenes/OurClassesSection"
import ContactUs from "@/scenes/ContactUsSection"
import Footer from "@/components/Footer"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
 
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="app">
      <SelectedPageContext.Provider value={{selectedPage, setSelectedPage}}>
        <Navbar
          isTopOfPage={isTopOfPage}
        />
        <main>
          <Hero />
          <Benefits />
          <OurClasses />
          <ContactUs />
        </main>
        <Footer />
      </SelectedPageContext.Provider>
    </div>
  )
}

export default App
