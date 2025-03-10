import './App.css'
import { styled } from '@mui/material/styles'

const WindowContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#c0c0c0',
    padding: '2px',
    paddingBottom: '5px',
})

const TopContainer = styled('div')({
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#fafafa',
    borderStyle: 'ridge',
    padding: '10px',
    fontSize: '20px', fontFamily: 'Courier New, monospace'
})

const StyledButton = styled('a')({
    width: '100px',
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

  const ButtonContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    
    justifyContent: 'center',
    gap: '150px',
  })

  const StyledFa = styled('img')({
    width: 'auto',
    height: '25px',
    alignItems: 'center',
    cursor: 'pointer',
    imageRendering: 'pixelated',
  })



function Contact() {
  return ( 
    <>
      <WindowContainer>
        <TopContainer>
            <div> &gt;&gt; Email: sean_brown_3@sfu.ca</div>
            <div> &gt;&gt; Phone No: Contact me!</div>
            <div> &gt;&gt; Location: Vancouver, Canada</div>
            <div> &gt;&gt; </div>
            <div> &gt;&gt; </div>
            <div> &gt;&gt; Lets get in touch! :) </div>
            
        
        </TopContainer>
        <ButtonContainer>
            <StyledButton href='https://ca.linkedin.com/in/sean-brown-5a9889270' target="_blank" rel="noopener noreferrer" >
                <StyledFa src="https://cdn-icons-png.flaticon.com/512/61/61109.png" />
                Linkedin
            </StyledButton>
            <StyledButton href='https://github.com/SeanBrown12345' target="_blank" rel="noopener noreferrer" >
                <StyledFa src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-black-and-white.png"/>
                Github
            </StyledButton>
        </ButtonContainer>
      </WindowContainer>
    </>
  )
}

export default Contact;