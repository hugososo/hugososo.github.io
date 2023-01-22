import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/chaewon_wallpaper.jpg'
import personal from '../data/personal.json'
import ContactIcons from '../components/ContactIcons'

const SideBar = () => {
  return (
    <section className='w-auto lg:w-[38em] mx-auto py-6 px-8 lg:px-11 order-last lg:order-first'>
      <section className='pb-12b flex flex-col items-center justify-center border-t lg:block lg:border-t-0'>
        <div className='w-[180px] aspect-square rounded-[50%] overflow-hidden my-6'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='h-full object-cover' />
          </Link>
        </div>
        <header className='flex flex-col items-center justify-center lg:block'>
          <h2 className='name text-2xl p-0 mb-4'>{personal.full_name}</h2>
          <p className='name text-gray-500 decoration-dotted underline p-0 font-light underline-offset-4'>
            <a href={`mailto:${personal.school_email}`}>{personal.school_email}</a>
          </p>
        </header>
      </section>

      <section className='mt-10 py-12 border-y'>
        <h2 className='name p-0'>About</h2>
        <p className='text-xs leading-6'>
          Hi, I am {personal.nick_name}. I like learning new technologies. I am a{' '}
          <a href={personal.university_link} target='_blank' rel='noreferrer' className='link'>
            {personal.university}
          </a>{' '}
          final year {personal.major} student and{' '}
          <a href={personal.hd_link} target='_blank' rel='noreferrer' className='link'>
            {personal.hd}
          </a>{' '}
          {personal.hd_major} alumni.
        </p>
        <button className='transitions border-current'>
          <Link to='/resume'>Learn More</Link>
        </button>
      </section>

      <section className='py-12 border-b'>
        <iframe
          className='rounded-xl'
          src='https://open.spotify.com/embed/artist/4SpbR6yFEvexJuaBpgAU5p?utm_source=generator'
          width='100%'
          height='152'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </section>

      <section className='my-10'>
        <ContactIcons />
        <div className='flex items-center mt-6 flex-wrap'>
          <p className='name text-gray-500 p-0 pr-2 font-light underline-offset-4'>
            &copy; So Ho Tai
          </p>
          <Link
            to='/'
            className='name text-gray-500 p-0 font-light underline-offset-4 transitions decoration-dotted underline'
          >
            {personal.domain}
          </Link>
        </div>
      </section>
    </section>
  )
}

export default SideBar
