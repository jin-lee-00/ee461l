import React, {useState} from 'react'
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

const SectionHaaS = (isLoggedIn, currentUser) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HaasContainer id='home'>
      {/* <HaasBg></HaasBg> */}
      <HaasContent>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_wepuwkno.json"
        className='lottie-hero'
      >
        {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
      </Player>
        <HaasH1>EE 461L Group 2</HaasH1>
        <HaasP>
        Jin Lee, Brandi Nguyen, Allen Zhou, Carson Bone, Noah Zamarripa  
        </HaasP>
        <HaasBtnWrapper>
          {isLoggedIn ?
            <HaasP>Welcome Back, {currentUser} </HaasP> 
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