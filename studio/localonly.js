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

// Only included for local test
function onLoad() {
  startMain(gAllEntities);
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
addEntityInOrder(new Entity('Rachel', 'Wu', '3625', 'Bellevue', '98005', 'rachel@wu', '882', 'Kora', 'Jackie', 'Rachel TODO note', '1/30/2012 15:54:25', 'Female', 'Kora Stoynova', '2/1/2011', '', ''));
addEntityInOrder(new Entity('Jackie', 'Wu', '3625', '', '98005', 'jackie@wu', '882', 'Kora', 'Jackie', 'Jackie note', '1/30/2012 16:02:09',  'Female', 'Kora Stoynova', '1/1/2012', '2/2/2012', 'bounced'));
addEntityInOrder(new Entity('Jonh really long name', 'Bush', '123', 'Redmond', '98052', 'jonh@bush', '222', 'Simeon', '', 'from radio', '1/30/2012 16:29:06',  'Female', 'Simeon Stoynov', 'foo bar','', 'Yes'));

gAllTeachers.push(new Teacher('Kora Stoynova'));
gAllTeachers.push(new Teacher('Simeon Stoynov'));
gAllTeachers.push(new Teacher('Jeff Chen'));

gAllClasses.push(new ValueDisplay('Series 3/5/2012 Wednesday 7:15-PM American-Smooth Waltz Level-1', 'Wednesday Waltz Level 1'));
gAllClasses.push(new ValueDisplay('Series YYYY-MM-DD Wednesday 19 15 INTL TANGO 1', 'Wednesday Tango Level 1'));
gAllClasses.push(new ValueDisplay('Series YYYY-MM-DD Tuesday 19 15 INTL RUMBA 1', 'Thursday Rumba Level 1'));
gAllClasses.push(new ValueDisplay('Series YYYY-MM-DD Thursday 19 15 INTL VWALTZ 1', 'Thursday V.Waltz Level 1'));
gAllClasses.push(new ValueDisplay('DropIn YYYY-MM-DD Friday 19 15 CLUB HUSTLE 0', 'Friday Party'));
gAllClasses.push(new ValueDisplay('DropIn YYYY-MM-DD Saturday 19 15 CLUB 2STEP 0', 'Saturday 2 Step'));

gAllClasses.push(new ValueDisplay('Party YYYY-MM-DD Thursday 21 30', 'Ballroom Party Thursday'));
gAllClasses.push(new ValueDisplay('Party YYYY-MM-DD Friday 20 45', 'Salsa Party Friday'));
gAllClasses.push(new ValueDisplay('Party YYYY-MM-DD Saturday 20 00', 'Ballroom Party Saturday'));
gAllClasses.push(new ValueDisplay('Party YYYY-MM-DD Sunday 20 00', 'WC Swing Party Sunday'));

gAllClasses.push(new ValueDisplay('Children YYYY-MM-DD Monday LEVEL 1', "Children's Program   Monday Level 1"));
gAllClasses.push(new ValueDisplay('Children YYYY-MM-DD Wednesday LEVEL 1', "Children's Program   Wednesday Level 1"));

gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Monday 17 30 LEVEL 1', 'Youth   Monday Level 1'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Monday 17 30 LEVEL 2', 'Youth   Monday Level 2'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Tuesday 17 30 LEVEL 3', 'Youth   Tuesday Level 3'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Tuesday 17 30 LEVEL 4', 'Youth   Tuesday Level 4'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Wednesday 17 30 LEVEL 1', 'Youth   Wednesday Level 1'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Wednesday 17 30 LEVEL 2', 'Youth   Wednesday Level 2'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Tuesday 17 30 LEVEL 3', 'Youth   Tuesday Level 3'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Thursday 17 30 LEVEL 3', 'Youth   Thursday Level 3'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Thursday 17 30 LEVEL 4', 'Youth   Thursday Level 4'));
gAllClasses.push(new ValueDisplay('Youth YYYY-MM-DD Friday 17 30 COND', 'Youth   Friday Conditioning'));

gAllClasses.push(new ValueDisplay('Round YYYY-MM-DD Sunday 16 30 Standard', 'Standard Round'));
gAllClasses.push(new ValueDisplay('Round YYYY-MM-DD Sunday 17 15 Latin', 'Latin Round'));
