//-------------------------------------------
function showCopyright() {
  var element = document.getElementById('idCopyright');
  if (!element) return;
  
  // show copyright
  var html = '<span style="float:right">Powered By <a href="http://www.rainierdance.com" target="_blank"><img border=0 height=16 src="https://dancecentral.googlecode.com/svn/trunk/images/rainierdance_logo.jpg"/></> <a href="http://www.rainierdance.com" target="_blank">Rainier Dance, LLC.</a>' +
    ' <a href="http://www.rainierdance.com/license" target="_blank">Terms</a></span>';
  element.innerHTML = html;
}
