// var danceVideos = [];   /// all videos, declars in main html file before including js files

// TODO: remove globals
var videos; // current search results
var currentIndex = -1;

function compareVideo(video1, video2) {
  return video1['title'] > video2['title']; // return true if 1 is 'large' than 2.
}

function initVideos() {
  // sort them by title
  danceVideos = danceVideos.sort(compareVideo);
}

// clear selected video (highlight, video player etc)
function clearSelection() {
  if (currentIndex < 0) // no selection
    return;

  document.getElementById('divPlayer').innerHTML = '';
  document.getElementById('title_' + currentIndex).className = 'title';
  document.getElementById('desc_' + currentIndex).className = 'description';
  document.getElementById('video_' + currentIndex).innerHTML = '';

  currentIndex = -1;
}

function showVideo(index) {  // index to "videos"
  if (currentIndex == index)
      return; // reduce flicker

  clearSelection();

  if (index < 0) return;
  var video = videos[index];

  var output = [];
  output.push('<iframe width="480" height="385" src="' + video['url'] + '"></iframe>');
  if (videos.length > 6) {
    document.getElementById('video_' + index).innerHTML = output.join('');
  } else {  // small set of videos, fixed position on the right. 
    // made it simple, could do absolute position with layering etc.
    document.getElementById('divPlayer').innerHTML = output.join('');
  }

  // hightlight title and description, so we know which one we are showing
  document.getElementById('title_' + index).className = 'titleSelected';
  document.getElementById('desc_' + index).className = 'descriptionSelected';

  currentIndex = index;
}

// case insensitive search, AND releations
function getSearchResult() {
  var query = document.getElementById('query').value.toLowerCase();
  if (!query) return danceVideos; // all videos
  var queryTokens = query.split(' ');

  var results = [];

  for (var i = 0; i< danceVideos.length; i++) {
    var video = danceVideos[i];
    // check if the video matches all the queryTokens
    var found = true;
    for (var j = 0; j < queryTokens.length; j++) {
      // if any video attributes field contains the token, it's considered a match
      // allow to add new fields in the future
      var match = false;
      for (key in video) {
        var items;
        var value = video[key];
        if (value instanceof Array) {
          items = value;  // e.g. 'labels' attribute is an array of labels
        } else {  // assuming string value
          items = value.split(' ');
        }
        // after it's split, it's exact match (case insensitive)
        for (var k = 0; k < items.length; k++) {
          //var strippedText = Regex.Replace(items[k], /^a-zA-Z0-9/g, "");
          var strippedText = items[k].replace(/[^a-zA-Z0-9]/g, '');
          //var strippedText = items[k];
          if (strippedText.toLowerCase() == queryTokens[j]) {
            match = true;
            break;
          }
        }
      }
      if (!match) {
        found = false;
        break;
      }
    }
    if (found) {
      results.push(video);
    }
  }

  return results;
}

function updateVideoResult() {
  clearSelection();

  videos = getSearchResult();

  var element = document.getElementById('divList');
  if (!videos || videos.length == 0) {
    element.innerHTML = 'No videos clips in current collection.';
    return;
  }

  // there are results
  var output = ['<b>' + videos.length + '</b> related videos: <ol>'];
  var index = 0;

  videos.forEach(function (video) {
    output.push('<li><a name="v' + index + '"><a href="#v' + index + '" class="title" id="title_' + index +
        '" onclick="showVideo(' + index + ')">' + 
        video['title'] + '</a></a><br>');
     output.push('<table><tr><td><span class="description" id="desc_' + index + '"  >' + 
        video['description'] + '</span></td><td>');
    output.push('<span id="video_' + index + '"></span>');
    output.push('</td></tr></table>');
    index++;
  });

  output.push('</ol>');
  element.innerHTML = output.join('');

  showVideo(0);
}
