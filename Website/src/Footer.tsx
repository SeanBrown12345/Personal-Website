import { styled } from '@mui/material/styles'
import './App.css'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { useState, useEffect, useCallback } from 'react'

const HeaderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '35px', 
  backgroundColor: '#c3c3c3',
  marginTop: 'auto', 
  boxShadow: 'inset 1px 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 1px 0 rgba(0,0,0,0.5)',
  padding: '3px',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const StyledIcon = styled('img')({
  width: 'auto',
  height: '30px',
  alignItems: 'center', // Corrected typo
  cursor: 'pointer',
  marginLeft: '5px',
})

const ImageContainer = styled('a')({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '20px',
  alignItems: 'center',
  height: '100%',
  padding: '5px',
  border: '1px solid transparent',
  '&:hover': {
    boxShadow: 'inset 1px 1px grey',
    border: '1px solid gray',
  },
  color: '#010081  ',
  imageRendering: 'pixelated',
})
const StyledFa = styled(FontAwesomeIcon)({
  width: 'auto',
  height: '25px',
  alignItems: 'center', // Corrected typo
  cursor: 'pointer',
  imageRendering: 'pixelated',
})

const LeftContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const StyledLabel = styled('div')({
  float: 'left',
  borderTop: '1px solid #000',
  borderLeft: '1px solid #000',
  boxShadow: 'inset 1px 1px grey',
  backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2M8cODAf3t7ewbG/////z948CADAFuqCj64BtLKAAAAAElFTkSuQmCC)',
  padding: '0px 90px',
  fontSize: '25px',
  fontWeight: 'bold',
})

const TimeLabel = styled('div')({
  textAlign: 'center', 
  boxShadow: 'inset 1px 1px grey',
  border: '1px solid gray',
  float: 'right',
  padding: '2px 4px',
  fontSize: '16px',
})

function Footer() {
  const [currentTime, setCurrentTime] = useState('12:52 p.m.');


  const fetchTime = useCallback(async () => {
    try {
      const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC')
      const data = await response.json()
      const time = new Date(data.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setCurrentTime(time)
    } catch (error) {
      setCurrentTime('12:52 p.m.')
    }
  }, [])

  useEffect(() => {
    fetchTime()
    const timer = setInterval(fetchTime, 60000)

    return () => clearInterval(timer)
  }, [fetchTime])

  return (
    
      <HeaderContainer>
        <LeftContainer>
          <StyledIcon src='/start.png' />
          <ImageContainer href="https://www.linkedin.com/in/sean-brown-5a9889270/" target="_blank" rel="noopener noreferrer">
            <StyledFa icon={faLinkedin} />
          </ImageContainer>
          <ImageContainer href="https://github.com/SeanBrown12345" target="_blank" rel="noopener noreferrer">
            <StyledFa icon={faGithub} />
          </ImageContainer>
        </LeftContainer>
        <StyledLabel>Hello... I'm Sean Brown </StyledLabel>
        <TimeLabel>{currentTime}</TimeLabel>
      </HeaderContainer>

  )
}

export default Footer