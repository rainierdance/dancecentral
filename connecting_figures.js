var LEVELS = ['Newcomer', 'Bronze', 'Silver', 'Gold', 'Open'];
var COLOR_MAP = {
  'Newcomer' : 'Navy',
  'Bronze' : 'SaddleBrown',
  'Silver' : 'SlateGray',
  'Gold' : 'OrangeRed',
  'Open' : 'DarkGreen'
};

//-------------------------------------------
var mode = 'browse'; // vs. "routine" for building a routine
var isLatinDance = false; // do not show starting direction for Latin dances
var DANCE_MAP;
var URL_BASE;
var figures;  // all figues in the selected dance
var sortedIds = []; // display figures in alphabetically order
var selectedFigureName = inputFigureName; // current selected figure name

//-------------------------------------------
// one-time initialization after scripts are loaded
function initVars() {
  if (!IS_GADGET) {
    var paramValue = getURLParam('dance');
    if (paramValue) inputDance = paramValue;

    paramValue = getURLParam('figure');
    if (paramValue) inputFigureName = paramValue;

    paramValue = getURLParam('mode');
    if (paramValue) inputMode = paramValue;
  }

  DANCE_MAP  = {
    'Waltz' : {
      'urlprefix' : 'waltz',
      'figures' : waltzFigures,
      'type' : 'standard'
    },
    'Quickstep' : {
      'urlprefix' : 'quickstep',
      'figures' : quickstepFigures,
      'type' : 'standard'
    },
    'Foxtrot' : {
      'urlprefix' : 'foxtrot',
      'figures' : foxtrotFigures,
      'type' : 'standard'
    },
    'Tango' : {
      'urlprefix' : 'tango',
      'figures' : tangoFigures,
      'type' : 'standard'
    },
    'ChaCha' : {
      'urlprefix' : 'cha-cha-cha',
      'figures' : chachaFigures,
      'type' : 'latin'
    },
    'Samba' : {
      'urlprefix' : 'samba',
      'figures' : sambaFigures,
      'type' : 'latin'
    },
    'Rumba' : {
      'urlprefix' : 'rumba',
      'figures' : rumbaFigures,
      'type' : 'latin'
    }
  };

  isLatinDance = DANCE_MAP[inputDance]['type'] == 'latin';
  URL_BASE = 'http://www.dancecentral.info/ballroom/international-style/' + DANCE_MAP[inputDance]['urlprefix'];    
  figures = DANCE_MAP[inputDance]['figures'];
  selectedFigureName = inputFigureName; 

  sortedIds = []; // display figures in alphabetically order
  for (var id in figures) {
    sortedIds.push(id);
  }
  sortedIds.sort();
}
     
//----------------------------------------     
// return true if figure matches level
function MatchLevel(figure) {
  if (!figure) return true; // undefined yet.
  var levelElement = document.getElementById(figure['level']);
  return levelElement && levelElement.checked;
}

// return true if figure matches level and additional criteria
function MatchFigure(figure, criteria) {
  if (!figure) return true; // undefined yet.

  if (!MatchLevel(figure)) return false;

  if (!criteria) return true;

  for (var key in criteria) {
    if (!contains(figure[key], criteria[key]))
      return false;
  }
  return true;
}

// returns matching figures, this is eval'ed, not directly called in the source
function MatchFigures(criteria) {
  var result = []; // array of figure IDs that matched criteria
  for (var id in figures) {
    var figure = figures[id];
    if (MatchFigure(figure, criteria))
      result.push(id);
  }
  return result;
}

// returns matching figures, this is eval'ed, not directly called in the source
function MatchFigureName(namePrefix) {
  var result = []; // array of figure IDs that matched criteria
  for (var id in figures) {
    var figure = figures[id];
    if (id.indexOf(namePrefix) == 0)
      result.push(id);
  }
  return result;
}

// initialize display
function initDisplay() {     
  var output = [];

  // initialize levels
  var element = document.getElementById('divLevels');
  output = [inputDance + ' levels: '];
  LEVELS.forEach(function (level) {
    output.push('<input type=checkbox id="' + level + '" onclick="updateFigureList();" checked>' + 
      '<span style="color:' + COLOR_MAP[level] + '">' + level + '</span> &nbsp;');
  });
  output.push('<br>');
  element.innerHTML = output.join('');

  if (isLatinDance) {
    document.getElementById('divSelectFigure').style.display = 'none';
  } 
  document.getElementById('divVersion').innerHTML = VERSION;

  document.getElementById('divRoutine').style.display = (inputMode == 'routine') ? 'block' : 'none';
      
  updateFigureList();

}

