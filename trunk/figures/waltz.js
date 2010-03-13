    //-------------------------------------------
    // WALTZ FIGURES
    var waltzFigures = 
      {
        'LeftWhisk' : 
          {
            'name' : 'Left Whisk',
            'level' : 'Gold',
            'follow' : [
              ]
          },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            'level' : 'Gold',
            'follow' : [
              ]
          },
        'ClosedWing' : 
          {
            'name' : 'Closed Wing',
            'level' : 'Gold',
            'follow' : [
              ]
          },
        'TurningLockToR' : 
          {
            'name' : 'Turning Lock to R',
            'level' : 'Gold',
            'follow' : [
              ]
          },
        'FallawayReverseAndSlipPivot' : 
          {
            'name' : 'Fallaway Reverse And Slip Pivot',
            'level' : 'Gold',
            'follow' : [
              ]
          },
        'HoverCorte' : 
          {
            'name' : 'Hover Corte',
            'level' : 'Gold',
            'follow' : [
              ]
          },
        'WeaveFromPP' : 
          {
            'name' : 'Weave From Promenade Position',
            'level' : 'Silver',
            'follow' : [
                {
                  'id' : 'CrossHesitation', // listed as precedes
                  'comment' : 'when ended in PP'
                }
              ]
          },
        'ClosedTelemark' : 
          {
            'name' : 'Closed Telemark',
            'level' : 'Silver',
            'urlpath' : 'closed-telemark',
            'startAlignment' : ['DC'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ClosedWing',
                  'comment' : ''
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                }
              ]
          },
        'CrossHesitation' : 
          {
            'name' : 'Cross Hesitation',
            'level' : 'Silver',
            'urlpath' : 'open-telemark-and-cross-hesitation',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'OutsideChange',
                  'comment' : ''
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : ''
                },
                {
                  'id' : 'BackLock',
                  'comment' : ''
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : ''
                }
              ]
          },
        'OpenTelemark' : 
          {
            'name' : 'Open Telemark',
            'level' : 'Silver',
            'urlpath' : 'open-telemark-and-cross-hesitation',
            'startAlignment' : ['DC'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ChasseFromPP',
                  'comment' : ''
                },
                {
                  'id' : 'WeaveFromPP',
                  'comment' : ''
                },
                {
                  'id' : 'CrossHesitation',
                  'comment' : ''
                },
                {
                  'id' : 'Wing',
                  'comment' : ''
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : ''
                }
              ]
          },
        'Wing' : 
          {
            'name' : 'Wing',
            'level' : 'Silver',
            'urlpath' : 'open-telemark-and-wing',
            'startAlignment' : ['LOD'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Reverse")',
                  'comment' : 'taking step 1 in CBMP OP on L side'
                },
                {
                  'id' : 'Whisk',
                  'comment' : 'at corner'
                }
              ]
          },
        'OpenImpetus' : 
          {
            'name' : 'Open Impetus',
            'level' : 'Silver',
            'urlpath' : 'open-impetus-and-cross-hesitation',
            'startAlignment' : ['BLOD'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ChasseFromPP',
                  'comment' : ''
                },
                {
                  'id' : 'WeaveFromPP',
                  'comment' : ''
                },
                {
                  'id' : 'CrossHesitation',
                  'comment' : ''
                },
                {
                  'id' : 'Wing',
                  'comment' : ''
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : ''
                }
              ]
          },
        'OutsideSpin' : 
          {
            'name' : 'Outside Spin',
            'level' : 'Silver',
            'follow' : [
              ]
          },
        'TurningLock' : 
          {
            'name' : 'Turning Lock',
            'level' : 'Silver',
            'urlpath' : 'turning-lock',
            'startAlignment' : ['BDC'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : '1&23',
            'follow' : [
                {
                  'id' : 'CrossHesitation',
                  'comment' : 'when ended in PP'
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : ''
                },
                {
                  'id' : 'ChasseFromPP',
                  'comment' : 'when ending in PP' // copied from Outside change when ending in PP
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : 'when ending in PP' // copied from Outside change when ending in PP
                }
              ]
          },
        'ClosedImpetus' : 
          {
            'name' : 'Closed Impetus',
            'level' : 'Bronze',
            'urlpath' : 'closed-impetus',
            'startAlignment' : ['BLOD', 'BDW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ReverseTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'ReverseCorte',
                  'comment' : ''
                },
                {
                  'id' : 'ReversePivot',
                  'comment' : ''
                },
                {
                  'id' : 'TurningLock',
                  'comment' : 'at corner'
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : 'RF back into Left Whisk'
                },
                {
                  'id' : 'HoverCorte',
                  'comment' : ''
                }
              ]
          },
        'HesitationChange' : 
          {
            'name' : 'Hesitation Change',
            'urlpath' : 'hesitation-change',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'follow' : [  // its precedes is listed "As Natural Turn", so anywhere Natural Turn is listed as follow, we add HesitationChange
                {
                  'id' : 'ReverseTurn',
                  'comment' : ''
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : ''
                },
                {
                  'id' : 'ProgressiveChasseToR',
                  'comment' : ''
                },
                {
                  'id' : 'ClosedChangeLF',
                  'comment' : 'when facing DW of new LOD'
                },
                {
                  'id' : 'Whisk',
                  'comment' : ''
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : 'to back DW then Basic Weave when Hesitation Change ends facing new LOD'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : ''
                },
                {
                  'id' : 'OpenTelemark',
                  'comment' : ''
                },
                {
                  'id' : 'FallawayReverseAndSlipPivot',
                  'comment' : ''
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : 'at corner'
                }
              ]
          },
        'OutsideChange' : 
          {
            'name' : 'Outside Change',
            'urlpath' : 'outside-change',
            'level' : 'Bronze',
            'startAlignment' : ['BDC'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : 'when ending OP'
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : 'when ending OP'
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : 'when ending OP'
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : 'when ending PP, Foot position of step 3 of Outside Change will be the same as step 3 Open Telemark'
                },
                {
                  'id' : 'ChasseFromPP',
                  'comment' : 'when ending in PP'
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : 'when ending in PP'
                },
                {
                  'id' : 'CrossHesitation', // listed as precedes
                  'comment' : 'when ending in PP'
                }
              ]
          },
        'ReverseCorte' : 
          {
            'name' : 'Reverse Corte',
            'urlpath' : 'reverse-corte',
            'level' : 'Bronze',
            'startAlignment' : ['BLOD', 'BDC'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6, ending DW or BDW new LOD?'
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : '4-6, ending DW or BDW new LOD?'
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : 'standard, or with turn at corner, or when ending BDW'
                },
                {
                  'id' : 'ClosedImpetus',
                  'comment' : 'when ending BDW'
                },
                {
                  'id' : 'BackLock',
                  'comment' : 'when ending BDW'
                },
                {
                  'id' : 'OutsideChange',
                  'comment' : 'at corner'
                },
                {
                  'id' : 'OpenImpetus',
                  'comment' : 'when ending BDW'
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : 'underturned'
                },
                {
                  'id' : 'OutsideChange',
                  'comment' : 'into Closed Wing'
                }
              ]
          },
        'BackWhisk' : 
          {
            'name' : 'Back Whisk',
            'urlpath' : 'back-whisk',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'eval' : 'SameFollowAs("Whisk")'
                }
              ]
          },
        'BasicWeave' : 
          {
            'name' : 'Basic Weave',
            'urlpath' : 'basic-weave',
            'level' : 'Bronze',
            'startAlignment' : ['BDW'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : '123 123',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : ''
                },
                {
                  'id' : 'ChasseFromPP',
                  'comment' : 'when ended in PP'
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : ''
                },
                {
                  'id' : 'CrossHesitation', // listed as precedes
                  'comment' : 'when ended in PP'
                }
              ]
          },
        'DoubleReverseSpin' : 
          {
            'name' : 'Double Reverse Spin',
            'urlpath' : 'double-reverse-spin',
            'level' : 'Bronze',
            'startAlignment' : ['LOD', 'DC', 'DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '1 2& 3 or 1 2 3&',
            'follow' : [
                {
                  'id' : 'ClosedChangeLF',
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'Whisk',
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : 'when ending LOD'
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : '1-3 Reverse Turn into Basic Weave, when ending LOD'
                },
                {
                  'eval' : 'MatchFigureName("Reverse")',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ProgressiveChasseToR',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : ''
                },
                {
                  'id' : 'OpenTelemark',
                  'comment' : ''
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : ''
                },
                {
                  'id' : 'FallawayReverseAndSlipPivot',
                  'comment' : ''
                }
              ]
          },
        'ReversePivot' : 
          {
            'name' : 'Reverse Pivot',
            'urlpath' : 'reverse-pivot',
            'level' : 'Bronze',
            'startAlignment' : ['BLOD', 'BDC'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : '&',
            'follow' : [
                {
                  'id' : 'ClosedChangeLF',
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'Whisk',
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : 'when ending DW, DC, or LOD'
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : '1-3 into Basic Weave, when ending LOD; or ReverseTurn when ending DC'
                },
                {
                  'id' : 'ProgressiveChasseToR',
                  'comment' : 'when ending DC, OR 3/8 turn, when ending LOD'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : ''
                },
                {
                  'id' : 'OpenTelemark',
                  'comment' : ''
                },
                {
                  'id' : 'FallawayReverseAndSlipPivot',
                  'comment' : ''
                }
              ]
          },
        'BackLock' : 
          {
            'name' : 'Back Lock',
            'urlpath' : 'back-lock',
            'level' : 'Bronze',
            'startAlignment' : ['BDW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '1 2& 3',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : '4-6'
                },
                {
                  'id' : 'ClosedImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : 'standard, or with turn at corner'
                },
                {
                  'id' : 'OpenImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : 'underturned'
                }
              ]
          },
        'ProgressiveChasseToR' : 
          {
            'name' : 'Progressive Chasse To R',
            'urlpath' : 'progressive-chasse-to-r',
            'level' : 'Bronze',
            'startAlignment' : ['DC', 'LOD'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '1 2& 3',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : '4-6'
                },
                {
                  'id' : 'ClosedImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'BackLock',
                  'comment' : ''
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : 'standard, or with turn at corner'
                },
                {
                  'id' : 'OpenImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : 'underturned'
                },
                {
                  'id' : 'OutsideChange',
                  'comment' : 'when ending DC'
                }
              ]
          },
        'ChasseFromPP' : 
          {
            'name' : 'Chasse From Promenade Position',
            'urlpath' : 'chasse-from-promenade-position',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '1 2& 3',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : ''
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : ''
                }
              ]
          },
        'Whisk' : 
          {
            'name' : 'Whisk',
            'urlpath' : 'waltz-whisk',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ChasseFromPP',
                  'comment' : 'Standard Chasse From Promenade or moving DC to follow with Closed Wing'
                },
                {
                  'id' : 'WeaveFromPP',
                  'comment' : 'after 1-2 moving to center after Whisk turned to face DC, OR, steps 1-2 moving DC after Whisk turned to face LOD'
                },
                {
                  'id' : 'Wing',
                  'comment' : ''
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : ''
                },
                {
                  'id' : 'CrossHesitation', 
                  'comment' : ''
                }
              ]
          },
        'NaturalSpinTurn' : 
          {
            'name' : 'Natural Spin Turn',
            'urlpath' : 'waltz-natural-spin-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'follow' : [
                {
                  'id' : 'ReverseTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'ReverseCorte',
                  'comment' : ''
                },
                {
                  'id' : 'ReversePivot',
                  'comment' : ''
                },
                {
                  'id' : 'TurningLock',
                  'comment' : 'standard Turning Lock or Turning Lock to R after overturned Natural Spin Turn'
                },
                {
                  'id' : 'BasicWeave',
                  'comment' : 'approaching a corner'
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : 'RF back into Left Whisk'
                },
                {
                  'id' : 'HoverCorte',
                  'comment' : ''
                }
              ]
          },
        'ReverseTurn' : 
          {
            'name' : 'Reverse Turn',
            'urlpath' : 'waltz-reverse-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-turn-6.png'
            ],
            'follow' : [
                {
                  'id' : 'ClosedChangeLF',
                  'comment' : ''
                },
                {
                  'id' : 'Whisk',
                  'comment' : ''
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : ''
                },
                {
                  'id' : 'ProgressiveChasseToR',
                  'comment' : 'after 4-6 of Reverse Turn ended DC after undertuned Natural Spin Turn or Closed Impetus'
                },
                {
                  'id' : 'BasicWeave',
                  'comment' : 'after 1-3 of Reverse Turn when is commenced LOD'
                },
                {
                  'id' : 'BasicWeave',
                  'comment' : 'after 1-3 of Reverse Turn when ending BLOD near corner, then turn either 1/8, 1/8, 3/8; or 1/4, 1/8, 1/4 on Basic Weave to end DW of new LOD'
                },
                {
                  'id' : 'ReversePivot',
                  'comment' : 'after 1-3'
                },
                {
                  'id' : 'ReverseCorte',
                  'comment' : 'after 1-3 Reverse Turn'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : 'after 4-6 Reverse Turn ended DC after underturned natural Spin Turn or Closed Impetus'
                },
                {
                  'id' : 'OpenTelemark',
                  'comment' : 'after 4-6 Reverse Turn ended DC after underturned natural Spin Turn or Closed Impetus'
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : ''
                },
                {
                  'id' : 'HoverCorte',
                  'comment' : 'after 1-3 Reverse Turn'
                }
              ]
          },
        'NaturalTurn' : 
          {
            'name' : 'Natural Turn',
            'urlpath' : 'waltz-natural-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-turn-6.png'
            ],
            'follow' : [
                {
                  'id' : 'ClosedChangeRF',
                  'comment' : ''
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : 'at corner'
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : 'at corner'
                },
                {
                  'id' : 'ClosedImpetus',  // listed as ClosedImpetus's precedes
                  'comment' : 'after 1-3'
                },
                {
                  'id' : 'OpenImpetus',  // Open Impetus has same precedes as ClosedImpetus.
                  'comment' : 'after 1-3'
                },
                {
                  'id' : 'OutsideChange',  // listed as ClosedImpetu's precedes
                  'comment' : 'after 1-3, ending BDC, either underturned, or commenced LOD'
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : 'after 1-3 Natural Turn'
                }
              ]
          },
        'ClosedChangeRF' : 
          {
            'name' : 'Closed Change RF',
            'urlpath' : 'waltz-closed-changes',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : ['RF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Reverse")',
                  'comment' : ''
                },
                {
                  'id' : 'ProgressiveChasseToR', // RF Closed Change listed as its precede
                  'comment' : ''
                },
                {
                  'id' : 'ClosedTelemark', // RF closed change is listed as its precedes
                  'comment' : ''
                },
                {
                  'id' : 'OpenTelemark', // RF closed change is listed as its precedes
                  'comment' : ''
                }
              ]
          },
        'ClosedChangeLF' : 
          {
            'name' : 'Closed Change LF',
            'urlpath' : 'waltz-closed-changes',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'HesitationChange', // derived from: Hesitation change has same precedes as Natural Turn
                  'comment' : ''
                }
              ]
          }
      };

