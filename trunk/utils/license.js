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

// Generate the copyright line
function showCopyright() {
  var element = document.getElementById('idCopyright');
  if (!element) return;
  
  // show copyright
  var html = [];
  html.push('<span style="float:right">');
  if (VERSION) {
    html.push('<span style="color:white;font-size:0.7em;">' + VERSION + '</span> ');
  }
  html.push('Powered By <a href="http://www.rainierdance.com" target="_blank"><img border=0 height=16 src="https://dancecentral.googlecode.com/svn/trunk/images/rainierdance_logo.jpg"/></a>');
  html.push(' <a href="http://www.rainierdance.com" target="_blank">Rainier Dance, LLC.</a>');
  html.push(' <a href="http://www.rainierdance.com/license" target="_blank">Terms</a>');
  html.push('</span>');

  element.innerHTML = html.join('');
}
