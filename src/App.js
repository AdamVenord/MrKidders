import React, { Component } from 'react';
import { Segment, Container, Image, Header, Button, Transition, } from 'semantic-ui-react'
import './App.css';
// import scrollToComponent from 'react-scroll-to-component'

// image imports
import welcome from './Imgs/welcome.png'
import spookyHouse from './Imgs/spookyhouse.png'
import girldog from './Imgs/girl&dog.png'
import ouijaboard from './Imgs/ouijaboard.png'
import spookydoll from './Imgs/spookydoll.png'
import spookyhallway from './Imgs/spookyhallway.png'
import spookykitchen from './Imgs/spookykitchen.png'
import scare from './Imgs/scare.png'
import Catdoormanhookdoor from './Imgs/catdoormanhookdoor.png'
import Jultan from './Imgs/Jultan.png'


export default class App extends Component {
  state = { 
  // Ghost story states
    visibleGhostButton: false,
    visibleChoiceToStayInButton: false,
    visibleOkayForScaryStories: false,
    visibleGhostButtonPart2: false,
    visibleGhostButtonPart3: false,
    visibleGhostButtonPart4: false,
    visibleGhostButtonPart5: false,
    visibleGhostButtonPart6: false,
    visibleGhostButtonPart7: false,
    visibleGhostButtonEndOfStory: false,
    visibleGhostStoryCrasher: false,
    visibleSpookySound: true,
    visibleDoorStairs: false,
    visibleFollowDownStairs: false,
    visibleLivingRoomDoll: false,
    visibleGhostAttack: false,

  // Pirate Story States
    visiblePiratesButton: false, 
  }

  // Ghost story toggles
  toggleVisibilityForGhostButton = () => 
    this.setState((prevState) => ({ visibleGhostButton: !prevState.visibleGhostButton }))
  
  toggleVisibilityForTheChoiceToStayIn = () => 
    this.setState((prevState) => ({ visibleChoiceToStayInButton: !prevState.visibleChoiceToStayInButton }))
    
  toggleVisibilityForOkayForScaryStories = () => 
    this.setState((prevState) => ({ visibleOkayForScaryStories: !prevState.visibleOkayForScaryStories }))
    
  toggleVisibilityForGhostPart2 = () => 
    this.setState((prevState) => ({ visibleGhostButtonPart2: !prevState.visibleGhostButtonPart2}))
    
  toggleVisibilityForGhostPart3 = () => 
    this.setState((prevState) => ({ visibleGhostButtonPart3: !prevState.visibleGhostButtonPart3}))
    
  toggleVisibilityForGhostPart4 = () => 
    this.setState((prevState) => ({ visibleGhostButtonPart4: !prevState.visibleGhostButtonPart4}))
    
  toggleVisibilityForGhostPart5 = () => 
    this.setState((prevState) => ({ visibleGhostButtonPart5: !prevState.visibleGhostButtonPart5}))
    
  toggleVisibilityForGhostPart6 = () => 
    this.setState((prevState) => ({ visibleGhostButtonPart6: !prevState.visibleGhostButtonPart6}))

  toggleVisibilityForGhostPart7 = () => 
    this.setState((prevState) => ({ visibleGhostButtonPart7: !prevState.visibleGhostButtonPart7}))

  toggleVisibilityForGhostEndOfStory = () => 
    this.setState((prevState) => ({ visibleGhostButtonEndOfStory: !prevState.visibleGhostButtonEndOfStory}))

  toggleVisibilityForGhostStoryCrasher = () => 
    this.setState((prevState) => ({ visibleGhostStoryCrasher: !prevState.visibleGhostStoryCrasher}))
    
  toggleVisibilityForSpookySound = () => 
    this.setState((prevState) => ({ visibleSpookySound: !prevState.visibleSpookySound}))
    
  toggleVisibilityForDoorStairs = () => 
    this.setState((prevState) => ({ visibleDoorStairs: !prevState.visibleDoorStairs}))

  toggleVisibilityForFollowDownStairs = () => 
    this.setState((prevState) => ({ visibleFollowDownStairs: !prevState.visibleFollowDownStairs}))

  toggleVisibilityForLivingRoomDoll = () => 
    this.setState((prevState) => ({ visibleLivingRoomDoll: !prevState.visibleLivingRoomDoll}))

  toggleVisibilityForGhostAttack = () => 
    this.setState((prevState) => ({ visibleGhostAttack: !prevState.visibleGhostAttack}))

    // pirate toggles
    
  toggleVisibilityForPiratesButton = () => 
      this.setState((prevState) => ({ visiblePiratesButton: !prevState.visiblePiratesButton }))

