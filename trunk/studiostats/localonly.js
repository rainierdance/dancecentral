<!--Only included for local test -->
function onLoad() {
  initData();
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

//Timestamp,Name,Activity Type,Date,Start Time,Classes,Length,Private Lesson Teacher,Rate Type,Note,Total Amount,Payment Method,Number of Group Series Sessions,Number of Punch Card Classes,Number of Private Lessons,Number of Monthly Practice (Students),Children's Program,Youth Program,Monthly Practice (Non-Students),Number of lessons for Floor Fee,Amount for Group Series,Amount for Punch Card,Amount for Private Lessons,Amount for Monthly Practice (Students),Amount for Children's Program,Amount for Youth Program,Amount for Monthly Practice (Non-Students),Amount for Floor Fee,Payment Discount,Number of Party Passes,Amount for Party Passes

gAllEntities.push('2/22/2012 0:04:01,Jackie Wu,Group,2/22/2012,0:3am,Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot,,,Group-Series-PrePaid'.split(","));
gAllEntities.push('2/22/2012 0:07:28,Jackie Wu,Group,2/22/2012,0:7am,Series 3/5/2012 Wednesday 8:45 PM Intl. Standard Level 3 - Foxtrot,,,Group-Free'.split(","));
gAllEntities.push('2/22/2012 0:07:49,Jackie Wu,Group,2/22/2012,0:7am,Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot,,,Group-Free'.split(","));

