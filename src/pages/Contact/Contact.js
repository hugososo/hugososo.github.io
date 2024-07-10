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
        <p className='p-0 m-0'>Please feel free to get in touch with me via email at  <a className="link" href={`mailto:${personal.email}`}>{personal.email}</a> or by phone at {personal.phone}</p>
        <ContactIcons />
      </article>
    </div>
  )
}

export default Contact
