import './App.css'
import { styled } from '@mui/material/styles'




const StyledIcon = styled('img')({
    width: '250px',
    height: '250px',
    float: 'left',
    marginRight: '10px',
})


const WindowContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#7a7b7d',
    height: 'fit-content',
    maxHeight: '100vh', // Adjust height as needed
})

const TopContainer = styled('div')({
    width: '100%',
    flexDirection: 'row',
    margin: '20px',
    gap: '10px',
    display: 'block',
    backgroundColor: '#c3c3c3',
    padding: '10px',
    border: '2px ridge #000', 
    height: '600px',
    maxHeight: '100vh',
    overflow: 'auto',
})

const StyledHeader = styled('div')({
  fontSize: '20px',
  color: 'black',
  marginTop: '30px',
  marginBottom: '0px',
  textDecoration: 'underline',
  fontWeight:  'bold',
  width: '100%',
})
const ContentContainer = styled('div')({
  marginLeft: '20px',
  marginTop: '10px',
})
const SkillContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '5px',
  marginTop: '10px',
  width: '100%',
  overflow: 'revert',
  flexWrap: 'wrap',
})

const SkillsLabel = styled('div')({
  padding: '3px',
  backgroundColor: '#7a7b7d',
  color: 'white',
  width: 'fit-content',
  height: 'fit-content',
})



function About() {
  return ( 
    <>
      <WindowContainer>
        
        <TopContainer>
          <div>
            <StyledIcon src='/portrait.png'/>
            <div>
            Hi! I'm Sean Brown, and I am a Data Scientist/Software Engineer with a focus on Machine Learning and AI. I completed my undergraduate degree in Computer Science at Simon Fraser University and am currently enrolled in the Master of Data Science (MDSc) program at the University of British Columbia. My focus extends beyond the underlying technology behind AI to its implications across various industries and its potential for innovation. In my graduate studies, I aim to deepen my understanding of data science and machine learning while exploring areas for potential application and improvement.<br></br>
            </div>
          </div>
              
          <StyledHeader>Education</StyledHeader>
          <ContentContainer>
            <div style={{fontWeight: 'bold'}}> 
                Masters of Data Science - MDSc
            </div>
            <div> 
                University of British Colombia
            </div>
            <div> 
                2025-Present
            </div>
          </ContentContainer>
          <ContentContainer>
            <div style={{fontWeight: 'bold'}}> 
                Bachelor of Science - Computer Science
            </div>
            <div> 
                Simon Fraser University
            </div>
            <div> 
                2020-2024
            </div>
          </ContentContainer>
          <StyledHeader>Technical Work Experience</StyledHeader>
          <ContentContainer>
            <div style={{fontWeight: 'bold'}}> 
                Intern Software Developer <a style={{fontWeight: 'lighter'}}> - Harris Computers </a>
            </div>
            
            <div> 
                Developing ERP systems with technologies such as React, GraphQL, and GoLang. 
            </div>
            <a style={{color: 'lighter'}}> Feb 2025 - Sept 2025 </a>
          </ContentContainer>
          <ContentContainer>
            <div style={{fontWeight: 'bold'}}> 
                Co-op Data Integration Developer <a style={{fontWeight: 'lighter'}}> - Harris Computers </a>
            </div>
            
            <div> 
                Sourced and manipulated data to present it in a meaningful way to users.
            </div>
            <a style={{fontWeight: 'lighter'}}> May 2023 - December 2023 </a>
          </ContentContainer>
          <ContentContainer>
            <div style={{fontWeight: 'bold'}}> 
                Research Assistant <a style={{fontWeight: 'lighter'}}> - AI Learnification Labs </a>
            </div>
            
            <div> 
                Co-authored paper pertaining to the use of AI in Computer Science classrooms. 
            </div>
            <a style={{fontWeight: 'lighter'}}> May 2024 - December 2024 </a>
          </ContentContainer>
          <StyledHeader>Skills</StyledHeader>
          <SkillContainer>   
          <SkillsLabel>React</SkillsLabel><SkillsLabel>Python</SkillsLabel><SkillsLabel>Java</SkillsLabel><SkillsLabel>C++</SkillsLabel><SkillsLabel>C</SkillsLabel><SkillsLabel>SQL</SkillsLabel>
          <SkillsLabel>Rust</SkillsLabel><SkillsLabel>Haskell</SkillsLabel><SkillsLabel>Git</SkillsLabel><SkillsLabel>GoLang</SkillsLabel><SkillsLabel>Javascript</SkillsLabel>
          <SkillsLabel>Typescript</SkillsLabel><SkillsLabel>MatLab</SkillsLabel><SkillsLabel>HTML</SkillsLabel>
          </SkillContainer>
          <StyledHeader>More About Me</StyledHeader>
          
          <div style={{fontWeight: 'bold', marginTop: '10px'}}>Some of my hobbies and interests outside of Tech include:</div>
          <div style={{marginLeft: '20px', marginTop: '5px',}}>
          <li>Playing and writing music. I have loved music since I was a kid and one of my favourite things to do is jam out with some friends.</li>
            <li>Sports and fitness. I like to live an active lifestyle. In the winter you'll find me hitttin the slopes and in the summer I'm usually out hiking or golfing.</li>
            <li>Movies and tv shows. I am overall just a huge movie nerd and love to geek out over cinema.</li>
 
          </div>
          
            
            
          
          
          
          
        </TopContainer>

            
      </WindowContainer>
    </>
  )
}

export default About