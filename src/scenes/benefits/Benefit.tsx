import { motion } from 'framer-motion'

import Link from '@/shared/Link'
import { SelectedPage } from '@/contexts/SelectedPageContext'


export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string
}

type Props = {
  data: BenefitType,
}

const Benefit = ({ data }: Props) => {
  return (
    <motion.div
      className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {data.icon}
        </div>
      </div>
      <h4 className='font-bold'>{data.title}</h4>
      <p className='my-3 balance'>{data.description}</p>
      <Link href={SelectedPage.ContactUs}>
        Learn More
      </Link>
    </motion.div>
  )
}

export default Benefit