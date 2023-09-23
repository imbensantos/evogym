import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage, useSelectedPage } from '@/contexts/SelectedPageContext'

type Props = {
  children: React.ReactNode,
  className?: string,
  href: SelectedPage
}

const Link = ({ children, className, href }: Props) => {
  const { setSelectedPage } = useSelectedPage()

  return (
    <AnchorLink
      className={`text-sm font-bold text-primary-500 underline hover:text-secondary-500 ${className}`}
      onClick={() => setSelectedPage(href)}
      href={`#${href}`}
    >
      {children}
    </AnchorLink>
  )
}

export default Link