function resetFigureListIndex() {
  document.getElementById('figureName').selectedIndex = 0;
}
    
function resetStartingPoint() {
  document.getElementById('startAlignment').selectedIndex = 0;
  document.getElementById('startFoot').selectedIndex = 0;
  document.getElementById('startDirection').selectedIndex = 0;
}

// update the list of figues in the Figures drop down, update view as well
function updateFigureList() {
 var output = [];

  output.push('Figures: <select id="figureName" onchange="resetStartingPoint();updateView();">');
  output.push('<option>all</option>');
  sortedIds.forEach(function (id) {
    if (!document.getElementById(figures[id]['level']).checked) return;
    output.push('<option value="' + id + '" ');
    if (selectedFigureName != 'all' && (figures[id]['name'] == selectedFigureName || id == selectedFigureName))
      output.push('selected');
    output.push('>' + figures[id]['name'] + '</option>');
  });
  output.push('</select>');
  output.push(' <a href="javascript:void(0);" onclick="selectFigure(\'all\');">show all</a>');
  document.getElementById('divFiguresList').innerHTML = output.join('');

  updateView();
}

// returns the html for the figure name with its link
// inPage: go to local anchor, otherwise, go to figure details page
function getFigureLink(figureID, inPage) {
  var output = [];
  var figure = figures[figureID];
  if (figure) {
    if (!figure['name'])
      figure['name'] = figureID; // default
    if (figure['urlpath']) {
      output.push('<a style="color:' + COLOR_MAP[figure['level']] + '"');
      output.push(' onclick="return onClickFigure(\'' + figureID + '\');" ');
      if (inPage)
        output.push(' target="_self" href="javascript:selectFigure(\'' + figureID + '\')');
        //output.push(' target="_self" href="#section_' + figureID);
      else
        output.push(' href="' + URL_BASE + figure['urlpath']);
      //output.push('?tmpl=/system/app/templates/print/');
      output.push('">' + figure['name'] + '</a>');
    } else {
      output.push('<span style="color:' + COLOR_MAP[figure['level']] + '">');
      output.push(figure['name']);
      output.push('</span>');
    }
  } else {
    output.push(figureID);
  }
  return output.join('');
}
  
function getPrecedes(figureID) {
  var precedes = []; // array of Ids

  sortedIds.forEach(function (id) {
    var figure = figures[id];
    var follows = getFollows(figure); // need to use this to expand the eval(..) values
    if (!follows) return; // continue to next

    follows.forEach(function (follow) {
      if (follow[0] == figureID)
        precedes.push([id]);
    });
  });

  return precedes;
}

// returns an array of following figures: [followID, comment] 
function getFollows(figure) {
    // get all ids, some are evaluating
    var follows = [];

    if (!figure['follow']) return follows;

    figure['follow'].forEach(function (nextFigure) {
      var ids = [];
      var evalStr = nextFigure['eval'];
      if (evalStr) {
        ids = eval(evalStr);
      } else { // check id 
        if (nextFigure['id'])
          ids.push(nextFigure['id']);
      }
      // filter out dups
      ids.forEach(function (followID) {
        var followFigure = figures[followID];
        if (MatchLevel(followFigure))
          follows.push([followID, nextFigure['comment']]);
      });
    });
    return follows;
}

// diagraph turns out to be too complicated for it to be useful
// leave it here for future
/*
function outputDotSource() {
  var output = [];
  output.push('digraph ConnectingFigures {');
  output.push('labelloc=t;');
  output.push('node [color=black, fontcolor=black];');

  output.push('label="Title";');
  sortedIds.forEach(function (id) {
    var figure = figures[id];
    if (!MatchFigure(figure)) return; // pass UI filter
    output.push(id + '[label="' + figure['name'] + '"];');
    var follows = getFollows(figure);

    follows.forEach(function (follow) {
      output.push(id + ' -> ' + follow[0] + ';');
    });
   });
  output.push('}');
  document.getElementById('dotOutput').value = output.join('');
}
 
function outputCSV() {
  var output = [];
  sortedIds.forEach(function (id) {
    var figure = figures[id];
    output.push(id);
    output.push(figure['name']);
    output.push(figure['urlpath'] ? figure['urlpath'] : '');
    output.push(figure['level']);
    output.push(figure['startAlignment']);
    output.push(figure['startFoot']);
    output.push(figure['startDirection']);
    var follows = figure['follow'];
    if (figure['follow']) {
      follows.forEach(function (follow) {
        output.push(follow[0] + '/' + follow[1]);
      });
    }
  });
}
  output.push('}');
  document.getElementById('dotOutput').value = output.join('');
}
*/
function continueRoutine() {
  mode = 'routine';
  document.getElementById('idPauseRoutine').style.display = 'inline';
  document.getElementById('idContinueRoutine').style.display = 'none';
}

