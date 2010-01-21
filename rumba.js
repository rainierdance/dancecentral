    //-------------------------------------------
    // RUMBA FIGURES
    var rumbaFigures = {
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
            'name' : 'HockeyStick',
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
                   'id' : 'BasicMovements'
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
                   'id' : 'BasicMovements'
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
                   'id' : 'BasicMovements'
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
                   'id' : 'BasicMovements'
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
                   'id' : 'BasicMovements'
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
                   'id' : 'BasicMovements'
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

