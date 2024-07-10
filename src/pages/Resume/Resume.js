import React from 'react'
import resume from '../../assets/resume.pdf'

function Resume() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>Resume</h1>
      </div>
      <div className='m-4'>
        <article>
          <iframe
            src={resume}
            title="Hugo\'s Resume"
            className='w-full h-screen'
            loading='lazy'
          ></iframe>
        </article>
      </div>
    </div>
  )
}

export default Resume
