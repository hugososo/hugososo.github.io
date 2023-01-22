import React from 'react'
import about from '../../data/about'

function About() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>About Me</h1>
      </div>
      <article className='m-4'>
        {about.map((item, index) => {
          return (
            <div key={`about-${index}`} className='mb-5'>
              <header className='title'>{item.header}</header>
              {item.content instanceof Array ? (
                <ul>
                  {item.content.map((listItem, i) => {
                    return (
                      <li key={`about-${index}-${i}`} className='list-disc'>
                        <span>{listItem}</span>
                      </li>
                    )
                  })}
                </ul>
              ) : item.isDetails ? (
                <div className='text-sm text-slate-700 py-3 leading-8'>{item.content}</div>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          )
        })}
      </article>
    </div>
  )
}

export default About
