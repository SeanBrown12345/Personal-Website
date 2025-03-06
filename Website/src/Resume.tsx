import './App.css'
import { styled } from '@mui/material/styles'

const WindowContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    backgroundColor: '#c3c3c3',
    height: '700%',
})

const TopContainer = styled('div')({
    width: '100%',
    flexDirection: 'row',
    margin: '20px',
    gap: '10px',
    display: 'block',
    backgroundColor: '#c3c3c3',
    height: 'fit-content',
    padding: '10px',
    borderStyle: 'ridge',
    
})


function Resume() {


  return ( 
    <>
      <WindowContainer>
        <TopContainer>
        <iframe 
          src="/resume.pdf" 
          width="100%" 
          height="700px" 
          style={{ border: '2px solid #000', }}
        />

        </TopContainer>
      
      </WindowContainer>
    </>
  )
}

export default Resume;