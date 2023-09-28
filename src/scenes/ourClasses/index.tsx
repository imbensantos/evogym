import { SelectedPage, useSelectedPage } from '@/contexts/SelectedPageContext'
import { motion } from 'framer-motion'

import { fadeRight, fadeUp, staggerChildren } from '@/shared/animations'
import Class, { ClassType } from './Class'

import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"

const CLASSES_LIST: Array<ClassType> = [
  {
    name: "Strength Training",
    description: "Develop lean muscle, boost metabolism, and enhance overall strength with classes that focus on resistance exercises using free weights and machines.",
    image: image1
  },
  {
    name: "Yoga and Pilates",
    description: "Strengthen your core, improve flexibility, and find inner peace through a variety of yoga and Pilates classes, ranging from Hatha to Vinyasa and beyond.",
    image: image2
  },
  {
    name: "Functional Fitness",
    description: "Improve daily life functionality by working on movements that mimic real-life activities. These classes enhance balance, stability, and strength for practical application.",
    image: image3
  },
  {
    name: "Stretch and Flexibility",
    description: "Enhance flexibility, reduce the risk of injury, and recover more effectively through classes focused on stretching and mobility exercises.",
    image: image4
  },
  {
    name: "High-Intensity Interval Training (HIIT)",
    description: "A high-energy, calorie-burning workout that combines short bursts of intense exercise with brief rest periods for maximum fat burn and cardiovascular conditioning.",
    image: image5
  },
  {
    name: "Mindfulness and Meditation",
    description: "Find tranquility and reduce stress through guided mindfulness and meditation sessions that promote mental and emotional well-being.",
    image: image6
  },
]

const OurClasses = () => {
  const { setSelectedPage } = useSelectedPage()


  return (
    <section
      id={SelectedPage.OurClasses}
      className='w-full min-h-full bg-primary-100 py-28'
    >
      <motion.div 
        className='mx-auto w-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >  
        <motion.hgroup
          {...fadeRight}
        >
          <div className='md:w-3/5'>
            <h2 className='font-montserrat text-3xl font-bold'>Our Classes</h2>
            <p className='py-5'>
              Led by experienced and passionate instructors, our classes offer a diverse range of options to cater to all fitness levels and preferences. With state-of-the-art facilities, flexible schedules, and a results-oriented approach, our classes are designed to help you achieve your fitness goals while having fun. We continuously improve and adapt to the latest fitness trends, ensuring that your experience at EvoGym is unparalleled. Join us and discover a fitness journey that goes beyond exercise—it's about living a healthier, more vibrant life.
            </p>
          </div>
        </motion.hgroup>

        <motion.div 
          className='py-10 scrollbar-100 overflow-x-auto'
          {...fadeUp}
        >
          <motion.ul 
            className='w-[2800px] md:w-[3000px] flex-around gap-10'
            {...staggerChildren}
          >
            {CLASSES_LIST.map((classItem: ClassType, index) => (
              <Class
                key={`${classItem.name}-${index}`}
                data={classItem}
              />
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default OurClasses