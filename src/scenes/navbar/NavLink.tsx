import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types'

type Props = {
  className?: string,
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void
}

function NavLink({ className, page, selectedPage, setSelectedPage }: Props) {
  const pageInLowerCase = page.toLowerCase().replace(/ /g, "-") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === pageInLowerCase && "text-primary-500"} transition duration-150 hover:text-primary-300 ${className}`}
      href={`#${pageInLowerCase}`}
      onClick={() => setSelectedPage(pageInLowerCase)}>{page}</AnchorLink>
  )
}

export default NavLink