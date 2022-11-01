import React from 'react'

// Components
import Header from '../../components/Header/Header.jsx'
import Projects from '../../components/Projects/Projects.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import NavModal from '../../components/NavModal/NavModal.jsx'

const Home = () => {
  return (
    <div className="home">
      {/* NAVIGATION */}
      <Header />

      {/* INTRODUCTION */}
      <h1 className="introduction">
        I'm Huan, an undergraduate studying Chinese Language at Nanjing University. I love designing, building website and solving life problem with technologies. Below are my three web projects, hope you enjoy !
      </h1>

      {/* PROJECTS */}
      <Projects />

      {/* FOOTER */}
      <Footer />

      {/* NAV MODAL */}
      <NavModal />
    </div>
  )
}

export default Home