    //-------------------------------------------
    // RUMBA FIGURES
    var rumbaFigures = {
        'HipTwists' : 
          {
            'name' : 'Hip Twists (Advanced, Continuous and Circular)',
            'level' : 'Gold'
          },
        'ThreeAlemanas' : 
          {
            'name' : 'Three Alemanas',
            'level' : 'Gold'
          },
        'ThreeThrees' : 
          {
            'name' : 'Three Threes',
            'level' : 'Gold'
          },
        'Fencing' : 
          {
            'name' : 'Fencing',
            'level' : 'Gold'
          },
        'SlidingDoors' : 
          {
            'name' : 'Sliding Doors',
            'level' : 'Gold'
          },
        'Spiral' : 
          {
            'name' : 'Spiral',
            'level' : 'Silver'
          },
        'Curl' : 
          {
            'name' : 'Curl',
            'level' : 'Silver'
          },
        'RopeSpinning' : 
          {
            'name' : 'Rope Spinning',
            'level' : 'Silver'
          },
        'Aida' : 
          {
            'name' : 'Aida',
            'level' : 'Silver'
          },
        'OpeningOutFromReverseTop' : 
          {
            'name' : 'Opening Out From Reverse Top',
            'level' : 'Silver'
          },
        'ReverseTop' : 
          {
            'name' : 'Reverse Top',
            'level' : 'Silver'
          },
        'OpenHipTwist' : 
          {
            'name' : 'Open Hip Twist',
            'level' : 'Silver'
          },
        'ClosedHipTwist' : 
          {
            'name' : 'Closed Hip Twist',
            'urlpath' : '/closed-hip-twist',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'NaturalOpeningOutMovement' : 
          {
            'name' : 'Natural Opening Out Movement',
            'urlpath' : '/natural-opening-out-movement',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'OpeningOutToRightAndLeft' : 
          {
            'name' : 'Opening Out To Right And Left',
            'urlpath' : '/opening-out-to-right-and-left',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'NaturalTop' : 
          {
            'name' : 'Natural Top',
            'urlpath' : '/natural-top',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'HockeyStick' : 
          {
            'name' : 'Hockey Stick',
            'urlpath' : '/hockey-stick',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'Alemana' : 
          {
            'name' : 'Alemana',
            'urlpath' : '/alemana',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'Fan' : 
          {
            'name' : 'Fan',
            'urlpath' : '/fan',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovements'
                }
              ]
          },
        'CubanRocks' : 
          {
            'name' : 'Cuban Rocks',
            'urlpath' : '/cuban-rocks',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYork',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHand',
                   'comment' : ''
                },
                {
                   'id' : 'SideSteps',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'Standard, or at Gold Level, use Syncopated Cuban Rock'
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                }
              ]
          },
        'SideSteps' : 
          {
            'name' : 'Side Steps',
            'urlpath' : '/side-steps',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYork',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulder',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHand',
                   'comment' : ''
                },
                {
                   'id' : 'SideSteps',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'Standard, or at Gold Level, use Syncopated Cuban Rock'
                },
                {
                   'id' : 'Cucarachas',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                }
              ]
          },
        'ProgressiveWalks' : 
          {
            'name' : 'Progressive Walks',
            'urlpath' : '/progressive-walks',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'following Progressive Walks back with last step LF side turning slightly R, Lady RF fwd'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'to R to continue with Rope Spinning'
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : 'after Progressive Walks forward in either LSP or RSP ending last step to side facing partner'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'after Progressive Walks forward in either LSP or RSP ending last step to side facing partner'
                },
                {
                   'id' : 'HandToHand',
                   'comment' : 'after Progressive Walks forward in either LSP or RSP ending last step to side facing partner'
                },
                {
                   'id' : 'SideSteps',
                   'comment' : 'after Progressive Walks forward in either LSP or RSP ending last step to side facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'after Progressive Walks forward in either LSP or RSP ending last step to side facing partner'
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'after Progressive Walks forward in either LSP or RSP ending last step to side facing partner; at Gold level, do Syncopated Cuban Rock'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'after Progressive Walks forward in RSP ending last step to side facing partner'
                }
              ]
          },
        'HandToHand' : 
          {
            'name' : 'Hand To Hand',
            'urlpath' : '/hand-to-hand',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'ShoulderToShoulder',
                   'comment' : 'opposite side'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHand',
                   'comment' : ''
                },
                {
                   'id' : 'SideSteps',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'Standard, or at Gold Level, use Syncopated Cuban Rock'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'Fan following Hand to Hand to LSP; 4-6 Fan following Hand To Hand to RSP, lady in line'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, leading lady with R hand to turn R, then changing to L to R hand hold on 5'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'Spiral after Hand to Hand to RSP- ending with Man close RF to LF and lead Lady to turn L into her spiral action on 3 to continue with 4-6 of Spiral'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'Rope Spinning after Hand to Hand to LSP - Man close RF to LF and lead Lady to turn R into her spiral action on 3 to continue with Rope Spinning'
                }
              ]
          },
        'ShoulderToShoulder' : 
          {
            'name' : 'Shoulder To Shoulder',
            'urlpath' : '/shoulder-to-shoulder',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'ShoulderToShoulder',
                   'comment' : 'opposite side'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHand',
                   'comment' : ''
                },
                {
                   'id' : 'SideSteps',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'Standard, or at Gold Level, use Syncopated Cuban Rock'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6 after Left side Shoulder to Shoulder, full Fan after Right side shoulder to shoulder'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : ''
                },
                {
                   'id' : 'NewYork',
                   'comment' : 'when ending in Open PP'
                }
              ]
          },
        'SpotTurn' : 
          {
            'name' : 'Spot or Switch Turn',
            'urlpath' : '/spot-turns',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending in either open or closed position; after 1-3 Open basic, follow with Natural Top, or Progressive Walks Back'
                },
                {
                   'id' : 'BasicMovementsClosed'
                },
                {
                   'id' : 'NewYork'
                },
                {
                   'id' : 'SpotTurn'
                },
                {
                   'id' : 'UnderarmTurn'
                },
                {
                   'id' : 'HandToHand'
                },
                {
                   'id' : 'SideSteps'
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'Standard or at Gold level use RF Syncopated Cuban Rocks after Spot or Switch Turn to R'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, after Spot or Switch Turn to R'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'after Spot or Switch Turn to R'
                }
              ]
          },
        'UnderarmTurn' : 
          {
            'name' : 'Underarm Turn',
            'urlpath' : '/spot-turns',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen'
                },
                {
                   'id' : 'BasicMovementsClosed'
                },
                {
                   'id' : 'NewYork'
                },
                {
                   'id' : 'SpotTurn'
                },
                {
                   'id' : 'UnderarmTurn'
                },
                {
                   'id' : 'HandToHand'
                },
                {
                   'id' : 'SideSteps'
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'Standard or at Gold level, use syncopated Cuban Rocks'
                },
                {
                   'id' : 'Fan'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'turning slightly R and leading Lady to step RF fwd on last step of Underarm Turn L',
                },
                {
                   'id' : 'Aida'
                },
                {
                   'id' : 'ShoulderToShoulder',
                   'comment' : 'L side, when following Underarm Turn to R'
                }
              ]
          },
        'NewYork' : 
          {
            'name' : 'New York',
            'urlpath' : '/new-york',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'NewYork',
                   'comment' : 'to opposite side, when ending in Open PP'
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : 'to opposite side, when ending in Open PP'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to R, when ending facing partner'
                },
                {
                   'id' : 'HandToHand'
                },
                {
                   'id' : 'SideSteps'
                },
                {
                   'id' : 'CubanRocks'
                },
                {
                   'id' : 'Fan'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when New York LSP ends facing parter'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to L following New York RSP, when ending in Open PP'
                }
              ]
          },
        'Cucarachas' : 
          {
            'name' : 'Cucarachas',
            'urlpath' : '/cucarachas',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                    'comment' : 'skip 1-3 for LF Cucaracha'
                },
                {
                   'id' : 'BasicMovementsClosed',
                    'comment' : 'skip 1-3 for LF Cucaracha'
                },
                {
                   'id' : 'Cucarachas'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to R, following LF Cucaracha'
                },
                {
                   'id' : 'SideSteps'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'for LF Cucaracha, go directly to 4-6 of Fan, lady in line on 4'
                }
              ]
          },
        'Cucarachas' : 
          {
            'name' : 'Cucarachas',
            'urlpath' : '/cucarachas',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                    'comment' : 'skip 1-3 for LF Cucaracha'
                },
                {
                   'id' : 'BasicMovementsClosed',
                    'comment' : 'skip 1-3 for LF Cucaracha'
                },
                {
                   'id' : 'Cucarachas'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to R, following LF Cucaracha'
                },
                {
                   'id' : 'SideSteps'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'for LF Cucaracha, go directly to 4-6 of Fan, lady in line on 4'
                }
              ]
          },
        'BasicMovementsClosed' : 
          {
            'name' : 'Basic Movements: Closed',
            'urlpath' : '/basic-movements',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYork',
                   'comment' : 'LSP, having turned to Open CPP on last step'
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : 'to R'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to L'
                },
                {
                   'id' : 'ShoulderToShoulder',
                   'comment' : 'L side'
                },
                {
                   'id' : 'SideSteps',
                   'comment' : 'L or R'
                },
                {
                   'id' : 'HandToHand',
                   'comment' : 'RSP'
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'LF'
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'after 1-3 Closed Basic, follow with 4-6 Open Basic'
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : 'to L, after 1-3 Closed Basic'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to R, after 1-3 Closed Basic'
                },
                {
                   'id' : 'HandToHand',
                   'comment' : 'LSP, after 1-3 Closed Basic'
                },
                {
                   'id' : 'SideSteps',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'CubanRocks',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'after 1-3 Closed Basic, Man step 3 LF side turning slightly R, Lady RF fwd'
                }
             ]
          },
        'BasicMovementsOpen' : 
         {
            'name' : 'Basic Movements: Open',
            'urlpath' : '/basic-movements',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalks',
                   'comment' : 'fwd, when danced in Open or Closed Position'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when danced in Open Position, Lady RF back on 1'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'after 1-3, follow with 4-6 of Closed Basic, when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalks',
                   'comment' : 'back, after 1-3, when danced in Open or Closed Position'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'after 1-3 Open Basic, Man step 3 LF side turning slightly R, Lady RF fwd, danced in Open Position'
                }
             ]
        }
    };

