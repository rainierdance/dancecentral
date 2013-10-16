    //-------------------------------------------
    // WALTZ FIGURES
    var waltzFigures = 
      {
        'LeftWhisk' : 
          {
            'name' : 'Left Whisk',
            'level' : 'Gold',
            'urlpath' : 'left-whisk',
            'startAlignment' : ['FDW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'OutsideChange', // listed as precedes
                  'comment' : 'releasing LF on step 3'
                },
                {
                  'id' : 'FallawayWhisk', //same as BackWhisk
                  'comment' : 'after runing around Man to R 12&3'
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : 'after runing around Man to R 12&3'
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : 'after runing around Man to R 12&3'
                },
                {
                  'id' : 'OpenImpetus',
                  'comment' : 'after runing around Man to R 12&3'
                },
                {
                  'id' : 'ClosedImpetus',
                  'comment' : 'after runing around Man to R 12&3'
                }
              ]
          },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            'level' : 'Gold',
            'urlpath' : 'contra-check',
            'startAlignment' : ['DW'],
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
        'ClosedWing' : 
          {
            'name' : 'Closed Wing',
            'level' : 'Gold',
            'urlpath' : 'closed-wing',
            'startAlignment' : ['FDC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  //'eval' : 'MatchFigureName("Reverse")', // not generating right figures
                  'eval' : 'MatchFigures({"startFoot" : "LF", "startDirection" : "fwd", "startAlignment" : "DC"})',
                  'comment' : 'taking step 1 in CBMP OP on L side'
                },
                {
                  'id' : 'FallawayReverseAndSlipPivot', // listed as precedes
                  'comment' : ''
                },
                {
                  'id' : 'Whisk',
                  'comment' : 'if ended DW'
                }
              ]
          },
        'TurningLockToR' : 
          {
            'name' : 'Turning Lock to R',
            'level' : 'Gold',
            'urlpath' : 'turning-lock-to-r',
            'startAlignment' : ['LOD'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : '1&23',
            'follow' : [
                {
                  'id' : 'Wing',
                  'comment' : ''
                },
                {
                  'id' : 'ChasseFromPP',
                  'comment' : ''
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : ''
                },
                {
                  'id' : 'WeaveFromPP',
                  'comment' : ''
                },
                {
                  'id' : 'CrossHesitation', 
                  'comment' : ''
                }
              ]
          },
        'FallawayReverseAndSlipPivot' : 
          {
            'name' : 'Fallaway Reverse And Slip Pivot',
            'level' : 'Gold',
            'urlpath' : 'fallaway-reverse-and-slip-pivot',
            'startAlignment' : ['FDC'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '12&3',
            'follow' : [
                {
                  'id' : 'ReverseTurn', // listed as precedes
                  'comment' : 'At corner.'
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
                  'comment' : ''
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
                }
              ]
          },
        'HoverCorte' : 
          {
            'name' : 'Hover Corte',
            'level' : 'Gold',
            'urlpath' : 'hover-corte',
            'startAlignment' : ['BLOD'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : '123 or 123 456',
            'follow' : [
                {
                  'id' : 'BackLock', // listed as precedes
                  'comment' : ''
                },
                {
                  'id' : 'OutsideChange',
                  'comment' : ''
                },
                {
                  'id' : 'FallawayWhisk', // same as BackWhisk
                  'comment' : ''
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : ''
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : ''
                }
              ]
          },
        'FallawayWhisk' : 
          {
            'name' : 'Fallaway Whisk',
            'level' : 'Gold',
            'urlpath' : 'fallaway-whisk',
            'startAlignment' : ['BLOD'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'eval' : 'SameFollowAs("BackWhisk")',
                  'comment' : ''
                }
              ]
          },
        'DragHesitation' : 
          {
            'name' : 'Drag Hesitation',
            'level' : 'Silver',
            'urlpath' : 'drag-hesitation',
            'startAlignment' : ['LOD'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'FallawayWhisk', // same as BackWhisk
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
                  'id' : 'ClosedImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'OpenImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'OutsideSpin',
                  'comment' : 'underturned, turning 3/4'
                }
              ]
          },
        'WeaveFromPP' : 
          {
            'name' : 'Weave From Promenade Position',
            'level' : 'Silver',
            'urlpath' : 'weave-from-promenade-position',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'Wing', // listed as precedes
                  'comment' : 'when ended in PP'
                },
                {
                  'id' : 'LeftWhisk', // listed as precedes
                  'comment' : 'when ended in PP'
                },
                {
                  'id' : 'ChasseFromPP', // listed as precedes
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
                  'id' : 'FallawayWhisk', // same as BackWhisk
                  'comment' : ''
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : ''
                },
                {
                  'id' : 'ClosedImpetus', // listed as precedes
                  'comment' : 'when turned to L to back DW'
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
                  //'eval' : 'MatchFigureName("Reverse")', // not generating right figures
                  'eval' : 'MatchFigures({"startFoot" : "LF", "startDirection" : "fwd", "startAlignment" : "DC"})',
                  'comment' : 'taking step 1 in CBMP OP on L side'
                },
                {
                  'id' : 'DragHesitation',
                  'comment' : ''
                },
                {
                  'id' : 'FallawayReverseAndSlipPivot', // listed as precedes
                  'comment' : ''
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
            'urlpath' : 'outside-spin',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ClosedChangeRF', // listed as precedes
                  'comment' : ''
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : 'when ending DW'
                },
                {
                  'eval' : 'SameFollowAs("NaturalSpinTurn")',
                  'comment' : 'when ending BDC'
                },
                {
                  'id' : 'TurningLock',
                  'comment' : 'Turning Lock to R, when ending BLOD'
                }
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
                  'id' : 'Wing', // listed as precedes
                  'comment' : 'when ended in PP'
                },
                {
                  'id' : 'WeaveFromPP', // listed as precedes
                  'comment' : 'when ended in PP'
                },
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
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-impetus-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-impetus-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-impetus-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-impetus-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-impetus-4.png'
            ],
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-1-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-2-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-hesitation-change-3-6.png'
              ]
            ],
            'follow' : [  // its precedes is listed "As Natural Turn", so anywhere Natural Turn is listed as follow, we add HesitationChange
                {
                  'id' : 'DragHesitation',
                  'comment' : ''
                },
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-1-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-outside-change-2-4.png'
              ]
            ],
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
                  'id' : 'Wing', // listed as precedes
                  'comment' : 'when ended in PP'
                },
                {
                  'id' : 'WeaveFromPP', // listed as precedes
                  'comment' : 'when ended in PP'
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-1-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-2-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-3-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-4-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-4-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-4-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-corte-4-3.png'
              ]
            ],
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6'
                },
                {
                  'id' : 'FallawayWhisk', // same as BackWhisk
                  'comment' : ''
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : ''
                },
                {
                  'id' : 'NaturalTurn',
                  'comment' : '4-6 when ending BDW'
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
                  'id' : 'BackWhisk',
                  'comment' : 'Back whisk with turn at corner'
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
            'diagram' : [   // array of figures (without variation), or array of array of diagrams (w/ variations)
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-1-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-2-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-whisk-3-3.png'
              ]
            ],
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-1-7.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-basic-weave-2-7.png'
              ]
            ],
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
                  'id' : 'LeftWhisk', // listed as precedes
                  'comment' : 'when ended in PP'
                },
                {
                  'id' : 'Wing', // listed as precedes
                  'comment' : 'when ended in PP'
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
            'timing' : '1 2& 3',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-1-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-2-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-double-reverse-spin-3-4.png'
              ]
            ],
            'follow' : [
                {
                  'id' : 'DragHesitation',
                  'comment' : ''
                },
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
                  //'eval' : 'MatchFigureName("Reverse")', // this is not correct, some Reverse named figures don't start DC
                  'eval' : 'MatchFigures({"startFoot" : "LF", "startAlignment" : "DC"})',
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
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-pivot-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-pivot-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-reverse-pivot-2.png'
            ],
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
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : 'when ending DW'
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : 'when ending LOD'
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : '1-3 into Basic Weave when ending LOD'
                },
                {
                  'id' : 'ProgressiveChasseToR',
                  'comment' : '3/8 turn, when ending LOD'
                },
                {
                  'id' : 'ProgressiveChasseToR',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'OpenTelemark',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'FallawayReverseAndSlipPivot',
                  'comment' : 'when ending DC'
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
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-lock-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-lock-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-lock-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-lock-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-lock-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-back-lock-5.png'
            ],
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
                  'id' : 'FallawayWhisk', // same as BackWhisk
                  'comment' : 'standard, or with turn at corner'
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-1-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-2-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-3-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-3-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-4-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-4-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-4-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-4-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-4-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-progressive-chasse-to-r-4-5.png'
              ]
            ],
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
                  'id' : 'FallawayWhisk', // same as BackWhisk
                  'comment' : 'standard, or with turn at corner'
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
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-chasse-from-pp-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-chasse-from-pp-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-chasse-from-pp-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-chasse-from-pp-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-chasse-from-pp-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-chasse-from-pp-5.png'
            ],
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-1-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-2-3.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-whisk-3-3.png'
              ]
            ],
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
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-4-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-4-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-1-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-4-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-4-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-natural-spin-turn-2-6.png'
              ]
            ],
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
                  'id' : 'TurningLockToR',
                  'comment' : 'after overturned Natural Spin Turn'
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
                  'id' : 'DragHesitation',
                  'comment' : 'After normal Reverse Turn, or 4-6 Reverse Turn after Natural Spin Turn or Closed Impetus'
                },
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
                  'id' : 'FallawayReverseAndSlipPivot', // listed as precedes
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
                  'comment' : 'after 4-6 Reverse Turn ended DC after underturned Natural Spin Turn or Closed Impetus'
                },
                {
                  'id' : 'OpenTelemark',
                  'comment' : 'after 4-6 Reverse Turn ended DC after underturned Natural Spin Turn or Closed Impetus'
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : ''
                },
                {
                  'id' : 'LeftWhisk', // listed as precedes
                  'comment' : 'after 1-3 Reverse Turn, start Left Whisk with RF back on step 1'
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
                  'id' : 'NaturalTurn',
                  'comment' : 'Natural Turn can be followed by 1-3 of NaturalTurn to end backing center, then followed by Outside Change turning 1/8 to L'
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
                  'id' : 'FallawayWhisk', // same as BackWhisk
                  'comment' : 'after 1-3 Natural Turn'
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
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-rf-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-rf-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-rf-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-rf-3.png'
            ],
            'follow' : [
                {
                  'id' : 'DragHesitation',
                  'comment' : ''
                },
                {
                  'eval' : 'MatchFigures({"startFoot" : "LF", "startDirection" : "fwd", "startAlignment" : "DC"})',
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
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-lf-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-lf-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-lf-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/waltz-closed-change-lf-3.png'
            ],
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

