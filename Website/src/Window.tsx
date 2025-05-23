import './App.css'
import { styled } from '@mui/material/styles'
import About from './About'
import Resume from './Resume'
import Projects from './Projects';
import Contact from './Contact';
import ChatBot from './ChatBot/ChatBot';

interface StyledWindowProps {
    label: string;
}
const StyledWindow = styled('div')<StyledWindowProps>(({ label }: StyledWindowProps) => {
    const getMaxWidth = () => {
      switch (label) {
        case 'Resume':
          return '920px';
        case 'About':
          return '700px';
        case 'Contact':
          return '600px';
        case 'ChatBot':
          return '400px';
          
        default:
          return '500px';
      }
    };
  
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#c3c3c3',
      height: 'fit-content',
      maxHeight: '100vh',
      width: `clamp(300px, 100vw, ${getMaxWidth()})`,
      border: '2px solid gray',
      fontFamily: 'Courier New, monospace',
    };
  });

const HeaderTab = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'linear-gradient(to left, #5b5d61, black)',
    height:'30px',
    width:'100%',
    justifyContent: 'space-between',
    border: '2px solid transparent',
    '&:hover': {
        border: '2px solid #5b5d61',
    },
    cursor: 'pointer',
    
})

const StyledLabel = styled('div')({
    fontSize: '16px', 
    textAlign: 'center', 
    color: 'white',
    padding: '2px',
}) 

const StyledButton = styled('button')({
    fontWeight: 700,
    letterSpacing: '0.05em',
    padding: '0.45em 0.75em',
    borderLeft: '2px solid #ededed',
    borderTop: '2px solid #ededed',
    borderRight: '2px solid #404040',
    borderBottom: '2px solid #404040',
    height: '20px',
    width: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    '&:active': {
        borderRight: '2px solid #ededed',
        borderBottom: '2px solid #ededed',
        borderLeft: '2px solid #404040',
        borderTop: '2px solid #404040',
    },
})

const StyledIcon = styled('img')({
    width: '15px',
    height: '15px',
})

const LeftContainer = styled('div')({
    display: 'flex',    
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10px',
    gap: '5px',
})

interface WindowProps {
    label: string;
    image: string;
    closeWindow: () => void;
    handleRef: React.RefObject<HTMLDivElement | null>;
}

function Window({ label, image, closeWindow, handleRef }: WindowProps) {
  return ( 
      <StyledWindow label={label}>
        <HeaderTab ref={handleRef}>
            <LeftContainer>
                <StyledIcon src={image}/>
                <StyledLabel>{label}</StyledLabel>
            </LeftContainer>
            
            <StyledButton onClick={closeWindow}>
                <StyledIcon src='https://win98icons.alexmeub.com/images/close-icon.png'/>
            </StyledButton>
        </HeaderTab>
        {label === 'About' ? <About/> : null}
        {label === 'Resume' ? <Resume/> : null}
        {label === 'Projects' ? <Projects/> : null}
        {label === 'Contact' ? <Contact/> : null}
        {label === 'ChatBot' ? <ChatBot/> : null}
      </StyledWindow>
  )
}

export default Window