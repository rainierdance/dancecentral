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

