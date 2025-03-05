import { styled } from '@mui/material/styles'
import './App.css'
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
const StyledFa = styled('img')({
  width: 'auto',
  height: '25px',
  alignItems: 'center',
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
          <StyledIcon src="./start.png"/>
          <ImageContainer href='https://i.redd.it/start-button-dont-let-them-take-the-bottom-left-lol-v0-ostbbhrivxq81.png?width=570&format=png&auto=webp&s=602833d9f990389facbc51dd08785d2b390f87b7' target="_blank" rel="noopener noreferrer">
            <StyledFa src="https://cdn-icons-png.flaticon.com/512/61/61109.png" />
          </ImageContainer>
          <ImageContainer href='https://github.com/SeanBrown1234' target="_blank" rel="noopener noreferrer">
            <StyledFa src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-black-and-white.png"/>
          </ImageContainer>
        </LeftContainer>
        <StyledLabel>Hello... I'm Sean Brown </StyledLabel>
        <TimeLabel>{currentTime}</TimeLabel>
      </HeaderContainer>

  )
}

export default Footer