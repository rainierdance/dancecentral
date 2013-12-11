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
            'timing' : 'SSSS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-change-of-direction-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-change-of-direction-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-change-of-direction-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-change-of-direction-3.1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-change-of-direction-3.2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-change-of-direction-4.png'
            ],
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
            'level' : 'Gold',
            'urlpath' : 'hover-corte',
            'startFoot' : 'RF',
            'startDirection' : 'BLOD',
            'timing' : 'SSSS',
            'follow' : [
                {
                    'id' : 'TippleChasseToRight'
                },
                {
                  'id' : 'TipsyToR',
                  'comment' : '' // listed in precedes
                },
                {
                    'id' : 'RunningFinish'
                },
                {
                    'id' : 'TipsyToL'
                },
                {
                    'id' : 'FourQuickRun',
                    'comment' : 'At corner'
                },
                {
                    'id' : 'V6',
                    'comment' : 'At corner, 2-12 of V6'
                },
                {
                    'id' : 'SixQuickRun',
                    'comment' : 'At corner'
                }
            ]
          },
        'TipsyToL' : 
          {
            'name' : 'Tipsy To L',
            'level' : 'Gold',
            'urlpath' : 'tipsy-to-right-and-left',
            'startFoot' : 'LF',
            'startDirection' : 'left',
            'timing' : 'Q & Q',
            'follow' : [
                {
                    'id' : 'BackLock',
                    'comment' : 'steps 2-5'
                },
                {
                    'id' : 'TippleChasseToRight',
                    'comment': 'steps 2-8'
                },
                {
                    'id' : 'V6',
                    'comment' : 'steps 2-12'
                },
                {
                    'id' : 'TipsyToR'
                }
            ]
          },
        'TipsyToR' : 
          {
            'name' : 'Tipsy To R',
            'level' : 'Gold',
            'urlpath' : 'tipsy-to-right-and-left',
            'startFoot' : 'RF',
            'startDirection' : 'right',
            'timing' : 'Q & Q',
            'follow' : [
                { 
                    'id' : 'ForwardLock',
                    'comment' : 'steps 2-5'
                },
                {
                    'id' : 'TipsyToL',
                }
            ]
          },
        'RumbaCross' : 
          {
            'name' : 'Rumba Cross',
            'level' : 'Gold',
            'urlpath' : 'rumba-cross',
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : 'QQS',
            'follow' : [
                { 
                    'id' : 'RunningRightTurn',
                    'comment' : '5-11 of Running Right Turn, RF fwd, S, into Tipsy to L'
                },
                {
                    'id' : 'RumbaCross'
                }
            ]
          },
        'SixQuickRun' : 
          {
            'name' : 'Six Quick Run',
            'level' : 'Gold',
            'urlpath' : 'six-quick-run',
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : 'QQQQQQS',
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : 'start OP'
                },
                {
                  'id' : 'Fishtail',
                  'comment' : ''  // list in precedes
                },
                {
                    'id' : 'TipsyToL',
                    'comment' : 'into 2-12 V6 DC or 2-5 Back Lock down LOD.'
                },
                {
                    'id' : 'FourQuickRun',
                    'comment' : 'At corner, LF back with Lady OP, TH, S, into Four Quick Run or 2-12 of V6'
                }
            ]
          },
        'CrossSwivel' : 
          {
            'name' : 'Cross Swivel',
            'level' : 'Gold',
            'urlpath' : 'cross-swivel',
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : 'SSS',
            'follow' : [
                {
                    'id' : 'TippleChasseToRight',
                    'comment' : ''
                },
                {
                    'id' : 'RunningFinish',
                    'comment' : ''
                },
                {
                    'id' : 'Fishtail',
                    'comment' : ''
                },
                {
                    'id' : 'TipsyToR',
                    'comment' : 'After LF back with Lady OP, TH, S, into Tipsy to R'
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
            'timing' : 'SSSS or SQQS or QQSS',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot" : "RF", "startAlignment" : "DW", "startDirection" : "fwd"})',
                  'comment' : ''
                },
                {
                  'id' : 'Fishtail',
                  'comment' : ''  // list in precedes
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S, into Four Quick Run'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S, into Six Quick Run'
                }
              ]
          },
        'V6' : 
          {
            'name' : 'V6',
            'level' : 'Silver',
            'urlpath' : 'v6',
            'startAlignment' : ['BDC'],
            'startFoot' : 'LF',
            'startDirection' : 'back',
            'timing' : 'SQQSSQQS',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot" : "RF", "startAlignment" : "DW", "startDirection" : "fwd"})',
                  'comment' : ''
                },
                {
                  'id' : 'Fishtail',
                  'comment' : ''  // list in precedes
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : 'after 6-8 of V6 overturned to LOD'
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S, into Four Quick Run'
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'into 2-5 Back Lock down LOD'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'LF back with Lady OP, TH, S, into Six Quick Run'
                }
              ]
          },
        'FourQuickRun' : 
          {
            'name' : 'Four Quick Run',
            'level' : 'Silver',
            'urlpath' : 'four-quick-run',
            'startAlignment' : ['BLOD'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : 'SQQQQSS',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})',
                  'comment' : ''
                },
                {
                  'id' : 'V6',
                  'comment' : 'at corner, LF back with Lady OP, TH, S, into 2-12 V6'
                },
                {
                  'id' : 'Fishtail',
                  'comment' : ''  // list in precedes
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'into 2-12 V6'
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'into 2-5 Back Lock down LOD'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'LF back with Lady OP, TH, S, into Six Quick Run'
                }
              ]
          },
        'RunningRightTurn' : 
          {
            'name' : 'Running Right Turn',
            'level' : 'Silver',
            'urlpath' : 'running-right-turn',
            'startAlignment' : ['DW'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : 'SQQ S SSS QQS S',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot" : "RF", "startDirection" : "fwd"})',
                  'comment' : ''
                },
                {
                  'id' : 'QuickOpenReverse',
                  'comment' : 'when ended DC'
                },
                {
                  'id' : 'Fishtail',
                  'comment' : 'when ended DC'
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'Tipsy to L into 2-12 V6 DC or 2-5 Back Lock down LOD'
                }
              ]
          },
        'Fishtail' : 
          {
            'name' : 'Fish Tail',
            'level' : 'Silver',
            'urlpath' : 'fishtail',
            'startAlignment' : ['DC'],
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'timing' : 'SQQQQSS',
            'follow' : [
                {
                  'eval' : 'MatchFigures({"startFoot": "RF", "startDirection": "fwd", "startAlignment": "DW"})',
                  'comment' : ''
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : 'at corner, LF back with Lady OP, TH, S, into Four Quick Run'
                },
                {
                  'id' : 'V6',
                  'comment' : 'at corner, LF back with Lady OP, TH, S, into 2-12 V6'
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'into 2-12 V6'
                },
                {
                  'id' : 'TipsyToL',
                  'comment' : 'into 2-5 Back Lock down LOD'
                },
                {
                  'id' : 'SixQuickRun',
                  'comment' : 'LF back with Lady OP, TH, S, into Six Quick Run'
                }
              ]
          },
        'QuickOpenReverse' : 
          {
            'name' : 'Quick Open Reverse',
            'level' : 'Silver',
            'urlpath' : 'quick-open-reverse',
            'startAlignment' : ['LOD'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : 'SQQS',
            'follow' : [
                {
                  'id' : 'ProgressiveChasse',
                  'comment' : ''
                },
                {
                  'id' : 'ReversePivot',
                  'comment' : 'after step 3'
                },
                {
                  'id' : 'FourQuickRun',
                  'comment' : ''
                },
                {
                  'id' : 'HeelPivot',
                  'comment' : 'after 1-3 of Quick Open Reverse'   //listed in precedes
                },
                {
                  'id' : 'HoverCorte',
                  'comment' : ''
                }
              ]
          },
        'ZigZagBackLockAndRunningFinish' : 
          {
            'name' : 'Zig-Zag, Back Lock And Running Finish',
            'urlpath' : 'zig-zag-back-lock-and-running-finish',
            'level' : 'Bronze',
            'startAlignment' : ['LOD'],
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'timing' : 'SS SQQS SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-00.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-01.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-02.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-03.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-04.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-05.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-06.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-07.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-08.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-09.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-zig-zag-back-lock-running-finish-10.png'
            ],
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
            'timing' : 'SQQ',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-cross-chasse-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-cross-chasse-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-cross-chasse-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-cross-chasse-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-cross-chasse-4.png'
            ],
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
            'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-heel-pivot-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-heel-pivot-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-heel-pivot-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-heel-pivot-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-heel-pivot-4.png'
            ],
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
            'timing' : 'SSQQ',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-1-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-2-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-double-reverse-spin-3-4.png'
              ]
            ],
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
            'timing' : 'SQQ SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-and-back-lock-8.png'
             ],
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
            'timing' : 'SQQ',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-1-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-2-4.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-running-finish-3-4.png'
              ]
              ],
            'follow' : [
                {
                  'eval' : 'SameFollowAs("ForwardLock")',
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
            'timing' : 'SQQ SQQS',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-1-8.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-2-8.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-3-8.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-tipple-chasse-to-right-4-8.png'
              ]
            ],
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
            'timing' : 'SQQS',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-1-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-2-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-3-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-3-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-4-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-4-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-4-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-4-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-4-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-to-r-4-5.png'
              ]
            ],
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
            'timing' : 'S or &',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-reverse-pivot-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-reverse-pivot-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-reverse-pivot-2.png'
            ],
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
            'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-5.png'
             ],
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
            'timing' : 'SSS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-closed-impetus-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-closed-impetus-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-closed-impetus-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-closed-impetus-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-closed-impetus-4.png'
            ],
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
            'timing' : 'SQQ',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-chasse-reverse-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-chasse-reverse-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-chasse-reverse-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-chasse-reverse-turn-3.png'
            ],
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
            'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-pivot-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-pivot-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-pivot-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-pivot-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-pivot-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-pivot-turn-5.png'
            ],
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
            'timing' : 'SQQ SSS',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-4.1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-4.2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-1-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-4.1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-4.2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-spin-turn-2-6.png'
              ]
            ],
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
            'timing' : 'SQQ SSS',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-1-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-2-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-with-hesitation-3-6.png'
              ]
            ],
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
            'timing' : 'SQQ SSS',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-1-6.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-natural-turn-2-6.png'
              ]
            ],
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
                  'id' : 'TipsyToR',
                  'comment' : 'after 1-4 of Natural Turn' // listed in precedes
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
            'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-quarter-turn-to-right-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-quarter-turn-to-right-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-quarter-turn-to-right-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-quarter-turn-to-right-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-quarter-turn-to-right-4.png'
            ],
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
            'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-forward-lock-back-lock-5.png'
             ],
            'follow' : [
                {
                  'id' : 'ForwardLock', // not listed, but it's done
                  'comment' : ''
                },
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
            'timing' : 'SQQS',
            'diagram' : [
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-1-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-1-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-1-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-1-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-1-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-1-5.png'
              ],
              [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-2-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-2-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-2-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-2-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-2-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/quickstep-progressive-chasse-2-5.png'
              ]
            ],
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

