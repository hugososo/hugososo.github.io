import React from 'react'
import personal from '../../data/personal.json'
import { uniCourses, hdCourses } from '../../data/educations'
import Education from '../../components/Education'

function Educations() {
  const sortCourses = (courses) =>
    courses.sort((prev, after) => {
      const cal = (item) => {
        switch (item) {
          case '+':
            return -0.1
          case '-':
            return 0.1
          default:
            return 0
        }
      }

      let prevSum = prev.grade.charCodeAt(0) + cal(prev.grade.charAt(1))
      let afterSum = after.grade.charCodeAt(0) + cal(after.grade.charAt(1))

      return prevSum - afterSum
    })

  return (
    <div className='wrapper'>
      <div className='border-b px-4 py-6'>
        <h1 className='title text-2xl p-6'>Educations</h1>
      </div>
      <div className='m-4'>
        <Education
          major={personal.major}
          school={personal.university}
          sortedCourses={sortCourses(uniCourses)}
        />
        <Education
          gpa='3.79'
          major={personal.hd_major}
          school={personal.hd}
          sortedCourses={sortCourses(hdCourses)}
        />
      </div>
    </div>
  )
}

export default Educations
