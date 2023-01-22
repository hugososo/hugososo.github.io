import catImage from '../assets/meow_1.jpg'
import catImage2 from '../assets/meow_2.jpg'

const about = [
  {
    header: 'intro',
    content:
      'I am a motivated and fast learner, keep learning different and diverse knowledges everyday. ' +
      'I am particularly interested in projects that touch fintech like exchange, financial, blockchain and interesting technologies such as VTuber, VR/AR/XR, AI/ML. ' +
      'My motto is "Don\'t take things too seriously, and just chill.", just do it and everything will be okay. ' +
      'If you would like to meet me, please feel free to get in touch.',
  },
  {
    header: 'i like',
    content: [
      'Try new technologies',
      'Watching Youtube to learn new knowledges',
      'Travel',
      'Watching Movies',
      <a
        className='link'
        href='https://www.instagram.com/_chaechae_1/'
        target='_blank'
        rel='noreferrer'
      >
        Kim Chaewon
      </a>,
      <a className='link' href='https://le-sserafim.com/' target='_blank' rel='noreferrer'>
        LE SSERAFIM
      </a>,
      'Cryptocurrency Investment',
      'Playing video games',
      'Photography',
      'Eating',
      'Japan Culture',
    ],
  },
  {
    header: 'fun facts',
    content: (
      <details>
        <summary>
          I have two cats, one named Yuen Yuen, she behaves like a dog because she likes playing
          toss & fetch game, and she likes stay with me and be close to her owner. The other is
          Bobby, he likes to eat, he will sit next to my mother when my mother eats.
        </summary>
        <div className='flex justify-around flex-wrap gap-2 w-full mt-2'>
          <img src={catImage} className='object-contain w-5/12 min-w-72' alt='yuenyuen and bobby' />
          <img src={catImage2} className='object-contain w-5/12 min-w-72' alt='yuenyuen' />
        </div>
      </details>
    ),
    isDetails: true,
  },
  {
    header: 'my bucket list',
    content: [
      'Go to LE SSERAFIM concert/fan meeting',
      'Become stronger',
      'go skydiving',
      'Enjoy high class Omakase',
      'Learn free diving',
      'visit to european ice mountains and skiing',
      'Have a fulfilling career',
      'Immigrate to Japan',
      'Join Japan firework festival',
      'Walking under cherry blossom trees',
      'Travel in a train',
      'See the northern lights',
      'Learn driving',
      'Travel around the world',
    ],
  },
  {
    header: 'people i admire',
    content: [
      <a
        className='link'
        href='https://www.linkedin.com/in/chi-hong-tsoi-046435209/'
        target='_blank'
        rel='noreferrer'
      >
        Weeb Sir
      </a>,
    ],
  },
]

export default about
