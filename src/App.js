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
import catdoll from './Imgs/catdoll.png'
import running from './Imgs/running.png'
import badending from './Imgs/Badending.png'
import sadending from './Imgs/sadending.png'


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
    visibleSpookySound: false,
    visibleDoorStairs: false,
    visibleDoNotFollow: false,
    visibleFollowDownStairs: false,
    visibleLivingRoomDoll: false,
    visibleGhostAttack: false,
    visibleRunOutside: false,
    visibleRunDownTheStreet: false,
    visibleTurnRight: false,
    visibleCrashThroughTheWindow: false,
    visibleIntoAnotherYard: false,
    visibleYetAnotherYard: false,
    visibleInThePark: false,
    visibleCornered: false,
    visibleBadEnding: false,
    visibleFightPart1: false, 
    visibleFightPart2: false, 
    visibleFightPart3: false, 
    visibleDeath: false,
    visibleHideInTheKitchen: false,
    visibleHideInSomething: false,
    visibleSneakAPeak: false,
    visibleStayQuiet: false,
    visibleHideInSomething2: false,
    visibleSneakAPeak2: false,
    visibleStayQuiet2: false,
    visibleWrongPlaceToHide: false,
    visiblePrayDeath: false,
    visibleMakeABreakDeath: false,
    visibleHoldingBreath: true, 
    visibleSafeForNow: false, 

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

  toggleVisibilityForDoNotFollow = () => 
    this.setState((prevState) => ({ visibleDoNotFollow: !prevState.visibleDoNotFollow}))

  toggleVisibilityForLivingRoomDoll = () => 
    this.setState((prevState) => ({ visibleLivingRoomDoll: !prevState.visibleLivingRoomDoll}))

  toggleVisibilityForGhostAttack = () => 
    this.setState((prevState) => ({ visibleGhostAttack: !prevState.visibleGhostAttack}))

  toggleVisibilityForRunOutside = () => 
    this.setState((prevState) => ({ visibleRunOutside: !prevState.visibleRunOutside}))

  toggleVisibilityForRunDownTheStreet = () => 
    this.setState((prevState) => ({ visibleRunDownTheStreet: !prevState.visibleRunDownTheStreet}))

  toggleVisibilityForTurnRight = () => 
    this.setState((prevState) => ({ visibleTurnRight: !prevState.visibleTurnRight}))

  toggleVisibilityForCrashThroughTheWindow = () => 
    this.setState((prevState) => ({ visibleCrashThroughTheWindow: !prevState.visibleCrashThroughTheWindow}))

  toggleVisibilityForIntoAnotherYard = () => 
    this.setState((prevState) => ({ visibleIntoAnotherYard: !prevState.visibleIntoAnotherYard}))

  toggleVisibilityForYetAnotherYard = () => 
    this.setState((prevState) => ({ visibleYetAnotherYard: !prevState.visibleYetAnotherYard}))

  toggleVisibilityForInThePark = () => 
    this.setState((prevState) => ({ visibleInThePark: !prevState.visibleInThePark}))

  toggleVisibilityForCornered = () => 
    this.setState((prevState) => ({ visibleCornered: !prevState.visibleCornered}))

  toggleVisibilityForDeath = () => 
    this.setState((prevState) => ({ visibleDeath: !prevState.visibleDeath}))

  toggleVisibilityForBadEnding = () => 
    this.setState((prevState) => ({ visibleBadEnding: !prevState.visibleBadEnding}))

  toggleVisibilityForFight1 = () => 
    this.setState((prevState) => ({ visibleFightPart1: !prevState.visibleFightPart1}))

  toggleVisibilityForFight2 = () => 
    this.setState((prevState) => ({ visibleFightPart2: !prevState.visibleFightPart2}))

  toggleVisibilityForFight3 = () => 
    this.setState((prevState) => ({ visibleFightPart3: !prevState.visibleFightPart3}))

  toggleVisibilityForHideInTheKitchen = () => 
    this.setState((prevState) => ({ visibleHideInTheKitchen: !prevState.visibleHideInTheKitchen}))

  toggleVisibilityForHideInSomething = () => 
    this.setState((prevState) => ({ visibleHideInSomething: !prevState.visibleHideInSomething}))

  toggleVisibilityForSneakAPeak = () => 
    this.setState((prevState) => ({ visibleSneakAPeak: !prevState.visibleSneakAPeak}))
    
  toggleVisibilityForStayQuiet = () => 
    this.setState((prevState) => ({ visibleStayQuiet: !prevState.visibleStayQuiet}))

  toggleVisibilityForHideInSomething2 = () => 
    this.setState((prevState) => ({ visibleHideInSomething2: !prevState.visibleHideInSomething2}))

  toggleVisibilityForSneakAPeak2 = () => 
    this.setState((prevState) => ({ visibleSneakAPeak2: !prevState.visibleSneakAPeak2}))
    
  toggleVisibilityForStayQuiet2 = () => 
    this.setState((prevState) => ({ visibleStayQuiet2: !prevState.visibleStayQuiet2}))

  toggleVisibilityForWrongPlaceToHide = () => 
    this.setState((prevState) => ({ visibleWrongPlaceToHide: !prevState.visibleWrongPlaceToHide}))

  toggleVisibilityForPrayDeath = () => 
    this.setState((prevState) => ({ visiblePrayDeath: !prevState.visiblePrayDeath}))

  toggleVisibilityForMakeABreakDeath = () => 
    this.setState((prevState) => ({ visibleMakeABreakDeath: !prevState.visibleMakeABreakDeath}))

  toggleVisibilityForHoldingBreath = () => 
    this.setState((prevState) => ({ visibleHoldingBreath: !prevState.visibleHoldingBreath}))

  toggleVisibilityForSafeForNow = () => 
    this.setState((prevState) => ({ visibleSafeForNow: !prevState.visibleSafeForNow}))

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
      visibleDoNotFollow,
      visibleLivingRoomDoll,
      visibleGhostAttack,
      visibleRunOutside,
      visibleRunDownTheStreet,
      visibleTurnRight,
      visibleCrashThroughTheWindow,
      visibleIntoAnotherYard,
      visibleYetAnotherYard,
      visibleInThePark,
      visibleCornered,
      visibleDeath,
      visibleBadEnding,
      visibleFightPart1,
      visibleFightPart2,
      visibleFightPart3,
      visibleHideInTheKitchen,
      visibleHideInSomething,
      visibleSneakAPeak,
      visibleStayQuiet,
      visibleHideInSomething2,
      visibleSneakAPeak2,
      visibleStayQuiet2,
      visibleWrongPlaceToHide,
      visiblePrayDeath,
      visibleMakeABreakDeath,
      visibleHoldingBreath,
      visibleSafeForNow,


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
          {/* Change this segment so after it shows up it says begin, then once you click begin 
          it disapears. I feel like it would be alot nicer and flow better with the project :] */}
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
                towards the end */}
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

                {/*  so I want to experiment with this area during design phase, 
                possibly adding sounds and scares  */}

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
                        content={visibleDoorStairs ? 'Follow' : 'woot' }                  
                        onClick={this.toggleVisibilityForFollowDownStairs} 
                      />  
                      <Button 
                        color="black"
                        content={visibleDoorStairs ? 'Do Not Follow' : 'woot' }                  
                        onClick={this.toggleVisibilityForDoNotFollow} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleDoNotFollow} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Kidders disappeared that night, you sometimes wondered what would have happend if you had gone with him
                      </p>
                      <Image src={sadending} />
                      <br />

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
                      <Image src={catdoll} />
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
                        content={visibleGhostAttack ? 'Run' : 'woot' }                  
                        onClick={this.toggleVisibilityForRunOutside} 
                      />  
                      <Button 
                        color="black"
                        content={visibleGhostAttack ? 'Hide' : 'woot' }                  
                        onClick={this.toggleVisibilityForHideInTheKitchen} 
                      />  
                  </Segment>
                </Transition>

                {/* start of hide story line */}

                <Transition visible={visibleHideInTheKitchen} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Kidders yells, "come on". As you both run into the kitchen
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleHideInTheKitchen ? 'Jump Into The Closet' : 'woot' }                  
                        onClick={this.toggleVisibilityForHideInSomething2} 
                      />  
                      <Button 
                        color="black"
                        content={visibleHideInTheKitchen ? 'Go Under The Sink' : 'woot' }                  
                        onClick={this.toggleVisibilityForHideInSomething} 
                      />  
                  </Segment>
                </Transition>

                <Transition visible={visibleHideInSomething} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You and Kidders rush to hide and close the door quickly behind you and wait, 
                        for a second theres nothing but silence
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleHideInSomething ? 'Stay Quietly' : 'woot' }                  
                        onClick={this.toggleVisibilityForStayQuiet} 
                      /> 
                      <Button 
                        color="black"
                        content={visibleHideInSomething ? 'Sneak A peak' : 'woot' }                  
                        onClick={this.toggleVisibilityForSneakAPeak} 
                      /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleSneakAPeak} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You and Kidders open the door slightly and take a look. Suddenly the door slams open and 
                        you watch as kidders is swallowed whole and the last thing you see is a pair of jaws coming at you
                      </p>
                      <Image src={badending} />   
                  </Segment>
                </Transition>

                <Transition visible={visibleStayQuiet} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You hear a glass break from across the room and you wonder what to do
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleStayQuiet ? 'Pray For Mercy' : 'woot' }                  
                        onClick={this.toggleVisibilityForPrayDeath} 
                      /> 
                      <Button 
                        color="black"
                        content={visibleStayQuiet ? 'Hold Your Breath' : 'woot' }                  
                        onClick={this.toggleVisibilityForHoldingBreath} 
                      /> 

                      <Button 
                        color="black"
                        content={visibleStayQuiet ? 'Make A Break For It' : 'woot' }                  
                        onClick={this.toggleVisibilityForMakeABreakDeath} 
                      /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleHideInSomething2} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You and Kidders rush to hide and close the door quickly behind you and wait, 
                        for a second theres nothing but silence
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleHideInSomething2 ? 'Stay Quietly' : 'woot' }                  
                        onClick={this.toggleVisibilityForStayQuiet2} 
                      /> 
                      <Button 
                        color="black"
                        content={visibleHideInSomething2 ? 'Sneak A peak' : 'woot' }                  
                        onClick={this.toggleVisibilityForSneakAPeak2} 
                      /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleSneakAPeak2} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You and Kidders open the door slightly and take a look. Suddenly the door slams open and 
                        you watch as kidders is swallowed whole and the last thing you see is a pair of jaws coming at you
                      </p>
                      <Image src={badending} />   
                  </Segment>
                </Transition>

                <Transition visible={visibleStayQuiet2} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You hear a glass break from across the room and wonder what to do
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleStayQuiet2 ? 'Pray For Mercy' : 'woot' }                  
                        onClick={this.toggleVisibilityForPrayDeath} 
                      /> 
                      <Button 
                        color="black"
                        content={visibleStayQuiet2 ? 'Hold Your Breath' : 'woot' }                  
                        onClick={this.toggleVisibilityForWrongPlaceToHide} 
                      /> 

                      <Button 
                        color="black"
                        content={visibleStayQuiet2 ? 'Make A Break For It' : 'woot' }                  
                        onClick={this.toggleVisibilityForMakeABreakDeath} 
                      /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleWrongPlaceToHide} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        For a second nothing happens, then suddenly the door is ripped off its hinges
                        then kidders and you are torn apart 
                      </p>
                      <br />
                      <Image src={badending} /> 
                  </Segment>
                </Transition>

                <Transition visible={visiblePrayDeath} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You pray to your god quietly, but the wolf hears you and tears the door off it's 
                        hinges. The last thing you see is a claw flying at your face
                      </p>
                      <br />
                      <Image src={badending} /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleMakeABreakDeath} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Kidders and you decide to make a break for it and run out of the kitchen at full speed,
                        you don't make it very far before the ghost tears you in half and the last thing you see
                        is kidders being chased into another room
                      </p>
                      <br />
                      <Image src={badending} /> 
                  </Segment>
                </Transition>

                <Transition visible={visibleHoldingBreath} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You hold your breath and cover kidders mouth, from across the room you hear the ghost
                        tear the hinges off of the closet door. Then slowly creep out of the room
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleHoldingBreath ? 'Relief' : 'woot' }                  
                        onClick={this.toggleVisibilityForSafeForNow}
                      /> 
                     
                  </Segment>
                </Transition>

                <Transition visible={visibleSafeForNow} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You take a sigh of relief and think to yourself how to get out of this situation. Before you can think
                         of anything kidders says I have an idea.
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleSafeForNow ? 'What is your wisdom kidders' : 'woot' }                  
                        // onClick={this.toggleVisibilityForPrayDeath}
                      /> 
                      <Button 
                        color="black"
                        content={visibleSafeForNow ? 'I have a better idea' : 'woot' }                  
                        // onClick={this.toggleVisibilityForPrayDeath}
                      /> 
                     
                  </Segment>
                </Transition>

                {/* Do a double copy of the story so that if you choose to go into the closet you'll die,
              but it will seem like the same except you'll randomly die :} */}

                           .-.
              heehee      /aa \_
                        __\-  / )                 .-.
              .-.      (__/    /        haha    _/oo \
            _/ ..\       /     \               ( \v  /__
            ( \  u/__    /       \__             \/   ___)
            \    \__)   \_.-._._   )  .-.       /     \
            /     \             `-`  / ee\_    /       \_
          __/       \               __\  o/ )   \_.-.__   )
        (   _._.-._/     hoho     (___   \/           '-'
      jgs '-'                        /     \
                                  _/       \    teehee
                                  (   __.-._/

                {/* end of hide story line */}

                {/* run outside story line aka death scene 1 */}

                <Transition visible={visibleRunOutside} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You and kidders run out the door at full speed and down the street all while 
                        you can hear it's ghostly paws chasing you down
                      </p>
                      <Image src={running} /> 
                      <br />
                      <Button 
                        color="black"
                        content={visibleRunOutside ? 'Keep Running' : 'woot' }                  
                        onClick={this.toggleVisibilityForRunDownTheStreet} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleRunDownTheStreet} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You come to a cross roads at the end of the street
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleRunDownTheStreet ? 'Go Left Into The Park' : 'woot' }                  
                        onClick={this.toggleVisibilityForInThePark} 
                      />
                      <Button 
                        color="black"
                        content={visibleRunDownTheStreet ? 'Turn Right And Keep Running Down The Street' : 'woot' }                  
                        onClick={this.toggleVisibilityForTurnRight} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleTurnRight} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You Turn Right and keep running hopeing you have lost him. Suddenly he hops in front of you
                        and screams a ghostly howl, you run into a nearby house and close the door behind you
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleRunDownTheStreet ? 'Conitnue' : 'woot' }                  
                        onClick={this.toggleVisibilityForCrashThroughTheWindow} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleCrashThroughTheWindow} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You hear the ghost crash through the window and you immediately run out of the 
                        house through the back door and hop over the fence
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleCrashThroughTheWindow ? 'Conitnue' : 'woot' }                  
                        onClick={this.toggleVisibilityForIntoAnotherYard} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleIntoAnotherYard} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        hopping into another yard you hear it smash through the fence behind you
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleIntoAnotherYard ? 'Conitnue' : 'woot' }                  
                        onClick={this.toggleVisibilityForYetAnotherYard} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleYetAnotherYard} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Running very quickly you and kiders take one last hop over another fence
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleYetAnotherYard ? 'Conitnue' : 'woot' }                  
                        onClick={this.toggleVisibilityForInThePark} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleInThePark} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You end up in the park with the ghost hot on your tail
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleInThePark ? 'Conitnue' : 'woot' }                  
                        onClick={this.toggleVisibilityForCornered} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleCornered} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Coming into a small circle of trees you and kidders have no where left to run
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Fight' : 'woot' }                  
                        onClick={this.toggleVisibilityForFight1} 
                      />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Do Nothing' : 'woot' }                  
                        onClick={this.toggleVisibilityForDeath} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleFightPart1} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You and kidders pick up a nearby tree branch and try and fight the ghost
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Try and Hit Him' : 'woot' }                  
                        onClick={this.toggleVisibilityForDeath} 
                      />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Let Kidders get the first hit' : 'woot' }                  
                        onClick={this.toggleVisibilityForFight2} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleFightPart2} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        Kidders gets the first hit on him and as you go for a second you 
                        notice that your branch goes straight through it
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Pick up kidders and hit him with him' : 'woot' }                  
                        onClick={this.toggleVisibilityForFight3} 
                      />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Try to hit him again' : 'woot' }                  
                        onClick={this.toggleVisibilityForDeath} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleFightPart3} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        You pick up kidders and with a swift smack you hit the ghost and noticably hurt it.
                         Kidders tells you to do it again. You swing again and the ghost grabs kidders and tosses him
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Run for kidders' : 'woot' }                  
                        onClick={this.toggleVisibilityForDeath} 
                      />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Try and fight' : 'woot' }                  
                        onClick={this.toggleVisibilityForDeath} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleDeath} animation='drop' duration={500}>
                  <Segment>
                    <br />
                      <p>
                        With a quick stab the ghost pierces your heart and tears your chest apart, 
                        then disapears as your world goes dark
                      </p>
                      <br />
                      <Button 
                        color="black"
                        content={visibleCornered ? 'Oh No' : 'woot' }                  
                        onClick={this.toggleVisibilityForBadEnding} 
                      />
                  </Segment>
                </Transition>

                <Transition visible={visibleBadEnding} animation='drop' duration={500}>
                  <Segment>
                      <Image src={badending} />
                  </Segment>
                </Transition>

                {/* run outside storyline end */}

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
