import React, { Component } from 'react';
import { Segment, Container, Image, Header, Button, Transition } from 'semantic-ui-react'
import './App.css';
import welcome from './Imgs/welcome.png'

export default class App extends Component {
  // change the visible names after you figure it out
  state = { 
    visiblePiratesButton: false, 
    // visible2: false,
    // visible3: false,
    visibleGhostButton: false,
  }


  toggleVisibilityForPiratesButton = () => 
    this.setState((prevState) => ({ visiblePiratesButton: !prevState.visiblePiratesButton }))

  toggleVisibilityForGhostButton = () => 
    this.setState((prevState) => ({ visibleGhostButton: !prevState.visibleGhostButton }))

  render() {
    const { visiblePiratesButton, visibleGhostButton } = this.state

    return (
      <>
        <Container centered>
          <Segment inverted color="purple">
            <Image src={welcome} size="large" centered />
          </Segment>
          <Header textAlign="center" color="grey">
            What Path Should We Choose?
          </Header>
          <Button 
            inverted 
            color="red"
            content={visiblePiratesButton ? 'Show' : 'Hide' }
            onClick={this.toggleVisibilityForPiratesButton}
          />
          <Button inverted>Other</Button>
          <Button inverted>Other</Button>
          <Button 
            inverted
            color="black"
            content={visibleGhostButton ? 'Show' : 'Hide' }
            onClick={this.toggleVisibilityForGhostButton}
          />
          {/* pirates storyline */}
            <Transition visible={visiblePiratesButton} animation='drop' duration={500}>
              <Segment>
                Begin Pirates Life
              </Segment>
            </Transition>
          {/* end of pirates storyline */}

          {/* ghost storyline */}
            <Transition visible={visibleGhostButton} animation='drop' duration={500}>
              <Segment>
                Begin Ghost Story
              </Segment>
            </Transition>
          {/* end of ghost storyline */}
          
          {/* put in the transition for the next part here, also when we start each story we 
          are going to try and make each story line be in their corresponding button,
          figure out more on this later, but it will be a great way to keep track of where
          each story line is in the code */}
        </Container>
      </>
    );
  }
}

// export default App;
