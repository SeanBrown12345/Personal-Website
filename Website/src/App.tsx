import './App.css'
import Footer from './Footer'
import { styled } from '@mui/material/styles'
import Window from './Window'
import { useState } from 'react'



const IconContainer = styled('div')<{ isActive: boolean }>(({ isActive }) => ({ 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: isActive ?  '1px dashed #c3c3c3' : '1px dashed transparent',
  backgroundColor: isActive ? '#c3c3c3' : 'transparent',
  '&:hover': {
    border: '1px dashed #c3c3c3',
    backgroundColor: '#5b5d61'
  },
  padding: '2px',
  height: '60px',
  width: '60px',
  cursor: 'pointer',
  paddingTop: '5px'
}))

const StyledLabel = styled('div')({
  fontSize: '16px', 
  textAlign: 'center', 
  color: 'white',
  padding: '2px',
}) 

const StyledIcon = styled('img')({
  width: '45px',
  height: '45px',
})

const ApplicationContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-between',
  gap: '50px',
  flexGrow: 1,
  padding: '20px',
})
const CenteredWindowContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
})



function App() {
  const [openWindow, setOpenWindow] = useState(false);
  const [windowLabel, setWindowLabel] = useState('');
  const [windowImage, setWindowImage] = useState('');

  const openWindowHandler = (label: string, image: string) => {
    setWindowLabel(label);
    setWindowImage(image);
    setOpenWindow(true);  
  }

  const closeWindowHandler = () => {
    setOpenWindow(false);
    setWindowLabel('');
  }

  return ( 
    <>
      <script src="https://kit.fontawesome.com/dedf0c903a.js"></script>
      
      <ApplicationContainer>
        <IconContainer isActive={'Projects' == windowLabel} onClick={() => openWindowHandler('Projects', 'https://win98icons.alexmeub.com/icons/png/directory_closed_cool-0.png')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-0.png"/>
          <StyledLabel>Projects</StyledLabel>
        </IconContainer>
        <StyledIcon src="\portrait.png"/>
        <IconContainer isActive={'Resume' == windowLabel} onClick={() => openWindowHandler('Resume', 'https://win98icons.alexmeub.com/icons/png/notepad-5.png')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/notepad-5.png"/>
          <StyledLabel>Resume</StyledLabel>
        </IconContainer>
        <IconContainer isActive={'About' == windowLabel} onClick={() => openWindowHandler('About', 'https://win98icons.alexmeub.com/icons/png/msagent-3.png')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/msagent-3.png"/>
          <StyledLabel>About</StyledLabel>
        </IconContainer>
        <CenteredWindowContainer>
          {openWindow && <Window label={windowLabel} image={windowImage} closeWindow={closeWindowHandler} />}
        </CenteredWindowContainer>
      
      </ApplicationContainer>
      <Footer/>
    </>
  )
}

export default App