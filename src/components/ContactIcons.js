import contactIcons from '../data/contact'

const ContactIcons = () => (
  <ul className='flex justify-between w-48'>
    {contactIcons.map((item, i) => (
      <li key={`icon-${i}`} className='text-gray-400'>
        <a href={item.url} target='_blank' rel='noreferrer' className='link'>
          {item.icon}
        </a>
      </li>
    ))}
  </ul>
)

export default ContactIcons
