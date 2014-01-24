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

