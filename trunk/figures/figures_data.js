// ---- DO NOT EDIT ----
    //-------------------------------------------
    // CHACHA FIGURES
/*
        'foo' : 
          {
            'name' : 'foo',
            'urlpath' : 'foo',
            'level' : 'Gold',
            'follow' : [
              ]
          },
*/
    var chachaFigures = {
        'FootChanges1' : 
          {
            'name' : 'Foot Changes - Method 1: Normal Opposite to Same Foot - 2341 Turn on LF on 1',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : 'steps 6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'steps 6-10'
              }
              ]
          },
        'FootChanges2':
          {
            'name' : 'Foot Changes - Method 2: Same Foot to Normal Opposite - 2341 Turn on LF on 1',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'OpenBasic',
                'comment' : 'steps 6-10'
              }
              ]
          },
        'FootChanges3':
          {
            'name' : 'Foot Changes - Method 3: Normal Opposite to Same Foot - Turn on LF on 2, hold 3',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'timing' : '234&1 234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              }
              ]
          },
        'FootChanges4' : 
          {
            'name' : 'Foot Changes - Method 4: Same Foot to Normal Opposite - Turn on LF on 2, hold 3',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'OpenBasic',
                'comment' : ''
              }
              ]
          },
        'FollowMyLeader' : 
          {
            'name' : 'Follow My Leader',
            'level' : 'Gold',
            'urlpath' : 'follow-my-leader',
            'timing' : '234&1 234&1 234&1 234&1 234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'Open Basic; Or, 1,2 of Open Basic to Three Cha Cha Chas Back; Or 1-5 of Open Basic to Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''
              },
              {
                'id' : 'AdvancedHipTwist',
                'comment' : ''
              },
              {
                'id' : 'HipTwistSpiral',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              }
              ]
          },
        'Sweetheart' : 
          {
            'name' : 'Sweetheart',
            'level' : 'Gold',
            'urlpath' : 'sweetheart',
            'timing' : '234&1 234&1 234&1 234&1 234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              }
              ]
          },
        'TurkishTowel' : 
          {
            'name' : 'Turkish Towel',
            'level' : 'Gold',
            'urlpath' : 'turkish-towel',
            'timing' : '234&1 234&1 234&1 234&1 234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'Open Basic; Or, 1,2 of Open Basic to Three Cha Cha Chas Back; Or 1-5 of Open Basic to Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : ''
              }
              ]
          },
        'HipTwistSpiral' : 
          {
            'name' : 'Hip Twist Spiral',
            'level' : 'Gold',
            'urlpath' : 'hip-twist-spiral',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'step 4-9 in LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              }
              ]
          },
        'AdvancedHipTwist' : 
          {
            'name' : 'Advanced Hip Twist',
            'level' : 'Gold',
            'urlpath' : 'advanced-hip-twist',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'Open Basic; Or, 1,2 of Open Basic to Three Cha Cha Chas Back; Or 1-5 of Open Basic to Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'ReverseTop',
                'comment' : '6-10 or 6-15 Reverse Top'
              }
              ]
          },
        'Chase' : 
          {
            'name' : 'Chase',
            'level' : 'Silver',
            'urlpath' : 'chase',
            'timing' : '234&1 234&1 234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'OpenBasic',
                'comment' : 'Normal Open Basic, or 1-2 Open Basic into Three Cha Cha Chas Back, or 1-5 of Open Basic into Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : ''
              }
              ]
          },
        'CubanBreakLF' : 
          {
            'name' : 'Cuban Break LF',
            'level' : 'Silver',
            'urlpath' : 'cuban-breaks',
            'timing' : '2&3&4&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Fan',
                'comment' : 'into Fan step 6-10' //listed in precedes
              },
              {
                'id' : 'TimeStepRF',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10 of Closed Basic'     // listed in precedes
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'CubanBreakRF' : 
          {
            'name' : 'Cuban Break RF',
            'level' : 'Silver',
            'urlpath' : 'cuban-breaks',
            'timing' : '2&3&4&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'FollowMyLeader',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'Chase',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'CrossBasic',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'Fan',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'TimeStepLF',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              }
              ]
          },
        'SplitCubanBreakRF' : 
          {
            'name' : 'Split Cuban Break RF',
            'level' : 'Silver',
            'urlpath' : 'cuban-breaks',
            'timing' : '2&34&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'Fan',
                'comment' : 'into Fan step 6-10' //listed in precedes
              },
              {
                'id' : 'TimeStepRF',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10 of Closed Basic'     // listed in precedes
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              }
              ]
          },
        'SplitCubanBreakLF' : 
          {
            'name' : 'Split Cuban Break LF',
            'level' : 'Silver',
            'urlpath' : 'cuban-breaks',
            'timing' : '2&34&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'FollowMyLeader',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'Chase',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'CrossBasic',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'Fan',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'TimeStepLF',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''
              }
              ]
          },
        'CrossBasic' : 
          {
            'name' : 'Cross Basic',
            'level' : 'Silver',
            'urlpath' : 'cross-basic',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Fan',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'HockeyStick',
                'comment' : 'Cross Basic ending in Fan position'   // listed in precedes
              },
              {
                'id' : 'Alemana',
                'comment' : 'Cross Basic ending in Fan position'   // listed in precedes
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'CrossBasic',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : 'after steps 1-5 of Cross Basic'
              },
              {
                'id' : 'Fan',
                'comment' : 'after steps 1-5 of Cross Basic, follow with steps 6-10 of Fan'
              },
              {
                'id' : 'Spiral',
                'comment' : 'after steps 1-5 of Cross Basic, leady Lady to do Spiral on step 5, then steps 6-10 of Spiral'
              }
              ]
          },
        'RopeSpinning' : 
          {
            'name' : 'Rope Spinning',
            'level' : 'Silver',
            'urlpath' : 'rope-spinning',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'CrossBasic',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when Man and Lady end to side'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when Man and Lady end diagonally fwd in Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when Man and Lady end diagonally fwd in Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when Man and Lady end diagonally fwd in Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'when Man and Lady end diagonally fwd in Open CPP, follow 4-9 Three Cha Chas Fwd in LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when Man and Lady end diagonally fwd in Open CPP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when Man and Lady end diagonally fwd in Open CPP'
              },
              {
                'id' : 'NaturalOpeningOutMovement',
                'comment' : "when Lady end fwd toward Man's R side"
              },
              {
                'id' : 'ClosedHipTwist',
                'comment' : "when Lady end fwd toward Man's R side"
              },
              {
                'id' : 'Spiral',
                'comment' : "when Lady end fwd toward Man's R side"
              },
              {
                'id' : 'RopeSpinning',
                'comment' : "when Lady end fwd toward Man's R side"
              },
              {
                'id' : 'AdvancedHipTwist',
                'comment' : "when Man and Lady fwd toward partner's R side"
              },
              {
                'id' : 'HipTwistSpiral',
                'comment' : "when Man and Lady fwd toward partner's R side"
              }
              ]
          },
        'Curl' : 
          {
            'name' : 'Curl',
            'level' : 'Silver',
            'urlpath' : 'curl',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'eval' : 'SameFollowAs("Spiral")'
              }
              ]
          },
        'Spiral' : 
          {
            'name' : 'Spiral',
            'level' : 'Silver',
            'urlpath' : 'spiral',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Chase',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ending in Open Position, follow with Open Basic, or 1-2 Open Basic and Three Cha Cha Chas Back, or 1-5 Open Basic into Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'Alemana',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'Curl',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'TurkishTowel',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'Sweetheart',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : 'when ending in Open Position'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when ending in Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ending in Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when ending in Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'when ending in Open CPP, follow 4-9 Three Cha Chas fwd in LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending in Open CPP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending in Open CPP'
              },
              {
                'id' : 'ReverseTop',
                'comment' : 'when ending in Contact Position, follow with 6-10 or 6-15 Reverse Top'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ending in LSP'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when ending in LSP, follow with New York LSP, no turn on first step'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'when ending in LSP, follow with Three Cha Chas Fwd in LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending in LSP'
              }
              ]
          },
        'Aida' : 
          {
            'name' : 'Aida',
            'level' : 'Silver',
            'urlpath' : 'aida',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'eval' : 'SameFollowAs("SpotTurnToL")'
              }
              ]
          },
        'OpeningOutFromReverseTop' : 
          {
            'name' : 'Opening Out From Reverse Top',
            'level' : 'Silver',
            'urlpath' : 'opening-out-from-reverse-top',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              }
              ]
          },
        'ReverseTop' : 
          {
            'name' : 'Reverse Top',
            'level' : 'Silver',
            'urlpath' : 'reverse-top',
            'timing' : '234&1 234&1 234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'ThereAndBack',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'OpeningOutFromReverseTop',
                'comment' : ''
              },
              {
                'id' : 'Aida',
                'comment' : ''
              },
              {
                'id' : 'Spiral',
                'comment' : 'after leading Lady into her spiral on step 10 of Reverse Top, follow with 6-10 of Spiral'
              }
              ]
          },
        'OpenHipTwist' : 
          {
            'name' : 'Open Hip Twist',
            'level' : 'Silver',
            'urlpath' : 'open-hip-twist',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : 'From Fan Position, or Open Position'
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              },
              {
                'id' : 'HipTwistSpiral',
                'comment' : '7-10 Hip Twist Spiral'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'Basic, or 1-2 Open Basic into Three Cha Cha Chas Back, or 1-5 Open Basic into Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'Curl',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'Chase',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'TurkishTowel',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'Sweetheart',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : 'when finish in Open Position'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when finish in Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when finish in Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when finish in Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'when finish in Open CPP, 4-9 Three Cha Chas'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when finish in Open CPP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when finish in Open CPP'
              },
              {
                'id' : 'ReverseTop',
                'comment' : 'when finish in Contact Position, 6-10 or 6-15 Reverse Top'
              }
              ]
          },
        'ClosedHipTwist' : 
          {
            'name' : 'Closed Hip Twist',
            'urlpath' : 'closed-hip-twist',
            'level' : 'Bronze',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ending Open Position, follow with 1-2 Open Basic into Three Cha Cha Chas Back'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ending Open Position, follow with 1-5 Open Basic into Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'Alemana',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'Curl',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'Chase',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'TurkishTowel',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'Sweetheart',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : 'when ending Open Position'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when ending Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ending Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when ending Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'when ending Open CPP, follow with 4-9 Three Cha Cha Chas Fwd in LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending Open CPP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending Open CPP'
              },
              {
                'id' : 'ReverseTop',
                'comment' : 'when ending in Contact Position, follow with 6-10 or 6-15 of Reverse Top'
              }
              ]
          },
        'NaturalOpeningOutMovement' : 
          {
            'name' : 'Natural Opening Out Movement',
            'urlpath' : 'natural-opening-out-movement',
            'level' : 'Bronze',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : '6-10'
              },
              {
                'id' : 'ReverseTop',
                'comment' : "Man turns 1/8 L over 3-5 to Contact Position, placing LF in front RF as Cuban Cross to chasse LRL, Lady turns an additional 1/8 over 3-5 to end with RF back and slightly side, Man's first step of Natural Opening Out Movement is side"
              }
              ]
          },
        'NaturalTop' : 
          {
            'name' : 'Natural Top',
            'urlpath' : 'natural-top',
            'level' : 'Bronze',
            'timing' : '234&1 234&1 234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'NaturalOpeningOutMovement',
                'comment' : 'on last step of Natural Top, Man leads Lady towawrds his R side'
              },
              {
                'id' : 'ClosedHipTwist',
                'comment' : 'on last step of Natural Top, Man leads Lady towawrds his R side'
              },
              {
                'id' : 'Spiral',
                'comment' : 'on last step of Natural Top, Man leads Lady towawrds his R side'
              },
              {
                'id' : 'RopeSpinning',
                'comment' : 'on last step of Natural Top, Man leads Lady towawrds his R side'
              },
              {
                'id' : 'AdvancedHipTwist',
                'comment' : 'Man RF fwd in line with LF on step 13 into fwd Lock RLR, Lady fwd Lock toward his R side, then continuing to turn up to 1/4 R to follow with Advanced Hip Twist'
              },
              {
                'id' : 'HipTwistSpiral',
                'comment' : 'Man RF fwd in line with LF on step 13 into fwd Lock RLR, Lady fwd Lock toward his R side, then continuing to turn up to 1/4 R to follow with Hip Twist Sprial'
              },
              {
                'id' : 'AdvancedHipTwist',
                'comment' : 'Man RF fwd in line with LF on 15, lady LF fwd towards his R side'
              },
              {
                'id' : 'HipTwistSpiral',
                'comment' : 'Man RF fwd in line with LF on 15, lady LF fwd towards his R side'
              },
              {
                'id' : 'HockeyStick',
                'comment' : '6-10 Hockey Stick after step 10 of Natural Top'
              },
              ]
          },
        'HockeyStick' : 
          {
            'name' : 'Hockey Stick',
            'urlpath' : 'hockey-stick',
            'level' : 'Bronze',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'ShoulderToShoulderL',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : '1-2 Open Basic into Three Cha Cha Chas Back'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '1-5 Open Basic into Natural Top'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'from steps 1-7, in Open Position'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'in Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'in Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'in Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, LSP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ending LSP'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'no turn on first step when ending LSP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending LSP, retaining LSP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending LSP'
              }
              ]
          },
        'Alemana' : 
          {
            'name' : 'Alemana',
            'urlpath' : 'alemana',
            'level' : 'Bronze',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ShoulderToShoulderL',
                'comment' : 'Man turning 1/8 to R on last step'   // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : 'when Man and Lady ending to side'
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : 'when Man and Lady ending to side'
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : 'when Man and Lady ending to side'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : 'when Man and Lady ending to side'
              },
              {
                'id' : 'CrossBasic',
                'comment' : 'when Man and Lady ending to side'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when Man and Lady ending diagonally fwd in Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when Man and Lady ending diagonally fwd in Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when Man and Lady ending diagonally fwd in Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, LSP, when Man and Lady ending diagonally fwd in Open CPP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when Man and Lady ending diagonally fwd in Open CPP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when Man and Lady ending diagonally fwd in Open CPP'
              },
              {
                'id' : 'NaturalOpeningOutMovement',
                'comment' : "when Lady ending fwd towards Man's R side"
              },
              {
                'id' : 'ClosedHipTwist',
                'comment' : "when Lady ending fwd towards Man's R side"
              },
              {
                'id' : 'Spiral',
                'comment' : "when Lady ending fwd towards Man's R side"
              },
              {
                'id' : 'RopeSpinning',
                'comment' : "when Lady ending fwd towards Man's R side"
              },
              {
                'id' : 'AdvancedHipTwist',
                'comment' : "when Man and Lady ending fwd towards partner's R side"
              },
              {
                'id' : 'HipTwistSpiral',
                'comment' : "when Man and Lady ending fwd towards partner's R side"
              }
              ]
          },
        'Fan' : 
          {
            'name' : 'Fan',
            'urlpath' : 'fan',
            'level' : 'Bronze',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'HockeyStick',
                'comment' : ''
              }
              ]
          },
        'TimeStepRF' : 
          {
            'name' : 'Time Step RF',
            'urlpath' : 'time-step',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'ThereAndBack',
                'comment' : ''     // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'ShoulderToShoulderL',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'Alemana',
                'comment' : 'from Open Position'
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'CrossBasic',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : ''
              }
              ]
          },
        'TimeStepLF' : 
          {
            'name' : 'Time Step LF',
            'urlpath' : 'time-step',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'ShoulderToShoulderR',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''
              },
              {
                'id' : 'TimeStepRF',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'ThereAndBack' : 
          {
            'name' : 'There And Back',
            'urlpath' : 'there-and-back',
            'level' : 'Newcomer',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'SideStepLeftLF' : 
          {
            'name' : 'Side Step To Left commenced with LF',
            'urlpath' : 'side-step',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'ShoulderToShoulderR',
                'comment' : '1/8 turn L on step 5'
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : 'moving to L'
              },
              {
                'id' : 'TimeStepRF',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'SideStepLeftRF' : 
          {
            'name' : 'Side Step To Left commenced with RF',
            'urlpath' : 'side-step',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              }
              ]
          },
        'SideStepRightRF' : 
          {
            'name' : 'Side Step To Right commenced with RF',
            'urlpath' : 'side-step',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'CrossBasic',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'ShoulderToShoulderL',
                'comment' : '1/8 turn R on step 5'
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'SideStepRightLF' : 
          {
            'name' : 'Side Step To Right commenced with LF',
            'urlpath' : 'side-step',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : '6-10'
              }
              ]
          },
        'ThreeChaChaChasFwd' : 
          {
            'name' : 'Three Cha Cha Chas Forward',
            'urlpath' : 'three-cha-cha-chas',
            'level' : 'Newcomer',
            'timing' : '4&1 2&3 4&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'CrossBasic',
                'comment' : 'Three ChaChas Fwd in LSP, man starting on RF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'Aida',
                'comment' : 'Three ChaChas Fwd in RSP, man starting on LF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : 'Three ChaChas Fwd in RSP, man starting on LF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : 'Three ChaChas Fwd in LSP, man starting on RF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : 'Three ChaChas Fwd in RSP, man starting on LF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : 'Three ChaChas Fwd in LSP, man starting on RF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'ThereAndBack',
                'comment' : 'Three ChaChas Fwd in LSP, man starting on RF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : 'Three ChaChas Fwd in LSP, man starting on RF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : 'Three ChaChas Fwd in RSP, man starting on LF ending facing partner'   // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'Alemana',
                'comment' : ''
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : ''
              },
              {
                'id' : 'Curl',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : 'when Three Cha Cha Chas are danced in Open Position'
              },
              {
                'id' : 'TurkishTowel',
                'comment' : ''
              },
              {
                'id' : 'Sweetheart',
                'comment' : ''
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : 'when Three Cha Cha Chas are danced in Open Position'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : 'when danced in RSP, last three steps may be danced as a side chasse after Man and Lady turn to face partner and end in Closed Position'
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : 'when danced in RSP, last three steps may be danced as a side chasse after Man and Lady turn to face partner and end in Closed Position'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when danced in LSP, last three steps may be danced as a side chasse after Man and Lady turn to face partner and end in Closed Position'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when danced in LSP, last three steps may be danced as a side chasse after Man and Lady turn to face partner and end in Closed Position'
              }
              ]
          },
        'ThreeChaChaChasBack' : 
          {
            'name' : 'Three Cha Cha Chas Back',
            'urlpath' : 'three-cha-cha-chas',
            'level' : 'Newcomer',
            'timing' : '4&1 2&3 4&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'ClosedBasic',
                'comment' : '6-7, then into Three Chas Cha Chas Forward'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-7, then into Three Chas Cha Chas Forward'
              },
              {
                'id' : 'Fan',
                'comment' : '6-10'
              },
              {
                'id' : 'Alemana',
                'comment' : '6-10'
              },
              {
                'id' : 'NaturalTop',
                'comment' : 'Man last step LF side turning slightly R, Lady RF fwd'
              }
              ]
          },
        'HandToHandRSP' : 
          {
            'name' : 'Hand To Hand RSP',
            'urlpath' : 'hand-to-hand',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''
              },
              {
                'id' : 'TimeStepRF',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'in RSP, after step 2'
              },
              {
                'id' : 'Fan',
                'comment' : '6-10, Lady in line on step 6 of Fan'
              },
              {
                'id' : 'ClosedHipTwist',
                'comment' : '6-10, leading Lady with R hand to turn R, then changing to L to R hand hold on step 7'
              },
              {
                'id' : 'Aida',
                'comment' : ''
              },
              {
                'id' : 'Spiral',
                'comment' : 'Spiral ending: Man almost closes LF to RF on 3 to chasse and leads Lady into her spiral action on 5 to continue with 6-10 of Spiral'
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'HandToHandLSP' : 
          {
            'name' : 'Hand To Hand LSP',
            'urlpath' : 'hand-to-hand',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'CrossBasic',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'RopeSpinning',
                'comment' : 'Man almost close RF to LF on 3 to chasse, leading Lady into her spiral action on 5 to continue with Rope Spinning'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'after step 2'
              }
              ]
          },
        'ShoulderToShoulderL' : 
          {
            'name' : 'Shoulder To Shoulder Left Side',
            'urlpath' : 'shoulder-to-shoulder',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ShoulderToShoulderR',
                'comment' : ''
              },
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10, when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10, when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'TimeStepRF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'Fan',
                'comment' : '6-10, when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'ClosedHipTwist',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'Alemana',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : 'when ended in Open PP'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : 'when ended in Open PP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, in RSP, when ended in Open PP'
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : 'when ended in Open PP'
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : 'when ended in Open PP'
              }
              ]
          },
        'ShoulderToShoulderR' : 
          {
            'name' : 'Shoulder To Shoulder Right Side',
            'urlpath' : 'shoulder-to-shoulder',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'CrossBasic',
                'comment' : 'ended facing partner, then followed by Cross Basic'   // listed in precedes
              },
              {
                'id' : 'ShoulderToShoulderL',
                'comment' : ''
              },
              {
                'id' : 'ClosedBasic',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'ThereAndBack',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'Fan',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ended facing partner, having turned 1/8 over step 3-5 and danced chasse to side'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when ended in Open CPP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ended in Open CPP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when ended in Open CPP'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, LSP, when ended in Open CPP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ended in Open CPP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ended in Open CPP'
              }
              ]
          },
        'UnderarmTurnToR' : 
          {
            'name' : 'Underarm Turn To R',
            'urlpath' : 'spot-turn',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'CrossBasic',
                'comment' : ''   // listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'ShoulderToShoulderL',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'TimeStepLF',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, LSP'
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              }
              ]
          },
        'UnderarmTurnToL' : 
          {
            'name' : 'Underarm Turn to L',
            'urlpath' : 'spot-turn',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''
              },
              {
                'id' : 'TimeStepRF',
                'comment' : ''
              },
              {
                'id' : 'Fan',
                'comment' : '6-10'
              },
              {
                'id' : 'NaturalTop',
                'comment' : 'turning slightly R on preceding Chasse'
              },
              {
                'id' : 'Aida',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'SpotTurnToL' : 
          {
            'name' : 'Spot or Switch Turn To L (Lady to R)',
            'urlpath' : 'spot-turn',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'TimeStepLF',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : ''
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : ''
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : ''
              },
              {
                'id' : 'ThereAndBack',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, in LSP'
              },
              {
                'id' : 'Fan',
                'comment' : ''
              },
              {
                'id' : 'CrossBasic',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ended in Open Position, follow with step 1-2 of Open Basic into Three Cha Cha Chas Back'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when ended in Open Position, follow with step 1-5 of Open Basic into Natural Top'
              },
              {
                'id' : 'Alemana',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'Curl',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'Chase',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'TurkishTowel',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'Sweetheart',
                'comment' : 'when ended in Open Position'
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : 'when ended in Open Position'
              }
              ]
          },
        'SpotTurnToR' : 
          {
            'name' : 'Spot or Switch Turn To R (Lady to L)',
            'urlpath' : 'spot-turn',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10'
              },
              {
                'id' : 'NewYorkRSP',
                'comment' : ''
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : ''
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : ''
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : ''
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : ''
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : ''
              },
              {
                'id' : 'TimeStepRF',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9, in RSP'
              },
              {
                'id' : 'Fan',
                'comment' : '6-10'
              },
              {
                'id' : 'Aida',
                'comment' : ''
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : ''
              }
              ]
          },
        'NewYorkRSP' : 
          {
            'name' : 'New York RSP',
            'urlpath' : 'new-york',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'RF',
            'follow' : [
              {
                'id' : 'NewYorkLSP',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'SpotTurnToR',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'UnderarmTurnToL',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'ClosedBasic',
                'comment' : 'when New York ends facing partner'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'when New York ends facing partner'
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'SideStepLeftLF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'SideStepRightLF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'ThereAndBack',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'TimeStepLF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'Fan',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'CrossBasic',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9 Three Cha Cha Chas Fwd after turning 1/8 more between step 5 of New York and step 1 of next figure to end in LSP'
              }
              ]
          },
        'NewYorkLSP' : 
          {
            'name' : 'New York LSP',
            'urlpath' : 'new-york',
            'level' : 'Newcomer',
            'timing' : '234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'NewYorkRSP',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'ClosedBasic',
                'comment' : '6-10 Closed Basic when New York ends facing partner'
              },
              {
                'id' : 'OpenBasic',
                'comment' : '6-10 Open Basic when New York ends facing partner'
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : 'when ending facing partner' // listed in precedes
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'TimeStepRF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'Fan',
                'comment' : '6-10 Fan, when ending facing partner'
              },
              {
                'id' : 'ClosedHipTwist',
                'comment' : '6-10 Closed Hip Twist, when ending facing partner'
              },
              {
                'id' : 'CubanBreakRF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'SplitCubanBreakRF',
                'comment' : 'when ending facing partner'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : '4-9 Three Cha Cha Chas Fwd after turning 1/8 more between step 5 of New York and step 1 of next figure to end in RSP'
              }
              ]
          },
        'BasicInPlace' : 
          {
            'name' : 'Basic Movement In Place',
            'urlpath' : 'cha-cha-basic',
            'level' : 'Newcomer',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'comment' : 'can be danced in place of Closed Basic',
            'follow' : [
              {
                'eval' : 'SameFollowAs("ClosedBasic")'
              }
              ]
          },
        'ClosedBasic' : 
         {
            'name' : 'Closed Basic Movement',
            'urlpath' : 'cha-cha-basic',
            'level' : 'Newcomer',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'TimeStepRF',
                'comment' : 'after 1-5' //listed in precedes
              },
              {
                'id' : 'OpenBasic'
              },
              {
                'id' : 'ClosedBasic'
              },
              {
                'id' : 'NewYorkLSP',
                'comment' : 'after having turned to Open CPP over 8-10'
              },
              {
                'id' : 'SpotTurnToR'
              },
              {
                'id' : 'UnderarmTurnToL'
              },
              {
                'id' : 'ShoulderToShoulderL'
              },
              {
                'id' : 'SideStepLeftLF'
              },
              {
                'id' : 'SideStepRightLF'
              },
              {
                'id' : 'HandToHandRSP',
                'comment' : 'with alternative hold'
              },
              {
                'id' : 'ThereAndBack'
              },
              {
                'id' : 'TimeStepLF'
              },
              {
                'id' : 'Fan'
              },
              {
                'id' : 'CrossBasic'
              },
              {
                'id' : 'CubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'SplitCubanBreakLF',
                'comment' : ''
              },
              {
                'id' : 'ThreeChaChaChasBack',
                'comment' : 'afer step 1-2'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'after step 1-5 of Closed Basic, follow with 6-10 Open Basic'
              },
              {
                'id' : 'SpotTurnToL',
                'comment' : 'after step 1-5'
              },
              {
                'id' : 'UnderarmTurnToR',
                'comment' : 'after step 1-5'
              },
              {
                'id' : 'HandToHandLSP',
                'comment' : 'after step 1-5'
              },
              {
                'id' : 'SideStepLeftRF',
                'comment' : 'after step 1-5'
              },
              {
                'id' : 'SideStepRightRF',
                'comment' : 'after step 1-5'
              },
              {
                'id' : 'NaturalTop',
                'comment' : 'step 3-5 LF side to chasse of Closed Basic turns slightly R. Lady Chasse fwd'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'after step 1-7'
              },
              {
                'id' : 'ReverseTop',
                'comment' : 'turn 3/8 to L over step 7-10 of Closed Basic to Contact Position, Man taking the Chasse to side and slightly fwd, Lady 8-10 LF behind RF as Cuban Cross to Chasse LRL, Follow with 6-10 or 6-15 of Reverse Top'
              }
             ]
        },
        'OpenBasic' : 
         {
            'name' : 'Open Basic Movement',
            'urlpath' : 'cha-cha-basic',
            'level' : 'Newcomer',
            'timing' : '234&1 234&1',
            'startFoot' : 'LF',
            'follow' : [
              {
                'id' : 'Fan',
                'comment' : '' //listed in precedes
              },
              {
                'id' : 'ClosedBasic',
                'comment' : 'in Closed Position'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'in Closed Position'
              },
              {
                'id' : 'ThreeChaChaChasBack',
                'comment' : 'after step 1-2'
              },
              {
                'id' : 'ClosedBasic',
                'comment' : 'after step 1-5 of Open Basic, follow with 6-10 Closed Basic'
              },
              {
                'id' : 'NaturalTop',
                'comment' : 'after step 1-5, Man taking the chasse to side, turning slightly to R'
              },
              {
                'id' : 'ThreeChaChaChasFwd',
                'comment' : 'after step 1-7'
              },
              {
                'id' : 'OpenBasic',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'Alemana',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'OpenHipTwist',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'Curl',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'Chase',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'TurkishTowel',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'Sweetheart',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'FollowMyLeader',
                'comment' : 'in Open Position'
              },
              {
                'id' : 'FootChanges1',
                'comment' : 'after steps 1-5'
              },
              {
                'id' : 'FootChanges3',
                'comment' : 'after steps 1-5'
              }
             ]
        }
    };

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


    //-------------------------------------------
    // JIVE FIGURES
