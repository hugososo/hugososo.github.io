import React from 'react'
import personal from '../../data/personal.json'
import ContactIcons from '../../components/ContactIcons'

function Contact() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>Contact</h1>
      </div>
      <article className='m-4'>
        <p className='p-0 m-0'>Feel free to get in touch. You can email me at:</p>
        <p className='p-0 mt-0 mb-8 link'>
          <a href={`mailto:${personal.school_email}`}>{personal.school_email}</a>
        </p>
        <ContactIcons />
      </article>
    </div>
  )
}

export default Contact
