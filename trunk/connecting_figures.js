var LEVELS = ['Newcomer', 'Bronze', 'Silver', 'Gold', 'Open'];
var COLOR_MAP = {
  'Newcomer' : 'Navy',
  'Bronze' : 'SaddleBrown',
  'Silver' : 'SlateGray',
  'Gold' : 'OrangeRed',
  'Open' : 'DarkGreen'
};

//-------------------------------------------
var viewMode = 'browse'; // vs. "routine" for building a routine
var isLatinDance = false; // do not show starting direction for Latin dances
var DANCE_MAP;
var URL_BASE;
var figures;  // all figues in the selected dance
var sortedIds = []; // display figures in alphabetically order

var showPrecedes = true;  // whether to show preceding figures
var showFollows = true;
var showComments = true;  // whether to show preceding figures

var selectedFigureName = inputFigureName; // current selected figure name

//-------------------------------------------
// one-time initialization after scripts are loaded
function initVars() {
  if (!IS_GADGET) {
    var paramValue = getURLParam('dance');
    if (paramValue) inputDance = paramValue;

    paramValue = getURLParam('figure');
    if (paramValue) inputFigureName = paramValue;

    /* input mode:
         '': is for per figure
         'routine': is for connection figures page - building routine
    */
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

  /*
  // it's going to look weird if user goes to a figure page and don't see anything
  // because previously they unchecked any of these. So we won't read from cookies now.

  showPrecedes = getCookie('showPrecedes') != "0";
  showFollows = getCookie('showFollows') != "0";
  */
  if (inputMode == 'routine') {
    showPrecedes = false;
    showComments = false;
  }
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

// returns same follow IDs as the figureId
function SameFollowAs(figureId) {
  return getFollows(figures[figureId]);
}

// returns matching figures, this is eval'ed, not directly called in the source
function MatchFigureName(name) {
  var result = []; // array of figure IDs that matched criteria
  for (var id in figures) {
    var figure = figures[id];
    if ((id.indexOf(name) != -1) || (figure['name'].indexOf(name) != -1))
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
    output.push('<input type=checkbox id="' + level +
      //'" onclick=\'updateFigureList();\' ' +
      '" onclick=\'setCookie("' + level + '", this.checked ? "1" : "0");updateFigureList();\' ' +
      (getCookie(level) == "0" ? 'unchecked' : 'checked')  + '>' + 
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
  output.push('&nbsp; <a href="javascript:void(0);" onclick="selectFigure(\'all\');">all</a> &nbsp;&nbsp;&nbsp; ');

  output.push('<input type=checkbox onclick=\'showPrecedes=this.checked;setCookie("showPrecedes", this.checked? "1": "0");updateView();\' ');
  output.push(showPrecedes ? 'checked' : 'unchecked');
  output.push('> Show Precedes &nbsp;');

  output.push('<input type=checkbox onclick=\'showFollows=this.checked;setCookie("showFollows", this.checked? "1": "0");updateView();\' ');
  output.push(showFollows ? 'checked' : 'unchecked');
  output.push('> Show Follows &nbsp;');

  output.push('<input type=checkbox onclick=\'showComments=this.checked;setCookie("showComments", this.checked? "1": "0");updateView();\' ');
  output.push(showComments ? 'checked' : 'unchecked');
  output.push('> Show Comments &nbsp;');

  document.getElementById('divFiguresList').innerHTML = output.join('');

  updateView();
}

// returns the html for the figure name with its link
// inPage: go to local anchor, otherwise, go to figure details page
function getFigureLink(figureID, inPage) {
  var output = [];
  var figure = figures[figureID];
  var styleClass = inPage ? 'FigureLevel2' : 'FigureLevel1';
  if (figure) {
    if (!figure['name'])
      figure['name'] = figureID; // default
    if (figure['urlpath']) {
      output.push('<a class="' + styleClass + '" style="color:' + COLOR_MAP[figure['level']] + '"');
      output.push(' onclick="return onClickFigure(\'' + figureID + '\');" ');
      if (inPage)
        output.push(' target="_self" href="javascript:selectFigure(\'' + figureID + '\')');
        //output.push(' target="_self" href="#section_' + figureID);
      else
        output.push(' href="' + URL_BASE + figure['urlpath']);
      //output.push('?tmpl=/system/app/templates/print/');
      output.push('">' + figure['name'] + '</a>');
    } else {
      output.push('<span class="' + styleClass + '" style="color:' + COLOR_MAP[figure['level']] + '">');
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

// update follows to add new follow, combine comments for dups
function addFollow(follows, followToAdd) {
  for (var i=0; i< follows.length; i++) {
    if (follows[i][0] == followToAdd[0]) {
      if (followToAdd[1]) // merge comments
        follows[i][1] = follows[i][1] + '; ' + followToAdd[1];
      return;
    }
  }
  // add at end
  follows.push(followToAdd);
}

// returns an array of following figures: [followID, comment] 
function getFollows(figure) {
    // get all ids, some are evaluating
    var follows = [];

    if (!figure['follow']) return follows;

    figure['follow'].forEach(function (nextFigure) {
      var results = [];
      var evalStr = nextFigure['eval'];
      if (evalStr) {
        results = eval(evalStr);
        if (evalStr.indexOf('SameFollowAs') == 0) {
          // eval returns follows array
          // ingore comment, take the results as is.
          results.forEach(function (follow) {
            addFollow(follows, follow);
          });
          return;
        } // eval returns IDs, fall through to get comment
      } else { // check id 
        if (nextFigure['id'])
          results.push(nextFigure['id']);
      }
      // filter out dups
      results.forEach(function (followID) {
        var followFigure = figures[followID];
        if (MatchLevel(followFigure))
          addFollow(follows, [followID, nextFigure['comment']]);
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
  viewMode = 'build';
  document.getElementById('idPauseRoutine').style.display = 'inline';
  document.getElementById('idContinueRoutine').style.display = 'none';
}

function pauseRoutine() {
  viewMode = 'browse';
  document.getElementById('idPauseRoutine').style.display = 'none';
  document.getElementById('idContinueRoutine').style.display = 'inline';
}

function startRoutine() {
  viewMode = 'build';

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
    if (item[1] && showComments)
      output.push(' (' + item[1] + ')');
  });
  output.push('</ol>');

  return output.join('');
}

// when building routine, this is called when user clicks on a figure name
function onClickFigure(figureID) {
  if (viewMode != 'build') return true; // continue with the link

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

  var counter = 0;
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

    counter++;
    output.push('<span class="FigureLevel1">' + counter + '.</span> <a name="section_' + id + '"></a><span class="figure">');
    output.push(getFigureLink(id));
    output.push('</span>');

    var follows = getFollows(figure);
    var precedes = getPrecedes(id);

    output.push('<table style="border-spacing:0;"><tr>');

    if (showPrecedes && precedes.length > 0)
      output.push('<td >Preceding figures</td>');
    if (showFollows && follows.length > 0)
      output.push('<td >Following figures</td>');

    output.push('</tr><tr>');

    if (showPrecedes && precedes.length > 0)
      output.push('<td>' + formatFigureList(precedes) + '</td>');
    if (showFollows && follows.length > 0)
      output.push('<td>' + formatFigureList(follows) + '</td>');

    output.push('</tr></table>');
  });

  var element = document.getElementById('divFigureChart');
  element.innerHTML = output.join('');

  //outputDotSource(); // diagram too complicated to be useful
}

