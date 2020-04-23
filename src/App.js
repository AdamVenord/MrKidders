import React from 'react';
import { Segment, Container, Image } from 'semantic-ui-react'
import './App.css';
import welcome from './Imgs/welcome.png'

function App() {
  return (
    <>
      <Container>
        <Segment inverted color="purple">
          <Image src={welcome} size="large" centered />
        </Segment>
      </Container>
    </>
  );
}

export default App;
