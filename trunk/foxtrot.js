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
    'startAlignment' : ['DW', 'DC', 'LOD'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
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
    'urlpath' : '/three-step',
    'level' : 'Newcomer',
    'startAlignment' : ['LOD', 'DW'],
    'startFoot' : 'RF',
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
    'startAlignment' : ['LOD', 'DW'],
    'startFoot' : 'RF',
    'startDirection' : 'fwd',
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
      'urlpath' : '/closed-impetus',
      'level' : 'Newcomer',
      'startAlignment' : ['BLOD'],
      'startFoot' : 'LF',
      'startDirection' : 'back',
      'follow' : [
        {
          'eval' : 'SameFollowAs("FeatherStep")'
        }
      ]
    },
  'NaturalWeave' : 
    {
      'name' : 'Natural Weave',
      'urlpath' : '/natural-weave',
      'level' : 'Bronze',
      'startAlignment' : ['LOD'],
      'startFoot' : 'RF',
      'startDirection' : 'fwd',
      'follow' : [
        {
          'eval' : 'SameFollowAs("ReverseTurn")'
        }
      ]
    },
  'ChangeOfDirection' : 
    {
      'name' : 'Change Of Direction',
      'level' : 'Bronze',
      'urlpath' : '/change-of-direction',
      'startAlignment' : ['DW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
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
      'urlpath' : '/basic-weave',
      'level' : 'Bronze',
      'startAlignment' : ['BDW'],
      'startFoot' : 'LF',
      'startDirection' : 'fwd',
      'follow' : [
        {
          'eval' : 'SameFollowAs("ReverseTurn")'
        }
      ]
    },
  'ClosedTelemark' : 
    {
      'name' : 'Closed Telemark',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'OpenTelemarkAndFeatherEnding' : 
    {
      'name' : 'Open Telemark and Feather Ending',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'TopSpin' : 
    {
      'name' : 'Top Spin',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'HoverFeather' : 
    {
      'name' : 'Hover Feather',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'HoverTelemark' : 
    {
      'name' : 'Hover Telemark',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'NaturalTelemark' : 
    {
      'name' : 'Natural Telemark',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'HoverCross' : 
    {
      'name' : 'Hover Cross',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'OpenTelemarkNaturalTurnOutsideSwivelAndFeatherEnding' : 
    {
      'name' : 'Open Telemark, Natural Turn, Outside Swivel and Feather Ending',
      'level' : 'Silver',
      'follow' : [
      ]
    },
  'OpenImpetus' : 
    {
      'name' : 'Open Impetus',
      'level' : 'Silver',
      'follow' : [
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

