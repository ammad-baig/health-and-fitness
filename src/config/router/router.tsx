import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Services from '../pages/services/services'
import Schedule from '../pages/schedule/schedule'
import Gallery from '../pages/gallery/gallery'
import Blog from '../pages/blog/blog'
import Contact from '../pages/contact/contact'
import BecomeMember from '../pages/becomemember/becomemember'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='becomememeber' element={<BecomeMember />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter