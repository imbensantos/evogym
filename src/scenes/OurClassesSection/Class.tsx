export interface ClassType {
  name: string,
  description: string,
  image: string
}

type Props = {
  data: ClassType
}

const Class = ({data}: Props) => {
  return (
    <li
      className='relative max-w-[90vw]'
    >
      <div className="px-5 absolute z-30 flex flex-col items-center justify-center h-full w-full whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-300">
        <h3 className='text-2xl'>{data.name}</h3>
        <p className='mt-5'>{data.description}</p>
      </div>
      <img src={data.image} alt={`${data.name} Class`} />
    </li>
  )
}

export default Class