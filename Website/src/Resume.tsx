import './App.css'
import { styled } from '@mui/material/styles'

const WindowContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#c3c3c3',
    height: '700px',
    alignItems: 'center', 
    justifyContent: 'center',
    overflowY: 'auto',
  })

const TopContainer = styled('div')({
    flexDirection: 'row',
    margin: '20px',
    gap: '10px',
    backgroundColor: '#c3c3c3',
    padding: '10px',
    borderStyle: 'ridge',
    height: 'fit-content',
    overflowY: 'auto',
    overflowX: 'hidden',

})

const StyledIcon = styled('img')({
  width: '25px',
  height: '25px',
})

const DownloadButton = styled('a')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  alignContent: 'center',
  boxShadow: 'outset 2px 3px grey',
  border: '2px outset black',
  textAlign: 'center',
  width: 'fit-content',
  padding: '20px 20px',
  marginTop: '20px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  '&:active': {
    boxShadow: 'inset 2px 2px grey',
    border: '2px solid gray',
  },
})

function Resume() {
  return ( 
    <>
      <WindowContainer>
        <DownloadButton href="/resume.pdf" download="resume.pdf">
          <StyledIcon src="https://win98icons.alexmeub.com/icons/png/mouse-5.png"/>
          Download My Resume 
        </DownloadButton>
        <TopContainer>
          <img 
            src="/resume0.png" 
            alt="Resume Page 1" 
            width="100%" 
            style={{ border: '2px solid #000', marginBottom: '10px' }}
          />
          <img 
            src="/resume1.png" 
            alt="Resume Page 2" 
            width="100%" 
            style={{ border: '2px solid #000' }}
          />
        </TopContainer>
      </WindowContainer>
    </>
  )
}

export default Resume;