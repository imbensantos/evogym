import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage, useSelectedPage } from "@/contexts/SelectedPageContext"

type Props = {
  children: React.ReactNode,
  className?: string,
}

const ActionButton = ({ children, className }: Props) => {

  const {setSelectedPage} = useSelectedPage()

  return (
    <AnchorLink
      className={`rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-150 ${className}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton