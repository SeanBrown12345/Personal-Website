import './App.css'
import { styled } from '@mui/material/styles'



const StyledIcon = styled('img')({
    width: '250px',
    height: '250px',
    float: 'left',
    marginRight: '10px'
    

})


const WindowContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    backgroundColor: '#7a7b7d',
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
    border: '2px solid #000', // Add a solid border
})

const StyledTitle = styled('h1')({
    fontSize: '24px',
    textAlign: 'center',
    color: 'black',

})



function About() {


  return ( 
    <>
      <WindowContainer>
      
        
        <TopContainer>
            <StyledTitle>About Me, Sean brown</StyledTitle>
            <StyledIcon src='./portrait.png'/>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis egestas eros. Vivamus eget nisi convallis orci porttitor pharetra non ut tellus. Donec luctus vel turpis sed malesuada. Etiam accumsan velit non purus lobortis malesuada. Sed posuere odio at turpis efficitur congue. Aliquam eu pharetra quam. Morbi euismod, nisl eget aliquet dapibus, leo mi laoreet velit, sit amet luctus sem dui id velit. Mauris convallis finibus sem, et vulputate magna auctor ac. Nunc risus erat, auctor nec faucibus in, faucibus sed lorem. Sed interdum aliquam ultricies. Nullam eleifend turpis ligula, non auctor mauris faucibus scelerisque. Ut non velit a augue porttitor consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis egestas eros. Vivamus eget nisi convallis orci porttitor pharetra non ut tellus. Donec luctus vel turpis sed malesuada. Etiam accumsan velit non purus lobortis malesuada. Sed posuere odio at turpis efficitur congue. Aliquam eu pharetra quam. Morbi euismod, nisl eget aliquet dapibus, leo mi laoreet velit, sit amet luctus sem dui id velit. Mauris convallis finibus sem, et vulputate magna auctor ac. Nunc risus erat, auctor nec faucibus in, faucibus sed lorem. Sed interdum aliquam ultricies. Nullam eleifend turpis ligula, non auctor mauris faucibus scelerisque. Ut non velit a augue porttitor consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis egestas eros. Vivamus eget nisi convallis orci porttitor pharetra non ut tellus. Donec luctus vel turpis sed malesuada. Etiam accumsan velit non purus lobortis malesuada. Sed posuere odio at turpis efficitur congue. Aliquam eu pharetra quam. Morbi euismod, nisl eget aliquet dapibus, leo mi laoreet velit, sit amet luctus sem dui id velit. Mauris convallis finibus sem, et vulputate magna auctor ac. Nunc risus erat, auctor nec faucibus in, faucibus sed lorem. Sed interdum aliquam ultricies. Nullam eleifend turpis ligula, non auctor mauris faucibus scelerisque. Ut non velit a augue porttitor consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis egestas eros. Vivamus eget nisi convallis orci porttitor pharetra non ut tellus. Donec luctus vel turpis sed malesuada. Etiam accumsan velit non purus lobortis malesuada. Sed posuere odio at turpis efficitur congue. Aliquam eu pharetra quam. Morbi euismod, nisl eget aliquet dapibus, leo mi laoreet velit, sit amet luctus sem dui id velit. Mauris convallis finibus sem, et vulputate magna auctor ac. Nunc risus erat, auctor nec faucibus in, faucibus sed lorem. Sed interdum aliquam ultricies. Nullam eleifend turpis ligula, non auctor mauris faucibus scelerisque. Ut non velit a augue porttitor consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis egestas eros. Vivamus eget nisi convallis orci porttitor pharetra non ut tellus. Donec luctus vel turpis sed malesuada. Etiam accumsan velit non purus lobortis malesuada. Sed posuere odio at turpis efficitur congue. Aliquam eu pharetra quam. Morbi euismod, nisl eget aliquet dapibus, leo mi laoreet velit, sit amet luctus sem dui id velit. Mauris convallis finibus sem, et vulputate magna auctor ac. Nunc risus erat, auctor nec faucibus in, faucibus sed lorem. Sed interdum aliquam ultricies. Nullam eleifend turpis ligula, non auctor mauris faucibus scelerisque. Ut non velit a augue porttitor consectetur.
            </div>
        </TopContainer>
            
      </WindowContainer>
    </>
  )
}

export default About