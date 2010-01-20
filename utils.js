//-------------------------------------------
// Utitilies 
function log(msg) {
  var debugElement = document.getElementById('debugOutput');
  if (debugElement) {
    var now = new Date();
    debugElement.innerHTML = '[' + now.getHours() + ':' +
      now.getMinutes() + ':' + now.getSeconds() + '] ' + 
      msg + '\n' + debugElement.innerHTML;
  }
}

function setCookie(name, value) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 1000);
  document.cookie = cookiePrefix + "_" + name + "=" + escape(value) +
    ";expires=" + expireDate.toGMTString();
} 
   
function getCookie(name) {
  if (document.cookie.length == 0)
    return '';
  var cookieName = cookiePrefix +  "_" + name;
  var start = document.cookie.indexOf(cookieName + "=");
  if (start == -1)
    return '';
  start = start + cookieName.length + 1;

  var end = document.cookie.indexOf(";", start);
  if (end == -1)
    end = document.cookie.length;
  return unescape(document.cookie.substring(start, end));
}

function contains(list, value) {
  if (list instanceof Array) {
    return list.indexOf(value) != -1;
  } else {
    return list == value;
  }
}

function removeValue(list, value) {
  var i = list.indexOf(value);
  while (i != -1) { // remove all occurences
    list.splice(i, 1);
    i = list.indexOf(value);
  }
}

function getURLParam(paramName) {
  var values = [];
  if (!window.location.search || window.location.search.length <= 1) 
    return '';

  var queryStr = window.location.search.slice(1);
  if (!queryStr) return '';

  var tokens = queryStr.split("&");
  for (var i = 0; i < tokens.length; i++) {
    var items = tokens[i].split("=");
    if (items.length != 2) continue;
    if (items[0] == paramName) {
      values.push(unescape(items[1]));
    }
  }
  if (values.length == 0) 
    return '';
  else if (values.length == 1) 
    return values[0];
  else
    return values;
}

