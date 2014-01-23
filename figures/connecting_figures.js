var LEVELS = ['Newcomer', 'Bronze', 'Silver', 'Gold', 'Open'];
var COLOR_MAP = {
  'Newcomer' : 'Navy',
  'Bronze' : 'SaddleBrown',
  'Silver' : 'SlateGray',
  'Gold' : 'OrangeRed',
  'Open' : 'DarkGreen'
};
var INFO_FIELDS = ['timing', 'startAlignment', 'startFoot', 'startDirection', 'comment'];

//-------------------------------------------
var viewMode = 'browse'; // vs. "routine" for building a routine
var isLatinDance = false; // do not show starting direction for Latin dances
var DANCE_MAP;
var URL_BASE;
var figures;  // all figues in the selected dance
var sortedIds = []; // display figures in alphabetically order

var showPrecedes = true;  // whether to show preceding figures
var showFollows = true;
var showComments = true;  // whether to show comments
var showDiagram = true;  // whether to show diagram
var showVideos = true; 

var generateRelativeUrl = false;  // for figure links

var selectedFigureName = inputFigureName; // current selected figure name
var routine = []; // array of RoutineStep objects

var currentAnimatedDiagram = null;

var IS_DEBUG = '0';

//-------------------------------------------
// one-time initialization after scripts are loaded
function initVars() {
  if (!IS_GADGET) {
    var paramValue = getURLParam('dance');
    if (paramValue) inputDance = paramValue;

    paramValue = getURLParam('debug');
    if (paramValue) IS_DEBUG = paramValue;
    if (IS_DEBUG == '1') showPrecedes = true;

    paramValue = getURLParam('figure');
    if (paramValue) inputFigureName = paramValue;

    /* input mode:
         '': is for per figure
         'routine': is for connection figures page - building routine
    */
    paramValue = getURLParam('mode');
    if (paramValue) inputMode = paramValue;

    paramValue = getURLParam('video');
    if (paramValue) inputVideoMode = paramValue;

    // show debug output
    document.getElementById('debugOutput').style.display = 'block';
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
      'urlprefix' : 'slow-foxtrot',
      'figures' : foxtrotFigures,
      'type' : 'standard'
    },
    'Tango' : {
      'urlprefix' : 'tango',
      'figures' : tangoFigures,
      'type' : 'standard'
    },
    'VWaltz' : {
      'urlprefix' : 'viennese-waltz',
      'figures' : vwaltzFigures,
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
    'Jive' : {
      'urlprefix' : 'jive',
      'figures' : jiveFigures,
      'type' : 'latin'
    },
    'Rumba' : {
      'urlprefix' : 'rumba',
      'figures' : rumbaFigures,
      'type' : 'latin'
    }
  };

  isLatinDance = DANCE_MAP[inputDance]['type'] == 'latin';
  URL_BASE = 'http://www.dancecentral.info/ballroom/international-style/' + DANCE_MAP[inputDance]['urlprefix'] + '/';    
  figures = DANCE_MAP[inputDance]['figures'];
  selectedFigureName = inputFigureName; 

  // if there is a figure name, we need to reset the Level to at least include the figure's level
  // otherwise, it will apear to list all figures, nothing matches. not expectedon per figure page.
  var figure = figures[selectedFigureName];
  if (figure) { // 'all' won't match and figure will be null
    // reset level
    for (var i = 0; i< LEVELS.length; i++) { // increasing higher level
      setCookie(LEVELS[i], '1');
      if (LEVELS[i] == figure['level']) {
        break; // leave higher levels alone
      } 
    }
  }

  sortedIds = []; // display figures in alphabetically order
  for (var id in figures) {
    sortedIds.push(id);
    if (!figures[id]['name'])
      figures[id]['name'] = '';
  }
  sortedIds.sort();

  /*
  // it's going to look weird if user goes to a figure page and don't see anything
  // because previously they unchecked any of these. So we won't read from cookies now.

  showPrecedes = getCookie('showPrecedes') != "0";
  showFollows = getCookie('showFollows') != "0";
  showDiagram = getCookie('showDiagram') != "0";
  */
  if (inputMode == 'routine' && IS_DEBUG == '0') {
    showPrecedes = false;
    showComments = false;
    showDiagram = false;
  }

  if (inputVideoMode) {
    showVideos = (inputVideoMode == 'true');
  } else if (inputMode == 'routine') {
    showVideos = false;
  } else {
    showVideos = true;
  }
  initVideos();
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

  var displayStyle = (inputMode == 'routine') ? 'block' : 'none';
  document.getElementById('divRoutine').style.display = displayStyle;
  document.getElementById('divFiguresList').style.display = displayStyle;
  document.getElementById('divSelectFigure').style.display = displayStyle;

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

function selectFigureFromDropdown(flagTrack) {
  resetStartingPoint();
  updateView();
  
  var selectedFigureElement = document.getElementById('figureName');
  var figureID = selectedFigureElement.options[selectedFigureElement.selectedIndex].value;
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/selectFigureFromDropdown?figureId=' + figureID);
}

// update the list of figues in the Figures drop down, update view as well
function updateFigureList() {
 var output = [];

  output.push('Figures: <select id="figureName" onchange="selectFigureFromDropdown(true);">');
  output.push('<option>all</option>');
  sortedIds.forEach(function (id) {
    if (!document.getElementById(figures[id]['level']).checked) return;
    output.push('<option value="' + id + '" ');
    if (selectedFigureName != 'all' && (figures[id]['name'] == selectedFigureName || id == selectedFigureName))
      output.push('selected');
    output.push('>' + figures[id]['name'] + '</option>');
  });
  output.push('</select>');
  output.push('&nbsp; <a href="javascript:void(0);" onclick="selectFigure(\'all\', true);">all</a> &nbsp;&nbsp;&nbsp; ');

  document.getElementById('divFiguresList').innerHTML = output.join('');

  output = [];
  output.push('Show: ');

  output.push('<input type=checkbox onclick=\'showDiagram=this.checked;setCookie("showDiagram", this.checked? "1": "0");updateView();\' ');
  output.push(showDiagram ? 'checked' : 'unchecked');
  output.push('>Diagram &nbsp;');

  output.push('<input type=checkbox onclick=\'showVideos=this.checked;setCookie("showVideos", this.checked? "1": "0");updateView();\' ');
  output.push(showVideos ? 'checked' : 'unchecked');
  output.push('>Videos &nbsp;');

  output.push('<input type=checkbox onclick=\'showPrecedes=this.checked;setCookie("showPrecedes", this.checked? "1": "0");updateView();\' ');
  output.push(showPrecedes ? 'checked' : 'unchecked');
  output.push('>Precedes &nbsp;');

  output.push('<input type=checkbox onclick=\'showFollows=this.checked;setCookie("showFollows", this.checked? "1": "0");updateView();\' ');
  output.push(showFollows ? 'checked' : 'unchecked');
  output.push('>Follows &nbsp;');

  output.push('<input type=checkbox onclick=\'showComments=this.checked;setCookie("showComments", this.checked? "1": "0");updateView();\' ');
  output.push(showComments ? 'checked' : 'unchecked');
  output.push('>Comments &nbsp;');

  document.getElementById('divShowOptions').innerHTML = output.join('');

  updateView();
}

// returns the html for the figure name with its link
// inPage: go to local anchor, otherwise, go to figure details page
function getFigureLink(figureID, inPage) {
  var output = [];
  var figure = figures[figureID];
  var styleClass = inPage ? 'FigureLevel2' : 'FigureLevel1';
  if (figure) {
    var name = figure['name'];
    if (!figure['name'])
      name = '<span class="error">' + figureID + '</span>'; // highlighted error to catch eyes - error case
    if (figure['urlpath']) {
      output.push('<a class="' + styleClass + '" style="color:' + COLOR_MAP[figure['level']] + '"');
      output.push(' onclick="return onClickFigure(\'' + figureID + '\');" ');
      if (inPage)
        output.push(' target="_self" href="javascript:selectFigure(\'' + figureID + '\', true)');
        //output.push(' target="_self" href="#section_' + figureID);
      else {
        output.push(' href="' + (generateRelativeUrl ? '' : URL_BASE) + figure['urlpath'] + '?src=connect&figure=' + figureID);
      }
      //output.push('?tmpl=/system/app/templates/print/');
      output.push('">' + name + '</a> ');
      if (IS_DEBUG == '1') {
        output.push(' ( ' + figureID + ' ) ');
      }
      if (!inPage && showComments) {  // show the rest of the configuration
        INFO_FIELDS.forEach(function (fieldID) {
          if (figure[fieldID]) {
            output.push('<span class="FigureInfo"> &nbsp;' + figure[fieldID] + '</span>');
          }
        });
      }
    } else {
      output.push('<span class="' + styleClass + '" style="color:' + COLOR_MAP[figure['level']] + '">');
      output.push(name);
      output.push('</span>');
    }
  } else {
    output.push('<span class="error">' + figureID + '</span>');
  }
  return output.join('');
}
  
function getPrecedes(figureID) {
  var precedes = []; // array of Ids

  sortedIds.forEach(function (id) {
    var figure = figures[id];
    if (!MatchLevel(figure)) return;

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
      if (followToAdd[1] || follows[i][1]) { // merge comments
        // one of the comments are not empty
        if (!followToAdd[1]) followToAdd[1] = 'normal';
        if (!follows[i][1]) follows[i][1] = 'normal';
        follows[i][1] = follows[i][1] + '; or ' + followToAdd[1];
      }
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
          addFollow(follows, [followID, nextFigure['comment'] ? nextFigure['comment'] : '']);
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

function RoutineStep(figureID, note, optStepName) {
  this.figureID = figureID;
  this.note = note ? note : '';
  this.stepName = optStepName;
}

function continueRoutine() {
  viewMode = 'build';
  document.getElementById('idPauseRoutine').style.display = 'inline';
  document.getElementById('idContinueRoutine').style.display = 'none';
  document.getElementById('editControls').style.display = 'inline';
  track('/gadgets/figures/' + inputDance + '/continueRoutine');
}

function pauseRoutine() {
  viewMode = 'browse';
  document.getElementById('idPauseRoutine').style.display = 'none';
  document.getElementById('idContinueRoutine').style.display = 'inline';
  document.getElementById('editControls').style.display = 'none';
  track('/gadgets/figures/' + inputDance + '/pauseRoutine');
}

function startRoutine() {
  viewMode = 'build';
  routine = [];

  // keep selected level, reset other criteria
  resetFigureListIndex();
  resetStartingPoint();
  updateView();

  var element = document.getElementById('spanRoutine');
  element.innerHTML = '';

  // other controls
  document.getElementById('idStartRoutine').style.display = 'inline';
  document.getElementById('idPauseRoutine').style.display = 'inline';
  document.getElementById('deleteControls').style.display = 'none';
  document.getElementById('editControls').style.display = 'inline';
  document.getElementById('idContinueRoutine').style.display = 'none';
  track('/gadgets/figures/' + inputDance + '/startRoutine');
}

// select the specified figure in figure drop down list and update view
function selectFigure(figureID, flagTrack) {
  var selectedFigureElement = document.getElementById('figureName');
  for (var i = 0; i< selectedFigureElement.options.length; i++) {
    if (selectedFigureElement.options[i].value == figureID) {
      selectedFigureElement.selectedIndex = i;
      break;
    }
  }
  updateView();
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/selectFigure?figureId=' + figureID);
}

function formatFigureList(items) {
  var output = [];

  output.push('<ol>');
  items.forEach(function (item) {
    output.push('<li>');
    if (routineContainsFigure(item[0])) {
      output.push('&#10003;');
    }
    output.push(getFigureLink(item[0], true));
    if (item[1] && showComments)
      output.push(' (' + item[1] + ')');
  });
  output.push('</ol>');

  return output.join('');
}

function clearRoutineInput() {
  // clear the input
  document.getElementById('figureIdToAdd').value = '';
  document.getElementById('figureNameControl').innerHTML = '';
  document.getElementById('editNote').value = '';
  document.getElementById('divEditStepName').style.display = 'none';
}

// routine  - array of RoutineStep
function routineContainsFigure(figureID) {
  for (var i = 0; i < routine.length; i++) {
    if (routine[i].figureID == figureID) {
      return true;
    }
  }
  return false;
}

function addFigureToRoutine() {
  var figureID = document.getElementById('figureIdToAdd').value;
  var note = document.getElementById('editNote').value;
  var stepName = document.getElementById('stepName').value;

  // update the routine list
  routine.push(new RoutineStep(figureID, note, stepName));

  // update the view to only show the selected figure, so it's easier to see what should follow.
  selectFigure(figureID);

  updateRoutineDisplay();
  clearRoutineInput();

  track('/gadgets/figures/' + inputDance + '/addFigureToRoutine?figureId=' + figureID);
}

function showEditStepName() {
  document.getElementById('divEditStepName').style.display = 'block';
  document.getElementById('stepName').select();
}

function updateStepLinkName() {
  var stepLink = document.getElementById('stepLink');
  var stepName = document.getElementById('stepName').value;
  if (stepLink) {
    stepLink.innerHTML = stepName;
  }
}

// when building routine, this is called when user clicks on a figure name
function onClickFigure(figureID) {
  if (viewMode != 'build') return true; // continue with the link

  var figure = figures[figureID];

  var output = [];
  output.push('Next step: ');
  output.push('<a id="stepLink" href="' + 
      (generateRelativeUrl ? '' : URL_BASE) + figure['urlpath'] + '?src=routine">' + figure['name'] + '</a> &nbsp;');
  output.push('<span style="float:right">');
  output.push('<a href="javascript:void();" title="Edit step name"  onclick="showEditStepName()" style="text-decoration:none">e</a>&nbsp;');
  output.push('<a href="javascript:void();" title="Clear"  onclick="clearRoutineInput()" style="text-decoration:none">x</a>');
  output.push('</span>');
  document.getElementById('figureNameControl').innerHTML = output.join('');
  document.getElementById('figureIdToAdd').value = figureID;
  document.getElementById('stepName').value = figure['name'];
  var element = document.getElementById('editNote');
  element.value = figure['timing'] ? '(' + figure['timing'] + ')': '';
  element.select();

  return false;
}

function deleteLastFigure() {
  if (routine.length > 0) {
    routine.pop();
    track('/gadgets/figures/' + inputDance + '/deleteFigureFromRoutine');
  }
  updateRoutineDisplay();
  clearRoutineInput();

  if (routine.length > 0 && routine[routine.length -1].figureID) {
    selectFigure(routine[routine.length -1].figureID);
  } else {
    selectFigure('all');
  }
}

function updateRoutineDisplay() {
  var output = [];
  routine.forEach(function (routineStep) {
    output.push('<li>');
    if (routineStep.figureID) {
      var figure = figures[routineStep.figureID];
      output.push('<a href="' + 
        (generateRelativeUrl ? '' : URL_BASE) + figure['urlpath'] + '?src=routine">');
      output.push((routineStep.stepName ? routineStep.stepName : figure['name']) + '</a> &nbsp;');
    }
    output.push(routineStep.note);
    output.push('</li>');
  });

  var element = document.getElementById('spanRoutine');
  element.innerHTML = 'Start:<ol>' + output.join('') + '</ol>End';

  if (routine.length > 0) {
    document.getElementById('deleteControls').style.display = 'block';
  } else {
    document.getElementById('deleteControls').style.display = 'none';
  }
}
              
// Re-filter, re-display figure and its following figures
function updateView() {
  var selectedFigureElement = document.getElementById('figureName');
  selectedFigureName = selectedFigureElement.options[selectedFigureElement.selectedIndex].value;

  var output = [];

  var counter = 0;
  sortedIds.forEach(function (id) {
    var figure = figures[id];
    if (!MatchFigure(figure)) return; // pass UI filter

    if (selectedFigureName != 'all' && (figure['name'] != selectedFigureName) && (id != selectedFigureName))
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
    output.push('<span class="FigureLevel1">' + counter + '.</span> ');
    if (routineContainsFigure(id)) {
      output.push('&#10003;');
    }
    output.push(' <a name="section_' + id + '"></a><span class="figure">');
    output.push(getFigureLink(id));
    output.push('</span>');

    // check and see if we should show diagram
    if (showDiagram && figure['diagram']) {
      output.push('<br>Diagram: &nbsp;');
      // each figure could have multiple variations
      var numVariations = getDiagramNumOfVariations(id);
      var selectedVariation = getSelectedVariation(id);
      if (numVariations > 1) {
        for (var n = 1; n <= numVariations; n++) {
          output.push(' <a id="variation_' + id + '_' + (n-1));
          output.push('" class="');
          output.push(((n-1) == selectedVariation) ? "variationSelected" : "");
          output.push('" href="javascript:void(0);" onclick="selectVariation(\'' + id + '\', ' + (n-1) + ');">Variation ' + n + '</a> &nbsp;');
        }
      }
      output.push('<br>');

      output.push(' <a href="javascript:void(0);" onclick="diagramAutoShow(\'' + id + '\', true);">Animate</a> &nbsp;');
      output.push(' <a href="javascript:void(0);" onclick="diagramStopShow(\'' + id + '\', true);">Stop animation</a> &nbsp; | &nbsp;');
      output.push(' <a href="javascript:void(0);" onclick="diagramReset(\'' + id + '\', true);">Start position</a> &nbsp; &nbsp;');
      output.push(' <a href="javascript:void(0);" onclick="diagramShowPrevious(\'' + id + '\', true);">Previous</a> &nbsp;  &nbsp;');
      output.push(' <a href="javascript:void(0);" onclick="diagramShowNext(\'' + id + '\', true);">Next</a> &nbsp;  &nbsp;');
      output.push(' <a href="javascript:void(0);" onclick="diagramLast(\'' + id + '\', true);">Full diagram</a> &nbsp;');
      output.push('  <p>');
      var stepURLs = getDiagramObj(id).stepURLs;
      output.push('  <img id="imgDiagram_' + id + '" src="' + 
        stepURLs[stepURLs.length - 1] + '" />');
    }

    var follows = getFollows(figure);
    var precedes = getPrecedes(id);

    output.push('<table class="TablePrecedesFollows" style="border-spacing:0;"><tr>');

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

  // single figure mode
  if (showVideos && (selectedFigureName != 'all')) {
    document.getElementById('idVideoSection').style.display = 'block';
    var danceName = inputDance;
    if (inputDance == 'Waltz')
      danceName = 'SlowWaltz'; // so we don't get Viennese Waltz results
    document.getElementById('query').value = selectedFigureName + ' ' + danceName;
    updateVideoResult();
  } else {
    document.getElementById('idVideoSection').style.display = 'none';
  }

  //outputDotSource(); // diagram too complicated to be useful
}

function selectVariation(figureId, variationId) {

  getDiagramObj(figureId);
  var figure = figures[figureId];

  // reset previous one
  document.getElementById('variation_' + figureId + '_' + figure.selectedVariation).className = '';

  figure.selectedVariation = variationId;
  document.getElementById('variation_' + figureId + '_' + figure.selectedVariation).className = 'variationSelected';

  var diagramList = figure['diagram'];
  figure.diagramObj = new Diagram(diagramList[variationId], 'imgDiagram_' + figureId, 1500);

  diagramAutoShow(figureId, true);

  track('/gadgets/figures/' + inputDance + '/selectVariation?figureId=' + figureId + '&variationId=' + variationId);
  return false;
}

function getSelectedVariation(id) {
  var figure = figures[id];
  getDiagramObj(id);
  return figure.selectedVariation;
}

function getDiagramNumOfVariations(id) {
  var figure = figures[id];
  var diagramList = figure['diagram'];
  if (!diagramList || diagramList.length == 0) return 0;
  if (diagramList[0] instanceof Array) {
      return diagramList.length;
  }
  else {
    return 1;
  }
}

function getDiagramObj(id) {
  var figure = figures[id];
  var diagramObj = figure.diagramObj;
  if (!diagramObj) { // delayed creationg
    figure.selectedVariation = 0; // default to first variation
    var diagramList = figure['diagram'];
    var diagramSteps;
    if (diagramList && diagramList.length > 0 && (diagramList[0] instanceof Array)) {
      diagramSteps = diagramList[0]; // multiple variations, default to show first one (standard variation)
    } else {
      diagramSteps = diagramList; // single variation
    }
    diagramObj = figure.diagramObj = new Diagram(diagramSteps, 'imgDiagram_' + id, 1500);
  }
  return diagramObj;
}

function diagramAutoShow(id, flagTrack) {
  diagramStopShow();
  var diagram = getDiagramObj(id);
  currentAnimatedDiagram = diagram;
  diagram.autoShow();
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/' + id + '/animate');
}

function diagramStopShow(id, flagTrack) {
  // at most one diagram is animating
  if (currentAnimatedDiagram) {
    currentAnimatedDiagram.stopShow();
    if (flagTrack) track('/gadgets/figures/' + inputDance + '/' + id + '/stop');
    currentAnimatedDiagram = null;
  }
}

function diagramReset(id, flagTrack) {
  var diagram = getDiagramObj(id);
  diagram.reset();
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/' + id + '/reset');
}

function diagramShowPrevious(id, flagTrack) {
  var diagram = getDiagramObj(id);
  diagram.showPrevious();
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/' + id + '/prev');
}

function diagramShowNext(id, flagTrack) {
  var diagram = getDiagramObj(id);
  diagram.showNext();
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/' + id + '/next');
}

function diagramLast(id, flagTrack) {
  var diagram = getDiagramObj(id);
  diagram.last();
  if (flagTrack) track('/gadgets/figures/' + inputDance + '/' + id + '/last');
}

/* ----------------- Diagram Class ---------------------*/
// TODO: error handling

// steps: array of diagram URLs from starting step to last step
// imgID: the image element ID 
// interval: in ms, animation timer interval
function Diagram(stepURLs, imgID, interval) {
  this.stepURLs = stepURLs;
  this.total = stepURLs.length;
  this.next = 0;  // index of next image to show
  this.imgID = imgID;
  if (interval) this.interval = interval;
  else this.interval = 3000; // Animation speed

  // TODO: Diagram.prototype.showNext is not working

this.showNext = function() {
  document.getElementById(this.imgID).src = this.stepURLs[this.next];
  this.next = (this.next + 1) % this.total;
  if (this.next == 0) {
    this.stopShow(); // only animate one round
  }
}
     
this.showPrevious = function() {
  this.stopShow(); // if user clicks previous, we stop animation

  var prev = (this.next + this.total - 2 ) % this.total;

  document.getElementById(this.imgID).src = this.stepURLs[prev];
  this.next = (prev + 1) % this.total;
}
     
this.autoShow = function() {
  this.reset();
  // TODO: remove global
  this.timerID = setInterval("currentAnimatedDiagram.showNext()", this.interval);
}
     
this.stopShow = function() {
  if (this.timerID) {
    clearInterval(this.timerID);
    this.timerID = null;
  }
}

this.reset = function() {
  this.stopShow();
  this.next = 0;
  this.showNext();
}

this.last = function() {
  this.stopShow();
  this.next = this.total - 1;
  this.showNext();
}
};

