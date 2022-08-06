import React from 'react'
import { Header } from '../components/Header/Header'
import Footer from '../sections/Footer/Footer'
import InfoSection from '../sections/Info/InfoSection'
import MainSection from '../sections/Main/MainSection'

function MainPage(props) {
  return (
    <div >
      <Header />
      <MainSection />
      <InfoSection/>
      <Footer/>
    </div>
  )
}

export default MainPage
