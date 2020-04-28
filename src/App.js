import React, { Component } from 'react';
import { Segment, Container, Image, Header, Button, Transition } from 'semantic-ui-react'
import './App.css';
import welcome from './Imgs/welcome.png'

export default class App extends Component {
  // change the visible names after you figure it out
  state = { 
    visible1: false, 
    // visible2: false,
    // visible3: false,
    visible4: false,
  }

  // its currently making only the ghost story work no matter what button I click on
  // my guess is to take a look at the buttons themselves
  // good luck future me


  toggleVisibility = () => 
    this.setState((prevState) => ({ visible1: !prevState.visible1 }))

  toggleVisibility = () => 
    this.setState((prevState) => ({ visible4: !prevState.visible4 }))

  render() {
    const { visible1, visible4 } = this.state

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
            content={visible1 ? 'Show' : 'Hide' }
            onClick={this.toggleVisibility}
          />
          <Button inverted>Other</Button>
          <Button inverted>Other</Button>
          <Button 
            inverted
            color="black"
            content={visible4 ? 'Show' : 'Hide' }
            onClick={this.toggleVisibility}
          />
          {/* pirates storyline */}
            <Transition visible={visible1} animation='drop' duration={500}>
              <Segment>
                Begin Pirates Life
              </Segment>
            </Transition>
          {/* end of pirates storyline */}

          {/* ghost storyline */}
            <Transition visible={visible4} animation='drop' duration={500}>
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
