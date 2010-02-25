var labelFilters = {}; // in filter and with value "0" means not selected.
var allLabels = [];

//-------------------------------------------
// one-time initialization after scripts are loaded
function initVars() {
  if (!IS_GADGET) {
    var paramValue = getURLParam('mode');
    if (paramValue) inputMode = paramValue;
  }

  // get sorted labels, initialize filters
  danceTips.forEach(function (tip) {
    if (tip['labels'] && tip['labels'].length > 0) {
      tip['labels'].forEach(function (label) {
        if (!contains(allLabels, label)) {
          allLabels.push(label);
          labelFilters[label] = "1";
        }
      });
    }
  });
  allLabels.sort();

}
     
// initialize display
function initDisplay() {     

  if (inputMode == 'single') {
    // leave tips header to main html page
    // just display tips in this gadget
    document.getElementById('idTipsHeader').innerHTML = '';

    pickTip();
  } else { // full display
    displayLabels();
    displayTipsHeader();
    showTips();
  }
}

function displayOneTip(output, tip) {
  if (tip['labels'] && tip['labels'].length > 0) {
    output.push('<span class="tipLabel">[');
    output.push(tip['labels'].join(', '));
    output.push(']</span> ');
  }

  output.push(tip['tip']);
  if (tip['urlpath']) {
    output.push('&nbsp; <a target="_blank" href="');
    output.push(tip['urlpath']);
    output.push('">more</a>');
  }
}

function pickTip() {
  var lenTips = danceTips.length;
  var indexSelectedTip = Math.floor(Math.random() * lenTips);

  var output = [];

  // boiler plate
  output.push('<table width=100% style="background: #fff4c2;border:1px solid gray;border-collapse:collapse;"><tr><td style="border-collapse:collapse;padding:5px;">');

  // actual tip
  var tip = danceTips[indexSelectedTip];
  displayOneTip(output, tip);
  output.push('&nbsp; <span style="float:right"><a href="javascript:void(0);" onclick="pickTip();">Another one</a>');
  output.push('&nbsp; <a target="_top" href="http://www.dancecentral.info/ballroom/international-style/dance-tips">All</a>');

  // boiler plate
  output.push('</td></tr></table>');

  document.getElementById('idTipsBody').innerHTML = output.join('');
}

function selectAll(enable) {
  allLabels.forEach(function (label) {
    labelFilters[label] = enable ? "1" : "0"; 
  });

  displayLabels();
  showTips();
}

function toggleLabel(labelElement) {
  var label = labelElement.innerHTML;

  labelFilters[label] = (labelFilters[label] == "0")  ? "1" : "0";

  labelElement.className = isLabelSelected(label) ? 'selectedLabel' : 'nonSelectedLabel';
  showTips();
}

function isLabelSelected(label) {
  return labelFilters[label] == "1";
}

function isTipSelected(tip) {
  if (!tip['labels']) return true;  // no labels, considered match

  var opAny = document.getElementById('opAny').checked;

  var result = !opAny;
  for (var label in labelFilters) {
    if (labelFilters[label] == "1") {  // the label is selected
      if (contains(tip['labels'], label)) { // tip contains label
        if (opAny) {
          result = true;
          break;
        }        
      } else { // tip does not contain the label
        if (!opAny) {
          result = false;
          break;
        }        
      }
    }
  }

  return result;
}

function displayLabels() {
  var output = [];

  output.push('&nbsp;<b>Labels:</b> <a href="javascript:void(0);" onclick="selectAll(true);">select all</a>');
  output.push('&nbsp; <a href="javascript:void(0);" onclick="selectAll(false);">deselect all</a><br>');

  allLabels.forEach(function (label) {
    output.push('<span class="'  +
      (isLabelSelected(label) ? 'selectedLabel' : 'nonSelectedLabel') + 
      '" onmouseover="this.style.cursor=\'pointer\';" onclick="toggleLabel(this);">' + label + '</span>');
  });
  document.getElementById('idOptions').innerHTML = output.join('&nbsp; ');
}

function displayTipsHeader() {
  var output = [];
  output.push('<p><b>Tips:</b> (matching');
  output.push('<input type="radio" id="opAny" name="op" value="any" checked onclick="showTips();"><b>any</b> &nbsp;');
  output.push('<input type="radio" id="opAll" name="op" value="all" onclick="showTips();"><b>all</b>');
  output.push(' of the selected labels)<br>');
  document.getElementById('idTipsHeader').innerHTML = output.join('&nbsp; ');
}

function showTips() {
  var output = [];

  output.push('<ol>');
  danceTips.forEach(function (tip) {
    if (!isTipSelected(tip)) return;
    output.push('<li>');
    displayOneTip(output, tip);
  });
  output.push('</ol>');
  document.getElementById('idTipsBody').innerHTML = output.join('');
}
