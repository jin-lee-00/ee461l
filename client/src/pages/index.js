import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SectionHaaS from '../components/SectionHaaS'
import SectionContent from '../components/SectionContent'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/SectionContent/Content'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <SectionHaaS />
      <SectionContent {...homeObjOne} />
      <SectionContent {...homeObjTwo} />
      <SectionContent {...homeObjThree} />
      <SectionContent {...homeObjFour} />
    </>
  )
}

export default Home