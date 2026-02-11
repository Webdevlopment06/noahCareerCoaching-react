import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Page imports
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Resources
import Youth from './pages/resources/Youth'
import EqualE from './pages/resources/EqualE'
import Assessments from './pages/resources/Assessments'
import Stories from './pages/resources/Stories'

// Services
import Resume from './pages/services/Resume'
import Interview from './pages/services/Interview'
import JobSearch from './pages/services/JobSearch'
import ProfessionalDev from './pages/services/ProfessionalDev'
import Volunteer from './pages/services/Volunteer'
import InternshipPath from './pages/services/InternshipPath'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Resources routes */}
        <Route path="/resources/youth" element={<Youth />} />
        <Route path="/resources/equal-employer" element={<EqualE />} />
        <Route path="/resources/assessments" element={<Assessments />} />
        <Route path="/resources/stories" element={<Stories />} />

        {/* Services routes */}
        <Route path="/services/resume" element={<Resume />} />
        <Route path="/services/interview" element={<Interview />} />
        <Route path="/services/job-search" element={<JobSearch />} />
        <Route path="/services/professional-dev" element={<ProfessionalDev />} />
        <Route path="/services/volunteer" element={<Volunteer />} />
        <Route path="/services/internship" element={<InternshipPath />} />
      </Routes>
    </>
  )
}
