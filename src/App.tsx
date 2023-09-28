import { useState, useEffect } from "react"
import { SelectedPage, SelectedPageContext } from "@/contexts/SelectedPageContext"
import Navbar from "@/components/Navbar"
import Hero from "@/scenes/Hero"
import Benefits from "@/scenes/Benefits"
import OurClasses from "@/scenes/OurClasses"
import ContactUs from "@/scenes/ContactUs"
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
