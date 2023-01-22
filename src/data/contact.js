import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import personal from '../data/personal.json'

const contactIcons = [
  {
    url: personal.linkedin,
    icon: <AiOutlineLinkedin size={22} />,
  },
  {
    url: personal.github,
    icon: <AiOutlineGithub size={22} />,
  },
  {
    url: personal.twitter,
    icon: <AiOutlineTwitter size={22} />,
  },
  {
    url: `mailto:${personal.email}`,
    icon: <AiOutlineMail size={22} />,
  },
]

export default contactIcons
