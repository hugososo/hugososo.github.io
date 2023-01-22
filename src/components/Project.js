import React from 'react'

const Project = ({ title, img, description }) => {
  return (
    <div className='border mx-6 pt-6 relative'>
      <header className='title px-4'>{title}</header>
      <p className='uppercase px-4 font-light tracking-wider'>IVE FYP November, 2021</p>
      <div className='overflow-hidden'>
        <img
          src={img}
          className='m-auto object-cover hover:scale-110 transition duration-300 ease-out'
        />
      </div>
      <div className='absolute bottom-0 left-0 bg-stone-200/[.8] hover:bg-stone-200 w-full overflow-hidden max-h-[80px] transition'>
        <p className='px-4 text-ellipsis line-clamp-2'>{description}</p>
      </div>
    </div>
  )
}

export default Project
