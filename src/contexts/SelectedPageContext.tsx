import { SetStateAction, createContext, useContext } from "react"

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "our-classes",
  ContactUs = "contact-us"
}

interface SelectedPageContextType {
  selectedPage: SelectedPage,
  setSelectedPage: React.Dispatch<SetStateAction<SelectedPage>>
}

export const SelectedPageContext = createContext<SelectedPageContextType>({
  selectedPage: SelectedPage.Home,
  setSelectedPage: () => {}
})

export const useSelectedPage = () => useContext(SelectedPageContext)