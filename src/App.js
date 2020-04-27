import React, { Component } from 'react';
import { Segment, Container, Image, Header, Button } from 'semantic-ui-react'
import './App.css';
import welcome from './Imgs/welcome.png'

export default class App extends Component {
  state = { visable: true }

  toggleVisibility = () => 
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
      <>
        <Container centered>
          <Segment inverted color="purple">
            <Image src={welcome} size="large" centered />
          </Segment>
          <Header textAlign="center" color="grey">
            What Path Should We Choose?
          </Header>
          <Button inverted color="red">Pirates</Button>
          <Button inverted>Other</Button>
          <Button inverted>Other</Button>
          <Button inverted color="black">Ghost</Button>
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
