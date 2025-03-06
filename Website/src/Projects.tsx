import './App.css'
import { styled } from '@mui/material/styles'

const WindowContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    backgroundColor: '#c0c0c0',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%', // Adjust height as needed
})

const TopContainer = styled('div')({
    flexDirection: 'column',
    gap: '10px',
    height: 'fit-content',
    padding: '10px',
    alignContent: 'center',
})



function Projects() {
  return ( 
    <>
      <WindowContainer>
        <TopContainer>
        <img src='/loading.gif' alt="Loading" />
        <div>Loading Projects:</div>
        <div>More Coming Soon...</div>
        </TopContainer>
      </WindowContainer>
    </>
  )
}

export default Projects;