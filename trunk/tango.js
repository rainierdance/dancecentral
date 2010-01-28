    //-------------------------------------------
    // TANGO FIGURES
    var tangoFigures = 
      {
        'Walk' :
          {
            'name' : 'Walk',
            'urlpath' : '/walk',
            'level' : 'Newcomer',
            'startAlignment' : ['DW', 'DC', 'LOD'],
            'startFoot' : ['LF', 'RF'],
            'startDirection' : ['fwd', 'back'],
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
        'OpenFinish' : 
          {
            'name' : 'Open Finish',
            'urlpath' : '/open-finish',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
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
                'eval' : 'MatchFigureName(" Promenade")',
                'comment' : 'after Open Finish, place LF to side without weight leading Lady to turn to PP, count &, then proceed with the Promenade figure'
              }
            ]
          },
        'ProgressiveSideStep' :
          {
          'name' : 'Progressive Side Step',
          'urlpath' : '/progressive-side-step',
          'level' : 'Newcomer',
          'startAlignment' : ['DW', 'LOD', 'DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
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
          'urlpath' : '/progressive-link',
          'level' : 'Newcomer',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
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
          'urlpath' : '/closed-promenade',
          'level' : 'Newcomer',
          'startAlignment' : ['DC', 'LOD', 'DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
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
          'urlpath' : '/rock-turn',
          'level' : 'Newcomer',
          'startAlignment' : ['DW'],
          'startFoot' : 'RF',
          'startDirection' : 'fwd',
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'OpenReverseTurnLadyOutside' :
          {
          'name' : 'Open Reverse Turn, Lady Outside',
          'urlpath' : '/open-reverse-turn-lady-outside',
          'level' : 'Newcomer',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
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
                'eval' : 'MatchFigureName(" Promenade")',
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
          'urlpath' : '/back-corte',
          'level' : 'Newcomer',
          'startAlignment' : ['LOD', 'DW'], // down new LOD, or dance at corner
          'startFoot' : 'LF',
          'startDirection' : 'back',
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'OpenReverseTurnLadyInline' :
          {
          'name' : 'Open Reverse Turn, Lady In Line',
          'urlpath' : '/open-reverse-turn-lady-inside',
          'level' : 'Bronze',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'follow' : [
            {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
            }
            ]
        },
        'ProgressiveSideStepReverseTurn' :
          {
          'name' : 'Progressive Side Step Reverse Turn',
          'urlpath' : '/progressive-side-step-reverse-turn',
          'level' : 'Bronze',
          'follow' : [
            {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
            }
            ]
        },
        'OpenPromenade' :
          {
          'name' : 'Open Promenade',
          'urlpath' : '/open-promenade',
          'level' : 'Bronze',
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
                'eval' : 'MatchFigureName(" Promenade")',
                'comment' : 'having placed LF to side without weight, leading Lady to to PP, count &'
              }
            ]
        },
        'LFRock' :
          {
          'name' : 'LF Rock',
          'urlpath' : '/lf-and-rf-rocks',
          'level' : 'Bronze',
          'startAlignment' : ['LOD'],
          'startFoot' : 'LF',
          'startDirection' : 'back',
          'follow' : [
              {
                'id' : 'OpenFinish',
                'comment' : 'or Closed Finish'
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
          'urlpath' : '/lf-and-rf-rocks',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'DC'],
          'startFoot' : 'RF',
          'startDirection' : 'back',
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
          'urlpath' : '/natural-twist-turn',
          'level' : 'Bronze',
          'follow' : [
              {
                'eval' : 'MatchFigureName(" Promenade")',
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
          'urlpath' : '/natural-promenade-turn',
          'level' : 'Bronze',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
              {
                'eval' : 'MatchFigureName(" Promenade")',
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
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'FourStep' :
          {
          'name' : 'Four Step',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'BackOpenPromenade' :
          {
          'name' : 'Back Open Promenade',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'ReverseOutsideSwivel' :
          {
          'name' : 'Reverse Outside Swivel',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          'follow' : [
            ]
        },
        'OutsideSwivel' :
          {
          'name' : 'Outside Swivel',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'FallawayPromenade' :
          {
          'name' : 'Fallaway  Promenade',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'FourStepChange' :
          {
          'name' : 'Four Step Change',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'BrushTap' :
          {
          'name' : 'Brush Tap',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Silver',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'FallawayFourStep' :
          {
          'name' : 'Fallaway Four Step',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Gold',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'Oversway' :
          {
          'name' : 'Oversway',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Gold',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'BasicReverseTurn' :
          {
          'name' : 'Basic Reverse Turn',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Gold',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'Chase' :
          {
          'name' : 'The Chase',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Gold',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'FallawayReverseAndSlipPivot' :
          {
          'name' : 'Fallaway Reverse and Slip Pivot',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Gold',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'FiveStep' :
          {
          'name' : 'Five Step',
          //'urlpath' : '/waltz-natural-turn',
          'level' : 'Gold',
          //'startAlignment' : ['DW'],
          //'startFoot' : 'RF',
          //'startDirection' : 'fwd',
          'follow' : [
            ]
        },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            //'urlpath' : '/waltz-closed-changes',
            'level' : 'Gold',
            //'startAlignment' : ['DC', 'DW'],
            //'startFoot' : ['RF', 'LF'],
            //'startDirection' : 'fwd',
            'follow' : [
                {
                }
              ]
          }
      };