function pauseRoutine() {
  mode = 'browse';
  document.getElementById('idPauseRoutine').style.display = 'none';
  document.getElementById('idContinueRoutine').style.display = 'inline';
}

function startRoutine() {
  mode = 'routine';

  // keep selected level, reset other criteria
  resetFigureListIndex();
  resetStartingPoint();
  updateView();

  var element = document.getElementById('spanRoutine');
  element.innerHTML = '';

  // other controls
  document.getElementById('idStartRoutine').style.display = 'inline';
  document.getElementById('idPauseRoutine').style.display = 'inline';
  document.getElementById('idContinueRoutine').style.display = 'none';
}

// select the specified figure in figure drop down list and update view
function selectFigure(figureID) {
  var selectedFigureElement = document.getElementById('figureName');
  for (var i = 0; i< selectedFigureElement.options.length; i++) {
    if (selectedFigureElement.options[i].value == figureID) {
      selectedFigureElement.selectedIndex = i;
      break;
    }
  }
  updateView();
}

function formatFigureList(items) {
  var output = [];

  output.push('<ol>');
  items.forEach(function (item) {
    output.push('<li>' + getFigureLink(item[0], true));
    if (item[1])
      output.push(' (' + item[1] + ')');
  });
  output.push('</ol>');

  return output.join('');
}

// when building routine, this is called when user clicks on a figure name
function onClickFigure(figureID) {
  if (mode != 'routine') return true; // continue with the link

  // update the routine list
  var output = [];
  var figure = figures[figureID];
  output.push('<li><a href="' + URL_BASE + figure['urlpath'] + '">' + figure['name'] + '</a> &nbsp;&nbsp; </li>');
  var element = document.getElementById('spanRoutine');
  var content = element.innerHTML.replace(/^<ol>/, '').replace(/<\/ol>$/, '');
  element.innerHTML = '<ol>' + content + output.join('') + '</ol>';

  // update the view to only show the selected figure, so it's easier to see what should follow.
  selectFigure(figureID);

  return false; // not continue with <a link target
}
              
// Re-filter, re-display figure and its following figures
function updateView() {
  var selectedFigureElement = document.getElementById('figureName');
  selectedFigureName = selectedFigureElement.options[selectedFigureElement.selectedIndex].text;

  var output = [];

  sortedIds.forEach(function (id) {
    var figure = figures[id];
    if (!MatchFigure(figure)) return; // pass UI filter

    if (selectedFigureName != 'all' && figure['name'] != selectedFigureName)
      return;

    var filterElement = document.getElementById('startAlignment');
    var selectedAlignment = filterElement.options[filterElement.selectedIndex].text;
    filterElement = document.getElementById('startFoot');
    var selectedFoot = filterElement.options[filterElement.selectedIndex].text;
    filterElement = document.getElementById('startDirection');
    var selectedDirection = filterElement.options[filterElement.selectedIndex].text;
  
    if (selectedAlignment != 'all' && !contains(figure['startAlignment'], selectedAlignment))
      return;
  
    if (selectedFoot != 'all' && figure['startFoot'] != selectedFoot)
      return;
  
    if (selectedDirection != 'all' && figure['startDirection'] != selectedDirection)
      return;

    output.push('<a name="section_' + id + '"></a><span class="figure">');
    output.push(getFigureLink(id));
    output.push('</span>');

    var follows = getFollows(figure);
    var precedes = getPrecedes(id);

    if (inputMode != 'routine') {
      output.push('<table style="border-spacing:0;width:600"><tr>');

      output.push('<td align=center width=40%>Preceding figures</td>');
      output.push('<td align=center>Following figures</td>');

      output.push('</tr><tr>');
  
      output.push('<td>' + formatFigureList(precedes) + '</td>');
      output.push('<td>' + formatFigureList(follows) + '</td>');
  
      output.push('</tr></table>');
    } else {
      output.push(formatFigureList(follows));
    }
  });

  var element = document.getElementById('divFigureChart');
  element.innerHTML = output.join('');

  //outputDotSource(); // diagram too complicated to be useful
}

