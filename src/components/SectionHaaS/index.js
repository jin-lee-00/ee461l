import React, {useEffect, useState} from 'react'
import { 
  HaasContainer, 
  HaasBg, 
  HaasContent, 
  HaasH1, 
  HaasP, 
  HaasBtnWrapper, 
  ArrowForward, 
  ArrowRight 
} from './SectionHaaS.style'
import { BtnLink } from '../Button.style'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const SectionHaaS = (props) => {
  const [hover, setHover] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    setCurrentUser(sessionStorage.getItem("name"))
  });

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HaasContainer id='home'>
      <HaasContent>
        <Player autoplay loop
          src="https://assets5.lottiefiles.com/packages/lf20_wepuwkno.json"
          className='lottie-hero'
          style={{ width: 150, height: 150 }}
        >
          {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
        </Player>
        <HaasH1>Hardware-as-a-Service</HaasH1>
        <HaasBtnWrapper>
          {props.isLoggedIn ?
            <HaasP>Welcome Back {String(currentUser)}</HaasP> 
          :
            <BtnLink 
              to='signup' 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
            >
              Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
            </BtnLink>
          }
        </HaasBtnWrapper>
      </HaasContent>
    </HaasContainer>
  )
}

export default SectionHaaS