import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types'

type Props = {
  children: React.ReactNode,
  setSelectedPage: (value: SelectedPage) => void,
  href: SelectedPage
}

const Link = ({children, href, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
      onClick={() => setSelectedPage(href)}
      href={`#${href}`}
    >
      {children}
    </AnchorLink>
  )
}

export default Link