import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'

const Main = lazy(() => import('./layouts/Main'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Educations = lazy(() => import('./pages/Educations/Educations'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const Resume = lazy(() => import('./pages/Resume/Resume'))
const Skills = lazy(() => import('./pages/Skills/Skills'))

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/educations' element={<Educations />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} status={404} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default App
