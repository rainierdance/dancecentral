//-------------------------------------------
// one-time initialization after scripts are loaded
function initVars() {
  if (!IS_GADGET) {
    var paramValue = getURLParam('mode');
    if (paramValue) inputMode = paramValue;
  }
}
     
// initialize display
function initDisplay() {     

  if (inputMode == 'single') {
    // leave tips header to main html page
    // just display tips in this gadget
    document.getElementById('idTipsHeader').innerHTML = '';

    pickTip();
  } else { // full display
    displayAllTips();
  }
}

function pickTip() {
  var lenTips = danceTips.length;
  var indexSelectedTip = Math.floor(Math.random() * lenTips);

  var output = [];
  // boiler plate
  output.push('<table width=100% style="background: #fff4c2;border:1px solid gray;border-collapse:collapse;"><tr><td style="border-collapse:collapse;padding:5px;">');

  // actual tip
  output.push(danceTips[indexSelectedTip]['tip']);
  if (danceTips[indexSelectedTip]['urlpath']) {
    output.push('&nbsp; <a target="_blank" href="');
    output.push(danceTips[indexSelectedTip]['urlpath']);
    output.push('">more</a>');
  }

  output.push('&nbsp; <a style="float:right" href="javascript:void(0);" onclick="pickTip();">Next</a>');

  // boiler plate
  output.push('</td></tr></table>');

  document.getElementById('idTipsBody').innerHTML = output.join('');
}

function displayAllTips() {
  // simply display for now.
  var output = [];
  output.push('<ol>');
  danceTips.forEach(function (tip) {
    output.push('<li>' + tip['tip']);
    if (tip['labels'] && tip['labels'].length > 0) {
      output.push(' (');
      output.push(tip['labels'].join(', '));
      output.push(')');
    }
    if (tip['urlpath']) {
      output.push('&nbsp; <a target="_blank" href="');
      output.push(tip['urlpath']);
      output.push('">more</a>');
    }
  });
  output.push('</ol>');
  document.getElementById('idTipsBody').innerHTML = output.join('');
}
