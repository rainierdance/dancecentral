    //-------------------------------------------
    // QUICKSTEP FIGURES
    var quickstepFigures = 
      {
        'ChangeOfDirection' : 
          {
            'name' : 'Change of Direction',
            'level' : 'Bronze'
          },
        'HoverCorte' : 
          {
            'name' : 'Hover Corte',
            'level' : 'Gold'
          },
        'TipsyToRAndL' : 
          {
            'name' : 'Tipsy To R and L',
            'level' : 'Gold'
          },
        'RumbaCross' : 
          {
            'name' : 'Rumba Cross',
            'level' : 'Gold'
          },
        'SixQuickRun' : 
          {
            'name' : 'Six Quick Run',
            'level' : 'Gold'
          },
        'CrossSwivel' : 
          {
            'name' : 'Cross Swivel',
            'level' : 'Gold'
          },
        'ClosedTelemark' : 
          {
            'name' : 'Closed Telemark',
            'level' : 'Silver'
          },
        'V6' : 
          {
            'name' : 'V6',
            'level' : 'Silver'
          },
        'FourQuickRun' : 
          {
            'name' : 'Four Quick Run',
            'level' : 'Silver'
          },
        'RunningRightTurn' : 
          {
            'name' : 'Running Right Turn',
            'level' : 'Silver'
          },
        'Fishtail' : 
          {
            'name' : 'Fishtail',
            'level' : 'Silver'
          },
        'QuickOpenReverse' : 
          {
            'name' : 'Quick Open Reverse',
            'level' : 'Silver'
          },
        'ZigZagBackLockAndRunningFinish' : 
          {
            'name' : 'Zig-Zag, Back Lock And Running Finish',
            'urlpath' : '/zig-zag-back-lock-and-running-finish',
            'level' : 'Bronze',
            'startAlignment' : ['LOD'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                   'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})'
                }
              ]
          },
        'CrossChasse' : 
          {
            'name' : 'Cross Chasse',
            'urlpath' : '/cross-chasse',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                   'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})'
                }
              ]
          },
        'HeelPivot' : 
          {
            'name' : 'Heel Pivot (Quarter Turn To Left)',
            'urlpath' : '/heel-pivot-quarter-turn-to-left',
            'level' : 'Newcomer',
            'startAlignment' : ['BDC', 'DW'], // when previous step is underturned
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")'
                },
                {
                  'id' : 'CrossChasse',
                  'comment' : ''
                },
                {
                  'id' : 'ChangeOfDirection'
                },
                {
                  'id' : 'ChasseReverseTurn',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ProgressiveChasseToRight',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ZigZagBackLockAndRunningFinish'
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : 'when ending DC'
                },
                {
                  'id' : 'CrossSwivel'
                },
                {
                  'id' : 'TipsyToRAndL',
                  'comment' : 'R'
                }
              ]
          },
        'DoubleReverseSpin' : 
          {
            'name' : 'Double Reverse Spin',
            'urlpath' : '/double-reverse-spin',
            'level' : 'Bronze',
            'startAlignment' : ['LOD', 'DC', 'DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ChasseReverseTurn'
                },
                {
                  'id' : 'ProgressiveChasseToRight'
                },
                {
                  'id' : 'DoubleReverseSpin'
                },
                {
                  'id' : 'CrossChasse'
                },
                {
                  'id' : 'ZigZagBackLockAndRunningFinish'
                }
              ]
          },
        'NaturalTurnAndBackLock' : 
          {
            'name' : 'Natural Turn And Back Lock',
            'urlpath' : '/natural-turn-and-back-lock',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ClosedImpetus'
                },
                {
                  'id' : 'TippleChasseToRight'
                },
                {
                  'id' : 'RunningFinish'
                }
              ]
          },
        'RunningFinish' : 
          {
            'name' : 'Running Finish',
            'urlpath' : '/running-finish',
            'level' : 'Bronze',
            'startAlignment' : ['BDW', 'BLOD'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})'
                }
              ]
          },
        'TippleChasseToRight' : 
          {
            'name' : 'Tipple Chasse To Right',
            'urlpath' : '/tipple-chasse-to-r',
            'level' : 'Bronze',
            'startAlignment' : ['BLOD', 'BDW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})'
                }
              ]
          },
        'ProgressiveChasseToRight' : 
          {
            'name' : 'Progressive Chasse To Right',
            'urlpath' : '/progressive-chasse-to-r',
            'level' : 'Bronze',
            'startAlignment' : ['DC', 'LOD'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'id' : 'ClosedImpetus'
                },
                {
                  'id' : 'BackLock'
                },
                {
                  'id' : 'TippleChasseToRight'
                },
                {
                  'id' : 'RunningFinish'
                }
              ]
          },
        'ReversePivot' : 
          {
            'name' : 'Reverse Pivot',
            'urlpath' : '/reverse-pivot',
            'level' : 'Bronze',
            'startAlignment' : ['BDC', 'BLOD'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'id' : 'ChasseReverseTurn'
                },
                {
                  'id' : 'ProgressiveChasseToRight'
                },
                {
                  'id' : 'DoubleReverseSpin'
                },
                {
                  'id' : 'CrossChasse'
                },
                {
                  'id' : 'ZigZagBackLockAndRunningFinish'
                }
              ]
          },
        'BackLock' : 
          {
            'name' : 'Back Lock',
            'urlpath' : '/back-lock',
            'level' : 'Bronze',
            'startAlignment' : ['BDW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'id' : 'ClosedImpetus',
                  'comment' : ''
                },
                {
                  'id' : 'TippleChasseToRight',
                  'comment' : ''
                },
                {
                  'id' : 'RunningFinish',
                  'comment' : ''
                }
              ]
          },
        'ClosedImpetus' : 
          {
            'name' : 'Closed Impetus',
            'urlpath' : '/closed-impetus',
            'level' : 'Bronze',
            'startAlignment' : ['BLOD'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'id' : 'ReversePivot',
                  'comment' : 'after step 3'
                },
                {
                  'id' : 'ProgressiveChasse',
                  'comment' : 'at corner'
                },
                {
                  'id' : 'HeelPivot',
                  'comment' : ''
                }
              ]
          },
        'ChasseReverseTurn' : 
          {
            'name' : 'Chasse Reverse Turn',
            'urlpath' : '/chasse-reverse-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'endAlignment' : 'BLOD',
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id': 'ProgressiveChasse'
                },
                {
                  'id': 'ReversePivot'
                },
                {
                  'id' : 'HeelPivot',
                  'comment' : ''
                },
                {
                  'id': 'FourQuickRun'
                },
                {
                  'id': 'HoverCorte'
                }
              ]
          },
        'NaturalPivotTurn' : 
          {
            'name' : 'Natural Pivot Turn',
            'urlpath' : '/natural-pivot-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'endAlignment' : 'BLOD',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")'
                },
                {
                  'id' : 'RumbaCross'
                }
              ]
          },
        'NaturalSpinTurn' : 
          {
            'name' : 'Natural Spin Turn',
            'urlpath' : '/natural-spin-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'endAlignment' : 'BDC',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ProgressiveChasse'
                },
                {
                  'id' : 'ReversePivot'
                },
                {
                  'id' : 'HeelPivot',
                  'comment' : ''
                },
                {
                  'id' : 'FourQuickRun'
                },
                {
                  'id' : 'V6',
                  'comment' : '2-12, heel should lower on previous step'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'heel should lower on previous step'
                },
                {
                  'id' : 'HoverCorte'
                }
              ]
          },
        'NaturalTurnWithHesitation' : 
          {
            'name' : 'Natural Turn With Hesitation',
            'urlpath' : '/natural-turn-with-hesitation',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'endAlignment' : 'DC', // old LOD.
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ChasseReverseTurn'
                },
                {
                  'id' : 'ProgressiveChasseToRight'
                },
                {
                  'id' : 'DoubleReverseSpin'
                }
              ]
          },
        'NaturalTurn' : 
          {
            'name' : 'Natural Turn',
            'urlpath' : '/natural-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'endAlignment' : 'DW',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ClosedImpetus',
                  'comment' : 'after 1-3'
                },
                {
                  'id' : 'TippleChasseToRight',
                  'comment' : 'after 1-3'
                },
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'CrossChasse',
                  'comment' : 'use 6th step of Natural Turn as entry'
                },
                {
                  'id' : 'ForwardLock',
                  'comment' : 'and then Quick Open Reverse, after 1-5 of Natural Turn ending DC, '
                },
                {
                  'id' : 'ForwardLock',
                  'comment' : 'and then any Natural figures, after 1-5 of Natural Turn ending DW of new LOD, '
                },
                {
                  'id' : 'ZigZagBackLockAndRunningFinish',
                  'comment' : 'use 6th step of Natural Turn as entry'
                },
                {
                  'id' : 'RumbaCross'
                }
              ]
          },
        'QuarterTurnToRight' : 
          {
            'name' : 'Quarter Turn to Right',
            'urlpath' : '/quarter-turn-to-right',
            'level' : 'Newcomer',
            'startAlignment' : ['DW', 'LOD'],
            'endAlignment' : 'BDC',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ProgressiveChasse',
                  'comment' : ''
                },
                {
                  'id' : 'ReversePivot',
                  'comment' : ''
                },
                {
                  'id' : 'HeelPivot',
                  'comment' : ''
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : ''
                },
                {
                  'id' : 'V6',
                  'comment' : '2-12, L heel should still lower on preceeding step'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'L heel should still lower on preceeding step'
                },
                {
                  'id' : 'HoverCorte',
                  'comment' : ''
                }
              ]
          },
        'ForwardLock' : 
          {
            'name' : 'Forward Lock',
            'urlpath' : '/forward-lock',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'endAlignment' : 'DW',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : ''
                },
                {
                  'id' : 'Fishtail',
                  'comment' : ''
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Four Quick Run'
                },
                {
                  'id' : 'V6',
                  'comment' : '2-12, at corner, LF back with Lady OP, TH, S into 2-12 V6'
                },
                {
                  'id' : 'TipsyToRAndL',
                  'comment' : 'L, into 2-12 V6 DC or 2-5 Back Lock down LOD.'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Six Quick Run'
                }
              ]
          },
        'ProgressiveChasse' : 
          {
            'name' : 'Progressive Chasse',
            'urlpath' : '/progressive-chasse',
            'level' : 'Newcomer',
            'startAlignment' : ['BDC', 'BLOD'],
            'endAlignment' : 'DW',
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})',
                  'comment' : ''
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : ''
                },
                {
                  'id' : 'Fishtail',
                  'comment' : ''
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Four Quick Run'
                },
                {
                  'id' : 'V6',
                  'comment' : '2-12, at corner, LF back with Lady OP, TH, S into 2-12 V6'
                },
                {
                  'id' : 'TipsyToRAndL',
                  'comment' : 'L, into 2-12 V6 DC or 2-5 Back Lock down LOD.'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Six Quick Run'
                }
              ]
          }
      };

