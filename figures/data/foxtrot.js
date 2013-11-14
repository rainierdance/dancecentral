//-------------------------------------------
// Foxtrot FIGURES
/* template
'PatternName' : 
	{
		'name' : 'Pattern Name',
		'urlpath' : 'pattern-name',
		'level' : 'Level',
		'startAlignment' : ['LOD'],
		'startFoot' : 'LF',
		'startDirection' : 'fwd',
		'follow' : [
		{
			'id' : "NextPattern"
		}
	    ]
	},
*/
var foxtrotFigures = 
{
  'FeatherStep' : 
    {
    'name' : 'Feather Step',
    'level' : 'Newcomer',
    'urlpath' : 'feather-step',
    'startAlignment' : ['DW', 'DC', 'LOD'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
    'timing' : 'SQQ',
    'diagram' : [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-feather-step-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-feather-step-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-feather-step-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-feather-step-3.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-feather-step-4.png'
    ],
    'follow' : [
    {
      'id' : 'ThreeStep'
    },
    {
      'id' : 'ReverseTurn',
      'comment' : 'just Reverse Turn with Feather finish, or 1-4 Reverse Turn check and Basic Weave'
    },
    {
      'id' : 'ChangeOfDirection'
    },
    {
      'id' : 'ClosedTelemark'
    },
    {
      'eval' : 'MatchFigureName("Open Telemark")'
    },
    {
      'id' : 'HoverTelemark'
    },
    {
      'id' : 'ReverseWave'
    },
    {
      'id' : 'TopSpin',
      'comment' : 'check back after step 3 of feather finish'
    },
    {
      'id' : 'OutsideSwivel',
      'comment' : 'check back after step 3 of Feather Step'
    },
    {
      'id' : 'FallawayReverseAndSlipPivot'
    },
    {
      'id' : 'BounceFallawayWithWeaveEnding'
    }
      ]
    },
  'ThreeStep' : 
    {
    'name' : 'Three Step',
    'urlpath' : 'three-step',
    'level' : 'Newcomer',
    'startAlignment' : ['LOD', 'DW'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
    'timing' : 'SQQ', // normally noted this way, not like the book
    'diagram' : [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-three-step-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-three-step-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-three-step-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-three-step-3.png'
    ],
    'follow' : [
    {
      'id' : 'NaturalTurn'
    },
    {
      'id' : 'NaturalWeave'
    },
    {
      'id' : 'NaturalTelemark'
    },
    {
      'id' : 'HoverCross'
    },
    {
      'id' : 'NaturalTwistTurn'
    },
    {
      'id' : 'CurvedFeatherToBackFeather'
    },
    {
      'id' : 'NaturalHoverTelemark'
    }
      ]
    },
  'NaturalTurn' : 
    {
    'name' : 'Natural Turn',
    'urlpath' : 'natural-turn',
    'level' : 'Newcomer',
    'startAlignment' : ['LOD', 'DW'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
    'timing' : 'SQQ SSS',
    'diagram' : [
      [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-3.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-4.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-5.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-1-6.png'
      ],
      [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-3.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-4.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-5.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-2-6.png'
      ],
      [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-3.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-4.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-5.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-3-6.png'
      ],
      [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-3.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-4.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-5.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-turn-4-6.png'
      ]
    ],
    'follow' : [
    {
      'id' : 'FeatherStep'
    },
    {
      'id' : 'NaturalWeave',
      'comment' : 'at corner for Bronze, side of room for Silver and Gold'
    },
    {
      'id' : 'ClosedImpetusAndFeatherFinish',
      'comment' :  'after step 3'
    },
    {
      'id' : 'OpenImpetus',
      'comment' : 'after step 3'
    },
    {
      'id' : 'HoverFeather',
      'comment' : 'after step 5'
    },
    {
      'id' : 'CurvedFeatherToBackFeather',
      'comment' : 'at corner'
    }
      ]
    },
  'ReverseTurn' : 
    {
    'name' : 'Reverse Turn',
    'urlpath' : 'reverse-turn',
    'level' : 'Newcomer',
    'startAlignment' : ['DC'], 
    'startFoot' : 'LF',
    'startDirection' : 'fwd',
    'timing' : 'SQQ SQQ',
    'diagram' : [
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-0.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-1.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-2.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-3.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-4.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-5.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-6.png',
      'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-reverse-turn-7.png'
    ],
    'follow' : [
      {
        'id' : 'ThreeStep'
      },
      {
        'id' : 'ChangeOfDirection'
      },
      {
        'id' : 'BasicWeave',
        'comment' : '1-4 Reverse Turn to end BDW, check, and Basic Weave'
      },
      {
        'id' : 'ReverseTurn',
        'comment' : '1-4 Reverse Turn to end BLOD near corner, check and Basic Weave turning 1/8, 1/8, 3/8; or 1/4, 1/8, 3/4; to end DW of new LOD'
      },
      {
        'id' : 'HoverTelemark'
      },
      {
        'id' : 'ReverseWave',
      },
      {
        'id' : 'TopSpin',
        'comment' : 'check back after step 6'
      },
      {
        'id' : 'OutsideSwivel',
        'comment' : 'check back after step 6'
      },
      {
        'id' : 'FallawayReverseAndSlipPivot',
        'comment' : 'at corner'
      }
      ]
    },
  'ClosedImpetusAndFeatherFinish' : 
    {
      'name' : 'Closed Impetus and Feather Finish',
      'urlpath' : 'closed-impetus',
      'level' : 'Newcomer',
      'startAlignment' : ['BLOD'],
      'startFoot' : 'LF',
      'startDirection' : 'back',
      'timing' : 'SQQ SQQ',
      'diagram' : [
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-0.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-2.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-3.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-4.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-5.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-6.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-closed-impetus-7.png'
      ],
      'follow' : [
        {
          'eval' : 'SameFollowAs("FeatherStep")'
        }
      ]
    },
  'NaturalWeave' : 
    {
      'name' : 'Natural Weave',
      'urlpath' : 'natural-weave',
      'level' : 'Bronze',
      'startAlignment' : ['LOD'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'S QQ QQ QQ S',
      'diagram' : [
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-0.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-2.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-3.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-4.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-5.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-6.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-7.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-natural-weave-8.png'
       ],
      'follow' : [
        {
          'eval' : 'SameFollowAs("BasicWeave")'
        }
      ]
    },
  'ChangeOfDirection' : 
    {
      'name' : 'Change Of Direction',
      'level' : 'Bronze',
      'urlpath' : 'change-of-direction',
      'startAlignment' : ['DW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SSS',
      'diagram' : [
        [
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-1-0.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-1-1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-1-2.1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-1-2.2.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-1-2.3.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-1-3.png'
        ],
        [
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-2-0.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-2-1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-2-2.1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-2-2.2.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-2-2.3.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-2-3.png'
        ],
        [
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-3-0.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-3-1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-3-2.1.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-3-2.2.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-3-2.3.png',
        'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-change-of-direction-3-3.png'
        ]
      ],
      'follow' : [
        {
          'id' : 'FeatherStep'
        },
        {
          'id' : 'CurvedFeatherToBackFeather' //listed as precedes
        },
        {
          'id' : 'NaturalWeave',
          'comment' : 'at corner for Bronze; side of room for Silver and Gold'
        }
      ]
    },
  'BasicWeave' : 
    {
      'name' : 'Basic Weave',
      'urlpath' : 'basic-weave',
      'level' : 'Bronze',
      'startAlignment' : ['BDW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'QQ QQ QQ S',
      'diagram' : [
        [
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-0.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-1.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-2.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-3.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-4.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-5.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-6.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-1-7.png'
        ],
        [
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-0.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-1.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-2.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-3.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-4.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-5.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-6.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-2-7.png'
        ],
        [
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-0.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-1.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-2.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-3.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-4.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-5.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-6.png',
          'http://www.dancecentral.info/ballroom/international-style/diagrams/foxtrot-basic-weave-3-7.png'
        ]
      ],
      'follow' : [
      {
        'id' : 'ThreeStep'
      },
      {
        'id' : 'ChangeOfDirection'
      },
      {
        'id' : 'HoverTelemark'
      },
      {
        'id' : 'ReverseWave',
      },
      {
        'id' : 'TopSpin',
        'comment' : 'check back after step 6'
      },
      {
        'id' : 'OutsideSwivel',
        'comment' : 'check back after step 6'
      },
      {
        'id' : 'FallawayReverseAndSlipPivot',
        'comment' : 'at corner'
      }
/* though book says save as Reverse Turn, we have to remove the follows for Reverse Turn after 1-4.
        {
          'eval' : 'SameFollowAs("ReverseTurn")'
        }
*/
      ]
    },
  'ClosedTelemark' : 
    {
      'name' : 'Closed Telemark',
      'urlpath' : 'closed-telemark',
      'startAlignment' : ['FDC'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SQQS',
      'level' : 'Silver',
      'follow' : [
        { 'id' : 'FeatherStep',
          'comment' : 'Taking step 1 in CBMP, OP'
        },
        { 'id' : 'NaturalTurn' },
        { 'id' : 'NaturalWeave' },
        { 'id' : 'NaturalTelemark' },
        { 'id' : 'HoverCross',
          'comment' : 'at corner'
        },
        { 'id' : 'NaturalTwistTurn' },
        { 'id' : 'CurvedFeatherToBackFeather' },
        { 'id' : 'NaturalHoverTelemark' }
      ]
    },
  'OpenTelemarkAndFeatherEnding' : 
    {
      'name' : 'Open Telemark and Feather Ending',
      'urlpath' : 'open-telemark-and-feather-ending',
      'startAlignment' : ['FDC'],
      'level' : 'Silver',
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SQQSQQS',
      'follow' : [
        { 'eval' : 'SameFollowAs("ReverseTurn")' }
      ]
    },
  'TopSpin' : 
    {
      'name' : 'Top Spin',
      'urlpath' : 'top-spin',
      'level' : 'Silver',
      'startAlignment' : ['BLOD'],
      'startFoot' : 'LF',
      'startDirection' : 'back',
      'timing' : 'QQQQS',
      'follow' : [
      { 'id' : 'ReverseTurn',
        'comment' : 'if Top Spin ended DC'
      },
      { 'id' : 'ClosedTelemark',
        'comment' : 'if Top Spin ended DC'
      },
      { 'eval' : 'MatchFigureName("Open Telemark")',
        'comment' : 'if Top Spin ended DC'
      },
      { 'id' : 'ReverseWave',
        'comment' : 'if Top Spin ended DC at corner'
      },
      { 'id' : 'ThreeStep',
        'comment' : 'if Top Spin ended LOD or DW'
      },
      { 'id' : 'ChangeOfDirection',
        'comment' : 'if Top Spin ended LOD or DW'
      },
      { 'id' : 'HoverTelemark',
        'comment' : 'if Top Spin ended LOD or DW'
      },
      { 'id' : 'ReverseWave',
        'comment' : 'if Top Spin ended LOD or DW'
      },
      { 'id' : 'FallawayReverseAndSlipPivot' },
      { 'id' : 'BounceFallawayWithWeaveEnding' }
      ]
    },
  'HoverFeather' : 
    {
      'name' : 'Hover Feather',
      'urlpath' : 'hover-feather',
      'level' : 'Silver',
      'startAlignment' : ['FDC'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'QQS',
      'follow' : [
        { 'eval' : 'SameFollowAs("FeatherStep")' }
      ]
    },
  'HoverTelemark' : 
    {
      'name' : 'Hover Telemark',
      'level' : 'Silver',
      'urlpath' : 'hover-telemark',
      'startAlignment' : ['DW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SQQS',
      'follow' : [
        { 'id' : 'FeatherStep',
          'comment' : 'step 1 in CBMP OP'
        },
        { 'id' : 'BasicWeave',
          'comment' : 'LF fwd in line with partner on toe into overturned Basic Weave'
        },
        { 'id' : 'HoverFeather',
          'comment' : 'steps 1-2 counted SS can be followed by Hover Feather'
        },
        { 'eval' : 'MatchFigureName("Natural")',
          'comment' : 'at corner'
        },
        { 'id' : 'CurvedFeatherToBackFeather',
          'comment' : 'at corner'
        }
      ]
    },
  'HoverTelemarkToPP' : 
    {
      'name' : 'Hover Telemark to PP',
      'level' : 'Silver',
      'urlpath' : 'hover-telemark-to-pp',
      'startAlignment' : ['FDW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SQQS',
      'follow' : [
        { 'id' : 'NaturalWeave',
          'comment' : 'overturned, commencing in PP'
        },
        { 'id' : 'FeatherStep'
        },
        { 'id' : 'WeaveFromPP',
        },
        { 'id' : 'NaturalZigZagFromPP',
        },
        { 'id' : 'CurvedFeatherToBackFeather',
          'comment' : 'at corner, starting in PP'
        }
      ]
    },
  'NaturalTelemark' : 
    {
      'name' : 'Natural Telemark',
      'level' : 'Silver',
      'urlpath' : 'natural-telemark',
      'startAlignment' : ['DW'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'SQQQQS',
      'follow' : [
        { 'id' : 'ReverseTurn' },
        { 'id' : 'ClosedTelemark'},
        { 'eval' : 'MatchFigureName("OpenTelemark")' },
        { 'id' : 'ThreeStep', 'comment' : 'at corner' },
        { 'id' : 'ChangeOfDirection', 'comment' : 'at corner' },
        { 'id' : 'HoverTelemark', 'comment' : 'at corner' },
        { 'id' : 'ReverseWave', 'comment' : 'at corner' },
        { 'id' : 'FallawayReverseAndSlipPivot' },
        { 'id' : 'BounceFallawayWithWeaveEnding' }
      ]
    },
  'HoverCross' : 
    {
      'name' : 'Hover Cross',
      'level' : 'Silver',
      'urlpath' : 'hover-cross',
      'startAlignment' : ['DW'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'SQQQQQQS',
      'follow' : [
        { 'id' : 'ReverseTurn' },
        { 'id' : 'ClosedTelemark' },
        { 'eval' : 'MatchFigureName("OpenTelemark")' },
        { 'id' : 'FallawayReverseAndSlipPivot' },
        { 'id' : 'ReverseWave' }, // listed in precedes
        { 'id' : 'BounceFallawayWithWeaveEnding'}
      ]
    },
  'OpenTelemarkNaturalTurnOutsideSwivelAndFeatherEnding' : 
    {
      'name' : 'Open Telemark, Natural Turn, Outside Swivel and Feather Ending',
      'level' : 'Silver',
      'urlpath' : 'open-telemark-natural-turn-to-outside-swivel-and-feather-ending',
      'startAlignment' : ['DC'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SQQSQQSSQQS',
      'follow' : [
        { 'id' : 'ReverseTurn' },
        { 'id' : 'ClosedTelemark' },
        { 'eval' : 'MatchFigureName("Open Telemark")' },
        { 'id' : 'ThreeStep',
          'comment' : 'at corner'
        },
        { 'id' : 'ChangeOfDirection',
          'comment' : 'at corner'
        },
        { 'id' : 'HoverTelemark',
          'comment' : 'at corner'
        },
        { 'id' : 'ReverseWave',
          'comment' : 'at corner'
        },
        { 'id' : 'WeaveFromPP',
          'comment' : 'after step 7'
        },
        { 'id' : 'FallawayReverseAndSlipPivot' },
        { 'id' : 'BounceFallawayWithWeaveEnding' },
        { 'id' : 'NaturalZigZagFromPP',
          'comment' : 'after step 7'
        }
      ]
    },
  'OpenImpetus' : 
    {
      'name' : 'Open Impetus',
      'level' : 'Silver',
      'urlpath' : 'open-impetus',
      'startAlignment' : ['BLOD'],
      'startDirection' : 'back',
      'startFoot' : 'LF',
      'timing' : 'SQQS',
      'follow' : [
        { 'id' : 'FeatherStep' },
        { 'id' : 'WeaveFromPP' },
        { 'id' : 'NaturalWeave',
          'comment' : 'Natural Weave from PP'
        },
        { 'id' : 'NaturalZigZagFromPP' },
        { 'id' : 'CurvedFeatherToBackFeather',
          'comment' : 'starting in PP'
        }
      ]
    },
  'WeaveFromPP' : 
    {
      'name' : 'Weave from PP',
      'level' : 'Silver',
      'urlpath' : 'weave-from-pp',
      'startAlignment' : ['Pointing DC'],
      'startDirection' : 'fwd',
      'startFoot' : 'RF',
      'follow' : [
        { 'id' : 'ThreeStep' },
        { 'id' : 'ChangeOfDirection' },
        { 'id' : 'HoverTelemark' },
        { 'id' : 'ReverseWave' },
        { 'id' : 'FallawayReverseAndSlipPivot',
          'comment' : 'at corner'
        }
      ]
    },
  'ReverseWave' : 
    {
      'name' : 'Reverse Wave',
      'level' : 'Silver',
      'urlpath' : 'reverse-wave',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
        { 'id' : 'FeatherStep' },
        { 'id' : 'BasicWeave',
          'comment' : 'after step 4'
        },
        { 'id' : 'ClosedImpetusAndFeatherFinish',
          'comment' : 'after step 6'
        },
        { 'id' : 'OpenImpetus',
          'comment' : 'after step 6'
        },
        { 'id' : 'HoverFeather',
          'comment' : 'after step 8'
        },
        { 'id' : 'CurvedFeatherToBackFeather',
          'comment' : 'at corner'
        }
      ]
    },
  'OutsideSwivel' : 
    {
     //doesn't exist as a separate pattern in book, will have to extract it
      'name' : 'Outside Swivel',
      'level' : 'Silver',
      'urlpath' : 'open-telemark-natural-turn-to-outside-swivel-and-feather-ending',
      'startAlignment' : ['DW'],
      'startFoot' : 'LF',
      'startDirection' : 'back',
      'timing' : 'SSQQS',
      'follow' : [
        {
          'id' : 'NaturalZigZagFromPP' //listed as precedes
        },
        {
          'id' : 'CurvedFeatherToBackFeather' //listed as precedes
        }
      ]
    },
  'NaturalTwistTurn' : 
    {
      'name' : 'Natural Twist Turn',
      'level' : 'Gold',
      'urlpath' : 'natural-twist-turn',
      'startAlignment' : ['LOD'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'SQ&QSQQS',
      'follow' : [
        { 'eval' : 'SameFollowAs("FeatherStep")'},
        { 'id' : 'NaturalWeave', 'comment' : 'after step 5, continue with 3-8 of Natural Weave' },
        { 'id' : 'ClosedImpetusAndFeatherFinish', 'comment' : 'after step 5, continue with 3-7 Closed Impetus and Feather Finish' },
        { 'id' : 'OpenImpetus', 'comment' : 'ater step 5, continue with 3-4 of Open Impetus'}
      ]
    },
  'CurvedFeatherToBackFeather' : 
    {
      'name' : 'Curved Feather to Back Feather',
      'level' : 'Gold',
      'urlpath' : 'curved-feather-to-back-feather',
      'startAlignment' : ['LOD'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'SQQSQQS',
      'follow' : [
        {
          'id' : 'ClosedImpetusAndFeatherFinish',
          'comment' : 'Feather Finish'
        },
        {
          'id' : 'BasicWeave',
          'comment' : 'At corner'
        },
        {
          'id' : 'ClosedImpetusAndFeatherFinish',
          'comment' : 'After steps 1-3, Closed Impetus'
        },
        {
          'id' : 'OpenImpetus',
          'comment' : 'After steps 1-3'
        }
      ]
    },
  'NaturalZigZagFromPP' : 
    {
      'name' : 'Natural Zig-Zag from PP',
      'level' : 'Gold',
      'urlpath' : 'natural-zig-zag-from-pp',
      'startAlignment' : ['DW'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'SQQQQS',
      'follow' : [
        {
          'id' : 'ThreeStep',
          'comment' : ''
        },
        {
          'id' : 'ChangeOfDirection',
          'comment' : ''
        },
        {
          'id' : 'HoverTelemark',
          'comment' : ''
        },
        {
          'id' : 'ReverseWave',
          'comment' : ''
        },
        {
          'id' : 'ReverseTurn',
          'comment' : 'if ended DC'
        },
        {
          'id' : 'ClosedTelemark',
          'comment' : 'if ended DC'
        },
        {
          'id' : 'OpenTelemarkAndFeatherEnding',
          'comment' : 'if ended DC'
        },
        {
          'id' : 'FallawayReverseAndSlipPivot',
          'comment' : 'if ended DC'
        },
        {
          'id' : 'BounceFallawayWithWeaveEnding',
          'comment' : 'if ended DC'
        },
        {
          'id' : 'OpenTelemarkNaturalTurnOutsideSwivelAndFeatherEnding', // listed in precedes
          'comment' : ''
        },
        {
          'id' : 'ReverseWave',
          'comment' : 'if ended DC'
        }
      ]
    },
  'FallawayReverseAndSlipPivot' : 
    {
      'name' : 'Fallaway Reverse and Slip Pivot',
      'level' : 'Gold',
      'urlpath' : 'fallaway-reverse-and-slip-pivot',
      'startAlignment' : ['DC'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'QQQQ',
      'follow' : [
        {
          'id' : 'ChangeOfDirection',
          'comment' : ''
        },
        {
          'id' : 'HoverTelemark',
          'comment' : ''
        },
        {
          'id' : 'ReverseWave',
          'comment' : ''
        },
        {
          'id' : 'FallawayReverseAndSlipPivot',
          'comment' : ''
        },
        {
          'id' : 'BasicWeave',
          'comment' : 'At corner'
        },
        {
          'id' : 'OpenTelemarkAndFeatherEnding',
          'comment' : 'At corner'
        }
      ]
    },
  'NaturalHoverTelemark' : 
    {
      'name' : 'Natural Hover Telemark',
      'level' : 'Gold',
      'urlpath' : 'natural-hover-telemark',
      'startAlignment' : ['DW'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'timing' : 'SQQSQQS',
      'follow' : [
        {
          'eval' : 'SameFollowAs("NaturalTelemark")'
        }
      ]
    },
  'BounceFallawayWithWeaveEnding' : 
    {
      'name' : 'Bounce Fallaway with Weave Ending',
      'level' : 'Gold',
      'urlpath' : 'bounce-fallaway-with-weave-ending',
      'startAlignment' : ['DC'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'S&QQQQQQS',
      'follow' : [
        {
          'eval' : 'SameFollowAs("ReverseTurn")'
        }
      ]
    }
};