/*
        'foo' : 
         {
            'name' : 'foo',
            'urlpath' : 'foo',
            'level' : 'Newcomer',
            'follow' : [
              {
                'id' : 'foo',
                'comment' : ''
              },
              {
                'id' : 'foo',
                'comment' : ''
              }
             ]
        },
*/
    var jiveFigures = {
        'StalkingWalksFlicksAndBreak' : 
         {
            'name' : 'Stalking Walks, Flicks and Break',
            'level' : 'Gold',
            'urlpath' : 'stalking-walks-flicks-and-break',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QQQQ QQ QQQQ QQQQ QQ QaQ',
            'follow' : [
              {
                'id' : 'FallawayThrowaway',
                'comment' : 'step 3-8 Fallaway Throwaway'
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : 'step 3-8 of Change of Places'
              }
             ]
        },
        'Catapult' : 
         {
            'name' : 'Catapult',
            'level' : 'Gold',
            'urlpath' : 'catapult',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when Catapult ends in R to R hand hold'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'when Catapult ends in R to R hand hold'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'when Catapult ends in R to R hand hold'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : 'when Catapult ends in R to R hand hold'
              },
              {
                'id' : 'ShoulderSpin',
                'comment' : 'when Catapult ends in R to R hand hold'
              },
              {
                'id' : 'Chugging',
                'comment' : 'when Catapult ends in R to R hand hold'
              },
              {
                'id' : 'Link',
                'comment' : 'when Catapult ends in L to R hand hold'
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when Catapult ends in L to R hand hold'
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : 'when Catapult ends in L to R hand hold'
              },
              {
                'id' : 'HipBump',
                'comment' : 'when Catapult ends in L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : 'when Catapult ends in L to R hand hold'
              }
             ]
        },
        'ChickenWalks' : 
         {
            'name' : 'Chicken Walks',
            'level' : 'Gold',
            'urlpath' : 'chicken-walks',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQQQ',
            'follow' : [
              {
                'id' : 'FallawayThrowaway',
                'comment' : 'step 3-8 Fallaway Throwaway started with L to R hand hold.'
              }
             ]
        },
        'Chugging' : 
         {
            'name' : 'Chugging',
            'level' : 'Gold',
            'urlpath' : 'chugging',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ QaQ QaQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when Chugging ended with R to R hand hold'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'when Chugging ended with R to R hand hold'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'when Chugging ended with R to R hand hold'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : 'when Chugging ended with R to R hand hold'
              },
              {
                'id' : 'ShoulderSpin',
                'comment' : 'when Chugging ended with R to R hand hold'
              },
              {
                'id' : 'Catapult',
                'comment' : 'when Chugging ended with R to R hand hold'
              },
              {
                'id' : 'Link',
                'comment' : 'when Chugging ended with L to R hand hold'
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when Chugging ended with L to R hand hold'
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : 'when Chugging ended with L to R hand hold'
              },
              {
                'id' : 'HipBump',
                'comment' : 'when Chugging ended with L to R hand hold'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'when Chugging ended with L to R hand hold, dance American Spin with L to R handhold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : 'when Chugging ended with L to R hand hold'
              }
             ]
        },
        'ToeHeelSwivels' : 
         {
            'name' : 'Toe Heel Swivels',
            'level' : 'Gold',
            'urlpath' : 'toe-heel-swivels',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQQQQQQQ',
            'follow' : [
              {
                'id' : 'FallawayRock',
                'comment' : 'step 3-8 of Fallway Rock, regain normal hold on 2nd chasse'
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : 'step 3-8 Fallaway Throwaway'
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'StalkingWalksFlicksAndBreak',
                'comment' : 'step 3-20, retain double hold throughout'
              }
             ]
        },
        'ShoulderSpin' : 
         {
            'name' : 'Shoulder Spin',
            'level' : 'Gold',
            'urlpath' : 'shoulder-spin',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when Shoulder Spin ends with R to R hand hold'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'when Shoulder Spin ends with R to R hand hold'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'when Shoulder Spin ends with R to R hand hold'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : 'when Shoulder Spin ends with R to R hand hold'
              },
              {
                'id' : 'Chugging',
                'comment' : 'when Shoulder Spin ends with R to R hand hold'
              },
              {
                'id' : 'Catapult',
                'comment' : 'when Shoulder Spin ends with R to R hand hold'
              },
              {
                'id' : 'Link',
                'comment' : 'when Shoulder Spin ends with L to R hand hold'
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when Shoulder Spin ends with L to R hand hold'
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : 'when Shoulder Spin ends with L to R hand hold'
              },
              {
                'id' : 'HipBump',
                'comment' : 'when Shoulder Spin ends with L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : 'when Shoulder Spin ends with L to R hand hold'
              }
             ]
        },
        'CurlyWhip' : 
         {
            'name' : 'Curly Whip',
            'level' : 'Gold',
            'urlpath' : 'curly-whip',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ',
            'follow' : [
              {
                'id' : 'Whip',
                'comment' : ''
              },
              {
                'id' : 'WhipThrowaway',
                'comment' : ''
              }
             ]
        },
        'MiamiSpecial' : 
         {
            'name' : 'Miami Special',
            'level' : 'Silver',
            'urlpath' : 'miami-special',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'HipBump', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'Link', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'Man turn 1/4 R over steps 3-6, Lady 1/2 to L'
              },
              {
                'id' : 'HipBump',
                'comment' : 'Man turn 1/8 to R over steps 3-5, Lady 1/8 to L'
              }
             ]
        },
        'SimpleSpin' : 
         {
            'name' : 'Simple Spin',
            'level' : 'Silver',
            'urlpath' : 'simple-spin',
            'startAlignment' : ['Open CPP'],
            'timing' : 'QQ',
            'follow' : [
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : ''
              },
              {
                'id' : 'HipBump',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'spin from L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              }
             ]
        },
        'RollingOffTheArm' : 
         {
            'name' : 'Rolling Off the Arm',
            'level' : 'Silver',
            'urlpath' : 'rolling-off-the-arm',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QQ QaQ',
            'follow' : [
              {
                'id' : 'ChangeOfHandsBehindBack', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : "release R to L hand hold at end of step 2 and taking L to R or R to R hand hold at end of Lady's turn"
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'having release R to L hand hold'
              },
              {
                'id' : 'Windmill',
                'comment' : 'with double hand hold'
              },
              {
                'id' : 'SpanishArms',
                'comment' : 'with double hand hold'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'with double hand hold'
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'ShoulderSpin',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'Chugging',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'Catapult',
                'comment' : 'with R to R hand hold'
              }
             ]
        },
        'SpanishArms' : 
         {
            'name' : 'Spanish Arms',
            'level' : 'Silver',
            'urlpath' : 'spanish-arms',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'Link',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'HipBump',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'left to right hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'Windmill',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'SpanishArms',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'with double hold or eleasing L to R hand hold'
              },
              {
                'id' : 'ToeHeelSwivels',
                'comment' : 'release R to L hand hold as needed'
              }
             ]
        },
        'Windmill' : 
         {
            'name' : 'Windmill',
            'level' : 'Silver',
            'urlpath' : 'windmill',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'ToeHeelSwivels', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'StopAndGo', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'HipBump', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'Link', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'Windmill',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'SpanishArms',
                'comment' : 'release R to L hand hold as needed'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'with double hand hold or releaseing L to R hand hold'
              }
             ]
        },
        'ReverseWhip' : 
         {
            'name' : 'Reverse Whip',
            'level' : 'Silver',
            'urlpath' : 'reverse-whip',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ QQ QaQ',
            'follow' : [
              {
                'id' : 'StalkingWalksFlicksAndBreak',   // listed in precedes
                'comment' : ''  
              },
              {
                'id' : 'BasicInPlace',
                'comment' : ''
              },
              {
                'id' : 'FallawayRock',
                'comment' : ''
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'Walks',
                'comment' : ''
              },
              {
                'id' : 'Mooch',
                'comment' : ''
              },
              {
                'id' : 'ReverseWhip',
                'comment' : ''
              }
             ]
        },
        'FallawayRock' : 
         {
            'name' : 'Fallaway Rock',
            'level' : 'Newcomer',
            'urlpath' : 'fallaway-rock',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'BasicInPlace',
                'comment' : ''
              },
              {
                'id' : 'FallawayRock',
                'comment' : ''
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'Walks',
                'comment' : ''
              },
              {
                'id' : 'Mooch',
                'comment' : ''
              },
              {
                'id' : 'Whip',
                'comment' : 'after 1-5'
              },
              {
                'id' : 'WhipThrowaway',
                'comment' : 'after 1-5'
              },
              {
                'id' : 'ReverseWhip',
                'comment' : ''
              },
              {
                'id' : 'StalkingWalksFlicksAndBreak',
                'comment' : ''
              }
             ]
        },
        'FallawayThrowaway' : 
         {
            'name' : 'Fallaway Throwaway',
            'urlpath' : 'fallaway-throwaway',
            'level' : 'Newcomer',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'HipBump',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'from L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              },
              {
                'id' : 'ChickenWalks',
                'comment' : ''
              }
             ]
        },
        'Link' : 
         {
            'name' : 'Link',
            'urlpath' : 'link',
            'level' : 'Newcomer',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'BasicInPlace',
                'comment' : ''
              },
              {
                'id' : 'FallawayRock',
                'comment' : ''
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'Walks',
                'comment' : ''
              },
              {
                'id' : 'Mooch',
                'comment' : ''
              },
              {
                'id' : 'Whip',
                'comment' : 'after 1-5'
              },
              {
                'id' : 'WhipThrowaway',
                'comment' : 'after 1-5'
              },
              {
                'id' : 'ReverseWhip',
                'comment' : ''
              },
              {
                'id' : 'StalkingWalksFlicksAndBreak',
                'comment' : ''
              }
             ]
        },
        'ChangeOfPlacesRightToLeft' : 
         {
            'name' : 'Change of Places Right to Left',
            'urlpath' : 'change-of-places-right-to-left',
            'level' : 'Newcomer',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'Chugging', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'HipBump',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'from L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'with change of hands when Change of Places R to L is danced with change of hands'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'when Change of Places R to L is danced with change of hands'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : 'when Change of Places R to L is danced with change of hands'
              },
              {
                'id' : 'ShoulderSpin',
                'comment' : 'when Change of Places R to L is danced with change of hands'
              },
              {
                'id' : 'Catapult',
                'comment' : 'when Change of Places R to L is danced with change of hands'
              }
             ]
        },
        'ChangeOfPlacesLeftToRight' : 
         {
            'name' : 'Change of Places Left to Right',
            'urlpath' : 'change-of-places-left-to-right',
            'level' : 'Newcomer',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'Chugging', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ToeHeelSwivels', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'HipBump', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'from L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              },
              {
                'id' : 'Windmill',
                'comment' : ''
              },
              {
                'id' : 'SpanishArms',
                'comment' : ''
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : ''
              },
              {
                'id' : 'SimpleSpin',
                'comment' : 'when Change of Places L to R is end in Open CPP'
              },
              {
                'id' : 'StalkingWalksFlicksAndBreak',
                'comment' : 'starting in open position'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'when Change of Places L to R is dance with change of hands'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'R to R hand hold, when Change of Places L to R is dance with change of hands'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : 'when Change of Places L to R is dance with change of hands'
              },
              {
                'id' : 'ShoulderSpin',
                'comment' : 'when Change of Places L to R is dance with change of hands'
              },
              {
                'id' : 'Catapult',
                'comment' : 'when Change of Places L to R is dance with change of hands'
              }
             ]
        },
        'ChangeOfHandsBehindBack' : 
         {
            'name' : 'Change of Hands Behind Back',
            'urlpath' : 'change-of-hands-behind-back',
            'level' : 'Newcomer',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'HipBump',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'from L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              }
             ]
        },
        'HipBump' : 
         {
            'name' : 'Hip Bump',
            'urlpath' : 'hip-bump',
            'level' : 'Newcomer',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ a QaQ',
            'follow' : [
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'HipBump',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'from L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              }
             ]
        },
        'AmericanSpin' : 
         {
            'name' : 'American Spin',
            'urlpath' : 'american-spin',
            'level' : 'Bronze',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'with change of hands'
              },
              {
                'id' : 'AmericanSpin',
                'comment' : ''
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'with R to R hand hold'
              },
              {
                'id' : 'MiamiSpecial',
                'comment' : ''
              },
              {
                'id' : 'ShoulderSpin',
                'comment' : ''
              },
              {
                'id' : 'Chugging',
                'comment' : ''
              },
              {
                'id' : 'Catapult',
                'comment' : ''
              },
              {
                'id' : 'Link',
                'comment' : 'when American Spin ends with L to R hand hold'
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'when American Spin ends with L to R hand hold'
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : 'when American Spin ends with L to R hand hold'
              },
              {
                'id' : 'HipBump',
                'comment' : 'when American Spin ends with L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : 'when American Spin ends with L to R hand hold'
              }
             ]
        },
        'Walks' : 
         {
            'name' : 'Walks',
            'urlpath' : 'walks',
            'level' : 'Bronze',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ QaQ SS QQQQ',
            'follow' : [
              {
                'id' : 'FallawayThrowaway',
                'comment' : '3-8'
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : '3-8'
              },
              {
                'id' : 'Whip',
                'comment' : 'Chasse diag fwd LRL, turning 3/8 to R to end LF side and slightly fwd facing Lady to follow with Whip (Lady chasse fwd making no turn)'
              },
              {
                'id' : 'WhipThrowaway',
                'comment' : 'Chasse diag fwd LRL, turning 3/8 to R to end LF side and slightly fwd facing Lady to follow with Whip (Lady chasse fwd making no turn)'
              }
             ]
        },
        'StopAndGo' : 
         {
            'name' : 'Stop and Go',
            'urlpath' : 'stop-and-go',
            'level' : 'Bronze',
            'startAlignment' : ['Open Position'],
            'timing' : 'QQ QaQ QQ QaQ',
            'follow' : [
              {
                'id' : 'Link',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfHandsBehindBack',
                'comment' : ''
              },
              {
                'id' : 'HipBump',
                'comment' : ''
              },
              {
                'id' : 'AmericanSpin',
                'comment' : 'with L to R hand hold'
              },
              {
                'id' : 'StopAndGo',
                'comment' : ''
              }
             ]
        },
        'Mooch' : 
         {
            'name' : 'Mooch',
            'urlpath' : 'mooch',
            'level' : 'Bronze',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QQQQ QQ QaQ QQ QQQQQQ QaQ',
            'follow' : [
              {
                'id' : 'BasicInPlace',
                'comment' : ''
              },
              {
                'id' : 'FallawayRock',
                'comment' : ''
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'Walks',
                'comment' : ''
              },
              {
                'id' : 'StalkingWalksFlicksAndBreak',
                'comment' : ''
              }
             ]
        },
        'Whip' : 
         {
            'name' : 'Whip',
            'urlpath' : 'whip',
            'level' : 'Bronze',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ',
            'follow' : [
              {
                'id' : 'StalkingWalksFlicksAndBreak',   // listed in precedes
                'comment' : ''  
              },
              {
                'id' : 'FallawayRock',
                'comment' : ''
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'Walks',
                'comment' : ''
              },
              {
                'id' : 'Mooch',
                'comment' : ''
              },
              {
                'id' : 'ReverseWhip',
                'comment' : ''
              },
              {
                'id' : 'CurlyWhip',
                'comment' : 'when Whip ends in Closed Position'
              }
             ]
        },
        'WhipThrowaway' : 
         {
            'name' : 'Whip Throwaway',
            'urlpath' : 'whip-throwaway',
            'level' : 'Bronze',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ',
            'follow' : [
              {
                'id' : 'ChangeOfPlacesLeftToRight',
                'comment' : 'Man turn 1/4 R over 3-6, Lady 5/8 L'
              },
              {
                'id' : 'HipBump',
                'comment' : 'Man turn 1/8 R over 3-5, Lady 1/4 L'
              }
             ]
        },
        'BasicInPlace' : 
         {
            'name' : 'Basic In Place',
            'urlpath' : 'basic-in-place',
            'level' : 'Newcomer',
            'startAlignment' : ['Closed Position'],
            'timing' : 'QQ QaQ QaQ',
            'follow' : [
              {
                'id' : 'BasicInPlace',
                'comment' : ''
              },
              {
                'id' : 'FallawayRock',
                'comment' : ''
              },
              {
                'id' : 'FallawayThrowaway',
                'comment' : ''
              },
              {
                'id' : 'ChangeOfPlacesRightToLeft',
                'comment' : ''
              },
              {
                'id' : 'Walks',
                'comment' : ''
              },
              {
                'id' : 'Mooch',
                'comment' : ''
              },
              {
                'id' : 'ReverseWhip',
                'comment' : ''
              },
              {
                'id' : 'StalkingWalksFlicksAndBreak',
                'comment' : 'Stalking Walks'
              }
             ]
        }
    };

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

    //-------------------------------------------
    // RUMBA FIGURES
    var rumbaFigures = {
        'AdvancedHipTwists' : 
          {
            'name' : 'Advanced Hip Twists',
            'level' : 'Gold',
            'urlpath' : 'advanced-hip-twists',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : ''
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : ''
                },
                {
                   'id' : 'Fencing',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when finish in Open Position; 1-3 Open Basic followed by Progressive Walks Back or Natural Top'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when finish in Open Position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when finish in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when finish in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when finish in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'when finish in Contact Position, continue with 4-6 or 4-9 of Reverse Top'
                }
            ]
          },
        'ContinuousHipTwists' : 
          {
            'name' : 'Continuous Hip Twists',
            'level' : 'Gold',
            'urlpath' : 'continuous-hip-twists',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : ''
                }
            ]
          },
        'CircularHipTwists' : 
          {
            'name' : 'Circular Hip Twists',
            'level' : 'Gold',
            'urlpath' : 'circular-hip-twists',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : 'step 4-6'
                }
            ]
          },
        'ThreeAlemanas' : 
          {
            'name' : 'Three Alemanas',
            'level' : 'Gold',
            'urlpath' : 'three-alamanas',
            'timing' : '2341 2341 2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'CircularHipTwists',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : 'Man turns body slightly to R on last step to lead Lady fwd towards his R side, then turns her R to RSP. Lady LF fwd inline with RF then 1/2 R on LF to end LF back. Man LF slightly leftwards on the second to last step'   // listed in precedes`
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'end to side'   // listed in precedes`
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''  // listed in precedes
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : 'after lady stepping to side at end of Three Alemanas'
                }
             ]
          },
        'ThreeThrees' : 
          {
            'name' : 'Three Threes',
            'level' : 'Gold',
            'urlpath' : 'three-threes',
            'timing' : '2341 2341 2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : ''
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'Fencing',
                   'comment' : 'when ending in Fan Position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when ending in Fan Position'
                }
             ]
          },
        'Fencing' : 
          {
            'name' : 'Fencing',
            'level' : 'Gold',
            'urlpath' : 'fencing',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'CucarachasLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                }
             ]
          },
        'SlidingDoors' : 
          {
            'name' : 'Sliding Doors',
            'level' : 'Gold',
            'urlpath' : 'sliding-doors',
            'timing' : '2341 2341 2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : 'in Right Shadow Position, hold 2 or 3 (Kiki Walks)'
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''
                }
             ]
          },
        'Spiral' : 
          {
            'name' : 'Spiral',
            'level' : 'Silver',
            'urlpath' : 'spiral',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : ''
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : ''
                },
                {
                   'id' : 'Fencing',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'When finished in Open Position, follow with Open Basic, or 1-3 Open Basic into Progressive Walks Back or Natural Top'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'When finished in Open Position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'When finished in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'When finished in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'When finished in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'When finished in Contact Position, follow with 4-6 or 4-9 Reverse Top.'
                }
              ]
          },
        'Curl' : 
          {
            'name' : 'Curl',
            'level' : 'Silver',
            'urlpath' : 'curl',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'eval' : 'SameFollowAs("Spiral")',
                   'comment' : ''
                }
              ]
          },
        'RopeSpinning' : 
          {
            'name' : 'Rope Spinning',
            'level' : 'Silver',
            'urlpath' : 'rope-spinning',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'both stepping to side'   // listed in precedes`
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : 'Lady end Rope Spinning LF to side'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'When Man and Lady end to side'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'When ending in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'When ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'When ending in Open CPP'
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'Spiral',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : "When Lady ends fwd to Man's Right side"
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : "When Man and Lady fwd toward partner's R side"
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : "When Man and Lady fwd toward partner's R side"
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : "When Man and Lady fwd toward partner's R side"
                },
                {
                   'id' : 'ProgressiveWalksFwdRShadow',
                   'comment' : "When ending in R Shadow Position"
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : "When ending in R Shadow Position, follow with 7-12 of Sliding Doors."
                }
              ]
          },
        'Aida' : 
          {
            'name' : 'Aida',
            'level' : 'Silver',
            'urlpath' : 'aida',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'Aida followed by Cuban Rock fwd and Spot Turn; or Cuban Rock to Progressive Walks forward in Right Shadow Position'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'Aida followed by Double Spot Turns to L (Lady to R)'
                },
                {
                   'id' : 'CucarachasLF',
                   'comment' : 'Aida followed by side Cucaracha, Man LF side, Lady RF side'
                },
                {
                   'id' : 'Curl',
                   'comment' : ''
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''
                }
              ]
          },
        'OpeningOutFromReverseTop' : 
          {
            'name' : 'Opening Out From Reverse Top',
            'level' : 'Silver',
            'urlpath' : 'opening-out-from-reverse-top',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : ''
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : ''
                },
                {
                   'id' : 'Fencing',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                }
              ]
          },
        'ReverseTop' : 
          {
            'name' : 'Reverse Top',
            'level' : 'Silver',
            'urlpath' : 'open-hip-twist',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutFromReverseTop',
                   'comment' : 'from step 6'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'from step 6'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'from step 6 of Reverse Top, follow with 4-6 of Spiral, after leading Lady into her spiral turn on step 6 of Spiral Turn'
                }
              ]
          },
        'OpenHipTwist' : 
          {
            'name' : 'Open Hip Twist',
            'level' : 'Silver',
            'urlpath' : 'open-hip-twist',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : 'when finished in Fan or Open Position'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : ''
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : ''
                },
                {
                   'id' : 'Fencing',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when finished in Fan or Open Position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when finished in Open Position, follow with Open Basic or 1-3 Open Basic Movement into pprogressive Walks Back or Natual Top'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when finished in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when Open Hip Twist finishes in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when Open Hip Twist finishes in Open Position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when Open Hip Twist finishes in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when Open Hip Twist finishes in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when Open Hip Twist finishes in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'when Open Hip Twist finishes in Contact Position, follow with 4-6 or 4-9 Reverse Top.'
                }
              ]
          },
        'ClosedHipTwist' : 
          {
            'name' : 'Closed Hip Twist',
            'urlpath' : 'closed-hip-twist',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'Fencing',
                   'comment' : 'when ending in Fan position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when ending in Fan or Open position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending Open Position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '1-3 Open Basic into Progressive Walks Back or Natural Top, when Closed Hip Twist ends in Open Position'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in Open Position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when ending in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when ending in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when ending in Open position'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'Lady to L when ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : '4-6 or 4-9 when ending in Contact Position'
                }
              ]
          },
        'NaturalOpeningOutMovement' : 
          {
            'name' : 'Natural Opening Out Movement',
            'urlpath' : 'natural-opening-out-movement',
            'level' : 'Bronze',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'ReverseTop',
                   'comment' : 'Man turns 1/8 L on 3 to contact position, placing LF in front of RF as Cuban Cross. Lady turns an additional 1/8 on 3 to end wih RF back and slightly side'
                }
              ]
          },
        'OpeningOutToRightAndLeft' : 
          {
            'name' : 'Opening Out To Right And Left',
            'urlpath' : 'opening-out-to-right-and-left',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Fan',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : ''
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : ''
                },
                {
                   'id' : 'Spiral',
                   'comment' : '1/4 R on 1'
                }
              ]
          },
        'NaturalTop' : 
          {
            'name' : 'Natural Top',
            'urlpath' : 'natural-top',
            'level' : 'Bronze',
            'timing' : '2341 2341 2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : ''
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'last step, Man leads Lady towards his R side'
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : '4-6 following step 6 of Natural Top'
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : 'continue to turn a further 1/8 (up to 3/8) R on step 9, Man taking last step fwd in line with LF towards Lady R side'
                }
              ]
          },
        'HockeyStick' : 
          {
            'name' : 'Hockey Stick',
            'urlpath' : 'hockey-stick',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '1-3 Open Basic into Progressive Walks Back'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '1-3 Open Basic into Natural Top'
                },
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : ''
                },
                {
                   'id' : 'Curl',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when Hockey Stick ends in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when Hockey Stick ends in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when Hockey Stick ends in Open CPP'
                }
              ]
          },
        'Alemana' : 
          {
            'name' : 'Alemana',
            'urlpath' : 'alemana',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'OpeningOutToRightAndLeft',
                   'comment' : 'Lady LF side on 6'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'when ending to side'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending diagonally fwd in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending diagonally fwd in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending diagonally fwd in Open CPP'
                },
                {
                   'id' : 'NaturalOpeningOutMovement',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'when ending Lady fwd toards Man\'s R side'
                },
                {
                   'id' : 'AdvancedHipTwists',
                   'comment' : 'when ending fwd towards partner\'s R side'
                },
                {
                   'id' : 'ContinuousHipTwists',
                   'comment' : 'when ending fwd towards partner\'s R side'
                },
                {
                   'id' : 'CircularHipTwists',
                   'comment' : 'when ending fwd towards partner\'s R side'
                },
                {
                   'id' : 'ProgressiveWalksFwdRShadow',
                   'comment' : 'when ending R Shadow Position'
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : '7-12, when ending R Shadow Position'
                }
              ]
          },
        'Fan' : 
          {
            'name' : 'Fan',
            'urlpath' : 'fan',
            'level' : 'Bronze',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'Alemana',
                   'comment' : ''
                },
                {
                   'id' : 'HockeyStick',
                   'comment' : ''
                },
                {
                   'id' : 'SlidingDoors',
                   'comment' : ''
                },
                {
                   'id' : 'Fencing',
                   'comment' : ''
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : ''
                }
              ]
          },
        'SyncopatedCubanRockLF' : 
          {
            'name' : 'Syncopated Cuban Rock LF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Gold',
            'timing' : '2&341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'eval' : 'SameFollowAs("CubanRockRF")',
                   'comment' : ''
                }
              ]
          },
        'SyncopatedCubanRockRF' : 
          {
            'name' : 'Syncopated Cuban Rocks RF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Gold',
            'timing' : '2&341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'eval' : 'SameFollowAs("CubanRockLF")',
                   'comment' : ''
                }
              ]
          },
        'CubanRockLF' : 
          {
            'name' : 'Cuban Rock LF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'CubanRockRF' : 
          {
            'name' : 'Cuban Rocks RF',
            'urlpath' : 'cuban-rocks',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''   // listed in precedes`
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                }
              ]
          },
        'SideStepLeftLF' : 
          {
            'name' : 'Side Step To Left commenced with LF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderR',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'SideStepLeftRF' : 
          {
            'name' : 'Side Step To Left commenced with RF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'CucarachasLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                }
              ]
          },
        'SideStepRightLF' : 
          {
            'name' : 'Side Step To Right commenced with LF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'CucarachasRF',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                }
              ]
          },
        'SideStepRightRF' : 
          {
            'name' : 'Side Step To Right commenced with RF',
            'urlpath' : 'side-steps',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : '1/8 turn R on step 3'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                },
              ]
          },
        'ProgressiveWalksBack' : 
          {
            'name' : 'Progressive Walks Back',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6 starting in line'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'Last step LF side turning slightly R, Lady RF fwd'
                }
              ]
          },
        'ProgressiveWalksFwd' : 
          {
            'name' : 'Progressive Walks Forward',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'following Progressive Walks forward danced in open position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'following Progressive Walks forward danced in open position'
                }
              ]
          },
        'ProgressiveWalksFwdRSP' : 
          {
            'name' : 'Progressive Walks Forward in RSP',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : 'no turn on step 1'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                }
              ]
          },
        'ProgressiveWalksFwdLSP' : 
          {
            'name' : 'Progressive Walks Forward in LSP',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'ended facking partner'   // listed in precedes
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'no turn on step 1'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                }
              ]
          },
        'ProgressiveWalksFwdRShadow' : 
          {
            'name' : 'Progressive Walks Forward in Right Shadow Position',
            'urlpath' : 'progressive-walks',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'Fan',
                   'comment' : '4-6, Fan Finish'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Aida',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'when Walks ending last step to side, facing partner'
                },
                {
                   'id' : 'Spiral',
                   'comment' : ''
                }
              ]
          },
        'HandToHandLSP' : 
          {
            'name' : 'Hand To Hand LSP',
            'urlpath' : 'hand-to-hand',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'ProgressiveWalksFwdLSP', // in notes
                   'comment' : 'no turn on 2&3'
                },
                {
                   'id' : 'RopeSpinning',
                   'comment' : 'Rope Spinning after Hand to Hand to LSP - Man close RF to LF and lead Lady to turn R into her spiral action on 3 to continue with Rope Spinning'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                }
              ]
          },
        'HandToHandRSP' : 
          {
            'name' : 'Hand To Hand RSP',
            'urlpath' : 'hand-to-hand',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : ''
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, lady in line on 4'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, leading lady with R hand to turn R, then changing to L to R hand hold on 5'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                },
                {
                   'id' : 'ProgressiveWalksFwdRSP', // in notes
                   'comment' : 'no turn on 2&3'
                },
                {
                   'id' : 'Spiral',
                   'comment' : 'Spiral after Hand to Hand to RSP- ending with Man close RF to LF and lead Lady to turn L into her spiral action on 3 to continue with 4-6 of Spiral'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'ShoulderToShoulderR' : 
          {
            'name' : 'Shoulder To Shoulder Right Side',
            'urlpath' : 'shoulder-to-shoulder',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending Open CPP'
                }
              ]
          },
        'ShoulderToShoulderL' : 
          {
            'name' : 'Shoulder To Shoulder Left Side',
            'urlpath' : 'shoulder-to-shoulder',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'ShoulderToShoulderR',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when Shoulder To Shoulder ends facing partner'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when Shoulder To Shoulder ends facing partner'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : 'when ending Open PP'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when ending Open PP'
                },
              ]
          },
        'SpotTurnL' : 
          {
            'name' : 'Spot or Switch Turn to L (Lady to R)',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'ProgressiveWalksFwdRSP',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed'
                },
                {
                   'id' : 'NewYorkLSP'
                },
                {
                   'id' : 'SpotTurnR'
                },
                {
                   'id' : 'UnderarmTurnL'
                },
                {
                   'id' : 'HandToHandRSP'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'SideStepRightLF'
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ended in Open Position'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ended in Open Position, follow with 1-3 Open Basic into Natural Top'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ended in Open Position, follow with Open Basic into Progressive Walks Back'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when ending in open position'
                },
                {
                   'id' : 'ThreeAlemanas',
                   'comment' : 'when ending in open position'
                }
              ]
          },
        'SpotTurnR' : 
          {
            'name' : 'Spot or Switch Turn To R (Lady to L)',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NewYorkRSP'
                },
                {
                   'id' : 'SpotTurnL'
                },
                {
                   'id' : 'UnderarmTurnR'
                },
                {
                   'id' : 'HandToHandLSP'
                },
                {
                   'id' : 'SideStepLeftRF'
                },
                {
                   'id' : 'SideStepRightRF'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'UnderarmTurnR' : 
          {
            'name' : 'Underarm Turn To R',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen'
                },
                {
                   'id' : 'BasicMovementsClosed'
                },
                {
                   'id' : 'NewYorkLSP'
                },
                {
                   'id' : 'SpotTurnR'
                },
                {
                   'id' : 'UnderarmTurnL'
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : 'end Shoulder to Shoulder facing partner'
                },
                {
                   'id' : 'HandToHandRSP'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'SideStepRightLF'
                },
                {
                   'id' : 'CubanRockLF'
                },
                {
                   'id' : 'Fan'
                },
                {
                   'id' : 'SyncopatedCubanRockLF'
                }
              ]
          },
        'UnderarmTurnL' : 
          {
            'name' : 'Underarm Turn To L',
            'urlpath' : 'spot-turns',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NewYorkRSP'
                },
                {
                   'id' : 'SpotTurnL'
                },
                {
                   'id' : 'UnderarmTurnR'
                },
                {
                   'id' : 'HandToHandLSP'
                },
                {
                   'id' : 'SideStepLeftRF'
                },
                {
                   'id' : 'SideStepRightRF'
                },
                {
                   'id' : 'CubanRockRF'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'turning slightly R and leading Lady to step RF fwd on last step of Underarm Turn L',
                },
                {
                   'id' : 'Aida'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : ''
                }
              ]
          },
        'NewYorkLSP' : 
          {
            'name' : 'New York LSP',
            'urlpath' : 'new-york',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : ''    // listed in precedes
                },
                {
                   'id' : 'NewYorkRSP',
                   'comment' : 'when ending in Open PP'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'when ending in Open PP'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : '4-6, when ending facing partner'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'when New York LSP ends facing parter'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'when New York LSP ends facing parter'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'when New York LSP ends facing parter'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, when New York LSP ends facing parter'
                },
                {
                   'id' : 'ProgressiveWalksFwdRSP', // in notes
                   'comment' : 'overturned to end fwd in RSP'
                },
                {
                   'id' : 'ClosedHipTwist',
                   'comment' : '4-6, when New York LSP ends facing parter'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'when New York LSP ends facing parter'
                }
              ]
          },
        'NewYorkRSP' : 
          {
            'name' : 'New York RSP',
            'urlpath' : 'new-york',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'ProgressiveWalksFwdRSP',
                   'comment' : 'no turn at end of count 1 in New York RSP' // listed in precedes
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : 'when ending in Open CPP'
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when ending facing partner'
                },
                {
                   'id' : 'HandToHandRSP'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'SideStepRightLF'
                },
                {
                   'id' : 'ProgressiveWalksFwdLSP', // in notes
                   'comment' : 'overturned to end fwd in LSP'
                },
                {
                   'id' : 'CubanRockLF'
                },
                {
                   'id' : 'Fan'
                },
                {
                   'id' : 'SyncopatedCubanRockLF'
                }
              ]
          },
        'CucarachasLF' : 
          {
            'name' : 'Cucarachas: LF',
            'urlpath' : 'cucarachas',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'SpotTurnL',
                   'comment' : ''  // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                    'comment' : '4-6'
                },
                {
                   'id' : 'BasicMovementsClosed',
                    'comment' : '4-6'
                },
                {
                   'id' : 'CucarachasRF'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightRF'
                },
                {
                   'id' : 'Fan',
                   'comment' : '4-6, lady in line on 4'
                },
                {
                   'id' : 'Aida',
                   'comment' : ''
                }
              ]
          },
        'CucarachasRF' : 
          {
            'name' : 'Cucarachas: RF',
            'urlpath' : 'cucarachas',
            'level' : 'Newcomer',
            'timing' : '2341',
            'startFoot' : 'RF',
            'follow' : [
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''  // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                    'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                    'comment' : ''
                },
                {
                   'id' : 'CucarachasLF'
                },
                {
                   'id' : 'SideStepLeftLF'
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                }
              ]
          },
        'BasicMovementsClosed' : 
          {
            'name' : 'Basic Movements: Closed',
            'urlpath' : 'basic-movements',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'ReverseTop',
                   'comment' : '' // listed in precedes
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : ''
                },
                {
                   'id' : 'NewYorkLSP',
                   'comment' : 'having turned to Open CPP on last step'
                },
                {
                   'id' : 'SpotTurnR',
                   'comment' : ''
                },
                {
                   'id' : 'UnderarmTurnL',
                   'comment' : ''
                },
                {
                   'id' : 'ShoulderToShoulderL',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepLeftLF',
                   'comment' : ''
                },
                {
                   'id' : 'SideStepRightLF',
                   'comment' : ''
                },
                {
                   'id' : 'HandToHandRSP',
                   'comment' : ''
                },
                {
                   'id' : 'CubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'Fan',
                   'comment' : ''
                },
                {
                   'id' : 'SyncopatedCubanRockLF',
                   'comment' : ''
                },
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'after 1-3 Closed Basic, follow with 4-6 Open Basic'
                },
                {
                   'id' : 'SpotTurnL',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'UnderarmTurnR',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'HandToHandLSP',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'SideStepLeftRF',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'SideStepRightRF',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'CubanRockRF',
                   'comment' : 'after 1-3 Closed Basic'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'after 1-3 Closed Basic, Man step 3 LF side turning slightly R, Lady RF fwd'
                },
                {
                   'id' : 'SyncopatedCubanRockRF',
                   'comment' : 'after 1-3 Closed Basic'
                }
             ]
          },
        'BasicMovementsOpen' : 
         {
            'name' : 'Basic Movements: Open',
            'urlpath' : 'basic-movements',
            'level' : 'Newcomer',
            'timing' : '2341 2341',
            'startFoot' : 'LF',
            'follow' : [
                {
                   'id' : 'BasicMovementsOpen',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'Fan',
                   'comment' : 'when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksFwd',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'Alemana',
                   'comment' : 'when danced in Open Position, Lady RF back on 1'
                },
                {
                   'id' : 'OpenHipTwist',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'Curl',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'ThreeThrees',
                   'comment' : 'when danced in Open Position'
                },
                {
                   'id' : 'BasicMovementsClosed',
                   'comment' : 'after 1-3, follow with 4-6 of Closed Basic, when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksBack',
                   'comment' : 'after 1-3 of Open Basic, when danced in Closed Position'
                },
                {
                   'id' : 'ProgressiveWalksBack',
                   'comment' : 'after 1-3 of Open Basic, when danced in Open Position, L to R hand hold'
                },
                {
                   'id' : 'NaturalTop',
                   'comment' : 'after 1-3 Open Basic, Man step 3 LF side turning slightly R, Lady RF fwd, danced in Open Position'
                }
             ]
        }
    };

    //-------------------------------------------
    // SAMBA FIGURES
