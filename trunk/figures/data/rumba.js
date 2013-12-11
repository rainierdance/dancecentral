    //-------------------------------------------
    // RUMBA FIGURES
    var rumbaFigures = {
        'AdvancedHipTwists' : 
          {
            'name' : 'Advanced Hip Twists',
            'level' : 'Gold',
            'urlpath' : 'advanced-hip-twists',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when finish in Open Position; 1-3 Open Basic followed by Progressive Walks Back or Natural Top'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when finish in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when finish in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when finish in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'when finish in Contact Position, continue with 4-6 or 4-9 of Reverse Top'
                }
            ]
          },
        'ContinuousHipTwists' : 
          {
            'name' : 'Continuous Hip Twists',
            'level' : 'Gold',
            'urlpath' : 'continuous-hip-twists',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : ''
                }
            ]
          },
        'CircularHipTwists' : 
          {
            'name' : 'Circular Hip Twists',
            'level' : 'Gold',
            'urlpath' : 'circular-hip-twists',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : 'step 4-6'
                }
            ]
          },
        'ThreeAlemanas' : 
          {
            'name' : 'Three Alemanas',
            'level' : 'Gold',
            'urlpath' : 'three-alamanas',
            'timing' : '2341 2341 2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'CircularHipTwists',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : 'Man turns body slightly to R on last step to lead Lady fwd towards his R side, then turns her R to RSP. Lady LF fwd inline with RF then 1/2 R on LF to end LF back. Man LF slightly leftwards on the second to last step'   // listed in precedes`
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'end to side'   // listed in precedes`
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''  // listed in precedes
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : 'after lady stepping to side at end of Three Alemanas'
                }
             ]
          },
        'ThreeThrees' : 
          {
            'name' : 'Three Threes',
            'level' : 'Gold',
            'urlpath' : 'three-threes',
            'timing' : '2341 2341 2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'Fencing',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when ending in Fan Position'
                }
             ]
          },
        'Fencing' : 
          {
            'name' : 'Fencing',
            'level' : 'Gold',
            'urlpath' : 'fencing',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''
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
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'CucarachasLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                }
             ]
          },
        'SlidingDoors' : 
          {
            'name' : 'Sliding Doors',
            'level' : 'Gold',
            'urlpath' : 'sliding-doors',
            'timing' : '2341 2341 2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : 'in Right Shadow Position, hold 2 or 3 (Kiki Walks)'
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''
                }
             ]
          },
        'Spiral' : 
          {
            'name' : 'Spiral',
            'level' : 'Silver',
            'urlpath' : 'spiral',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'When finished in Open Position, follow with Open Basic, or 1-3 Open Basic into Progressive Walks Back or Natural Top'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'When finished in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'When finished in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'When finished in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'When finished in Contact Position, follow with 4-6 or 4-9 Reverse Top.'
                }
              ]
          },
        'Curl' : 
          {
            'name' : 'Curl',
            'level' : 'Silver',
            'urlpath' : 'curl',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'eval' : 'SameFollowAs("Spiral")',
                   'comment' : ''
                }
              ]
          },
        'RopeSpinning' : 
          {
            'name' : 'Rope Spinning',
            'level' : 'Silver',
            'urlpath' : 'rope-spinning',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'both stepping to side'   // listed in precedes`
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : 'Lady end Rope Spinning LF to side'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'When ending in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'When ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'When ending in Open CPP'
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'Spiral',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : "When Man and Lady fwd toward partner's R side"
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : "When Man and Lady fwd toward partner's R side"
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : "When Man and Lady fwd toward partner's R side"
                },
                {
                   'id' : 'ProgressiveWalksFwdRShadow',
                   'comment' : "When ending in R Shadow Position"
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : "When ending in R Shadow Position, follow with 7-12 of Sliding Doors."
                }
              ]
          },
        'Aida' : 
          {
            'name' : 'Aida',
            'level' : 'Silver',
            'urlpath' : 'aida',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'Aida followed by Cuban Rock fwd and Spot Turn; or Cuban Rock to Progressive Walks forward in Right Shadow Position'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'Aida followed by Double Spot Turns to L (Lady to R)'
                },
                {
                   'id' : 'CucarachasLF',
                   'comment' : 'Aida followed by side Cucaracha, Man LF side, Lady RF side'
                },
                {
                   'id' : 'Curl',
                   'comment' : ''
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''
                }
              ]
          },
        'OpeningOutFromReverseTop' : 
          {
            'name' : 'Opening Out From Reverse Top',
            'level' : 'Silver',
            'urlpath' : 'opening-out-from-reverse-top',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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
        'ReverseTop' : 
          {
            'name' : 'Reverse Top',
            'level' : 'Silver',
            'urlpath' : 'open-hip-twist',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutFromReverseTop',
                   'comment' : 'from step 6'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'from step 6'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'from step 6 of Reverse Top, follow with 4-6 of Spiral, after leading Lady into her spiral turn on step 6 of Spiral Turn'
                }
              ]
          },
        'OpenHipTwist' : 
          {
            'name' : 'Open Hip Twist',
            'level' : 'Silver',
            'urlpath' : 'open-hip-twist',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : 'when finished in Fan or Open Position'
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
                   'comment' : 'when finished in Fan or Open Position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when finished in Open Position, follow with Open Basic or 1-3 Open Basic Movement into pprogressive Walks Back or Natual Top'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when finished in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when Open Hip Twist finishes in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when Open Hip Twist finishes in Open Position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when Open Hip Twist finishes in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when Open Hip Twist finishes in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when Open Hip Twist finishes in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'when Open Hip Twist finishes in Contact Position, follow with 4-6 or 4-9 Reverse Top.'
                }
              ]
          },
        'ClosedHipTwist' : 
          {
            'name' : 'Closed Hip Twist',
            'urlpath' : 'closed-hip-twist',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Fan position'
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
                   'comment' : 'when ending Open Position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '1-3 Open Basic into Progressive Walks Back or Natural Top, when Closed Hip Twist ends in Open Position'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Open Position'
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
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'Lady to L when ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : '4-6 or 4-9 when ending in Contact Position'
                }
              ]
          },
        'NaturalOpeningOutMovement' : 
          {
            'name' : 'Natural Opening Out Movement',
            'urlpath' : 'natural-opening-out-movement',
            'level' : 'Bronze',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
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
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Fan',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '' // listed in precedes
                },
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
            'timing' : '2341 2341 2341',
            'startFoot' : 'RF',
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
                   'id' : 'AdvancedHipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                }
              ]
          },
        'HockeyStick' : 
          {
            'name' : 'Hockey Stick',
            'urlpath' : 'hockey-stick',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '1-3 Open Basic into Progressive Walks Back'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '1-3 Open Basic into Natural Top'
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
                   'id' : 'NewYorkLSP',
                   'comment' : 'when Hockey Stick ends in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when Hockey Stick ends in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when Hockey Stick ends in Open CPP'
                }
              ]
          },
        'Alemana' : 
          {
            'name' : 'Alemana',
            'urlpath' : 'alemana',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending diagonally fwd in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending diagonally fwd in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending diagonally fwd in Open CPP'
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : 'when ending fwd towards partner\'s R side'
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : 'when ending fwd towards partner\'s R side'
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : 'when ending fwd towards partner\'s R side'
                },
                {
                   'id' : 'ProgressiveWalksFwdRShadow',
                   'comment' : 'when ending R Shadow Position'
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : '7-12, when ending R Shadow Position'
                }
              ]
          },
        'Fan' : 
          {
            'name' : 'Fan',
            'urlpath' : 'fan',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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
            'level' : 'Gold',
            'timing' : '2&341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'eval' : 'SameFollowAs("CubanRockRF")',
                   'comment' : ''
                }
              ]
          },
        'SyncopatedCubanRockRF' : 
          {
            'name' : 'Syncopated Cuban Rocks RF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Gold',
            'timing' : '2&341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'eval' : 'SameFollowAs("CubanRockLF")',
                   'comment' : ''
                }
              ]
          },
        'CubanRockLF' : 
          {
            'name' : 'Cuban Rock LF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'NewYorkRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'CubanRockRF' : 
          {
            'name' : 'Cuban Rocks RF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''   // listed in precedes`
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
                   'id' : 'NewYorkLSP',
                   'comment' : ''
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
                   'id' : 'HandToHandRSP',
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
                }
              ]
          },
        'SideStepLeftLF' : 
          {
            'name' : 'Side Step To Left commenced with LF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'NewYorkRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderR',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'SideStepLeftRF' : 
          {
            'name' : 'Side Step To Left commenced with RF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
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
                   'id' : 'CucarachasLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                }
              ]
          },
        'SideStepRightLF' : 
          {
            'name' : 'Side Step To Right commenced with LF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'CucarachasRF',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                }
              ]
          },
        'SideStepRightRF' : 
          {
            'name' : 'Side Step To Right commenced with RF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
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
                   'comment' : ''
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
                   'comment' : '1/8 turn R on step 3'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
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
              ]
          },
        'ProgressiveWalksBack' : 
          {
            'name' : 'Progressive Walks Back',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'RF',
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
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6 starting in line'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'Last step LF side turning slightly R, Lady RF fwd'
                }
              ]
          },
        'ProgressiveWalksFwd' : 
          {
            'name' : 'Progressive Walks Forward',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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
                }
              ]
          },
        'ProgressiveWalksFwdRSP' : 
          {
            'name' : 'Progressive Walks Forward in RSP',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : 'no turn on step 1'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                }
              ]
          },
        'ProgressiveWalksFwdLSP' : 
          {
            'name' : 'Progressive Walks Forward in LSP',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'ended facking partner'   // listed in precedes
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'no turn on step 1'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                }
              ]
          },
        'ProgressiveWalksFwdRShadow' : 
          {
            'name' : 'Progressive Walks Forward in Right Shadow Position',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'Fan',
                   'comment' : '4-6, Fan Finish'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''
                }
              ]
          },
        'HandToHandLSP' : 
          {
            'name' : 'Hand To Hand LSP',
            'urlpath' : 'hand-to-hand',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
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
                   'comment' : ''
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
                   'id' : 'HandToHandRSP',
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
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'ProgressiveWalksFwdLSP', // in notes
                   'comment' : 'no turn on 2&3'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'Rope Spinning after Hand to Hand to LSP - Man close RF to LF and lead Lady to turn R into her spiral action on 3 to continue with Rope Spinning'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                }
              ]
          },
        'HandToHandRSP' : 
          {
            'name' : 'Hand To Hand RSP',
            'urlpath' : 'hand-to-hand',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'NewYorkRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, lady in line on 4'
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
                   'id' : 'ProgressiveWalksFwdRSP', // in notes
                   'comment' : 'no turn on 2&3'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'Spiral after Hand to Hand to RSP- ending with Man close RF to LF and lead Lady to turn L into her spiral action on 3 to continue with 4-6 of Spiral'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'ShoulderToShoulderR' : 
          {
            'name' : 'Shoulder To Shoulder Right Side',
            'urlpath' : 'shoulder-to-shoulder',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending Open CPP'
                }
              ]
          },
        'ShoulderToShoulderL' : 
          {
            'name' : 'Shoulder To Shoulder Left Side',
            'urlpath' : 'shoulder-to-shoulder',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'ShoulderToShoulderR',
                   'comment' : ''
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
                   'id' : 'SpotTurnL',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when Shoulder To Shoulder ends facing partner'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when Shoulder To Shoulder ends facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : 'when ending Open PP'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when ending Open PP'
                },
              ]
          },
        'SpotTurnL' : 
          {
            'name' : 'Spot or Switch Turn to L (Lady to R)',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'ProgressiveWalksFwdRSP',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed'
                },
                {
                   'id' : 'NewYorkLSP'
                },
                {
                   'id' : 'SpotTurnR'
                },
                {
                   'id' : 'UnderarmTurnL'
                },
                {
                   'id' : 'HandToHandRSP'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'SideStepRightLF'
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
                   'comment' : 'when ended in Open Position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ended in Open Position, follow with 1-3 Open Basic into Natural Top'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ended in Open Position, follow with Open Basic into Progressive Walks Back'
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
                }
              ]
          },
        'SpotTurnR' : 
          {
            'name' : 'Spot or Switch Turn To R (Lady to L)',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'NewYorkRSP'
                },
                {
                   'id' : 'SpotTurnL'
                },
                {
                   'id' : 'UnderarmTurnR'
                },
                {
                   'id' : 'HandToHandLSP'
                },
                {
                   'id' : 'SideStepLeftRF'
                },
                {
                   'id' : 'SideStepRightRF'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'UnderarmTurnR' : 
          {
            'name' : 'Underarm Turn To R',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen'
                },
                {
                   'id' : 'BasicMovementsClosed'
                },
                {
                   'id' : 'NewYorkLSP'
                },
                {
                   'id' : 'SpotTurnR'
                },
                {
                   'id' : 'UnderarmTurnL'
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : 'end Shoulder to Shoulder facing partner'
                },
                {
                   'id' : 'HandToHandRSP'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'SideStepRightLF'
                },
                {
                   'id' : 'CubanRockLF'
                },
                {
                   'id' : 'Fan'
                },
                {
                   'id' : 'SyncopatedCubanRockLF'
                }
              ]
          },
        'UnderarmTurnL' : 
          {
            'name' : 'Underarm Turn To L',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
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
                   'id' : 'NewYorkRSP'
                },
                {
                   'id' : 'SpotTurnL'
                },
                {
                   'id' : 'UnderarmTurnR'
                },
                {
                   'id' : 'HandToHandLSP'
                },
                {
                   'id' : 'SideStepLeftRF'
                },
                {
                   'id' : 'SideStepRightRF'
                },
                {
                   'id' : 'CubanRockRF'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'turning slightly R and leading Lady to step RF fwd on last step of Underarm Turn L',
                },
                {
                   'id' : 'Aida'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'NewYorkLSP' : 
          {
            'name' : 'New York LSP',
            'urlpath' : 'new-york',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''    // listed in precedes
                },
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
                   'id' : 'ProgressiveWalksFwdRSP', // in notes
                   'comment' : 'overturned to end fwd in RSP'
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
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'ProgressiveWalksFwdRSP',
                   'comment' : 'no turn at end of count 1 in New York RSP' // listed in precedes
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandRSP'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'SideStepRightLF'
                },
                {
                   'id' : 'ProgressiveWalksFwdLSP', // in notes
                   'comment' : 'overturned to end fwd in LSP'
                },
                {
                   'id' : 'CubanRockLF'
                },
                {
                   'id' : 'Fan'
                },
                {
                   'id' : 'SyncopatedCubanRockLF'
                }
              ]
          },
        'CucarachasLF' : 
          {
            'name' : 'Cucarachas: LF',
            'urlpath' : 'cucarachas',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''  // listed in precedes
                },
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
                   'id' : 'SideStepRightRF'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, lady in line on 4'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                }
              ]
          },
        'CucarachasRF' : 
          {
            'name' : 'Cucarachas: RF',
            'urlpath' : 'cucarachas',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''  // listed in precedes
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
                   'id' : 'CucarachasLF'
                },
                {
                   'id' : 'SideStepLeftLF'
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
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'ReverseTop',
                   'comment' : '' // listed in precedes
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
            'timing' : '2341 2341',
            'startFoot' : 'LF',
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

