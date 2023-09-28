import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import { SelectedPage, useSelectedPage } from '@/contexts/SelectedPageContext'

import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { fadeDown, fadeLeft, fadeRight } from '@/shared/animations'

const ContactUs = () => {
  const { setSelectedPage } = useSelectedPage()
  const { register, trigger, formState: { errors } } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    
    if(!isValid){
      e.preventDefault();
    }
  }
  return (
    <section
      id={SelectedPage.ContactUs}
      className='pt-28 pb-32 min-h-full'
    >
      <motion.div 
        className='mx-auto w-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.hgroup
          className='md:w-3/5'
          {...fadeRight}
        >
          <h2 className='font-montserrat text-3xl font-bold balance'>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </h2>
          <p className='mt-5 balance'>
            Are you tired of waiting for the right moment to start your fitness journey? The time is NOW! Start today, and experience the transformation at EvoGym. Join our vibrant fitness community and embark on a path to a healthier, stronger, and more confident you!
          </p>
        </motion.hgroup>
        
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            {...fadeDown}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/3946bf27dfbd80cd8abe651cc4219e5e"
            >
              <input 
                className='input-text'
                type="text"
                placeholder='NAME'
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })} />
                {errors.name && (
                  <p className='mt-1 text-primary-500'>
                    {errors.name.type === "required" && "Name is required."}
                    {errors.name.type === "maxLength" && "Name exceeds the max length of 100 characters."}
                  </p>
                )}

              <input 
                className='input-text'
                type="text"
                placeholder='EMAIL'
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} />
                {errors.email && (
                  <p className='mt-1 text-primary-500'>
                    {errors.email.type === "required" && "Email is required."}
                    {errors.email.type === "pattern" && "Email address is invalid."}
                  </p>
                )}

              <textarea 
                className='input-text'
                rows={4}
                cols={50}
                placeholder='MESSAGE'
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })} />
                {errors.message && (
                  <p className='mt-1 text-primary-500'>
                    {errors.message.type === "required" && "Message is required."}
                    {errors.message.type === "maxLength" && "Message exceeds the max length of 2000 characters."}
                  </p>
                )}

                <button
                  type="submit"
                  className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-150 hover:bg-primary-500 hover:text-white'
                >
                  SUBMIT
                </button>
            </form>
          </motion.div>

          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            {...{...fadeLeft, transition: {...fadeLeft.transition, delay: 0.2}}}
          >
            <div className='md:before:content-evolveText w-full before:absolute before:-bottom-20 before:right-10 before:-z-10'>
              <img className='w-full md:max-w-md mx-auto' src={ContactUsPageGraphic} alt="Come join us!" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs