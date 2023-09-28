import { useState, useEffect } from "react"
import { SelectedPage, SelectedPageContext } from "@/contexts/SelectedPageContext"
import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/ourClasses"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"



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
          <Home />
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
