import React, { Component } from 'react';
import { Segment, Container, Image, Header, Button, Transition, } from 'semantic-ui-react'
import './App.css';
// import scrollToComponent from 'react-scroll-to-component'
import welcome from './Imgs/welcome.png'
import spookyHouse from './Imgs/spookyhouse.png'


export default class App extends Component {
  state = { 
    visibleGhostButton: false,
    visiblePiratesButton: false, 
    visibleChoiceToStayInButton: false,
    visibleOkayForScaryStories: false,
  }


  toggleVisibilityForGhostButton = () => 
    this.setState((prevState) => ({ visibleGhostButton: !prevState.visibleGhostButton }))
  
  toggleVisibilityForPiratesButton = () => 
    this.setState((prevState) => ({ visiblePiratesButton: !prevState.visiblePiratesButton }))

  toggleVisibilityForTheChoiceToStayIn = () => 
    this.setState((prevState) => ({ visibleChoiceToStayInButton: !prevState.visibleChoiceToStayInButton }))

  toggleVisibilityForOkayForScaryStories = () => 
    this.setState((prevState) => ({ visibleOkayForScaryStories: !prevState.visibleOkayForScaryStories }))

  render() {
    const { visiblePiratesButton, visibleGhostButton, visibleChoiceToStayInButton, visibleOkayForScaryStories } = this.state

    return (
      <>
      <br />
      <br />
      <br />
      <br />
        <Container centered>
          <Segment inverted color="purple">
            <Image src={welcome} size="large" centered />
          </Segment>
          <Header textAlign="center" color="grey">
            What Path Should We Choose?
          </Header>
          <Button 
            inverted
            color="black"
            content={visibleGhostButton ? 'Hide' : 'Ghost' }
            onClick={this.toggleVisibilityForGhostButton}
          />
          <Button 
            inverted 
            color="red"
            content={visiblePiratesButton ? 'Hide' : 'Show' }
            onClick={this.toggleVisibilityForPiratesButton}
          />
          <Button inverted>Other</Button>
          <Button inverted>Other</Button>
          {/* ghost storyline */}
            <Transition visible={visibleGhostButton} animation='drop' duration={500}>
              <Segment>
                <p>This Story begins on a dark cloudy night. We're both wondering what
                  we should do with the night
                </p>
                <Button 
                  inverted 
                  color="blue"
                  content={visibleChoiceToStayInButton ? 'woot' : 'Stay In' }                  
                  onClick={this.toggleVisibilityForTheChoiceToStayIn} 
                />
                <Button>
                  Go Out
                </Button>
              </Segment>
            </Transition>
              {/* Choice to stay in story line */}
                <Transition visible={visibleChoiceToStayInButton} animation='drop' duration={500}>
                  <Segment>
                    <p>Oh Fun, In that case let's tell scary stories</p>
                    <Button 
                      inverted 
                      color="blue"
                      content={visibleOkayForScaryStories ? 'woot' : 'Okay' }                  
                      onClick={this.toggleVisibilityForOkayForScaryStories} 
                    />
                  </Segment>
                  {/* Put an image of kidders with a light bulb over his head */}
                </Transition>

                {/* So in this transition I want several stroy things to show up
                this includes things such as words, photos, snippets, and scary faces
                towards the end, I want mr kidders to tell the full story before
                the user has a chance to say anything or mkake any choices, I wanna 
                try this with a sleeper, but im still not sure on how to do that,
                so this would be a good time to look into that, good luck me */}
                <Transition visible={visibleOkayForScaryStories} animation='drop' duration={500}>
                  <Segment>
                    <Image src={spookyHouse} />
                       <p>It all started on a dark and cloudly night, kind of like tonight</p>
                       <Button 
                        inverted 
                        color="black"
                        content={visibleOkayForScaryStories ? 'continue' : 'woot' }                  
                        // onClick={this.toggleVisibilityForOkayForScaryStories} 
                      />  
                  </Segment>
                    
                </Transition>
              {/* Choice to stay in story line ending */}

              {/* end of ghost storyline */}

              {/* pirates storyline */}
                <Transition visible={visiblePiratesButton} animation='drop' duration={500}>
                  <Segment>
                    Begin Pirates Life
                  </Segment>
                </Transition>
              {/* end of pirates storyline */}

          
          {/* start each story we are going to try and make each story line be in their 
          corresponding button, figure out more on this later, but it will be a great 
          way to keep track of where each story line is in the code */}
        </Container>
      <br />
      <br />
      <br />
      <br />
      </>
    );
  }
}

// export default App;
