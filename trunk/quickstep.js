    //-------------------------------------------
    // QUICKSTEP FIGURES
    var quickstepFigures = 
      {
        'ChangeOfDirection' : 
          {
            'name' : 'Change of Direction',
            'level' : 'Bronze',
            'urlpath' : 'change-of-direction',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'id' : 'ChasseReverseTurn'
                },
                {
                  'id' : 'ProgressiveChasseToRight',
                  'comment' : 'step 4 of Change of Direction would not be taken in CBMP when followed by Progressive Chasse To Right'
                },
                {
                  'id' : 'CrossChasse',
                  'comment' : 'at corner'
                }
              ]
          },
        'HoverCorte' : 
          {
            'name' : 'Hover Corte',
            'level' : 'Gold'
          },
        'TipsyToL' : 
          {
            'name' : 'Tipsy To L',
            'level' : 'Gold'
          },
        'TipsyToR' : 
          {
            'name' : 'Tipsy To R',
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
            'name' : 'Fish Tail',
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
            'urlpath' : 'zig-zag-back-lock-and-running-finish',
            'level' : 'Bronze',
            'startAlignment' : ['LOD'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")'
                },
                {
                  'id' : 'ForwardLock'
                },
                {
                  'id' : 'QuickOpenReverse'
                }
              ]
          },
        'CrossChasse' : 
          {
            'name' : 'Cross Chasse',
            'urlpath' : 'cross-chasse',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")'
                },
                {
                  'id' : 'ForwardLock'
                },
                {
                  'id' : 'Fishtail'
                }
              ]
          },
        'HeelPivot' : 
          {
            'name' : 'Heel Pivot (Quarter Turn To Left)',
            'urlpath' : 'heel-pivot-quarter-turn-to-left',
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
                  'comment' : 'when preceding figure ends DC'
                },
                {
                  'id' : 'ProgressiveChasseToRight',
                  'comment' : 'when preceding figure ends DC'
                },
                {
                  'id' : 'DoubleReverseSpin',
                  'comment' : 'when preceding figure ends DC'
                },
                {
                  'id' : 'ZigZagBackLockAndRunningFinish'
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : 'when preceding figure ends DC'
                },
                {
                  'id' : 'ClosedTelemark',
                  'comment' : 'when preceding figure ends DC'
                },
                {
                  'id' : 'CrossSwivel'
                },
                {
                  'id' : 'TipsyToR'
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
                },
                {
                  'id' : 'QuickOpenReverse'
                },
                {
                  'id' : 'ClosedTelemark'
                },
                {
                  'id' : 'CrossSwivel'
                },
                {
                  'id' : 'TipsyToR',
                  'comment' : 'LF fwd, H, S into Tipsy to R'
                },
                {
                  'id' : 'ChangeOfDirection'
                }
              ]
          },
        'NaturalTurnAndBackLock' : 
          {
            'name' : 'Natural Turn And Back Lock',
            'urlpath' : 'natural-turn-and-back-lock',
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
                },
                {
                  'id' : 'TipsyToR'
                }
              ]
          },
        'RunningFinish' : 
          {
            'name' : 'Running Finish',
            'urlpath' : 'running-finish',
            'level' : 'Bronze',
            'startAlignment' : ['BDW', 'BLOD'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")',
                  'comment' : ''
                },
                {
                  'id' : 'QuickOpenReverse'
                },
                {
                  'id' : 'Fishtail'
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'at corner, LF back with lady OP, TH, S into Four Quick Runs'
                },
                {
                  'id' : 'V6',
                  'comment' : '2-12, at corner, LF back with lady OP, TH, S into Four Quick Runs'
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'then into 2-12 V6 DC or 2-5 Back Lock down LOD.'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Six Quick Run.'
                }
              ]
          },
        'TippleChasseToRight' : 
          {
            'name' : 'Tipple Chasse To Right',
            'urlpath' : 'tipple-chasse-to-r',
            'level' : 'Bronze',
            'startAlignment' : ['BLOD', 'BDW'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'follow' : [
                {
                  'eval' : 'MatchFigureName("Natural")'
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : 'at corner, when ended DC'
                },
                {
                  'id' : 'Fishtail',
                  'comment' : 'at corner, when ended DC'
                },
                {
                  'id' : 'TipsyToR',
                  'comment' : '1-4 at corner, then followed by Tipsy to L'
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
                  'id' : 'TipsyToL',
                  'comment' : 'then into 2-12 V6 DC or 2-5 Back Lock down LOD'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Six Quick Run'
                }
              ]
          },
        'ProgressiveChasseToRight' : 
          {
            'name' : 'Progressive Chasse To Right',
            'urlpath' : 'progressive-chasse-to-r',
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
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'when preceding figure ends DC or LOD'
                },
                {
                  'id' : 'V6',
                  'comment' : '6-12, when preceding figure ends DC or LOD'
                },
                {
                  'id' : 'TipsyToR'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'when preceding figure ends DC'
                }
              ]
          },
        'ReversePivot' : 
          {
            'name' : 'Reverse Pivot',
            'urlpath' : 'reverse-pivot',
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
                },
                {
                  'id' : 'QuickOpenReverse'
                },
                {
                  'id' : 'ClosedTelemark'
                },
                {
                  'id' : 'CrossSwivel'
                },
                {
                  'id' : 'TipsyToR',
                  'comment' : 'after a step fwd on LF'
                },
                {
                  'id' : 'ChangeOfDirection'
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
                },
                {
                  'id' : 'TipsyToR'
                }
              ]
          },
        'ClosedImpetus' : 
          {
            'name' : 'Closed Impetus',
            'urlpath' : 'closed-impetus',
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
                },
                {
                  'id' : 'FourQuickRun'
                },
                {
                  'id' : 'V6',
                  'comment' : '2-12, at corner after step 3, lower L heel on previous step',
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'after step 3, lower L heel on previous step',
                },
                {
                  'id' : 'HoverCorte'
                }
              ]
          },
        'ChasseReverseTurn' : 
          {
            'name' : 'Chasse Reverse Turn',
            'urlpath' : 'chasse-reverse-turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
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
            'urlpath' : 'natural-pivot-turn',
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
            'urlpath' : 'natural-spin-turn',
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
            'urlpath' : 'natural-turn-with-hesitation',
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
            'urlpath' : 'natural-turn',
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
            'urlpath' : 'quarter-turn-to-right',
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
            'urlpath' : 'forward-lock',
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
                  'id' : 'TipsyToL',
                  'comment' : 'then into 2-12 V6 DC or 2-5 Back Lock down LOD.'
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
            'urlpath' : 'progressive-chasse',
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
                  'id' : 'TipsyToL',
                  'comment' : 'then into 2-12 V6 DC or 2-5 Back Lock down LOD.'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S into Six Quick Run'
                }
              ]
          }
      };

