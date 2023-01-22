import React from 'react'
import Project from '../../components/Project'
import projectItems from '../../data/projects'

function Projects() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>Projects</h1>
      </div>
      <div className='lg:m-4 my-10 flex gap-10 flex-col justify-center lg:p-6'>
        {projectItems.map((item, i) => {
          {
            return item.url ? (
              <a
                href={item.url}
                className='cursor-pointer hover:bg-stone-100 transitions'
                target='_blank'
                rel='noreferrer'
              >
                <Project
                  key={`projects-${i}`}
                  url={item.url}
                  title={item.title}
                  subtitle={item.subtitle}
                  img={item.img}
                  description={item.description}
                />
              </a>
            ) : (
              <Project
                key={`projects-${i}`}
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
                description={item.description}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Projects
