/***********************************************
  Copyright 2012 Rainier Dance, LLC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
**************************************************/
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
  document.cookie = name + "=" + escape(value) +
    ";expires=" + expireDate.toGMTString();
} 
   
function getCookie(cookieName) {
  if (document.cookie.length == 0)
    return '';
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

function track(path, id) {
  if (!pageTracker && typeof _gat != 'undefined') {
    if (!id) id = ID_ANALYTICS; // default global variable
    pageTracker = _gat._getTracker(id);
  }
  if (pageTracker) {
    pageTracker._trackPageview(path);
  } else {
    log(path);
  }
}
