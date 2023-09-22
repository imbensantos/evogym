import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import NavLink from "./NavLink"
import ActionButton from "@/shared/ActionButton"

type Props = {
  isTopOfPage: boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

  const [isNavToggled, setIsNavToggled] = useState<boolean>(false)

  const navList = ["Home", "Benefits", "Our Classes", "Contact Us"]
  const isMdScreen = useMediaQuery("(min-width: 1060px)")
  const $bg = !isTopOfPage && "bg-primary-100 drop-shadow"


  return (
    <header>
      <div className={`${$bg} flex-between fixed top-0 z-30 w-full py-6`}>
        <div className="flex-between mx-auto w-5/6">
          <div className="flex-between w-full gap-16">
            {/* LEFT SIDE */}
            <a href="/">
              <img alt="logo" src={Logo} />
            </a>

            {/* RIGHT SIDE */}
            {isMdScreen ? (
              <nav className="flex-between w-full">
                <ul className="flex-between gap-8 text-sm">
                  {navList.map((navItem: string) => (
                    <NavLink page={navItem} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  ))}
                </ul>
                <div className="flex-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </nav>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsNavToggled(!isNavToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      <nav className={`${(!isMdScreen && isNavToggled) ? 'right-0' : '-right-full'} fixed bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl transition-all duration-500`}>
          {/* CLOSE ICON */}
          <div className="flex justify-end py-8 px-14">
            <button onClick={() => setIsNavToggled(!isNavToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* NAV ITEMS */}
          <ul className="ml-[33%] flex flex-col gap-10 text-2xl">
            {navList.map((navItem: string) => (
              <NavLink page={navItem} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            ))}
          </ul>
        </nav>
    </header>
  )
}

export default Navbar