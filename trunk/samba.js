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
            'follow' : [
             ]
        },
        'CortaJaca' : 
         {
            'name' : 'Corta Jaca',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'ReverseTurn' : 
         {
            'name' : 'Reverse Turn',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'ShadowTravelingVolta' : 
         {
            'name' : 'Shadow Traveling Volta',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'FootChanges' : 
         {
            'name' : 'Foot Changes',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'SoloSpotVolta' : 
         {
            'name' : 'Solo Spot Volta',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'CrissCrossVoltas' : 
         {
            'name' : 'Criss Cross Voltas',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'BotaFogosToPromenadeAndCPP' : 
         {
            'name' : 'Bota Fogos To Promenade and Counter Promenade',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'TravelingBotaFogosBack' : 
         {
            'name' : 'Traveling Bota Fogos Back',
            'level' : 'Bronze',
            'follow' : [
             ]
        },
        'CrissCrossBotaFogos' : 
         {
            'name' : 'Criss Cross Bota Fogos (Shadow Bota Fogos)',
            'urlpath' : 'criss-cross-bota-fogos-shadow-bota-fogos',
            'level' : 'Newcomer',
            'startFoot' : ['LF'],
            'startAlignment' : ['DW'],
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
                'id' : 'FootChanges',
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
            'timing' : '1a2 3a4',
            'follow' : [
              {
                'id' : 'NaturalBasicMovement',
                'comment' : 'commenced OP - turn 1/8 R over 2 and 3 to face partner'
              }
             ]
        },
        'TravelingVoltaR' : 
         {
            'name' : 'Traveling Volta to Righ',
            'urlpath' : 'volta-movements',
            'level' : 'Newcomer',
            'startFoot' : ['LF'],
            'startAlignment' : ['Center'],
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
                'id' : 'SoloSpotVolta',
                'comment' : 'to L, lady to R, in Open PP, having released hold with R hand'
              },
              {
                'id' : 'Maypole',
                'comment' : 'Man turning L, in Open PP, having released hold with R hand'
              },
              {
                'id' : 'FootChanges',
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
                'id' : 'SoloSpotVolta',
                'comment' : 'to L, lady to R'
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
                'id' : 'SoloSpotVolta',
                'comment' : 'to R - lady to L'
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

