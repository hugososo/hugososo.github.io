import React from 'react'

const Education = ({ gpa, major, school, sortedCourses }) => {
  return (
    <article>
      <header className='title whitespace-normal'>
        {major}
        {gpa && `, GPA ${gpa}`}
      </header>
      <p className='uppercase font-light tracking-wider'>{school}</p>
      <details>
        <summary className='tracking-widest font-bold uppercase h-full text-xs cursor-pointer'>
          Courses
        </summary>
        <table className='mt-2'>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {sortedCourses.map((item, i) => {
              return (
                <tr key={`${major}-${i}`}>
                  <td>{item.code}</td>
                  <td>{item.course}</td>
                  <td>{item.grade}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </details>
    </article>
  )
}

export default Education
