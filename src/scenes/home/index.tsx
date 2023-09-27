import { motion } from 'framer-motion'

import useMediaQuery from '@/hooks/useMediaQuery'

import { SelectedPage, useSelectedPage } from '@/contexts/SelectedPageContext'
import ActionButton from '@/shared/ActionButton'

import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import Link from '@/shared/Link'

const Home = () => {
  const { setSelectedPage } = useSelectedPage()
  const isMdScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id={SelectedPage.Home}
      className='flex flex-col gap-16 bg-gray-20 py-24 md:h-full'
    >
      {/* IMAGE & MAIN HEADER */}
      <header className="hero max-w-[1366px] md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        <motion.hgroup
          className='relative z-10 md:basis-3/5'
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <h1 className='before:absolute before:-top-20 before:-left-20 before:-z-10 md:before:content-evolveText'>
            <img src={HomePageText} alt="Evogym" />
          </h1>
          <p className='mt-8 text-sm balance'>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shape that you Dream of. Get Your Dream
            Body Now.
          </p>

          <motion.div
            className='mt-8 flex items-center gap-8'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <ActionButton>
              Join Now
            </ActionButton>
            <Link
              href={SelectedPage.ContactUs}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.hgroup>

        {/* IMAGE */}
        <img className='min-w-0 mx-auto md:mr-0 md:z-10' src={HomePageGraphic} alt="Evogym Trainer" />

      </header>

      {/* SPONSORS */}
      {isMdScreen ? (
        <div className='flex items-center h-[150px] w-full bg-primary-100 py-10'>
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