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
            'follow' : [
             ]
        },
        'SambaLocks' : 
         {
            'name' : 'Samba Locks',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'ThreeStepTurn' : 
         {
            'name' : 'Three Step Turn',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'PromenadeAndCPPRuns' : 
         {
            'name' : 'Promenade And Counter Promenade Runs',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'ReverseRoll' : 
         {
            'name' : 'Reverse Roll',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'NaturalRoll' : 
         {
            'name' : 'Natural Roll',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'Roundabout' : 
         {
            'name' : 'Round About',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'ContraBotaFogos' : 
         {
            'name' : 'Conra Bota Fogos',
            'level' : 'Gold',
            'follow' : [
             ]
        },
        'ShadowCircularVolta' : 
         {
            'name' : 'Shadow Circular Volta',
            'level' : 'Silver',
            'follow' : [
             ]
        },
        'Maypole' : 
         {
            'name' : 'Maypole',
            'level' : 'Silver',
            'follow' : [
             ]
        },
        'ArgentineCrosses' : 
         {
            'name' : 'Argentine Crosses',
            'level' : 'Silver',
            'follow' : [
             ]
        },
        'RollingOffTheArm' : 
         {
            'name' : 'Rolling Off The Arm',
            'level' : 'Silver',
            'follow' : [
             ]
        },
        'Plait' : 
         {
            'name' : 'Plait',
            'level' : 'Silver',
            'follow' : [
             ]
        },
        'BackRocks' : 
         {
            'name' : 'Back Rocks',
            'level' : 'Silver',
            'follow' : [
             ]
        },
        'OpenRocks' : 
         {
            'name' : 'Open Rocks',
            'level' : 'Silver',
            'follow' : [
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
                'id' : 'ShadowCircularVolta',
                'comment' : 'LF'
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
                'id' : 'ShadowCircularVolta',
                'comment' : 'RF'
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
             ]
        },
        'FootChange3' : 
         {
            'name' : 'Foot Change 3: Promenade or Open Promenade to Right Shadow Position',
            'level' : 'Bronze',
            'urlpath' : 'foot-changes',
            'follow' : [
              {
                'id' : 'ShadowTravelingVoltaLF',
                'comment' : ''
              }
             ]
        },
        'FootChange4' : 
         {
            'name' : 'Foot Change 4: Rright Shadow Position to Promenade Position',
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
             ]
        },
        'FootChange6' : 
         {
            'name' : 'Foot Change 6: R Contra Position to Promenade Position',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'follow' : [
             ]
        },
        'FootChange7' : 
         {
            'name' : 'Foot Change 7: R Contra Position to Open Counter Promenade Position',
            'level' : 'Gold',
            'urlpath' : 'foot-changes',
            'follow' : [
             ]
        },
        'FootChange8' : 
         {
            'name' : 'Foot Change 8: Right Side Position to Right Shadow Position',
            'level' : 'Silver',
            'urlpath' : 'foot-changes',
            'follow' : [
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
                'comment' : 'when ending in R Side Position'
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

