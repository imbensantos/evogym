import { motion } from 'framer-motion'

import useMediaQuery from '@/hooks/useMediaQuery'

import { SelectedPage, useSelectedPage } from '@/contexts/SelectedPageContext'
import ActionButton from '@/components/ActionButton'

import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import Link from '@/components/Link'
import { fadeLeft, fadeRight, fadeRightDelay } from '@/styles/animations'

const Home = () => {
  const { setSelectedPage } = useSelectedPage()
  const isMdScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id={SelectedPage.Home}
      className='flex flex-col gap-16 bg-gray-20 pt-24 pb-6 md:h-screen'
    >
      <motion.div 
        className='mx-auto w-5/6 flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* IMAGE & MAIN HEADER */}
        <header className="hero md:flex w-full max-w-[1366px] mx-auto  items-center justify-center">
          <motion.hgroup
            className='relative z-10 md:basis-3/5 mt-16'
            {...fadeRight}
          >
            <h1 className='before:absolute before:-top-20 before:-left-20 before:-z-10 md:before:content-evolveText'>
              <img src={HomePageText} alt="Evogym" />
            </h1>
            <p className='mt-8 text-sm balance'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios To Get The Body Shape That You Dream Of. Get Your Dream
              Body Now!
            </p>

            <motion.div
              className='mt-8 flex items-center gap-8'
              {...fadeRightDelay}
            >
              <ActionButton>
                Join Now
              </ActionButton>
              <Link
                href={SelectedPage.Benefits}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.hgroup>

          {/* IMAGE */}
          {/* <img className='min-w-0 mx-auto md:mr-0 md:z-10' src={HomePageGraphic} alt="Evogym Trainer" /> */}
          <motion.div 
            className='min-w-0 mx-auto md:mr-0 md:z-10 basis-3/5'
            {...fadeLeft}
          >
            <img className='min-w-0 mx-auto md:mr-0 md:z-10' src={HomePageGraphic} alt="Evogym Trainer" />
          </motion.div>

        </header>
      </motion.div>
      
       {/* SPONSORS */}
       {isMdScreen ? (
          <div className='flex items-center h-1/6 w-full bg-primary-100 py-10'>
            <div className='mx-auto w-5/6'>
              <div className='flex w-3/5 items-center justify-between'>
                <img src={SponsorRedBull} alt="redbull-sponsor" />
                <img src={SponsorForbes} alt="forbes-sponsor" />
                <img src={SponsorFortune} alt="fortune-sponsor" />
              </div>
            </div>
          </div>
        ) : null}
    </section>
  )
}

export default Home