<!--Only included for local test -->
function onLoad() {
  showFilters();
}

function _gel(id) {
  return document.getElementById(id);
}

function escapeHtml(text) {
  if (text == null) {
    return '';
  }
  //return _hesc(text);
  return text;
}


// initialization for local testing
gAllClasses.push({
  'title' : 'Monday 8:00pm Intl. Latin Level 2 - Jive',
  'category' : 'Series',
  'start_date': '3/5/2012',
  'day_of_week': 'MON',
  'start_time': '8:00 PM',
  'style': 'International Latin',
  'dance_name': 'Jive',
  'level':'Level 2',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : 'Kora',
  'bio' : 'http://foo'
  });
gAllClasses.push({
  'title' : 'Intl. Latin Level 1 - Rumba',
  'category' : 'DropIn',
  'start_date': '2/5/2012',
  'day_of_week': 'TUE',
  'start_time': '2:00 PM',
  'style': 'International Latin, International Standard',
  'dance_name': 'Rumba',
  'level':'Level 1',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : 'Simeon',
  'bio' : 'http://foo'
  });
