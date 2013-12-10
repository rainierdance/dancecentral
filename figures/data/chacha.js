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

