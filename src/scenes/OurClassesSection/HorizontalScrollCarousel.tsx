import { motion, useScroll, useTransform } from 'framer-motion'

import { ClassType } from './Class'

type Props = {
  targetRef: React.RefObject<HTMLDivElement>,
  list: Array<any>,
  Item: JSX.ElementType,
}

const HorizontalScrollCarousel = ({ targetRef, list, Item }: Props) => {
  const { scrollYProgress } = useScroll({ target: targetRef })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  return (
    <div ref={targetRef} className='mt-10 h-[353px] w-full overflow-hidden'>
      <motion.ul style={{ x }} className='w-[2800px] whitespace-nowrap'>
        {list.map((itemData: ClassType, index) => (
          <Item
            key={`${itemData.name}-${index}`}
            data={itemData}
          />
        ))}
      </motion.ul>
    </div>
  )
}

export default HorizontalScrollCarousel