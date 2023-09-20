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
  const isScreenMd = useMediaQuery("(min-width: 1060px)")
  const $bg = !isTopOfPage && "bg-primary-100 drop-shadow"


  return (
    <nav>
      <div className={`${$bg} flex-between fixed top-0 z-30 w-full py-6`}>
        <div className="flex-between mx-auto w-5/6">
          <div className="flex-between w-full gap-16">
            {/* LEFT SIDE */}
            <a href="/">
              <img alt="logo" src={Logo} />
            </a>

            {/* RIGHT SIDE */}
            {isScreenMd ? (
              <div className="flex-between w-full">
                <ul className="flex-between gap-8 text-sm">
                  {navList.map((navItem: string) => (
                    <NavLink page={navItem} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  ))}
                </ul>
                <div className="flex-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
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
      {!isScreenMd && isNavToggled ? (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
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
        </div>
      ) : null }
    </nav>
  )
}

export default Navbar