<!--Only included for local test -->

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
  'title' : 'Monday 8:00pm Intl. Latin Level 2 - Jive ANY',
  'category' : 'Series',
  'start_date': '3/5/2012',
  'day_of_week': 'MON',
  'start_time': '8:00 PM',
  'style': 'International Latin, International Standard',
  'dance_name': 'Jive',
  'level':'',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : '',
  'bio' : 'http://foo'
  });
gAllClasses.push({
  'title' : 'Intl. Latin Level 1 - Rumba',
  'category' : 'DropIn',
  'start_date': '2/5/2012',
  'day_of_week': 'TUE',
  'start_time': '2:00 PM',
  'style': 'International Latin',
  'dance_name': 'Rumba',
  'level':'',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : 'Simeon',
  'bio' : 'http://foo'
  });
gAllClasses.push({
  'title' : 'Intl. Latin Level 1 - Rumba',
  'category' : 'DropIn',
  'start_date': '2/5/2012',
  'day_of_week': 'Wednesday',
  'start_time': '2:00 PM',
  'style': 'International Standard',
  'dance_name': 'Rumba',
  'level':'Level 1',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : 'Simeon',
  'bio' : 'http://foo'
  });
gAllClasses.push({
  'title' : 'Intl. A test Latin Level 1 - Rumba',
  'category' : 'DropIn',
  'start_date': '2/5/2012',
  'day_of_week': 'Thursday',
  'start_time': '2:00 PM',
  'style': 'International Standard',
  'dance_name': 'Rumba',
  'level':'Level 2',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : 'Simeon',
  'bio' : 'http://foo'
  });
gAllClasses.push({
  'title' : 'Intl. Latin Level 1 - Rumba',
  'category' : 'DropIn',
  'start_date': '2/5/2012',
  'day_of_week': 'Friday',
  'start_time': '2:00 PM',
  'style': 'International Standard',
  'dance_name': 'Rumba',
  'level':'Level 1',
  'description': 'ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive. ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.ISTD syllabus figures and technique for Jive at the "Associate" or "Bronze" level. Prerequisite is Level 1 Jive.',
  'teacher' : 'Simeon',
  'bio' : 'http://foo'
  });

document.onload = showFilters();
