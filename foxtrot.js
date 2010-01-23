//-------------------------------------------
// Foxtrot FIGURES
/* template
'PatternName' : 
	{
		'name' : 'Pattern Name',
		'urlpath' : '/pattern-name',
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
    'urlpath' : '/feather-step',
    'startAlignment' : ['LOD'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
    'follow' : [
    {
      'id' : 'ThreeStep'
    },
    {
      'id' : 'ReverseTurn'
    },
    {
      'id' : 'BasicWeave',
      'comment' : '1-4 Reverse Turn check and Basic Weave'
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
    'urlpath' : '/three-step',
    'level' : 'Newcomer',
    'startAlignment' : ['LOD'],
    'startFoot' : 'LF',
    'startDirection' : 'fwd',
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
    'urlpath' : '/natural-turn',
    'level' : 'Newcomer',
    'startAlignment' : ['LOD'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
    'follow' : [
    {
      'id' : 'FeatherStep'
    },
    {
      'id' : 'NaturalWeave',
      'comment' : 'at corner'
    },
    {
      'id' : 'ClosedImpetus',
      'comment' :  'after step 3'
    },
    {
      'id' : 'NaturalWeave',
      'comment' : 'side of room'
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
    'name' : 'Reverse Turn (incorporating Feather Finish)',
    'urlpath' : '/reverse-turn',
    'level' : 'Newcomer',
    'startAlignment' : ['DC'], 
    'startFoot' : 'LF',
    'startDirection' : 'fwd',
    'follow' : [
      {
        'id' : 'ThreeStep'
      },
      {
        'id' : 'ChangeOfDirection'
      },
      {
        'id' : 'BasicWeave',
        'comment' : 'overturned 1-4 Reverse Turn, check, and Basic Weave'
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
      'urlpath' : '/closed-impetus',
      'level' : 'Newcomer',
      'startAlignment' : ['BLOD'],
      'startFoot' : 'LF',
      'startDirection' : 'back',
      'follow' : [
        {
          'id' : 'ThreeStep'
        },
        {
          'id' : 'ReverseTurn'
        },
        {
          'id' : 'BasicWeave',
          'comment' : '1-4 Reverse Turn check and Basic Weave'
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
  'NaturalWeave' : 
    {
      'name' : 'NaturalWeave',
      'urlpath' : '/natural-weave',
      'level' : 'Bronze',
      'startAlignment' : ['LOD'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'follow' : [
        {
          'id' : 'ThreeStep'
        },
        {
          'id' : 'ChangeOfDirection'
        },
        {
          'id' : 'BasicWeave',
          'comment' : 'overturned 1-4 Reverse Turn, check, and Basic Weave'
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
  'ChangeOfDirection' : 
    {
      'name' : 'Change Of Direction',
      'level' : 'Bronze',
      'urlpath' : '/change-of-direction',
      'startAligment' : ['DW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
        {
          'id' : 'FeatherStep'
        },
        {
          'id' : 'NaturalWeave',
          'comment' : 'at corner'
        },
        {
          'id' : 'NaturalWeave',
          'comment' : 'side of room'
        }
      ]
    },
  'BasicWeave' : 
    {
      'name' : 'Basic Weave',
      'urlpath' : '/basic-weave',
      'level' : 'Bronze',
      'startAlignment' : ['BDW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
        {
          'id' : 'ThreeStep'
        },
        {
          'id' : 'ChangeOfDirection'
        },
        {
          'id' : 'BasicWeave',
          'comment' : 'overturned 1-4 Reverse Turn, check, and Basic Weave'
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
  'ClosedTelemark' : 
    {
      'name' : 'Closed Telemark',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
        'id' : "NextPattern"
      }
      ]
    },
  'OpenTelemarkAndFeatherEnding' : 
    {
      'name' : 'Open Telemark and Feather Ending',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'TopSpin' : 
    {
      'name' : 'Top Spin',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'HoverFeather' : 
    {
      'name' : 'Hover Feather',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'HoverTelemark' : 
    {
      'name' : 'Hover Telemark',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'NaturalTelemark' : 
    {
      'name' : 'Natural Telemark',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'HoverCross' : 
    {
      'name' : 'Hover Cross',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'OpenTelemarkNaturalTurnOutsideSwivelAndFeatherEnding' : 
    {
      'name' : 'Open Telemark, Natural Turn, Outside Swivel and Feather Ending',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'OpenImpetus' : 
    {
      'name' : 'Open Impetus',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'WeaveFromPP' : 
    {
      'name' : 'Weave from PP',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'Reverse Wave' : 
    {
      'name' : 'Reverse Wave',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'OutsideSwivel' : 
    {
     //doesn't exist as a separate pattern in book, will have to extract it
      'name' : 'Outside Swivel',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'NaturalTwistTurn' : 
    {
      'name' : 'Natural Twist Turn',
      'urlpath' : '/pattern-name',
      'level' : 'Gold',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'CurvedFeatherToBackFeather' : 
    {
      'name' : 'Curved Feather to Back Feather',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'NaturalZigZagFromPP' : 
    {
      'name' : 'Natural Zig-Zag from PP',
      'urlpath' : '/pattern-name',
      'level' : 'Silver',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'FallawayReverseAndSlipPivot' : 
    {
      'name' : 'Fallaway Reverse and Slip Pivot',
      'urlpath' : '/pattern-name',
      'level' : 'Gold',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'NaturalHoverTelemark' : 
    {
      'name' : 'Natural Hover Telemark',
      'urlpath' : '/pattern-name',
      'level' : 'Gold',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    },
  'BounceFallawayWithWeaveEnding' : 
    {
      'name' : 'Bounce Fallaway with Weave Ending',
      'urlpath' : '/pattern-name',
      'level' : 'Gold',
      'startAlignment' : ['LOD'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
      {
      	'id' : "NextPattern"
      }
      ]
    }
};

