import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import { motion } from 'framer-motion'

import { SelectedPage } from "@/shared/types"
import Benefit, { BenefitType } from "./benefit"
import ActionButton from "@/shared/ActionButton"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const BENEFITS_LIST: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Our gym is equipped with the latest fitness technology, from top-of-the-line cardio machines to a wide variety of free weights and resistance training equipment. Whatever your fitness goals, we have the tools to help you succeed."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of Diverse Classes",
    description: "Experience the power of group motivation with our dynamic fitness classes. From high-intensity interval training (HIIT) to yoga and everything in between, our classes offer something for everyone."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Our team of certified trainers is here to guide you every step of the way. Whether you're a beginner or an experienced athlete, our trainers will create personalized workout plans tailored to your goals and abilities."
  },
]

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-24"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.hgroup
          className="my-4 md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <h2 className="font-montserrat text-3xl font-bold">
            MORE THAN JUST A GYM.
          </h2>
          <p className="my-5 text-sm balance">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.hgroup>

        <motion.ul
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {BENEFITS_LIST.map((benefitItem: BenefitType, index: number) => (
            <Benefit
              key={`benefit-${index}`}
              data={benefitItem}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.ul>

        {/* GRAPHICS and DESCRIPTION */}
        <div className="mt-16  items-center justify-between gap-20 md:mt-28 md:flex">
          <img src={BenefitsPageGraphic} alt="Evogym Member" className="mx-auto" />
          <div className="relative">
            {/* TITLE */}
            <div className="before:absolute before:-top-20 before:-left-20 before:-z-10 before:content-abstractWaves">
              <motion.h3
                className="font-montserrat text-3xl font-bold balance"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                MILIIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>.
              </motion.h3>
            </div>
            {/* DESC */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className="my-5 balance">
                Fitness isn't just about the time spent on the treadmill or lifting weights; it's about living a healthier, more vibrant life. Our mission is not only to help individuals reach their fitness objectives, but also to cultivate a supportive community that empowers people to lead happier, healthier lives.
              </p>
              <p className="mb-5 balance">
                Within our gym, countless success stories unfold daily, demonstrating the transformative power of dedication and camaraderie. These stories are an invitation for you to become part of this incredible journey toward personal growth and well-being. Join us and let's achieve greatness together.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:-z-10 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits