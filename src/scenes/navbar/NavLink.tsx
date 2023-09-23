import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage, useSelectedPage } from '@/contexts/SelectedPageContext'

type Props = {
  className?: string,
  page: string,
}

function NavLink({ className, page}: Props) {
  const pageInLowerCase = page.toLowerCase().replace(/ /g, "-") as SelectedPage
  const {selectedPage, setSelectedPage} = useSelectedPage()

  return (
    <AnchorLink
      className={`${selectedPage === pageInLowerCase && "text-primary-500"} transition duration-150 hover:text-primary-300 ${className}`}
      href={`#${pageInLowerCase}`}
      onClick={() => setSelectedPage(pageInLowerCase)}>{page}</AnchorLink>
  )
}

export default NavLink