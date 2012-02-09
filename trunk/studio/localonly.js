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

gAllClasses.push(new ValueDisplay('Series_3/5/2012_WED_7:15-PM_American-Smooth_Waltz_Level-1', 'Wednesday Waltz Level 1'));
gAllClasses.push(new ValueDisplay('Series_2012_03_05_WED_19_15_INTL_TANGO_1', 'Wednesday Tango Level 1'));
gAllClasses.push(new ValueDisplay('Series_2012_03_05_TUE_19_15_INTL_RUMBA_1', 'Thursday Rumba Level 1'));
gAllClasses.push(new ValueDisplay('Series_2012_03_05_THU_19_15_INTL_VWALTZ_1', 'Thursday V.Waltz Level 1'));
gAllClasses.push(new ValueDisplay('DropIn_YYYY-MM-DD_FRI_19_15_CLUB_HUSTLE_0', 'Friday Party'));
gAllClasses.push(new ValueDisplay('DropIn_YYYY-MM-DD_SAT_19_15_CLUB_2STEP_0', 'Saturday 2 Step'));

gAllClasses.push(new ValueDisplay('Party_YYYY-MM-DD_THU_21_30', 'Ballroom Party Thursday'));
gAllClasses.push(new ValueDisplay('Party_YYYY-MM-DD_FRI_20_45', 'Salsa Party Friday'));
gAllClasses.push(new ValueDisplay('Party_YYYY-MM-DD_SAT_20_00', 'Ballroom Party Saturday'));
gAllClasses.push(new ValueDisplay('Party_YYYY-MM-DD_SUN_20_00', 'WC Swing Party Sunday'));

gAllClasses.push(new ValueDisplay('Children_2012_03_05_MON_LEVEL_1', "Children's Program _ Monday Level 1"));
gAllClasses.push(new ValueDisplay('Children_2012_03_05_WED_LEVEL_1', "Children's Program _ Wednesday Level 1"));

gAllClasses.push(new ValueDisplay('Youth_2012_03_05_MON_17_30_LEVEL_1', 'Youth _ Monday Level 1'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_MON_17_30_LEVEL_2', 'Youth _ Monday Level 2'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_TUE_17_30_LEVEL_3', 'Youth _ Tuesday Level 3'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_TUE_17_30_LEVEL_4', 'Youth _ Tuesday Level 4'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_WED_17_30_LEVEL_1', 'Youth _ Wednesday Level 1'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_WED_17_30_LEVEL_2', 'Youth _ Wednesday Level 2'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_TUE_17_30_LEVEL_3', 'Youth _ Tuesday Level 3'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_THU_17_30_LEVEL_3', 'Youth _ Thursday Level 3'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_THU_17_30_LEVEL_4', 'Youth _ Thursday Level 4'));
gAllClasses.push(new ValueDisplay('Youth_2012_03_05_FRI_17_30_COND', 'Youth _ Friday Conditioning'));

gAllClasses.push(new ValueDisplay('Round_YYYY-MM-DD_SUN_16_30_Standard', 'Standard Round'));
gAllClasses.push(new ValueDisplay('Round_YYYY-MM-DD_SUN_17_15_Latin', 'Latin Round'));
