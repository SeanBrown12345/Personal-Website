import './App.css'
import Footer from './Footer'
import { styled } from '@mui/material/styles'
import Window from './Window'
import { useState, useEffect } from 'react'
import useDraggable from './useDraggable'
import useDraggable2 from './useDraggableTwo'
import useDraggableThree from './useDraggableThree'
import useDraggableFour from './useDraggableFour'


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
  const [projectWindow, setProjectWindow] = useState(false);
  const [resumeWindow, setResumeWindow] = useState(false);
  const [aboutWindow, setAboutWindow] = useState(false);
  const [contactWindow, setContactWindow] = useState(false);
  const [zIndex, setZIndex] = useState({ projects: 1, resume: 1, about: 1, contact: 1 });
  const [highestZIndex, setHighestZIndex] = useState(1);

  const openWindowHandler = (label: string) => {
    if(label === 'Projects'){
      setProjectWindow(true);
      setHighestZIndex(highestZIndex + 1);
      setZIndex({ ...zIndex, projects: highestZIndex + 1 });
    }
    if(label === 'Resume'){
      setResumeWindow(true);
      setHighestZIndex(highestZIndex + 1);
      setZIndex({ ...zIndex, resume: highestZIndex + 1 });
    }
    if(label === 'About'){
      setAboutWindow(true);
      setHighestZIndex(highestZIndex + 1);
      setZIndex({ ...zIndex, about: highestZIndex + 1 });
    }
    if(label === 'Contact'){
      setContactWindow(true);
      setHighestZIndex(highestZIndex + 1);
      setZIndex({ ...zIndex, about: highestZIndex + 1 });
    }
  }

  const closeProjectsHandler = () => {
    setProjectWindow(false);
  }
  const closeResumeHandler = () => {
    setResumeWindow(false);
  }
  const closeAboutHandler = () => {
    setAboutWindow(false);
  }
  const closeContactHandler = () => {
    setContactWindow(false);
  }

  const { position, handleRef } = useDraggable();
  const { position2, handleRef2 } = useDraggable2();
  const { position3, handleRef3 } = useDraggableThree();
  const { position4, handleRef4 } = useDraggableFour();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return ( 
    <>
      <script src="https://kit.fontawesome.com/dedf0c903a.js"></script>
      
      <ApplicationContainer>
        <IconContainer isActive={projectWindow} onClick={() => openWindowHandler('Projects')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-0.png"/>
          <StyledLabel>Projects</StyledLabel>
        </IconContainer>
        <IconContainer isActive={resumeWindow} onClick={() => openWindowHandler('Resume')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/notepad-5.png"/>
          <StyledLabel>Resume</StyledLabel>
        </IconContainer>
        <IconContainer isActive={aboutWindow} onClick={() => openWindowHandler('About')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/msagent-3.png"/>
          <StyledLabel>About</StyledLabel>
        </IconContainer>
        <IconContainer isActive={contactWindow} onClick={() => openWindowHandler('Contact')}>
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/modem-2.png"/>
          <StyledLabel>Contact</StyledLabel>
        </IconContainer>
        <CenteredWindowContainer>
          {projectWindow && (
            <div
              style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: zIndex.projects,
              }}
              onMouseDown={() => {
                setHighestZIndex(highestZIndex + 1);
                setZIndex({ ...zIndex, projects: highestZIndex + 1 });
              }}
            >
              {handleRef ? <Window label={'Projects'} image={"https://win98icons.alexmeub.com/icons/png/directory_closed_cool-0.png"} closeWindow={closeProjectsHandler} handleRef={handleRef} /> : null}
            </div>
          )}
          {resumeWindow && (
            <div
              style={{
                position: 'absolute',
                left: `${position2.x}px`,
                top: `${position2.y}px`,
                zIndex: zIndex.resume,
              }}
              onMouseDown={() => {
                setHighestZIndex(highestZIndex + 1);
                setZIndex({ ...zIndex, resume: highestZIndex + 1 });
              }}
            >
              {handleRef2 ? <Window label={'Resume'} image={"https://win98icons.alexmeub.com/icons/png/notepad-5.png"} closeWindow={closeResumeHandler} handleRef={handleRef2} /> : null}
            </div>
          )}
          {aboutWindow && (
            <div
              style={{
                position: 'absolute',
                left: `${position3.x}px`,
                top: `${position3.y}px`,
                zIndex: zIndex.about,
              }}
              onMouseDown={() => {
                setHighestZIndex(highestZIndex + 1);
                setZIndex({ ...zIndex, about: highestZIndex + 1 });
              }}
            >
              {handleRef ? <Window label={'About'} image={"https://win98icons.alexmeub.com/icons/png/msagent-3.png"} closeWindow={closeAboutHandler} handleRef={handleRef3} /> : null}
            </div>
          )}
          {contactWindow && (
            <div
              style={{
                position: 'absolute',
                left: `${position4.x}px`,
                top: `${position4.y}px`,
                zIndex: zIndex.contact,
              }}
              onMouseDown={() => {
                setHighestZIndex(highestZIndex + 1);
                setZIndex({ ...zIndex, contact: highestZIndex + 1 });
              }}
            >
              {handleRef ? <Window label={'Contact'} image={"https://win98icons.alexmeub.com/icons/png/modem-2.png"} closeWindow={closeContactHandler} handleRef={handleRef4} /> : null}
            </div>
          )}
        </CenteredWindowContainer>
      </ApplicationContainer>
      <div style={{zIndex: highestZIndex + 2}}>
        <Footer windowWidth={windowWidth}/>
      </div>
      
    </>
  )
}

export default App

