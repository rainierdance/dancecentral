    //-------------------------------------------
    // VIENNESE WALTZ FIGURES
    var vwaltzFigures = 
      {
        'RFForwardChange' : 
          {
            'name' : 'RF Forward Change',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : ['RF'],
            'startDirection' : 'fwd',
            'timing' : '123',
            'follow' : [
                {
                  'id' : 'ReverseTurn',
                  'comment' : ''
                }
              ]
          },
        'LFForwardChange' : 
          {
            'name' : 'LF Forward Change',
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123',
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
            'level' : 'Newcomer',
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
            'level' : 'Newcomer',
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
            'level' : 'Newcomer',
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
            'level' : 'Newcomer',
            'startAlignment' : ['DW'],
            'startFoot' : ['LF'],
            'startDirection' : 'fwd',
            'timing' : '123',
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
                  'id' : 'ReverseTurn',
                  'comment' : '1-3 Reverse Turn followed by Backward Change Step, then 4-6 of natural Turn'
                }
              ]
          },
        'NaturalTurn' : 
          {
            'name' : 'Natural Turn',
            'level' : 'Newcomer',
            'startAlignment' : ['DC'],
            'startFoot' : ['RF'],
            'startDirection' : 'fwd',
            'timing' : '123',
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
                  'id' : 'NaturalTurn',
                  'comment' : '1-3 Natural Turn followed by Backward Change Step then 4-6 of Reverse Turn'
                }
              ]
          }
      };

