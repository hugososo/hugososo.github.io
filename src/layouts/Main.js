import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import SideBar from '../components/SideBar'
import ScrollToTop from '../components/ScrollToTop'

const Main = () => (
  <>
    <ScrollToTop />
    <div>
      <Navigation />
      <div className='flex mt-[3em] flex-wrap lg:flex-nowrap'>
        <SideBar />
        <Outlet className='w-[78em]' />
      </div>
    </div>
  </>
)

export default Main
