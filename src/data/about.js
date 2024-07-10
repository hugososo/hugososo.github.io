import catImage from '../assets/meow_1.jpg'
import catImage2 from '../assets/meow_2.jpg'

const about = [
  {
    header: 'intro',
    content: 'As a motivated and fast-learning software engineer with 2 years of full-stack development experience, I excel in' +
      'addressing complex system design, architecture, and framework challenges. I thrive both independently and as' +
      'part of a team, consistently striving to achieve team objectives on time. My strong communication skills enhance' +
      'collaboration and effective information sharing within diverse global teams.'
  },
  {
    header: 'i like',
    content: [
      'Try new technologies',
      'Watching Youtube to learn new knowledges',
      'Travel',
      'Watching Movies',
      'Cryptocurrency Investment',
      'Playing video games',
      'Photography',
      'Eating'
    ],
  },
  {
    header: 'fun facts',
    content: (
      <details>
        <summary>
          I have two cats who bring joy and companionship to my life. Yuen Yuen, my first cat, exhibits dog-like behavior, particularly enjoying games of toss and fetch. She is remarkably affectionate and prefers to stay close to me. My other cat, Bobby, has a great appetite and is particularly fond of sitting next to my mother during mealtimes.
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
      'Become stronger',
      'Go skydiving',
      'Enjoy a high-class Omakase meal',
      'Learn free diving',
      'Visit European ice mountains and go skiing',
      'Have a fulfilling career',
      'Join a Japan firework festival',
      'Walking under cherry blossom trees',
      'Travel by train',
      'See the Northern Lights',
      'Learn to drive',
      'Travel around the world',
    ],
  }
]

export default about
