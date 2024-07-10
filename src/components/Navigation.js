import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import routes from '../routes/routes'

const Navigation = () => (
  <div className='flex justify-between md:justify-start h-12 lg:h-14 fixed left-0 top-0 w-full border-b items-center bg-white z-50'>
    <h1 className='name border-r'>
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} to={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className='h-full w-full items-center overflow-hidden ml-3 pl-3 hidden md:flex'>
      <ul className='flex justify-between'>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li
              key={l.label}
              className='border-l ml-4 pl-4 font-light tracking-[.3em] text-xs uppercase first:border-0 first:ml-0 first:pl-0 hover:text-blue-400'
            >
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <div className='block md:hidden p-6'>
      <Hamburger />
    </div>
  </div>
)

export default Navigation
