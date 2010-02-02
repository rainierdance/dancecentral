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
            'urlpath' : 'closed-hip-twist',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Fan position or Open Position'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'Fencing',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when ending in Fan or Open position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending open position, follow with Open Basic or 1-3 Open Basic into Progressive Walks Back or Natural Top'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when ending in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when ending in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when ending in Open position'
                },
                {
                   'id' : 'NewYork',
                   'comment' : 'LSP, when ending in Open CPP'
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : 'to R, Lady to L when ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to L, when ending in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : '4-6 or 4-9 when ending in contact position'
                }
              ]
          },
        'NaturalOpeningOutMovement' : 
          {
            'name' : 'Natural Opening Out Movement',
            'urlpath' : 'natural-opening-out-movement',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to R'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'Man turns 1/8 L on 3 to contact position, placing LF in front of RF as Cuban Cross. Lady turns an additional 1/8 on 3 to end wih RF back and slightly side'
                }
              ]
          },
        'OpeningOutToRightAndLeft' : 
          {
            'name' : 'Opening Out To Right And Left',
            'urlpath' : 'opening-out-to-right-and-left',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : ''
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : ''
                },
                {
                   'id' : 'Spiral',
                   'comment' : '1/4 R on 1'
                }
              ]
          },
        'NaturalTop' : 
          {
            'name' : 'Natural Top',
            'urlpath' : 'natural-top',
            'level' : 'Bronze',
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
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : ''
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : '4-6 following step 6 of Natural Top'
                },
                {
                   'id' : 'HipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                }
              ]
          },
        'HockeyStick' : 
          {
            'name' : 'Hockey Stick',
            'urlpath' : 'hockey-stick',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'can follow with Progressive Walks Back or Natural Top'
                },
                {
                   'id' : 'ShoulderToShoulder',
                   'comment' : 'Left side'
                },
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : ''
                },
                {
                   'id' : 'Curl',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                },
                {
                   'id' : 'NewYork',
                   'comment' : 'LSP when Hockey Stick ends in Open CPP'
                },
                {
                   'id' : 'SpotTurn',
                   'comment' : 'to R (Lady to L), when Hockey Stick ends in Open CPP'
                },
                {
                   'id' : 'UnderarmTurn',
                   'comment' : 'to L, when Hockey Stick ends in Open CPP'
                }
              ]
          },
        'Alemana' : 
          {
            'name' : 'Alemana',
            'urlpath' : 'alemana',
            'level' : 'Bronze',
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
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : 'Lady LF side on 6'
                }
              ]
          },
        'Fan' : 
          {
            'name' : 'Fan',
            'urlpath' : 'fan',
            'level' : 'Bronze',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : ''
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : ''
                },
                {
                   'id' : 'Fencing',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                }
              ]
          },
        'SyncopatedCubanRockLF' : 
          {
            'name' : 'Syncopated Cuban Rock LF',
            'urlpath' : 'cuban-rocks',
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
        'SyncopatedCubanRockRF' : 
          {
            'name' : 'Syncopated Cuban Rocks RF',
            'urlpath' : 'cuban-rocks',
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
        'CubanRockLF' : 
          {
            'name' : 'Cuban Rock LF',
            'urlpath' : 'cuban-rocks',
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
        'CubanRockRF' : 
          {
            'name' : 'Cuban Rocks RF',
            'urlpath' : 'cuban-rocks',
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
        'SideStepLeftLF' : 
          {
            'name' : 'Side Step To Left commenced with LF',
            'urlpath' : 'side-steps',
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
        'SideStepLeftRF' : 
          {
            'name' : 'Side Step To Left commenced with RF',
            'urlpath' : 'side-steps',
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
        'SideStepRightLF' : 
          {
            'name' : 'Side Step To Right commenced with LF',
            'urlpath' : 'side-steps',
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
        'SideStepRightRF' : 
          {
            'name' : 'Side Step To Right commenced with RF',
            'urlpath' : 'side-steps',
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
        'ProgressiveWalksBack' : 
          {
            'name' : 'Progressive Walks Back',
            'urlpath' : 'progressive-walks',
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
        'ProgressiveWalksFwd' : 
          {
            'name' : 'Progressive Walks Forward',
            'urlpath' : 'progressive-walks',
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
        'ProgressiveWalksFwdRSP' : 
          {
            'name' : 'Progressive Walks Forward in RSP',
            'urlpath' : 'progressive-walks',
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
        'ProgressiveWalksFwdLSP' : 
          {
            'name' : 'Progressive Walks Forward in LSP',
            'urlpath' : 'progressive-walks',
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
        'ProgressiveWalksFwdRShadow' : 
          {
            'name' : 'Progressive Walks Forward in Right Shadow Position',
            'urlpath' : 'progressive-walks',
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
        'HandToHandLSP' : 
          {
            'name' : 'Hand To Hand LSP',
            'urlpath' : 'hand-to-hand',
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
        'HandToHandRSP' : 
          {
            'name' : 'Hand To Hand RSP',
            'urlpath' : 'hand-to-hand',
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
        'ShoulderToShoulderR' : 
          {
            'name' : 'Shoulder To Shoulder Right Side',
            'urlpath' : 'shoulder-to-shoulder',
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
        'ShoulderToShoulderL' : 
          {
            'name' : 'Shoulder To Shoulder Left Side',
            'urlpath' : 'shoulder-to-shoulder',
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
        'SpotTurnL' : 
          {
            'name' : 'Spot or Switch Turn to L (Lady to R)',
            'urlpath' : 'spot-turns',
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
        'SpotTurnR' : 
          {
            'name' : 'Spot or Switch Turn To R (Lady to L)',
            'urlpath' : 'spot-turns',
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
        'UnderarmTurnR' : 
          {
            'name' : 'Underarm Turn To R',
            'urlpath' : 'spot-turns',
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
        'UnderarmTurnL' : 
          {
            'name' : 'Underarm Turn To L',
            'urlpath' : 'spot-turns',
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
        'NewYorkLSP' : 
          {
            'name' : 'New York LSP',
            'urlpath' : 'new-york',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'NewYorkRSP',
                   'comment' : 'when ending in Open PP'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when ending in Open PP'
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
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when New York LSP ends facing parter'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when New York LSP ends facing parter'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when New York LSP ends facing parter'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when New York LSP ends facing parter'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when New York LSP ends facing parter'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'when New York LSP ends facing parter'
                }
              ]
          },
        'NewYorkRSP' : 
          {
            'name' : 'New York RSP',
            'urlpath' : 'new-york',
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
        'CucarachasLF' : 
          {
            'name' : 'Cucarachas: LF',
            'urlpath' : 'cucarachas',
            'level' : 'Newcomer',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                    'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                    'comment' : '4-6'
                },
                {
                   'id' : 'CucarachasRF'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepsRightRF'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, lady in line on 4'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                },
              ]
          },
        'CucarachasRF' : 
          {
            'name' : 'Cucarachas: RF',
            'urlpath' : 'cucarachas',
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
                   'id' : 'CucarachasLF'
                },
                {
                   'id' : 'SideStepsLeftLF'
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                }
              ]
          },
        'BasicMovementsClosed' : 
          {
            'name' : 'Basic Movements: Closed',
            'urlpath' : 'basic-movements',
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
                   'id' : 'NewYorkLSP',
                   'comment' : 'having turned to Open CPP on last step'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'after 1-3 Closed Basic, follow with 4-6 Open Basic'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'after 1-3 Closed Basic, Man step 3 LF side turning slightly R, Lady RF fwd'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'after 1-3 Closed Basic'
                }
             ]
          },
        'BasicMovementsOpen' : 
         {
            'name' : 'Basic Movements: Open',
            'urlpath' : 'basic-movements',
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
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when danced in Open Position, Lady RF back on 1'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'after 1-3, follow with 4-6 of Closed Basic, when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksBack',
                   'comment' : 'after 1-3 of Open Basic, when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksBack',
                   'comment' : 'after 1-3 of Open Basic, when danced in Open Position, L to R hand hold'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'after 1-3 Open Basic, Man step 3 LF side turning slightly R, Lady RF fwd, danced in Open Position'
                }
             ]
        }
    };

