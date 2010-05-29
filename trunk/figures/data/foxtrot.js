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
        'id' : 'BasicWeave',
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
      'follow' : [
        {
          'id' : 'FeatherStep'
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
      { 'id' : 'OpenTelemark',
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
        { 'id' : 'FeatherEnding'
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
        { 'id' : 'OpenTelemark' },
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
        { 'id' : 'OpenTelemark' },
        { 'id' : 'FallawayReverseAndSlipPivot' },
        { 'id' : 'BounceFallawayWithWeaveEnding'}
      ]
    },
  'OpenTelemarkNaturalTurnOutsideSwivelAndFeatherEnding' : 
    {
      'name' : 'Open Telemark, Natural Turn, Outside Swivel and Feather Ending',
      'level' : 'Silver',
      'urlpath' : 'open-telemark-natural-turn-outside-swivel-and-feather-ending',
      'startAlignment' : ['DC'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'timing' : 'SQQSQQSSQQS',
      'follow' : [
        { 'id' : 'ReverseTurn' },
        { 'id' : 'ClosedTelemark' },
        { 'id' : 'OpenTelemark' },
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
        { 'id' : 'FeatherEnding' },
        { 'id' : 'WeaveFromPP' },
        { 'id' : 'NaturalWeaveFromPP' },
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
      'follow' : [
      ]
    },
  'ReverseWave' : 
    {
      'name' : 'Reverse Wave',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'OutsideSwivel' : 
    {
     //doesn't exist as a separate pattern in book, will have to extract it
      'name' : 'Outside Swivel',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'NaturalTwistTurn' : 
    {
      'name' : 'Natural Twist Turn',
      'level' : 'Gold',
      'follow' : [
      ]
    },
  'CurvedFeatherToBackFeather' : 
    {
      'name' : 'Curved Feather to Back Feather',
      'level' : 'Gold',
      'follow' : [
      ]
    },
  'NaturalZigZagFromPP' : 
    {
      'name' : 'Natural Zig-Zag from PP',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'FallawayReverseAndSlipPivot' : 
    {
      'name' : 'Fallaway Reverse and Slip Pivot',
      'level' : 'Gold',
      'follow' : [
      ]
    },
  'NaturalHoverTelemark' : 
    {
      'name' : 'Natural Hover Telemark',
      'level' : 'Gold',
      'follow' : [
      ]
    },
  'BounceFallawayWithWeaveEnding' : 
    {
      'name' : 'Bounce Fallaway with Weave Ending',
      'level' : 'Gold',
      'follow' : [
      ]
    }
};

