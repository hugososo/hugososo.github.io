import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const AnimatedProgresBar = ({ label, end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    if (start === end) return
    let timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, (duration / end) * 1000)

    return () => {
      clearInterval(timer)
    }
    // dependency array
  }, [end, duration])

  return (
    <div className='flex flex-col w-fit justify-center items-center gap-2'>
      <CircularProgressbar value={count} text={count} className='h-20' />
      <h1 className='title'>{label}</h1>
    </div>
  )
}

export default AnimatedProgresBar
