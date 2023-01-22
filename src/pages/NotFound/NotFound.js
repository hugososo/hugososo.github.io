import React from 'react'
import chaewon from '../../assets/chaewon.gif'

function NotFound() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>404 Not Found</h1>
      </div>
      <div className='m-4'>
        <article>
          <header className='title mb-4'>Sorry, please go to other pages</header>
          <img src={chaewon} alt='sorry' width='250' />
        </article>
      </div>
    </div>
  )
}

export default NotFound
