import React from 'react'
import AnimatedProgresBar from '../../components/AnimatedProgressBar'
import skillItems from '../../data/skills'

function Skills() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>Skills</h1>
        <p className='font-light tracking-wider px-6'>
          I don&apos;t think this part is accurate because the skill rate depends on who I am
          comparing with
        </p>
      </div>
      <div className='m-4'>
        <article>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10'>
            {skillItems.map((item, i) => {
              return (
                <AnimatedProgresBar
                  key={`progress-${i}`}
                  label={item.label}
                  end={item.end}
                  duration={item.duration + item.end / 100}
                />
              )
            })}
          </div>
        </article>
      </div>
    </div>
  )
}

export default Skills
