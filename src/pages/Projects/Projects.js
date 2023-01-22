import React from 'react'
import Project from '../../components/Project'
import projectItems from '../../data/projects'

function Projects() {
  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>Projects</h1>
      </div>
      <div className='m-4 mt-10 flex gap-10 flex-col'>
        {projectItems.map((item, i) => {
          return (
            <Project
              key={`projects-${i}`}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