/*
        'foo' : 
         {
            'name' : 'foo',
            'urlpath' : 'foo',
            'level' : 'Newcomer',
            'follow' : [
             ]
        },
*/
    var sambaFigures = {
        'CruzadosWalksAndLocks' : 
         {
            'name' : 'Cruzados Walks and Locks',
            'level' : 'Gold',
            'urlpath' : 'cruzados-walks-and-locks',
            'startFoot' : ['RF'],
            'startDirection' : ['fwd'],
            'timing' : 'aS',
            'follow' : [
              {
                'id' : 'ShadowCircularVoltaLF', // listed in precedes
                'comment' : 'when ended with weight on RF'
              },
              {
                'id' : 'ShadowCircularVoltaRF', // listed in precedes
                'comment' : 'when ended with weight on LF'
              },
              {
                'id' : 'ShadowTravelingVoltaLF',  // listed in precedes
                'comment' : 'When Cruzado Walks or Locks end with weight on RF'
              },
              {
                'id' : 'ShadowTravelingVoltaRF',  // listed in precedes
                'comment' : 'When Cruzado Walks or Locks end with weight on LF'
              },
              {
                'id' : 'FootChange2',
                'comment' : ""
              },
              {
                'id' : 'FootChange4',
                'comment' : ""
              }
             ]
        },
        'SambaLocks' : 
         {
            'name' : 'Samba Locks',
            'level' : 'Gold',
            'urlpath' : 'samba-locks',
            'startFoot' : ['RF'],
            'startDirection' : ['fwd'],
            'timing' : 'QQS QQS',
            'follow' : [
              {
                'id' : 'CrissCrossBotaFogos', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'CrissCrossVoltas',
                'comment' : "start from step 4 or 8"
              },
              {
                'id' : 'Maypole',
                'comment' : "Man turning R"
              },
              {
                'id' : 'SoloSpotVoltaR',
                'comment' : "Lady turning L"
              }
             ]
        },
        'ThreeStepTurn' : 
         {
            'name' : 'Three Step Turn',
            'level' : 'Gold',
            'urlpath' : 'three-step-turn',
            'startFoot' : ['LF'],
            'startDirection' : [''],
            'timing' : '1a2',
            'follow' : [
              {
                'id' : 'SambaLocks',
                'comment' : ""
              }
             ]
        },
        'PromenadeAndCPPRuns' : 
         {
            'name' : 'Promenade And Counter Promenade Runs',
            'level' : 'Gold',
            'urlpath' : 'promenade-and-counter-promenade-runs',
            'startFoot' : ['RF'],
            'startDirection' : ['side'],
            'timing' : '123 123 123',
            'follow' : [
              {
                'id' : 'WhiskToL', // listed in precedes
                'comment' : 'turn to face partner on 1 of Whisk'
              },
              {
                'id' : 'SambaWalkLF',
                'comment' : ""
              },
              {
                'id' : 'ThreeStepTurn',
                'comment' : "Turn to R, Lady to L, then follow with Whisk to L"
              },
              {
                'id' : 'RhythmBounce',
                'comment' : "Man LF, Lady RF"
              },
              {
                'id' : 'TravelingVoltaL',
                'comment' : "start with step 2"
              }
             ]
        },
        'ReverseRoll' : 
         {
            'name' : 'Reverse Roll',
            'level' : 'Gold',
            'urlpath' : 'reverse-roll',
            'startFoot' : ['LF'],
            'startDirection' : ['fwd'],
            'timing' : 'SQQ',
            'follow' : [
              {
                'eval' : 'SameFollowAs("ReverseTurn")'
              }
             ]
        },
        'NaturalRoll' : 
         {
            'name' : 'Natural Roll',
            'level' : 'Gold',
            'urlpath' : 'natural-roll',
            'startFoot' : ['RF'],
            'startDirection' : ['fwd'],
            'timing' : 'SQQ',
            'follow' : [
              {
                'id' : 'PromenadeAndCPPRuns', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'CortaJaca',   // listed in precedes
                'comment' : ""
              },
              {
                'id' : 'BackRocks',
                'comment' : "after 1-3 of Natural Roll"
              },
              {
                'id' : 'Plait',
                'comment' : "after 1-3 of Natural Roll"
              },
              {
                'id' : 'OpenRocks',
                'comment' : "" //figure starting with RF, facing partner - sample
              },
              {
                'id' : 'ClosedRocks',
                'comment' : "" //figure starting with RF, facing partner - sample
              },
              {
                'id' : 'WhiskToR',
                'comment' : "" //figure starting with RF, facing partner - sample
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : "" //figure starting with RF, facing partner - sample
              },
              {
                'id' : 'SideBasicMovement',
                'comment' : "" //figure starting with RF, facing partner - sample
              },
              {
                'id' : 'ProgressiveBasicMovement',
                'comment' : "" //figure starting with RF, facing partner - sample
              }
             ]
        },
        'Roundabout' : 
         {
            'name' : 'Round About',
            'level' : 'Gold',
            'urlpath' : 'roundabout',
            'startFoot' : ['RF', 'LF'],
            'startDirection' : ['fwd'],
            'timing' : '1a2a3a4',
            'follow' : [
              {
                'id' : 'ContraBotaFogos',
                'comment' : "Roundabout to R followed by LF Contra Bota Fogos, Roundabout to L followed by RF Contra Bota Fogos"
              },
              {
                'id' : 'Roundabout',
                'comment' : "Roundabout to R followed by Roundabout to L, Roundabout to L followed by Roundabout to R"
              }
             ]
        },
        'ContraBotaFogos' : 
         {
            'name' : 'Contra Bota Fogos',
            'level' : 'Gold',
            'urlpath' : 'contra-botafogos',
            'startFoot' : ['RF'],
            'startDirection' : ['fwd'],
            'timing' : '1a23a4',
            'follow' : [
              {
                'id' : 'FootChange6',
                'comment' : "from R Contra Position to PP"
              },
              {
                'id' : 'FootChange7',
                'comment' : "from R Contra Position to Open CPP"
              },
              {
                'id' : 'Roundabout',
                'comment' : "Roundabout to R"
              },
              {
                'id' : 'Roundabout',
                'comment' : "Roundabout to L following RF Contra Bota Fogo"
              }
             ]
        },
        'ShadowCircularVoltaLF' : 
         {
            'name' : 'Shadow Circular Volta with LF',
            'level' : 'Silver',
            'urlpath' : 'shadow-circular-volta',
            'startFoot' : ['LF'],
            'startAlignment' : [''],
            'startDirection' : ['fwd'],
            'timing' : '1a2a3a4',
            'follow' : [
              {
                'id' : 'FootChange2',
                'comment' : "R shadow position to closed position"
              },
              {
                'id' : 'FootChange4',
                'comment' : "R shadow Position to PP"
              },
              {
                'id' : 'SambaWalkRF',
                'comment' : ""
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : "RF"
              },
              {
                'id' : 'ShadowTravelingVoltaRF',
                'comment' : ""
              },
              {
                'id' : 'ShadowCircularVoltaRF',
                'comment' : ""
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : "same foot Bota Fogo to R Contra Position"
              },
              {
                'id' : 'CruzadosWalksAndLocks',
                'comment' : "Cruzado Walks or Locks comments with RF"
              }
             ]
        },
        'ShadowCircularVoltaRF' : 
         {
            'name' : 'Shadow Circular Volta with RF',
            'level' : 'Silver',
            'urlpath' : 'shadow-circular-volta',
            'startFoot' : ['RF'],
            'startAlignment' : [''],
            'startDirection' : ['fwd'],
            'timing' : '1a2a3a4',
            'follow' : [
              {
                'id' : 'ShadowCircularVoltaLF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'SambaWalkLF',
                'comment' : ""
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : ""
              },
              {
                'id' : 'ShadowTravelingVoltaLF',
                'comment' : ""
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : "same foot Bota Fogo to R Contra Position"
              },
              {
                'id' : 'CruzadosWalksAndLocks',
                'comment' : "Cruzado Walks or Locks comments with LF"
              }
             ]
        },
        'Maypole' : 
         {
            'name' : 'Maypole',
            'level' : 'Silver',
            'urlpath' : 'maypole',
            'startFoot' : ['LF', 'RF'],
            'startAlignment' : [''],
            'startDirection' : ['fwd'],
            'timing' : '1a2a3a4',
            'follow' : [
              {
                'id' : 'ReverseTurn', // listed in precedes
                'comment' : 'Man turning R in Maypole'
              },
              {
                'id' : 'WhiskToL', // listed in precedes
                'comment' : 'Man turning R in Maypole'
              },
              {
                'eval' : 'MatchFigures({"startFoot" : "RF"})',
                'comment' : 'when Man is turning left in Maypole'
              },
              {
                'eval' : 'MatchFigures({"startFoot" : "RF"})',
                'comment' : 'when Man is turning right in Maypole'
              }
             ]
        },
        'ArgentineCrosses' : 
         {
            'name' : 'Argentine Crosses',
            'level' : 'Silver',
            'urlpath' : 'argentine-crosses',
            'startFoot' : ['LF'],
            'startAlignment' : ['Wall'],
            'startDirection' : ['fwd'],
            'timing' : 'QQS QQS QQS QQS',
            'follow' : [
              {
                'id' : 'OpenRocks',   // listed in precedes
                'comment' : "Argentine Crosses ended facing LOD, with LF Stationary Walk and Lady's underarm turning ending"
              },
              {
                'id' : 'ClosedRocks',   // listed in precedes
                'comment' : "Argentine Crosses ended facing LOD, with LF Stationary Walk and Lady's underarm turning ending"
              },
              {
                'id' : 'CortaJaca',   // listed in precedes
                'comment' : "Lady's underarm turn ending to ARgentine Crosses near corner, then followed by Corta Jaca"
              },
              {
                'id' : 'WhiskToL',
                'comment' : "with or without Lady's underarm turn"
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : 'LF Stationary Samba Walk, leading Lady underarm into Spot Volta to R, releasing hold with RH'
              },
              {
                'id' : 'WhiskToR',
                'comment' : "with or without Lady's underarm turn"
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : 'RF Stationary Samba Walk, leading Lady underarm into Spot Volta to L, releasing hold with RH'
              },
              {
                'id' : 'SoloSpotVoltaL',
                'comment' : ''
              }
             ]
        },
        'RollingOffTheArm' : 
         {
            'name' : 'Rolling Off The Arm',
            'level' : 'Silver',
            'urlpath' : 'rolling-off-the-arm',
            'startFoot' : ['LF'],
            'startAlignment' : ['LOD'],
            'startDirection' : ['side'],
            'timing' : '123 123',
            'follow' : [
              {
                'id' : 'SambaWalkLF',
                'comment' : ''
              },
              {
                'id' : 'WhiskToL',
                'comment' : 'when finished with Closed Position'
              },
              {
                'id' : 'ReverseTurn',
                'comment' : 'when finished with Closed Position'
              },
              {
                'id' : 'FootChange8',
                'comment' : ''
              }
            ]
        },
        'Plait' : 
         {
            'name' : 'Plait',
            'level' : 'Silver',
            'urlpath' : 'plait',
            'startFoot' : ['RF'],
            'startAlignment' : ['BDW'],
            'startDirection' : ['back'],
            'timing' : 'SSQQS',
            'follow' : [
              {
                'id' : 'ReverseBasicMovement',
                'comment' : 'when Plait ends with LF, follow with 4-6 of Reverse Basic Movement'
              },
              {
                'id' : 'ReverseTurn',
                'comment' : 'when Plait ends with LF, follow with 4-6 of Reverse Turn'
              },
              {
                'id' : 'ReverseRoll',
                'comment' : 'when Plait ends with LF, follow with, 4-6 of Reverse Roll'
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : 'when Plait ends with RF, follow with 4-6 of Natural Basic Movement'
              },
              {
                'id' : 'NaturalRoll',
                'comment' : 'when Plait ends with RF, follow with 4-6 of Natural Roll'
              }
             ]
        },
        'BackRocks' : 
         {
            'name' : 'Back Rocks',
            'level' : 'Silver',
            'urlpath' : 'back-rocks',
            'startFoot' : ['RF'],
            'startAlignment' : ['BDW'],
            'startDirection' : ['back'],
            'timing' : 'SQQSQQ',
            'follow' : [
              {
                'id' : 'ReverseBasicMovement',
                'comment' : '4-6 of Reverse Basic Movement'
              },
              {
                'id' : 'ReverseTurn',
                'comment' : '4-6 of Reverse Turn'
              },
              {
                'id' : 'Plait',
                'comment' : ''
              },
              {
                'id' : 'ReverseRoll',
                'comment' : '4-6 of Reverse Roll'
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : 'from step 3, follow with 4-6 of Natural Basic Movement'
              },
              {
                'id' : 'NaturalRoll',
                'comment' : 'From step 3, follow with 4-6 of Natural Roll'
              }
             ]
        },
        'OpenRocks' : 
         {
            'name' : 'Open Rocks',
            'level' : 'Silver',
            'urlpath' : 'open-rocks',
            'startFoot' : ['RF'],
            'startAlignment' : ['BDW'],
            'startDirection' : ['fwd'],
            'timing' : 'SQQSQQSQQ',
            'follow' : [
              {
                'id' : 'ReverseTurn',
                'comment' : 'Man 1/8 to L, Lady 1/4, regain normal hold'
              },
              {
                'id' : 'ReverseRoll',
                'comment' : ''
              },
              {
                'id' : 'ThreeStepTurn',
                'comment' : ''
              },
              {
                'id' : 'NaturalRoll',
                'comment' : 'after steps 1-6 of Open Rocks, Man 1/8 R, Lady 1/4.'
              },
              {
                'id' : 'PromenadeAndCPPRuns',
                'comment' : 'starting with 7-9, continuing with 4-9.'
              }
             ]
        },
        'ClosedRocks' : 
         {
            'name' : 'Closed Rocks',
            'level' : 'Bronze',
            'urlpath' : 'closed-rocks',
            'startFoot' : ['RF'],
            'startAlignment' : ['LOD'],
            'startDirection' : ['fwd'],
            'timing' : 'SQQSQQ',
            'follow' : [
              {
                'id' : 'NaturalBasicMovement',
                'comment' : ''
              },
              {
                'id' : 'CortaJaca',
                'comment' : 'near corner'
              },
              {
                'id' : 'OpenRocks',
                'comment' : ''
              },
              {
                'id' : 'NaturalRoll',
                'comment' : ''
              },
              {
                'id' : 'ThreeStepTurn',
                'comment' : ''
              },
              {
                'id' : 'ReverseBasicMovement',
                'comment' : 'after step 3'
              },
              {
                'id' : 'ReverseTurn',
                'comment' : 'after step 3'
              },
              {
                'id' : 'ReverseRoll',
                'comment' : 'after step 3'
              },
              {
                'id' : 'ThreeStepTurn',
                'comment' : 'after step 3'
              }
             ]
        },
        'CortaJaca' : 
         {
            'name' : 'Corta Jaca',
            'level' : 'Bronze',
            'urlpath' : 'corta-jaca',
            'startFoot' : ['RF'],
            'startAlignment' : ['W', 'DW'],
            'startDirection' : ['fwd'],
            'timing' : 'SQQQQQQ',
            'follow' : [
              {
                'id' : 'WhiskToL', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : '4-6'
              },
              {
                'id' : 'SoloSpotVoltaL',
                'comment' : ''
              },
              {
                'id' : 'NaturalRoll',
                'comment' : '4-6'
              }
             ]
        },
        'ReverseTurn' : 
         {
            'name' : 'Reverse Turn',
            'level' : 'Bronze',
            'urlpath' : 'reverse-turn',
            'startFoot' : ['LF'],
            'startAlignment' : ['LOD'],
            'startDirection' : ['fwd'],
            'timing' : '1a2 3a4',
            'follow' : [
              {
                'id' : 'ReverseBasicMovement',
                'comment' : ''
              },
              {
                'id' : 'WhiskToL',
                'comment' : 'Reverse Turn undertuned to face wall'
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : 'LF'
              },
              {
                'id' : 'BotaFogosToPromenadeAndCPP',
                'comment' : 'Reverse Turn undertuned to face wall'
              },
              {
                'id' : 'ReverseTurn',
                'comment' : ''
              },
              {
                'id' : 'ReverseRoll',
                'comment' : ''
              },
              {
                'id' : 'TravelingBotaFogosBack',
                'comment' : 'after step 3'
              },
              {
                'id' : 'BackRocks',
                'comment' : 'after step 3'
              },
              {
                'id' : 'Plait',
                'comment' : 'after step 3'
              }
             ]
        },
        'ShadowTravelingVoltaRF' : 
         {
            'name' : 'Shadow Traveling Volta commenced with RF',
            'level' : 'Bronze',
            'urlpath' : 'shadow-travelling-volta',
            'startFoot' : ['RF'],
            'startAlignment' : ['W'],
            'timing' : '1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'SambaWalkLF',
                'comment' : 'same foot'
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : 'LF'
              },
              {
                'id' : 'ShadowTravelingVoltaLF',
                'comment' : ''
              },
              {
                'id' : 'ShadowCircularVoltaLF',
                'comment' : ''
              },
              {
                'id' : 'ContraBotaFogos',
                'comment' : 'Same Foot Bota Fogo to R Contra Postion'
              },
              {
                'id' : 'CruzadosWalksAndLocks',
                'comment' : 'LF'
              }
             ]
        },
        'ShadowTravelingVoltaLF' : 
         {
            'name' : 'Shadow Traveling Volta commenced with LF',
            'level' : 'Bronze',
            'urlpath' : 'shadow-travelling-volta',
            'startFoot' : ['LF'],
            'startAlignment' : ['W'],
            'timing' : '1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'FootChange2',
                'comment' : ''
              },
              {
                'id' : 'FootChange4',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkRF',
                'comment' : 'same foot'
              },
              {
                'id' : 'TravelingBotaFogosForward',
                'comment' : 'RF'
              },
              {
                'id' : 'ShadowTravelingVoltaRF',
                'comment' : ''
              },
              {
                'id' : 'ShadowCircularVoltaRF',
                'comment' : ''
              },
              {
                'id' : 'ContraBotaFogos',
                'comment' : 'Same Foot Bota Fogo to R Contra Postion'
              },
              {
                'id' : 'CruzadosWalksAndLocks',
                'comment' : 'RF'
              }
             ]
        },
        'FootChange1' : 
         {
            'name' : 'Foot Change 1: Closed Position to Right Shadow Position',
            'level' : 'Bronze',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'CruzadosWalksAndLocks', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowCircularVoltaRF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowTravelingVoltaRF',
                'comment' : ''
              }
             ]
        },
        'FootChange2' : 
         {
            'name' : 'Foot Change 2: Right Shadow Position To Closed Position',
            'level' : 'Bronze',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'WhiskToR', // listed in precedes
                'comment' : ''
              }
             ]
        },
        'FootChange3' : 
         {
            'name' : 'Foot Change 3: Promenade or Open Promenade to Right Shadow Position',
            'level' : 'Bronze',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'ShadowCircularVoltaLF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowTravelingVoltaLF',
                'comment' : ''
              }
             ]
        },
        'FootChange4' : 
         {
            'name' : 'Foot Change 4: Right Shadow Position to Promenade Position',
            'level' : 'Silver',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'SambaWalkRF',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkSide',
                'comment' : ''
              }
             ]
        },
        'FootChange5' : 
         {
            'name' : 'Foot Change 5: Promenade Postion to Right Contra Position',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'Roundabout', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ContraBotaFogos', // listed in precedes
                'comment' : ''
              }
             ]
        },
        'FootChange6' : 
         {
            'name' : 'Foot Change 6: R Contra Position to Promenade Position',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'SambaWalkRF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'SambaWalkSide', // listed in precedes
                'comment' : ''
              }
             ]
        },
        'FootChange7' : 
         {
            'name' : 'Foot Change 7: R Contra Position to Open Counter Promenade Position',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'CrissCrossBotaFogos', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'CrissCrossVoltas', // listed in precedes
                'comment' : ''
              }
             ]
        },
        'FootChange8' : 
         {
            'name' : 'Foot Change 8: Right Side Position to Right Shadow Position',
            'level' : 'Silver',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'CruzadosWalksAndLocks', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowCircularVoltaRF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowTravelingVoltaRF',
                'comment' : ''
              }
             ]
        },
        'SoloSpotVoltaL' : 
         {
            'name' : 'Solo Spot Volta to Left (Lady to Right)',
            'level' : 'Bronze',
            'urlpath' : 'solo-spot-volta',
            'startFoot' : ['LF'],
            'startAlignment' : ['W'],
            'timing' : '1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'WhiskToR',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : 'RF'
              },
              {
                'id' : 'SoloSpotVoltaR',
                'comment' : ''
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : 'started with RF'
              },
              {
                'id' : 'PromenadeAndCPPRuns',
                'comment' : ''
              }
             ]
        },
        'SoloSpotVoltaR' : 
         {
            'name' : 'Solo Spot Volta to Right (Lady to Left)',
            'level' : 'Bronze',
            'urlpath' : 'solo-spot-volta',
            'startFoot' : ['RF'],
            'startAlignment' : ['Center'],
            'timing' : '1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'WhiskToL',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : 'LF'
              },
              {
                'id' : 'SoloSpotVoltaL',
                'comment' : ''
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : ''
              }
             ]
        },
        'CrissCrossVoltas' : 
         {
            'name' : 'Criss Cross Voltas',
            'level' : 'Bronze',
            'urlpath' : 'criss-cross-voltas',
            'startFoot' : ['RF'],
            'startAlignment' : ['DW'],
            'timing' : '1a2a1a2 1a2a1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'ReverseBasicMovement',
                'comment' : ''
              },
              {
                'id' : 'WhiskToL',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : ''
              },
              {
                'id' : 'BotaFogosToPromenadeAndCPP',
                'comment' : ''
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : ''
              },
              {
                'id' : 'CrissCrossBotaFogos',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'Maypole',
                'comment' : 'Man turning L, when ending in Open PP'
              },
              {
                'id' : 'FootChange3',
                'comment' : 'when ending in Open PP'
              },
              {
                'id' : 'CrissCrossBotaFogos',
                'comment' : '4-6, when ending in Open CPP'
              },
              {
                'id' : 'Maypole',
                'comment' : 'Man turning R, when ending in Open CPP'
              },
              {
                'id' : 'SambaLocks',
                'comment' : 'when ending in Open CPP'
              },
              {
                'id' : 'SambaWalkLF',
                'comment' : '2 Samba Walks in RSP commenced with LF, Lady RF, then Rolling off the Arm, when ending in R Side Position'
              },
              {
                'id' : 'RollingOffTheArm',
                'comment' : 'when ending in R Side Position with Double Hand Hold'
              }
             ]
        },
        'BotaFogosToPromenadeAndCPP' : 
         {
            'name' : 'Bota Fogos To Promenade and Counter Promenade',
            'level' : 'Bronze',
            'urlpath' : 'bota-fogos-to-promenade-and-counter-promenade',
            'startFoot' : ['LF'],
            'startAlignment' : ['W'],
            'timing' : '1a2 3a4 5a6',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'SambaWalkRF',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkSide',
                'comment' : ''
              },
              {
                'id' : 'TravelingVoltaL',
                'comment' : 'turn to face partner on step 1'
              },
              {
                'id' : 'FootChange5',
                'comment' : 'having made 1/4 turn over 8 & 9'
              }
             ]
        },
        'TravelingBotaFogosBack' : 
         {
            'name' : 'Traveling Bota Fogos Back',
            'level' : 'Bronze',
            'urlpath' : 'traveling-bota-fogos-back',
            'startFoot' : ['RF'],
            'startAlignment' : ['BDW'],
            'timing' : '1a2 3a4 5a6 7a8',
            'startDirection' : 'back',
            'follow' : [
              {
                'id' : 'SambaWalkRF',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkSide',
                'comment' : ''
              },
              {
                'id' : 'TravelingVoltaL',
                'comment' : 'turning to face partner on step 1'
              },
              {
                'id' : 'BotaFogosToPromenadeAndCPP',
                'comment' : '4-9'
              },
              {
                'id' : 'FootChange5',
                'comment' : ''
              }
             ]
        },
        'CrissCrossBotaFogos' : 
         {
            'name' : 'Criss Cross Bota Fogos (Shadow Bota Fogos)',
            'urlpath' : 'criss-cross-bota-fogos-shadow-bota-fogos',
            'level' : 'Newcomer',
            'startFoot' : ['LF'],
            'startAlignment' : ['DW'],
            'startDirection' : ['fwd'],
            'timing' : '1a2 3a4',
            'follow' : [
              {
                'id' : 'RollingOffTheArm', // listed in precedes
                'comment' : "Criss Cross Boto Fogos and LF Stationary Walk with Lady's underam turn ending, finishing in RSP, taking Double hand hold. Continue with one or three Samba Walks in RSP."
              },
              {
                'id' : 'SambaWalkRF', // listed in precedes
                'comment' : "with Lady's underarm turn ending in PP"
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : 'LF, leading lady to turn R under raised arms, lady 1-3 Spot Volta turning 3/4 R. Then regain hold, follow with Natural or Progressive Basic Movements'
              },
              {
                'id' : 'CortaJaca',
                'comment' : ''
              },
              {
                'id' : 'NaturalRoll',
                'comment' : ''
              },
              {
                'id' : 'CrissCrossVoltas',
                'comment' : 'or 8-14 after step 3 of Criss Cross Bota Fogos'
              },
              {
                'id' : 'Maypole',
                'comment' : 'Man turn L, or Man turning R after step 3'
              },
              {
                'id' : 'FootChange3',
                'comment' : 'Open PP to R Shadow Position'
              },
              {
                'id' : 'SambaLocks',
                'comment' : 'after step 3'
              }
             ]
        },
        'TravelingBotaFogosForward' : 
         {
            'name' : 'Traveling Bota Fogos Forward',
            'urlpath' : 'traveling-bota-fogos-forward',
            'level' : 'Newcomer',
            'startFoot' : ['RF'],
            'startAlignment' : ['DC'],
            'startDirection' : 'fwd',
            'timing' : '1a2 3a4',
            'follow' : [
              {
                'id' : 'ShadowCircularVoltaLF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowCircularVoltaRF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : 'commenced OP - turn 1/8 R over 2 and 3 to face partner'
              },
              {
                'id' : 'ContraBotaFogos',
                'comment' : 'when same foot Bota Fogos ending in Contra Position'
              },
              {
                'id' : 'Roundabout',
                'comment' : 'when same foot Bota Fogos ending in Contra Position'
              },
              {
                'id' : 'ShadowTravelingVoltaRF',
                'comment' : 'when LF Traveling Bota Fogos Fwd is dance with same foot'
              },
              {
                'id' : 'ShadowTravelingVoltaLF',
                'comment' : 'when RF Traveling Bota Fogos Fwd is dance with same foot'
              }
             ]
        },
        'TravelingVoltaR' : 
         {
            'name' : 'Traveling Volta to Right',
            'urlpath' : 'volta-movements',
            'level' : 'Newcomer',
            'startFoot' : ['LF'],
            'startAlignment' : ['Center'],
            'startDirection' : 'fwd',
            'timing' : '1a2 a1a2',
            'follow' : [
              {
                'id' : 'WhiskToR',
                'comment' : ''
              }
             ]
        },
        'TravelingVoltaL' : 
         {
            'name' : 'Traveling Volta to Left',
            'urlpath' : 'volta-movements',
            'level' : 'Newcomer',
            'startFoot' : ['RF'],
            'startAlignment' : ['W'],
            'timing' : '1a2 a1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'WhiskToL',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkStationary',  // TravelingVoltaL is listed as a precedes for Stationary Samba Walk
                'comment' : 'Traveling Volta to Left is in Closed Position'
              }
             ]
        },
        'RhythmBounce' : 
         {
            'name' : 'Rhythm Bounce',
            'urlpath' : 'rhythm-bounce',
            'level' : 'Newcomer',
            'startFoot' : ['RF', 'LF'],
            'startAlignment' : ['various'],
            'timing' : 'a1a2',
            'follow' : [
              {
                'id' : 'TravelingVoltaL', // listed in precedes
                'comment' : 'Rhythm Bounce on LF followed by Traveling Volta to Left'
              },
              {
                'id' : 'TravelingVoltaR', // listed in precedes
                'comment' : 'Rhythm Bounce on RF followed by Traveling Volta to Right'
              }
             ]
        },
        'SambaWalkStationary' : 
         {
            'name' : 'Samba Walk: Stationary',
            'urlpath' : 'samba-walks',
            'level' : 'Newcomer',
            'startFoot' : 'RF',
            'startAlignment' : ['Wall'],
            'timing' : '1a2 3a4',
            'startDirection' : 'together',
            'follow' : [
              {
                'id' : 'ReverseBasicMovement',
                'comment' : ''
              },
              {
                'id' : 'WhiskToL',
                'comment' : ''
              },
              {
                'id' : 'BotaFogosToPromenadeAndCPP',
                'comment' : ''
              },
              {
                'id' : 'SoloSpotVoltaL', // from Solo Spot Volta's preceding figure list
                'comment' : 'after RF Stationary Walk'
              },
              {
                'id' : 'SoloSpotVoltaR', // from Solo Spot Volta's preceding figure list
                'comment' : 'after LF Stationary Walk'
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : ''
              },
              {
                'id' : 'Maypole',
                'comment' : 'Man turning L; or Man turning R, after 1-3 LF Stationary Samba Walk'
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : 'after 1-3 LF Stationary Samba Walk'
              },
              {
                'id' : 'WhiskToR',
                'comment' : 'after 1-3 LF Stationary Samba Walk'
              },
              {
                'id' : 'CortaJaca',
                'comment' : 'after 1-3 LF Stationary Samba Walk'
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : 'commenced with RF, after 1-3 LF StationarySambaWalk'
              },
              {
                'id' : 'NaturalRoll',
                'comment' : 'after 1-3 LF Stationary Samba Walk'
              }
             ]
        },
        'SambaWalkSide' : 
         {
            'name' : 'Samba Walk: Side',
            'urlpath' : 'samba-walks',
            'level' : 'Newcomer',
            'startFoot' : 'RF',
            'startAlignment' : ['LOD'],
            'startDirection' : 'fwd',
            'timing' : '1a2',
            'follow' : [
              {
                'id' : 'SambaWalkLF',
                'comment' : 'first step fwd and slightly across'
              },
              {
                'id' : 'CrissCrossBotaFogos',
                'comment' : 'in Open PP, having released hold with R hand'
              },
              {
                'id' : 'CrissCrossVoltas',
                'comment' : 'in Open PP, having released hold with R hand'
              },
              {
                'id' : 'SoloSpotVoltaL',
                'comment' : 'in Open PP, having released hold with R hand'
              },
              {
                'id' : 'Maypole',
                'comment' : 'Man turning L, in Open PP, having released hold with R hand'
              },
              {
                'id' : 'FootChange3',
                'comment' : 'from Open PP to R Shadow Position, after having released hold with R hand'
              },
              {
                'id' : 'SambaWalkStationary',
                'comment' : 'in Closed Position, having turned 1/4 R, Lady L, between 2 and 3'
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : 'in Closed Position, having turned 1/4 R, Lady L, between 2 and 3'
              }
             ]
        },
        'SambaWalkRF' : 
         {
            'name' : 'Samba Walk in PP: RF',
            'urlpath' : 'samba-walks',
            'level' : 'Newcomer',
            'startFoot' : 'RF',
            'startAlignment' : ['LOD'],
            'timing' : '1a2',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'ShadowCircularVoltaLF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowTravelingVoltaLF',  // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'SambaWalkLF',
                'comment' : ''
              },
              {
                'id' : 'WhiskToL',
                'comment' : 'turn 1/4 R on 1, Lady to L, to face partner'
              }
             ]
        },
        'SambaWalkLF' : 
         {
            'name' : 'Samba Walk in PP: LF',
            'urlpath' : 'samba-walks',
            'level' : 'Newcomer',
            'startAlignment' : ['LOD'],
            'timing' : '1a2',
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'ShadowCircularVoltaRF', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ShadowTravelingVoltaRF',  // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'SambaWalkRF',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkSide',
                'comment' : ''
              },
              {
                'id' : 'BotaFogosToPromenadeAndCPP',
                'comment' : '4-9'
              }
             ]
        },
        'WhiskToR' : 
         {
            'name' : 'Whisk To Right',
            'urlpath' : 'whisk',
            'level' : 'Newcomer',
            'startFoot' : 'RF',
            'startAlignment' : ['W', 'various'],
            'timing' : '1a2',
            'startDirection' : 'side',
            'follow' : [
              {
                'id' : 'TravelingVoltaR', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'NaturalBasicMovement', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'ReverseBasicMovement',
                'comment' : ''
              },
              {
                'id' : 'WhiskToL',
                'comment' : ''
              },
              {
                'id' : 'SambaWalkLF',
                'comment' : 'in CPP, having turned to PP over 1-3 of Whisk'
              },
              {
                'id' : 'BotaFogosToPromenadeAndCPP',
                'comment' : ''
              },
              {
                'id' : 'SoloSpotVoltaL',
                'comment' : ''
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : ''
              }
             ]
        },
        'WhiskToL' : 
         {
            'name' : 'Whisk To Left',
            'urlpath' : 'whisk',
            'level' : 'Newcomer',
            'startFoot' : 'LF',
            'startAlignment' : ['W', 'various'],
            'timing' : '1a2',
            'startDirection' : 'side',
            'follow' : [
              {
                'id' : 'ReverseBasicMovement', // listed in precedes
                'comment' : ''
              },
              {
                'id' : 'NaturalBasicMovement',
                'comment' : ''
              },
              {
                'id' : 'WhiskToR',
                'comment' : ''
              },
              {
                'id' : 'TravelingVoltaL',
                'comment' : ''
              },
              {
                'id' : 'SoloSpotVoltaR',
                'comment' : ''
              },
              {
                'id' : 'CortaJaca',
                'comment' : ''
              },
              {
                'id' : 'ArgentineCrosses',
                'comment' : 'commenced with RF'
              },
              {
                'id' : 'NaturalRoll',
                'comment' : ''
              },
              {
                'id' : 'PromenadeAndCPPRuns',
                'comment' : ''
              }
             ]
        },
        'NaturalBasicMovement' : 
         {
            'name' : 'Natural Basic Movement',
            'urlpath' : 'basic-movements',
            'level' : 'Newcomer',
            'startAlignment' : ['LOD', 'DC', 'DW', 'W'],
            'timing' : '1a2 3a4',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'eval' : 'MatchFigures({"startFoot" : "RF"})'
              },
              {
                'eval' : 'MatchFigures({"startFoot" : "LF"})',
                'comment' : 'after 1-3 of Natural Basic'
              }
             ]
        },
        'ReverseBasicMovement' : 
         {
            'name' : 'Reverse Basic Movement',
            'urlpath' : 'basic-movements',
            'level' : 'Newcomer',
            'startAlignment' : ['LOD', 'DC', 'DW', 'W'],
            'timing' : '1a2 3a4',
            'startFoot' : 'LF',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'eval' : 'MatchFigures({"startFoot" : "LF"})'
              },
              {
                'eval' : 'MatchFigures({"startFoot" : "RF"})',
                'comment' : 'after 1-3 of Reverse Basic'
              }
             ]
        },
        'SideBasicMovement' : 
         {
            'name' : 'Side Basic Movement',
            'urlpath' : 'basic-movements',
            'level' : 'Newcomer',
            'startAlignment' : ['LOD', 'DC', 'DW', 'W'],
            'timing' : '1a2 3a4',
            'startFoot' : ['LF', 'RF'],
            'startDirection' : 'side',
            'follow' : [
              {
                'eval' : 'SameFollowAs("NaturalBasicMovement")'
              },
              {
                'eval' : 'SameFollowAs("ReverseBasicMovement")'
              }
             ]
        },
        'ProgressiveBasicMovement' : 
         {
            'name' : 'Progressive Basic Movement',
            'urlpath' : 'basic-movements',
            'level' : 'Newcomer',
            'startAlignment' : ['W'],
            'timing' : '1a2 3a4',
            'startFoot' : 'RF',
            'startDirection' : 'fwd',
            'follow' : [
              {
                'id' : 'NaturalBasicMovement'
              },
              {
                'id' : 'ProgressiveBasicMovement'
              },
              {
                'id' : 'CortaJaca'
              },
              {
                'id' : 'NaturalRoll'
              }
             ]
        }
    };

    //-------------------------------------------
    // TANGO FIGURES
    var tangoFigures = 
      {
       'Walk' :
          {
            'name' : 'Walk',
            'urlpath' : 'walk',
            'level' : 'Newcomer',
            'startAlignment' : ['DW', 'DC', 'LOD'],
            'startFoot' : ['LF', 'RF'],
            'startDirection' : ['fwd', 'back'],
            'timing' : 'S',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-walk-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-walk-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-walk-2.png'
            ],
            'follow' : [ // this is not listed in book, we summarized it
              {
                'id' : 'Walk',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveSideStepReverseTurn',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'id' : 'RockTurn',
                'comment' : ''
              },
              {
                'id' : 'OpenReverseTurnLadyOutside',
                'comment' : ''
              },
              {
                'id' : 'OpenReverseTurnLadyInline',
                'comment' : ''
              },
              {
                'id' : 'RFRock',
                'comment' : 'after Walk back on LF'
              },
              ]
          },
        'ClosedFinish' : 
          {
            'name' : 'Closed Finish',
            'urlpath' : 'open-finish',
            'level' : 'Newcomer',
            'startAlignment' : ['DC', 'PP'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-finish-3.png'
            ],
            'follow' : [ // not listed, guessed
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              }
              ]
          },
        'OpenFinish' : 
          {
            'name' : 'Open Finish',
            'urlpath' : 'open-finish',
            'level' : 'Newcomer',
            'startAlignment' : ['DC', 'PP'],
            'startFoot' : 'RF',
            'startDirection' : 'back',
            'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-finish-3.png'
            ],
            'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'when preceding figure ends DC'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'ReverseOutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'Oversway',
                'comment' : ''
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : 'step 1 of Back Corte in CBMP with Lady OP'
              },
              {
                'id' : 'LFRock',
                'comment' : 'LF Rock in CBMP with Lady OP, no turn or up to 1/4 to R'
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'after Open Finish, place LF to side without weight leading Lady to turn to PP, count &, then proceed with the Promenade figure'
              }
            ]
          },
        'ProgressiveSideStep' :
          {
          'name' : 'Progressive Side Step',
          'urlpath' : 'progressive-side-step',
          'level' : 'Newcomer',
          'startAlignment' : ['DW', 'LOD', 'DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-3.png'
          ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'RF'
              },
              {
                'id' : 'RockTurn',
                'comment' : ''
              }
            ]
        },
        'ProgressiveLink' :
          {
          'name' : 'Progressive Link',
          'urlpath' : 'progressive-link',
          'level' : 'Newcomer',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQ',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-link-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-link-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-link-2.png'
            ],
          'follow' : [
              {
                'id' : 'ClosedPromenade',
                'comment' : ''
              },
              {
                'id' : 'OpenPromenade',
                'comment' : ''
              },
              {
                'id' : 'NaturalTwistTurn',
                'comment' : ''
              },
              {
                'id' : 'NaturalPromenadeTurn',
                'comment' : ''
              },
              {
                'id' : 'PromenadeLink',
                'comment' : ''
              },
              {
                'id' : 'BackOpenPromenade',
                'comment' : ''
              },
              {
                'id' : 'FallawayPromenade',
                'comment' : ''
              },
              {
                'id' : 'Chase',
                'comment' : ''
              }
            ]
        },
        'ClosedPromenade' :
          {
          'name' : 'Closed Promenade',
          'urlpath' : 'closed-promenade',
          'level' : 'Newcomer',
          'startAlignment' : ['DC', 'LOD', 'DW', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-closed-promenade-4.png'
          ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'when preceding figure ended DC'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'Oversway',
                'comment' : ''
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'ContraCheck',
                'comment' : ''
              }
            ]
        },
        'RockTurn' :
          {
          'name' : 'Rock Turn',
          'urlpath' : 'rock-turn',
          'level' : 'Newcomer',
          'startAlignment' : ['DW'],
          'startFoot' : 'RF',
          'startDirection' : 'fwd',
           'timing' : 'S QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-turn-7.png'
            ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'OpenReverseTurnLadyOutside' :
          {
          'name' : 'Open Reverse Turn, Lady Outside',
          'urlpath' : 'open-reverse-turn-lady-outside',
          'level' : 'Newcomer',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-outside-6.png'
            ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'at end of last step of preceding figure, using Open Finish, keep feet in place and turn Lady to PP, count &'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'ContraCheck',
                'comment' : ''
              }
            ]
        },
        'BackCorte' :
          {
          'name' : 'Back Corte',
          'urlpath' : 'back-corte',
          'level' : 'Newcomer',
          'startAlignment' : ['LOD', 'DW'], // down new LOD, or dance at corner
          'startFoot' : 'LF',
          'startDirection' : 'back',
           'timing' : 'S QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-back-corte-4.png'
            ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'OpenReverseTurnLadyInline' :
          {
          'name' : 'Open Reverse Turn, Lady In Line',
          'urlpath' : 'open-reverse-turn-lady-inside',
          'level' : 'Bronze',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-reverse-turn_lady-inline-6.png'
          ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
            }
            ]
        },
        'ProgressiveSideStepReverseTurn' :
          {
          'name' : 'Progressive Side Step Reverse Turn',
          'urlpath' : 'progressive-side-step-reverse-turn',
          'level' : 'Bronze',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQSS QQS QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-6.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-7.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-8.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-9.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-progressive-side-step-reverse-turn-10.png'
          ],
          'follow' : [
            {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
            }
            ]
        },
        'OpenPromenade' :
          {
          'name' : 'Open Promenade',
          'urlpath' : 'open-promenade',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'SQQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-open-promenade-4.png'
            ],
          'follow' : [
              {
                'id' : 'Walk',
                'comment' : 'LF'
              },
              {
                'id' : 'ProgressiveSideStep',
                'comment' : ''
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'when preceding figure ended DC'
              },
              {
                'id' : 'FourStep',
                'comment' : ''
              },
              {
                'id' : 'ReverseOutsideSwivel',
                'comment' : ''
              },
              {
                'id' : 'FourStepChange',
                'comment' : ''
              },
              {
                'id' : 'BrushTap',
                'comment' : ''
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : ''
              },
              {
                'id' : 'Oversway',
                'comment' : ''
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : ''
              },
              {
                'id' : 'FiveStep',
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : 'step 1 in CBMP with Lady OP using CBM on 1 and 2'
              },
              {
                'id' : 'LFRock',
                'comment' : 'LF Rock in CBMP with Lady OP, no turn or up to 1/4 to R'
              },
              {
                'id' : 'OutsideSwivel',
                'comment' : ''
              },
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'having placed LF to side without weight, leading Lady to to PP, count &'
              }
            ]
        },
        'LFRock' :
          {
          'name' : 'LF Rock',
          'urlpath' : 'lf-and-rf-rocks',
          'level' : 'Bronze',
          'startAlignment' : ['LOD'],
          'startFoot' : 'LF',
          'startDirection' : 'back',
           'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-lf-3.png'
            ],
          'follow' : [
              {
                'id' : 'OpenFinish',
                'comment' : ''
              },
              {
                'id' : 'ClosedFinish',
                'comment' : ''
              },
              {
                'id' : 'RFRock',
                'comment' : ''
              }
            ]
        },
        'RFRock' :
          {
          'name' : 'RF Rock',
          'urlpath' : 'lf-and-rf-rocks',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'DC'],
          'startFoot' : 'RF',
          'startDirection' : 'back',
           'timing' : 'QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-rock-rf-3.png'
            ],
          'follow' : [
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              }
            ]
        },
        'NaturalTwistTurn' :
          {
          'name' : 'Natural Twist Turn',
          'urlpath' : 'natural-twist-turn',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'S QQS QQ',
            'diagram' : [
              [
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-0.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-1.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-2.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-3.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-4.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-5.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-1-6.png'
              ],
              [
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-0.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-1.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-2.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-3.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-4.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-5.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-2-6.png'
              ],
              [
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-0.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-1.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-2.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-3.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-4.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-5.png',
                'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-twist-turn-3-6.png'
              ]
            ],
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                //'eval' : 'MatchFigures({"startAlignment" : "PP"})', // not sure if this is correct
                'comment' : ''
              },
              {
                'id' : 'BackCorte',
                'comment' : ''
              },
              {
                'id' : 'LFRock',
                'comment' : ''
              }
            ]
        },
        'NaturalPromenadeTurn' :
          {
          'name' : 'Natural Promenade Turn',
          'urlpath' : 'natural-promenade-turn',
          'level' : 'Bronze',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'S QQS',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-4.1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/tango-natural-promenade-turn-4.2.png'
            ],
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              },
              {
                'id' : 'RockTurn',
                'comment' : '2-7'
              }
            ]
        },
        'PromenadeLink' :
          {
          'name' : 'Promenade Link',
          'urlpath' : 'promenade-link',
          'level' : 'Silver',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
           'timing' : 'SQQ',
          'follow' : [
            {
                'eval' : 'SameFollowAs("ClosedPromenade")'
            }
            ]
        },
        'FourStep' :
          {
          'name' : 'Four Step',
          'urlpath' : 'four-step',
          'level' : 'Silver',
          'startAlignment' : ['Wall'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQQQ',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              }
            ]
        },
        'BackOpenPromenade' :
          {
          'name' : 'Back Open Promenade',
          'urlpath' : 'back-open-promenade',
          'level' : 'Silver',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
           'timing' : 'SQQS',
          'follow' : [
              {
                'id' : 'FourStep'
              },
              {
                'id' : 'ReverseOutsideSwivel'
              },
              {
                'id' : 'FourStepChange'
              },
              {
                'id' : 'BrushTap'
              },
              {
                'id' : 'FallawayFourStep'
              },
              {
                'id' : 'FiveStep'
              }
            ]
        },
        'ReverseOutsideSwivel' :
          {
          'name' : 'Reverse Outside Swivel',
          'urlpath' : 'reverse-outside-swivel',
          'level' : 'Silver',
          'startAligment' : 'DC',
          'startDirection' : 'fwd',
          'startFoot' : 'LF',
          'timing' : 'QQSQQ',
          'follow' : [
              {
                'eval' : 'SameFollowAs("ClosedPromenade")'
              }
            ]
        },
        'OutsideSwivel' :
          {
          'name' : 'Outside Swivel',
          'urlpath' : 'outside-swivel',
          'level' : 'Silver',
          'startAlignment' : ['Center'],
          'startFoot' : 'LF',
          'startDirection' : 'back',
           'timing' : 'SQQ',
          'follow' : [
              {
                'eval' : 'SameFollowAs("ClosedPromenade")',
                'comment' : 'if ended DW'
              },
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'if ended DC'
              },
              {
                'id' : 'FourStep',
                'comment' : 'Overturned'
              },
              {
                'id' : 'Oversway'
              },
              {
                'id' : 'FallawayReverseAndSlipPivot'
              },
              {
                'id' : 'FiveStep'
              }
            ]
        },
        'FallawayPromenade' :
          {
          'name' : 'Fallaway  Promenade',
          'urlpath' : 'fallaway-promenade',
          'level' : 'Silver',
          'startAlignment' : ['LOD', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
           'timing' : 'SQQSQQ',
          'follow' : [
            {
              'id' : 'ClosedPromenade'
            },
            {
              'id' : 'OpenPromenade'
            },
            {
              'id' : 'NaturalTwistTurn'
            },
            {
              'id' : 'NaturalPromenadeTurn'
            },
            {
              'id' : 'PromenadeLink',
              'comment' : 'Reverse'
            },
            {
              'id' : 'Chase'
            }
            ]
        },
        'FourStepChange' :
          {
          'name' : 'Four Step Change',
          'urlpath' : 'four-step-change',
          'level' : 'Silver',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQQQ or QQ&S',
          'follow' : [
            {
              'id' : 'Walk',
              'comment' : 'LF'
            },
            {
              'eval' : 'MatchFigureName(" Reverse")'
            },
            {
              'id' : 'FourStep'
            },
            {
              'id' : 'ReverseOutsideSwivel'
            },
            {
              'id' : 'ProgressiveLink',
              'comment' : 'At corner'
            },
            {
              'id' : 'Oversway'
            },
            {
              'id' : 'FallawayReverseAndSlipPivot'
            },
            {
              'id' : 'FiveStep'
            }
            ]
        },
        'BrushTap' :
          {
          'name' : 'Brush Tap',
          'urlpath' : 'brush-tap',
          'level' : 'Silver',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQ&S',
          'follow' : [
            {
              'id' : 'Walk',
              'comment' : 'LF'
            },
            {
              'id' : 'ProgressiveLink'
            },
            {
              'id' : 'ProgressiveSideStep'   // listed in precedes
            },
            {
              'id' : 'BackCorte'
            },
            {
              'id' : 'LFRock'
            },
            {
              'id' : 'FourStep'
            },
            {
              'id' : 'FourStepChange'
            },
            {
              'eval' : 'MatchFigureName(" Reverse")',
              'comment' : 'If ended DC'
            },
            {
              'id' : 'FallawayFourStep'
            },
            {
              'id' : 'Oversway'
            },
            {
              'id' : 'FallawayReverseAndSlipPivot'
            },
            {
              'id' : 'ContraCheck'
            }
            ]
        },
        'FallawayFourStep' :
          {
          'name' : 'Fallaway Four Step',
          'urlpath' : 'fallaway-fourstep',
          'level' : 'Gold',
          'startAlignment' : ['LOD'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQQQ',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              }
            ]
        },
        'Oversway' :
          {
          'name' : 'Oversway',
          'urlpath' : 'oversway',
          'level' : 'Gold',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
           'timing' : 'QQSS',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'after ending in PP - see notes in figure'
              }
            ]
        },
        'BasicReverseTurn' :
          {
          'name' : 'Basic Reverse Turn',
          'urlpath' : 'basic-reverse-turn',
          'level' : 'Gold',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQSQQS or QQ&QQS',
          'follow' : [
              {
                'eval' : 'SameFollowAs("OpenReverseTurnLadyOutside")'
              }
            ]
        },
        'Chase' :
          {
          'name' : 'Chase',
          'urlpath' : 'the-chase',
          'level' : 'Gold',
          'startAlignment' : ['DW', 'PP'],
          'startFoot' : 'LF',
          'startDirection' : 'side',
          'timing' : 'SQQQQS',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : 'when ended in PP'
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : 'when ended inline'
              }
            ]
        },
        'FallawayReverseAndSlipPivot' :
          {
          'name' : 'Fallaway Reverse and Slip Pivot',
          'urlpath' : 'fallaway-reverse-and-slip-pivot',
          'level' : 'Gold',
          'startAlignment' : ['DC'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQQQ',
          'follow' : [
              {
                'eval' : 'MatchFigureName("Reverse")',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FourStep',
                'comment' : 'if ended in LOD, overturn Four Step'
              },
              {
                'id' : 'ReverseOutsideSwivel',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FallawayFourStep',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'Oversway',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FallawayReverseAndSlipPivot',
                'comment' : 'if ended in LOD'
              },
              {
                'id' : 'FiveStep',
                'comment' : 'if ended in LOD, overturn Five Step'
              },
              {
                'id' : 'ProgressiveLink',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'ProgressiveSideStep'   // listed in precedes
              },
              {
                'id' : 'FourStep',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'FourStepChange',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'BrushTap',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'FiveStep',
                'comment' : 'if ended in DW'
              },
              {
                'id' : 'ContraCheck',
                'comment' : 'if ended in DW'
              }
            ]
        },
        'FiveStep' :
          {
          'name' : 'Five Step',
          'urlpath' : 'five-step',
          'level' : 'Gold',
          'startAlignment' : ['DW'],
          'startFoot' : 'LF',
          'startDirection' : 'fwd',
          'timing' : 'QQQQS or QQS&S',
          'follow' : [
            {
                'eval' : 'SameFollowAs("FourStep")'
            }
            ]
        },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            'urlpath' : 'contra-check',
            'level' : 'Gold',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : 'SQQ',
            'follow' : [
              {
                'eval' : 'MatchFigureName("Promenade")',
                'comment' : ''
              }
              ]
          }
      };

    //-------------------------------------------
    // VIENNESE WALTZ FIGURES
    var vwaltzFigures = 
      {
        'RFForwardChange' : 
          {
            'name' : 'RF Forward Change (Natural to Reverse)',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : ['RF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'urlpath' : 'natural-to-reverse',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-3.png'
            ],
            'follow' : [
                {
                  'id' : 'ReverseTurn',
                  'comment' : ''
                }
              ]
          },
        'LFBackwardChange' : 
          {
            'name' : 'LF Backward Change (Natural to Reverse)',
            'level' : 'Bronze',
            'startAlignment' : ['BDC'],
            'startFoot' : ['LF'],
            'startDirection' : 'back',
            'timing' : '123',
            'urlpath' : 'natural-to-reverse',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-to-reverse-3.png'
            ],
            'follow' : [
                {
                  'id' : 'ReverseTurn',
                  'comment' : 'follow with 4-6 Reverse Turn'
                }
              ]
          },
        'RFBackwardChange' : 
          {
            'name' : 'RF Backward Change (Reverse To Natural)',
            'level' : 'Bronze',
            'startAlignment' : ['BDW'],
            'startFoot' : ['RF'],
            'startDirection' : 'back',
            'timing' : '123',
            'urlpath' : 'reverse-to-natural',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-3.png'
            ],
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : 'follow with 4-6 Natural Turn'
                }
              ]
          },
        'LFForwardChange' : 
          {
            'name' : 'LF Forward Change (Reverse To Natural)',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'urlpath' : 'reverse-to-natural',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-to-natural-3.png'
            ],
            'follow' : [
                {
                  'id' : 'NaturalTurn',
                  'comment' : ''
                }
              ]
          },
        'ReverseFleckerl' : 
          {
            'name' : 'Reverse Fleckerl',
            'urlpath' : 'reverse-fleckerl',
            'level' : 'Silver',
            'startAlignment' : ['LOD'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ContraCheck',
                  'comment' : ''
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : ''
                },
                {
                  'id' : 'ReverseFleckerl',
                  'comment' : ''
                },
                {
                  'id' : 'ReverseFleckerl',
                  'comment' : '1-3 Reverse Fleckerl, 4-6 Reverse Turn'
                }
              ]
          },
        'NaturalFleckerl' : 
          {
            'name' : 'Natural Fleckerl',
            'urlpath' : 'natural-fleckerl',
            'level' : 'Gold',
            'startAlignment' : ['LOD'],
            'startFoot' : ['RF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'NaturalFleckerl',
                  'comment' : ''
                },
                {
                  'id' : 'NaturalTurn',
                  'comment' : ''
                },
                {
                  'id' : 'NaturalFleckerl',
                  'comment' : '1-3 Natural Fleckerl, 4-6 Natural Turn'
                }
              ]
          },
        'ContraCheck' : 
          {
            'name' : 'Contra Check',
            'level' : 'Gold',
            'urlpath' : 'contra-check',
            'startAlignment' : ['LOD'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'NaturalFleckerl',
                  'comment' : ''
                },
                {
                  'id' : 'NaturalTurn',
                  'comment' : ''
                }
              ]
          },
        'ReverseTurn' : 
          {
            'name' : 'Reverse Turn',
            'level' : 'Bronze',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'urlpath' : 'reverse-turn',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-reverse-turn-6.png'
            ],
            'follow' : [
                {
                  'id' : 'LFForwardChange',
                  'comment' : ''
                },
                {
                  'id' : 'ReverseTurn',
                  'comment' : ''
                },
                {
                  'id' : 'ReverseFleckerl',
                  'comment' : ''
                },
                {
                  'id' : 'ContraCheck',
                  'comment' : ''
                },
                {
                  'id' : 'RFBackwardChange',
                  'comment' : 'after 1-3 Reverse Turn, do Backward Change, then 4-6 of Natural Turn'
                }
              ]
          },
        'NaturalTurn' : 
          {
            'name' : 'Natural Turn',
            'level' : 'Bronze',
            'startAlignment' : ['DC'],
            'startFoot' : ['RF'],
            'startDirection' : 'fwd',
            'timing' : '123 123',
            'urlpath' : 'natural-turn',
            'diagram' : [
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-0.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-1.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-2.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-3.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-4.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-5.png',
              'http://www.dancecentral.info/ballroom/international-style/diagrams/vwaltz-natural-turn-6.png'
            ],
            'follow' : [
                {
                  'id' : 'RFForwardChange',
                  'comment' : ''
                },
                {
                  'id' : 'NaturalTurn',
                  'comment' : ''
                },
                {
                  'id' : 'NaturalFleckerl',
                  'comment' : ''
                },
                {
                  'id' : 'LFBackwardChange',
                  'comment' : 'after 1-3 Natural Turn, do Backward Change Step, then 4-6 of Reverse Turn'
                }
              ]
          }
      };

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

