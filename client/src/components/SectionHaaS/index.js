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

const SectionHaaS = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HaasContainer id='home'>
      <HaasBg></HaasBg>
      <HaasContent>
        <HaasH1>EE 461L Group 2</HaasH1>
        <HaasP>
        Jin Lee, Brandi Nguyen, Allen Zhou, Carson Bone, Noah Zamarripa  
        </HaasP>
        <HaasBtnWrapper>
          <BtnLink 
            to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary  
          >
            Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
          </BtnLink>
        </HaasBtnWrapper>
      </HaasContent>
    </HaasContainer>
  )
}

export default SectionHaaS