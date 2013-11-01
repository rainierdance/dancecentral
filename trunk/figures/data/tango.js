    //-------------------------------------------
    // TANGO FIGURES
    var tangoFigures = 
      {
       'Walk' :
          {
            'name' : 'Walk',
            'urlpath' : 'walk',
            'level' : 'Newcomer',
            'startAlignment' : ['DW', 'DC', 'LOD'],
            'startFoot' : ['LF', 'RF'],
            'startDirection' : ['fwd', 'back'],
            'timing' : 'S',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-walk-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-walk-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-walk-2.png'
            ],
            'follow' : [ // this is not listed in book, we summarized it
              {
                'id' : 'Walk',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveSideStepReverseTurn',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'id' : 'RockTurn',
                'comment' : ''
              },
              {
                'id' : 'OpenReverseTurnLadyOutside',
                'comment' : ''
              },
              {
                'id' : 'OpenReverseTurnLadyInline',
                'comment' : ''
              },
              {
                'id' : 'RFRock',
                'comment' : 'after Walk back on LF'
              },
              ]
          },
        'ClosedFinish' : 
          {
            'name' : 'Closed Finish',
            'urlpath' : 'open-finish',
            'level' : 'Newcomer',
            'startAlignment' : ['DC', 'PP'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-3.png'
            ],
            'follow' : [ // not listed, guessed
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              }
              ]
          },
        'OpenFinish' : 
          {
            'name' : 'Open Finish',
            'urlpath' : 'open-finish',
            'level' : 'Newcomer',
            'startAlignment' : ['DC', 'PP'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-3.png'
            ],
            'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'when preceding figure ends DC'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'ReverseOutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'Oversway',
                'comment' : ''
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : 'step 1 of Back Corte in CBMP with Lady OP'
              },
              {
                'id' : 'LFRock',
                'comment' : 'LF Rock in CBMP with Lady OP, no turn or up to 1/4 to R'
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'after Open Finish, place LF to side without weight leading Lady to turn to PP, count &, then proceed with the Promenade figure'
              }
            ]
          },
        'ProgressiveSideStep' :
          {
          'name' : 'Progressive Side Step',
          'urlpath' : 'progressive-side-step',
          'level' : 'Newcomer',
          'startAlignment' : ['DW', 'LOD', 'DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-3.png'
          ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'RF'
              },
              {
                'id' : 'RockTurn',
                'comment' : ''
              }
            ]
        },
        'ProgressiveLink' :
          {
          'name' : 'Progressive Link',
          'urlpath' : 'progressive-link',
          'level' : 'Newcomer',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQ',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-link-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-link-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-link-2.png'
            ],
          'follow' : [
              {
                'id' : 'ClosedPromenade',
                'comment' : ''
              },
              {
                'id' : 'OpenPromenade',
                'comment' : ''
              },
              {
                'id' : 'NaturalTwistTurn',
                'comment' : ''
              },
              {
                'id' : 'NaturalPromenadeTurn',
                'comment' : ''
              },
              {
                'id' : 'PromenadeLink',
                'comment' : ''
              },
              {
                'id' : 'BackOpenPromenade',
                'comment' : ''
              },
              {
                'id' : 'FallawayPromenade',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              }
            ]
        },
        'ClosedPromenade' :
          {
          'name' : 'Closed Promenade',
          'urlpath' : 'closed-promenade',
          'level' : 'Newcomer',
          'startAlignment' : ['DC', 'LOD', 'DW', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-4.png'
          ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'when preceding figure ended DC'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'Oversway',
                'comment' : ''
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'ContraCheck',
                'comment' : ''
              }
            ]
        },
        'RockTurn' :
          {
          'name' : 'Rock Turn',
          'urlpath' : 'rock-turn',
          'level' : 'Newcomer',
          'startAlignment' : ['DW'],
          'startFoot' : 'RF',
          'startDirection' : 'fwd',
           'timing' : 'S QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-7.png'
            ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'OpenReverseTurnLadyOutside' :
          {
          'name' : 'Open Reverse Turn, Lady Outside',
          'urlpath' : 'open-reverse-turn-lady-outside',
          'level' : 'Newcomer',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-6.png'
            ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'at end of last step of preceding figure, using Open Finish, keep feet in place and turn Lady to PP, count &'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'ContraCheck',
                'comment' : ''
              }
            ]
        },
        'BackCorte' :
          {
          'name' : 'Back Corte',
          'urlpath' : 'back-corte',
          'level' : 'Newcomer',
          'startAlignment' : ['LOD', 'DW'], // down new LOD, or dance at corner
          'startFoot' : 'LF',
          'startDirection' : 'back',
           'timing' : 'S QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-4.png'
            ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'OpenReverseTurnLadyInline' :
          {
          'name' : 'Open Reverse Turn, Lady In Line',
          'urlpath' : 'open-reverse-turn-lady-inside',
          'level' : 'Bronze',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-6.png'
          ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
            }
            ]
        },
        'ProgressiveSideStepReverseTurn' :
          {
          'name' : 'Progressive Side Step Reverse Turn',
          'urlpath' : 'progressive-side-step-reverse-turn',
          'level' : 'Bronze',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQSS QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-8.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-9.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-10.png'
          ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
            }
            ]
        },
        'OpenPromenade' :
          {
          'name' : 'Open Promenade',
          'urlpath' : 'open-promenade',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-4.png'
            ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'when preceding figure ended DC'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'ReverseOutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'Oversway',
                'comment' : ''
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : 'step 1 in CBMP with Lady OP using CBM on 1 and 2'
              },
              {
                'id' : 'LFRock',
                'comment' : 'LF Rock in CBMP with Lady OP, no turn or up to 1/4 to R'
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'having placed LF to side without weight, leading Lady to to PP, count &'
              }
            ]
        },
        'LFRock' :
          {
          'name' : 'LF Rock',
          'urlpath' : 'lf-and-rf-rocks',
          'level' : 'Bronze',
          'startAlignment' : ['LOD'],
          'startFoot' : 'LF',
          'startDirection' : 'back',
           'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-3.png'
            ],
          'follow' : [
              {
                'id' : 'OpenFinish',
                'comment' : ''
              },
              {
                'id' : 'ClosedFinish',
                'comment' : ''
              },
              {
                'id' : 'RFRock',
                'comment' : ''
              }
            ]
        },
        'RFRock' :
          {
          'name' : 'RF Rock',
          'urlpath' : 'lf-and-rf-rocks',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'DC'],
          'startFoot' : 'RF',
          'startDirection' : 'back',
           'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-3.png'
            ],
          'follow' : [
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              }
            ]
        },
        'NaturalTwistTurn' :
          {
          'name' : 'Natural Twist Turn',
          'urlpath' : 'natural-twist-turn',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'S QQS QQ',
            'diagram' : [
              [
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-0.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-1.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-2.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-3.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-4.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-5.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-6.png'
              ],
              [
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-0.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-1.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-2.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-3.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-4.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-5.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-6.png'
              ],
              [
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-0.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-1.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-2.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-3.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-4.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-5.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-6.png'
              ]
            ],
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                //'eval' : 'MatchFigures({"startAlignment" : "PP"})', // not sure if this is correct
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              }
            ]
        },
        'NaturalPromenadeTurn' :
          {
          'name' : 'Natural Promenade Turn',
          'urlpath' : 'natural-promenade-turn',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'S QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-4.1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-4.2.png'
            ],
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              },
              {
                'id' : 'RockTurn',
                'comment' : '2-7'
              }
            ]
        },
        'PromenadeLink' :
          {
          'name' : 'Promenade Link',
          'urlpath' : 'promenade-link',
          'level' : 'Silver',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
           'timing' : 'SQQ',
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'FourStep' :
          {
          'name' : 'Four Step',
          'urlpath' : 'four-step',
          'level' : 'Silver',
          'startAlignment' : ['Wall'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQQQ',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              }
            ]
        },
        'BackOpenPromenade' :
          {
          'name' : 'Back Open Promenade',
          'urlpath' : 'back-open-promenade',
          'level' : 'Silver',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
           'timing' : 'SQQS',
          'follow' : [
              {
                'id' : 'FourStep'
              },
              {
                'id' : 'ReverseOutsideSwivel'
              },
              {
                'id' : 'FourStepChange'
              },
              {
                'id' : 'BrushTap'
              },
              {
                'id' : 'FallawayFourStep'
              },
              {
                'id' : 'FiveStep'
              }
            ]
        },
        'ReverseOutsideSwivel' :
          {
          'name' : 'Reverse Outside Swivel',
          'urlpath' : 'reverse-outside-swivel',
          'level' : 'Silver',
          'startAligment' : 'DC',
          'startDirection' : 'fwd',
          'startFoot' : 'LF',
          'timing' : 'QQSQQ',
          'follow' : [
              {
                'eval' : 'SameFollowAs("ClosedPromenade")'
              }
            ]
        },
        'OutsideSwivel' :
          {
          'name' : 'Outside Swivel',
          'urlpath' : 'outside-swivel',
          'level' : 'Silver',
          'startAlignment' : ['Center'],
          'startFoot' : 'LF',
          'startDirection' : 'back',
           'timing' : 'SQQ',
          'follow' : [
              {
                'eval' : 'SameFollowAs("ClosedPromenade")',
                'comment' : 'if ended DW'
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'if ended DC'
              },
              {
                'id' : 'FourStep',
                'comment' : 'Overturned'
              },
              {
                'id' : 'Oversway'
              },
              {
                'id' : 'FallawayReverseAndSlipPivot'
              },
              {
                'id' : 'FiveStep'
              }
            ]
        },
        'FallawayPromenade' :
          {
          'name' : 'Fallaway  Promenade',
          'urlpath' : 'fallaway-promenade',
          'level' : 'Silver',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
           'timing' : 'SQQSQQ',
          'follow' : [
            {
              'id' : 'ClosedPromenade'
            },
            {
              'id' : 'OpenPromenade'
            },
            {
              'id' : 'NaturalTwistTurn'
            },
            {
              'id' : 'NaturalPromenadeTurn'
            },
            {
              'id' : 'PromenadeLink',
              'comment' : 'Reverse'
            },
            {
              'id' : 'Chase'
            }
            ]
        },
        'FourStepChange' :
          {
          'name' : 'Four Step Change',
          'urlpath' : 'four-step-change',
          'level' : 'Silver',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQQQ or QQ&S',
          'follow' : [
            {
              'id' : 'Walk',
              'comment' : 'LF'
            },
            {
              'eval' : 'MatchFigureName(" Reverse")'
            },
            {
              'id' : 'FourStep'
            },
            {
              'id' : 'ReverseOutsideSwivel'
            },
            {
              'id' : 'ProgressiveLink',
              'comment' : 'At corner'
            },
            {
              'id' : 'Oversway'
            },
            {
              'id' : 'FallawayReverseAndSlipPivot'
            },
            {
              'id' : 'FiveStep'
            }
            ]
        },
        'BrushTap' :
          {
          'name' : 'Brush Tap',
          'urlpath' : 'brush-tap',
          'level' : 'Silver',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQ&S',
          'follow' : [
            {
              'id' : 'Walk',
              'comment' : 'LF'
            },
            {
              'id' : 'ProgressiveLink'
            },
            {
              'id' : 'ProgressiveSideStep'   // listed in precedes
            },
            {
              'id' : 'BackCorte'
            },
            {
              'id' : 'LFRock'
            },
            {
              'id' : 'FourStep'
            },
            {
              'id' : 'FourStepChange'
            },
            {
              'eval' : 'MatchFigureName(" Reverse")',
              'comment' : 'If ended DC'
            },
            {
              'id' : 'FallawayFourStep'
            },
            {
              'id' : 'Oversway'
            },
            {
              'id' : 'FallawayReverseAndSlipPivot'
            },
            {
              'id' : 'ContraCheck'
            }
            ]
        },
        'FallawayFourStep' :
          {
          'name' : 'Fallaway Four Step',
          'urlpath' : 'fallaway-fourstep',
          'level' : 'Gold',
          'startAlignment' : ['LOD'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQQQ',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              }
            ]
        },
        'Oversway' :
          {
          'name' : 'Oversway',
          'urlpath' : 'oversway',
          'level' : 'Gold',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQSS',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'after ending in PP - see notes in figure'
              }
            ]
        },
        'BasicReverseTurn' :
          {
          'name' : 'Basic Reverse Turn',
          'urlpath' : 'basic-reverse-turn',
          'level' : 'Gold',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQSQQS or QQ&QQS',
          'follow' : [
              {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
              }
            ]
        },
        'Chase' :
          {
          'name' : 'Chase',
          'urlpath' : 'the-chase',
          'level' : 'Gold',
          'startAlignment' : ['DW', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
          'timing' : 'SQQQQS',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'when ended in PP'
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : 'when ended inline'
              }
            ]
        },
        'FallawayReverseAndSlipPivot' :
          {
          'name' : 'Fallaway Reverse and Slip Pivot',
          'urlpath' : 'fallaway-reverse-and-slip-pivot',
          'level' : 'Gold',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQQQ',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FourStep',
                'comment' : 'if ended in LOD, overturn Four Step'
              },
              {
                'id' : 'ReverseOutsideSwivel',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'Oversway',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FiveStep',
                'comment' : 'if ended in LOD, overturn Five Step'
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'ProgressiveSideStep'   // listed in precedes
              },
              {
                'id' : 'FourStep',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'FourStepChange',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'BrushTap',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'FiveStep',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'ContraCheck',
                'comment' : 'if ended in DW'
              }
            ]
        },
        'FiveStep' :
          {
          'name' : 'Five Step',
          'urlpath' : 'five-step',
          'level' : 'Gold',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQQQS or QQS&S',
          'follow' : [
            {
                'eval' : 'SameFollowAs("FourStep")'
            }
            ]
        },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            'urlpath' : 'contra-check',
            'level' : 'Gold',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : 'SQQ',
            'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              }
              ]
          }
      };

