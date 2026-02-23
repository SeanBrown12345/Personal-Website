import './App.css';
import { styled } from '@mui/material/styles';
const WindowContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    backgroundColor: '#c0c0c0',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingBottom: '20px',
});


const RowButtonContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '20px',
    paddingTop: '20px',
});

const StyledIcon = styled('img')({
    width: '60px',
    height: '60px',
});

const StyledChessIcon = styled('img')({
    width: '100px',
    height: '60px',
});

const StyledMoneyIcon = styled('img')({
    height: '50px',
});

const StyledLabel = styled('div')({
    fontSize: '14px',
    textAlign: 'center',
    color: 'black',
});

const ButtonContainer = styled('div')({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '20px',
    padding: '10px',
    boxSizing: 'border-box',
});

const IconButton = styled('a')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  alignContent: 'center',
  boxShadow: 'outset 2px 2px grey',
  border: '2px outset grey',
  textAlign: 'center',
  width: '100%',
  height: '100px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  '&:active': {
    boxShadow: 'inset 2px 2px grey',
    border: '2px solid gray',
  },
})

function Projects() {

    return (
        <>
            <WindowContainer>
              <ButtonContainer>

              <RowButtonContainer >
                    <IconButton href="/chatbot" target="_blank" rel="noopener noreferrer">
                        <StyledIcon src='/ai.png' />
                        <StyledLabel>SeanAI</StyledLabel>
                    </IconButton>

                    <IconButton href="/bitcoin" target="_blank" rel="noopener noreferrer">
                        <StyledIcon src='https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg' />
                        <StyledLabel>Bitcoin Volatility</StyledLabel>
                    </IconButton>

                     
                    
             </RowButtonContainer>

             <RowButtonContainer>
                
                    <IconButton href="https://github.com/SeanBrown12345/ml-salary-estimator"
                        target="_blank"
                        rel="noopener noreferrer">
                        <StyledMoneyIcon src='/money.png' />
                        <StyledLabel>ML Salary Estimator</StyledLabel>
                    </IconButton>

                     <IconButton href="https://ubc-mds.github.io/DSCI_524_FileJanitor/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <StyledMoneyIcon src='https://win98icons.alexmeub.com/icons/png/clean_drive-4.png' />
                        <StyledLabel>FileJanitor Python Package</StyledLabel>
                    </IconButton>
                    
             </RowButtonContainer>

             <RowButtonContainer>
                    <IconButton href="https://github.com/SeanBrown12345/ChessEngineML"
                        target="_blank"
                        rel="noopener noreferrer">
                        <StyledChessIcon src='/chess.png' />
                        <StyledLabel>Chess Elo Guesser</StyledLabel>
                    </IconButton>
                     <IconButton href="https://seanbrown12345.github.io/BlogPost/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <StyledMoneyIcon src='https://www.shareicon.net/data/2015/12/17/688959_logo_512x512.png' />
                        <StyledLabel>ML Blog</StyledLabel>
                    </IconButton>
                    
             </RowButtonContainer>
              </ButtonContainer>

            </WindowContainer>
        </>
    );
}

export default Projects;