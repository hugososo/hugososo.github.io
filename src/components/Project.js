import React from 'react'

const Project = ({ title, subtitle, url, img, description }) => {
  return (
    <div className='border-x-0 border-y lg:border pt-6 relative w-full'>
      <header className={`name px-4 whitespace-normal tracking-wider ${url && 'link transitions'}`}>
        {title}
      </header>
      <p className='uppercase px-4 font-light tracking-wider'>{subtitle}</p>
      <div className='overflow-hidden'>
        <img
          src={img}
          className='m-auto object-cover hover:scale-110 transition duration-300 ease-out'
        />
      </div>
      <div className='absolute bottom-0 left-0 bg-stone-200/[.8] hover:bg-stone-200 w-full overflow-hidden max-h-[115px] transition'>
        <p className='px-4 text-ellipsis line-clamp-3'>{description}</p>
      </div>
    </div>
  )
}

export default Project