  render() {
    const { 
    // ghost states
      visibleGhostButton, 
      visibleChoiceToStayInButton, 
      visibleOkayForScaryStories, 
      visibleGhostButtonPart2, 
      visibleGhostButtonPart3,  
      visibleGhostButtonPart4,  
      visibleGhostButtonPart5,  
      visibleGhostButtonPart6,  
      visibleGhostButtonPart7,
      visibleGhostButtonEndOfStory,
      visibleGhostStoryCrasher,
      visibleSpookySound,
      visibleDoorStairs,
      visibleFollowDownStairs,
      visibleLivingRoomDoll,
      visibleGhostAttack,

    // pirate states
      visiblePiratesButton,

    } = this.state

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
                    <p>It all started on a dark and cloudly night, kind of like tonight</p>
                    <Image src={spookyHouse} />
                    <br />
                    <Button 
                      color="black"
                      content={visibleOkayForScaryStories ? 'continue' : 'woot' }                  
                      onClick={this.toggleVisibilityForGhostPart2} 
                    />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostButtonPart2} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                      A girl and her dog were sitting in her room and decided they would have some fun.
                      They grabbed a ouija board and decided to contact the master of dolls.
                      </p>
                      <Image src={girldog} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostButtonPart2 ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostPart3} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostButtonPart3} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                      They ask if the master of dolls to make an appearence and it worked!
                      The planchette moved to spell out, "okay here I come"
                      </p>
                      <Image src={ouijaboard} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostButtonPart2 ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostPart4} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostButtonPart4} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                      A doll showed up on the table and asked if they wanted to play a game.
                      They said yes and suddenly the room went dark
                      </p>
                      <Image src={spookydoll} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostButtonPart2 ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostPart5} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostButtonPart5} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                      They heard a noise coming from downstairs and made their way into the kitchen.
                      </p>
                      <Image src={spookyhallway} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostButtonPart2 ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostPart6} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostButtonPart6} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                      They froze in fear as what stood before them was a demon brought by the master of dolls
                      </p>
                      <Image src={spookykitchen} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostButtonPart2 ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostPart7} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostButtonPart7} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        suddenly it jumped at them and they got dragged into the nightmare realm
                      </p>
                      <Image src={scare} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostButtonPart7 ? 'End' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostEndOfStory} 
                      />  
                  </Segment>
                </Transition>
                
                <Transition visible={visibleGhostButtonEndOfStory} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>Aren't I a good story teller</p>
                      <Button 
                        color="black"
                        content={visibleGhostButtonEndOfStory ? 'Yes' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostStoryCrasher} 
                      />  
                      <Button 
                        color="black"
                        content={visibleGhostButtonEndOfStory ? 'No' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostStoryCrasher} 
                      /> 
                  </Segment>
                </Transition>

                {/* so next part which is going to be right after this, I want to see if I can integrate 
                sound into this (probably by using a faker sound kind of thing) I just want to look into this 
                and if it seems too difficult then I should try and get it so random spooky images come 
                onto the screen good luck and have fun */}
                <Transition visible={visibleGhostStoryCrasher} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>Wait did you hear that</p>
                      <Button 
                        color="black"
                        content={visibleGhostStoryCrasher ? 'Yes What Was It' : 'woot' }                  
                        onClick={this.toggleVisibilityForSpookySound} 
                      />  
                      <Button 
                        color="black"
                        content={visibleGhostStoryCrasher ? 'What No' : 'woot' }                  
                        onClick={this.toggleVisibilityForSpookySound} 
                      /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleSpookySound} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>Let's go check it out</p>
                      <Button 
                        color="black"
                        content={visibleSpookySound ? 'Okay' : 'woot' }                  
                        onClick={this.toggleVisibilityForDoorStairs} 
                      /> 
                      <Button 
                        color="black"
                        content={visibleSpookySound ? 'I dont know' : 'woot' }                  
                        onClick={this.toggleVisibilityForDoorStairs} 
                      /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleDoorStairs} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                      Kidders immediatly runs out the door and you can here him going down the stairs
                      </p>
                      <Image src={Catdoormanhookdoor} />
                      <br />
                      <Button 
                        color="black"
                        content={visibleDoorStairs ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForFollowDownStairs} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleFollowDownStairs} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You follow the sound of kidders, slowly and nervously making you way towards where
                        you can here him pitter pattering around
                      </p>
                      
                      <br />
                      <Button 
                        color="black"
                        content={visibleFollowDownStairs ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForLivingRoomDoll} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleLivingRoomDoll} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You walk into the living room and see kidders next to a doll, 
                        "look at what I found", he says to you 
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleLivingRoomDoll ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostAttack} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleGhostAttack} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Suddenly the doll explodes with a cloud of dust, the dust then pulls in and creates
                        a spectral wolf, you and kidders immediatly run out of the room
                      </p>
                      <Image src={Jultan} /> 
                      <br />
                      <Button 
                        color="black"
                        content={visibleGhostAttack ? 'continue' : 'woot' }                  
                        onClick={this.toggleVisibilityForGhostPart7} 
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
