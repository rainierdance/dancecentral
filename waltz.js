    //-------------------------------------------
    // WALTZ FIGURES
    var waltzFigures = 
      {
        'LeftWhisk' : 
          {
            'name' : 'Left Whisk',
            'level' : 'Gold',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            'level' : 'Gold',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'ClosedWing' : 
          {
            'name' : 'Closed Wing',
            'level' : 'Gold',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'TurningLockToR' : 
          {
            'name' : 'Turning Lock to R',
            'level' : 'Gold',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'FallawayReverseAndSlipPivot' : 
          {
            'name' : 'Fallaway Reverse And Slip Pivot',
            'level' : 'Gold',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'HoverCorte' : 
          {
            'name' : 'Hover Corte',
            'level' : 'Gold',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'WeaveFromPP' : 
          {
            'name' : 'Weave From Promenade Position',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'ClosedTelemark' : 
          {
            'name' : 'Closed Telemark',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'OpenTelemarkAndClosedHesitation' : 
          {
            'name' : 'Open Telemark & Closed Hesitation',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'OpenTelemarkAndWing' : 
          {
            'name' : 'Open Telemark And Wing',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'OpenImpetusAndCrossHesitation' : 
          {
            'name' : 'Open Impetus And Cross Hesitation',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'OpenImpetusAndWing' : 
          {
            'name' : 'Open Impetus And Wing',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'OutsideSpin' : 
          {
            'name' : 'Outside Spin',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'TurningLock' : 
          {
            'name' : 'Turning Lock',
            'level' : 'Silver',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              ]
          },
        'ClosedImpetus' : 
          {
            'name' : 'Closed Impetus',
            'urlpath' : '/closed-impetus',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
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
            'urlpath' : '/hesitation-change',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
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
                  'id' : 'ClosedChange',
                  'comment' : 'LF Closed Change when facing DW of new LOD'
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
                  'eval' : 'MatchFigureName("Open Telemark")',
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
            'urlpath' : '/outside-change',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : 'when ending OP'
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : 'when ending OP or when ending PP, Foot position of step 3 of Outside Change will be the same as step 3 Open Telemark'
                },
                {
                  'id' : 'ChasseFromPP',
                  'comment' : 'when ending in PP'
                },
                {
                  'eval' : 'MatchFigureName("Cross Hesitation")',
                  'comment' : 'when ending in PP'
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : 'when ending in PP'
                }
              ]
          },
        'ReverseCorte' : 
          {
            'name' : 'Reverse Corte',
            'urlpath' : '/reverse-corte',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
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
                  'eval' : 'MatchFigureName("Open Impetus")',
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
            'urlpath' : '/back-whisk',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'SameFollowAs("Whisk")'
                }
              ]
          },
        'BasicWeave' : 
          {
            'name' : 'Basic Weave',
            'urlpath' : '/basic-weave',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : ''
                }
              ]
          },
        'DoubleReverseSpin' : 
          {
            'name' : 'Double Reverse Spin',
            'urlpath' : '/double-reverse-spin',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ClosedChange',
                  'comment' : 'LF, when ending DW'
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
                  'eval' : 'MatchFigureName("Open Telemark")',
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
            'urlpath' : '/reverse-pivot',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ClosedChange',
                  'comment' : 'LF, when ending DW'
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
                  'eval' : 'MatchFigureName("Open Telemark")',
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
            'urlpath' : '/back-lock',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
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
                  'eval' : 'MatchFigureName("Open Impetus")',
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
            'urlpath' : '/progressive-chasse-to-r',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
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
                  'eval' : 'MatchFigureName("Open Impetus")',
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
            'urlpath' : '/waltz-chasse-from-promenade-position',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : '',
                  'comment' : ''
                }
              ]
          },
        'Whisk' : 
          {
            'name' : 'Whisk',
            'urlpath' : '/waltz-whisk',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
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
                  'id' : 'OpenImpetusAndCrossHesitation',
                  'comment' : 'Cross Hesitation'
                },
                {
                  'id' : 'ClosedWing',
                  'comment' : 'Wing ?'
                },
                {
                  'id' : 'LeftWhisk',
                  'comment' : ''
                }
              ]
          },
        'NaturalSpinTurn' : 
          {
            'name' : 'Natural Spin Turn',
            'urlpath' : '/waltz-natural-spin-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
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
            'urlpath' : '/waltz-reverse-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ClosedChange',
                  'comment' : 'LF'
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
                  'id' : 'ReverseCorte',
                  'comment' : 'after 1-3 Reverse Turn'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : 'after 4-6 Reverse Turn ended DC after underturned natural Spin Turn or Closed Impetus'
                },
                {
                  'eval' : 'MatchFigureName("Open Telemark")',
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
            'urlpath' : '/waltz-natural-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ClosedChange',
                  'comment' : 'RF'
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : 'at corner'
                },
                {
                  'id' : 'BackWhisk',
                  'comment' : 'after 1-3 Natural Turn'
                }
              ]
          },
        'ClosedChange' : 
          {
            'name' : 'Closed Change',
            'urlpath' : '/waltz-closed-changes',
            'level' : 'Newcomer',
            'startAlignment' : ['DC', 'DW'],
            'startFoot' : ['RF', 'LF'],
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Reverse")',
                  'comment' : 'after RF Closed Change'
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : 'after LF Closed Change'
                }
              ]
          }
      };

