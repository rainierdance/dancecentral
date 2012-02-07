<!--Only included for local test -->
function onLoad() {
  refreshSearchResult(gAllEntities);
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
gAllEntities.push(new Entity('Rachel', 'Wu', '3625', 'Bellevue', '98005', 'rachel@wu', '882', 'Kora', 'Jackie', 'Rachel note', '1/30/2012 15:54:25', 'Female', 'Kora Stoynova', '2/1/2011', '', 0));
gAllEntities.push(new Entity('Jackie', 'Wu', '3625', '', '98005', 'jackie@wu', '882', 'Kora', 'Jackie', 'Jackie note', '1/30/2012 16:02:09',  'Female', 'Kora Stoynova', '1/1/2012', '2/2/2012', 1));
gAllEntities.push(new Entity('Jonh really long name', 'Bush', '123', 'Redmond', '98052', 'jonh@bush', '222', 'Simeon', '', 'from radio', '1/30/2012 16:29:06',  'Female', 'Simeon Stoynov', 'foo bar','', 2));

gAllTeachers.push(new Teacher('Kora Stoynova'));
gAllTeachers.push(new Teacher('Simeon Stoynov'));
gAllTeachers.push(new Teacher('Jeff Chen'));

gAllClasses.push(new ValueDisplay('Group-Series-2012-03-05-MON-19-15-INTL-WALTZ-1', 'Wednesday Waltz Level 1'));
gAllClasses.push(new ValueDisplay('Group-Series-2012-03-05-WED-19-15-INTL-TANGO-1', 'Wednesday Tango Level 1'));
gAllClasses.push(new ValueDisplay('Group-Series-2012-03-05-TUE-19-15-INTL-RUMBA-1', 'Thursday Rumba Level 1'));
gAllClasses.push(new ValueDisplay('Group-Series-2012-03-05-THU-19-15-INTL-VWALTZ-1', 'Thursday V.Waltz Level 1'));
gAllClasses.push(new ValueDisplay('Group-DropIn-YYYY-MM-DD-FRI-19-15-CLUB-HUSTLE-0', 'Friday Party'));
gAllClasses.push(new ValueDisplay('Group-DropIn-YYYY-MM-DD-SAT-19-15-CLUB-2STEP-0', 'Saturday 2 Step'));

gAllClasses.push(new ValueDisplay('Group-Party-YYYY-MM-DD-THU-21-30', 'Ballroom Party Thursday'));
gAllClasses.push(new ValueDisplay('Group-Party-YYYY-MM-DD-FRI-20-45', 'Salsa Party Friday'));
gAllClasses.push(new ValueDisplay('Group-Party-YYYY-MM-DD-SAT-20-00', 'Ballroom Party Saturday'));
gAllClasses.push(new ValueDisplay('Group-Party-YYYY-MM-DD-SUN-20-00', 'WC Swing Party Sunday'));

gAllClasses.push(new ValueDisplay('Youth-Child-2012-03-05-MON-LEVEL-1', "Children's Program - Monday Level 1"));
gAllClasses.push(new ValueDisplay('Youth-Child-2012-03-05-WED-LEVEL-1', "Children's Program - Wednesday Level 1"));

gAllClasses.push(new ValueDisplay('Youth-2012-03-05-MON-17-30-LEVEL-1', 'Youth - Monday Level 1'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-MON-17-30-LEVEL-2', 'Youth - Monday Level 2'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-TUE-17-30-LEVEL-3', 'Youth - Tuesday Level 3'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-TUE-17-30-LEVEL-4', 'Youth - Tuesday Level 4'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-WED-17-30-LEVEL-1', 'Youth - Wednesday Level 1'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-WED-17-30-LEVEL-2', 'Youth - Wednesday Level 2'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-TUE-17-30-LEVEL-3', 'Youth - Tuesday Level 3'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-THU-17-30-LEVEL-3', 'Youth - Thursday Level 3'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-THU-17-30-LEVEL-4', 'Youth - Thursday Level 4'));
gAllClasses.push(new ValueDisplay('Youth-2012-03-05-FRI-17-30-COND', 'Youth - Friday Conditioning'));

gAllClasses.push(new ValueDisplay('Group-Round-YYYY-MM-DD-SUN-16-30-Standard', 'Standard Round'));
gAllClasses.push(new ValueDisplay('Group-Round-YYYY-MM-DD-SUN-17-15-Latin', 'Latin Round'));
