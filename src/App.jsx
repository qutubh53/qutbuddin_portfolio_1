import {Navbar} from './Sections/Navbar'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import { useState } from 'react'
import { Slide, ToastContainer } from 'react-toastify'

function App() {
  const [isActive, setIsActive] = useState("about");

  const navMenu = (nav) => {
    const sectionId = document.querySelector(`#${nav}`);
    sectionId && sectionId.scrollIntoView();
  }

  return (
    <>
      <Navbar navMenu={navMenu} isActive={isActive} setIsActive={setIsActive} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer navMenu={navMenu} setIsActive={setIsActive}  />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  )
}

export default App
