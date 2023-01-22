import React, { Suspense, lazy, useState } from 'react'

import { Link } from 'react-router-dom'
import routes from '../routes/routes'

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'))

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {open ? (
        <div className='cursor-pointer text-lg' onClick={() => setOpen(!open)}>
          &#10005;
        </div>
      ) : (
        <div className='cursor-pointer text-lg' onClick={() => setOpen(!open)}>
          &#9776;
        </div>
      )}
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className='!flex flex-col justify-around h-60'>
            {routes
              .filter((l) => !l.index)
              .map((l) => (
                <li key={l.label} className='title'>
                  <Link to={l.path} onClick={() => setOpen(!open)}>
                    <h3 className='transitions px-10'>{l.label}</h3>
                  </Link>
                </li>
              ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  )
}

export default Hamburger
