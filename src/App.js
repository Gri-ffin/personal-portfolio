import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
const AboutPage = React.lazy(() => import('./pages/About'))
const HomePage = React.lazy(() => import('./pages/Home'))
const ProjectsPage = React.lazy(() => import('./pages/Projects'))
import LoadingSpinner from './components/LoadingSpinner'
import { Footer } from './components/Footer'
import Page404 from './pages/404Page'

function App() {
  // I'll render the footer only when the component mount
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <NavBar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
      {!isLoading && <Footer />}
    </>
  )
}

export default App
