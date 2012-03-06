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


//gAllEntities.push("log".split(';'));
gAllEntities.push("2/22/2012 0:04:01;Jackie Wu;Group;2/22/2012;;Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot;;;Group-Series-PrePaid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 0:07:28;Jackie Wu;Group;2/22/2012;;Series 3/5/2012 Wednesday 8:45 PM Intl. Standard Level 3 - Foxtrot;;;Group-Free;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 0:07:49;Jackie Wu;Group;2/22/2012;;Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot;;;Group-Free;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 15:47:58;Lorenzo Farris;Group;2/22/2012;15:47;Series 3/5/2012 Wednesday 8:00 PM Intl. Latin Level 3 - Paso Doble;;;Group-Drop-in-Package-PrePaid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 15:48:18;Lorenzo Farris;Party;2/22/2012;15:48;Party Thursday 9:30 PM Ballroom Practice Party;;;Party-Only;;10;Cash;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 15:48:25;Lorenzo Farris;Youth;2/22/2012;15:48;Children 3/5/2012 Wednesday 4:00 PM Children's Program Level 1;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 15:48:29;Lorenzo Farris;Private;2/22/2012;15:48;;1;Kora Stoynova;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 15:48:35;Lorenzo Farris;Practice;2/22/2012;15:48;;1;;Practice-Free;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 15:48:42;Lorenzo Farris;Payment;2/22/2012;15:48;;;;;;50;Cash;;4;1;;;;;;;16;21;;;;;;Intro Special;4;13".split(';'));
gAllEntities.push("2/22/2012 15:48:46;Lorenzo Farris;Payment;2/22/2012;15:48;;;;;;65;Check;;;3;;;;;;;;65;;;;;;Wedding Special;;".split(';'));
gAllEntities.push("2/22/2012 15:48:59;Lorenzo Farris;Payment;2/22/2012;15:48;;;;;;65;CreditCard;;;3;;;;;;;;65;;;;;;Wedding Special;;".split(';'));
gAllEntities.push("2/22/2012 18:25:06;Jackie Wu;Private;2/22/2012;18:25;;1;Simeon Stoynov;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/22/2012 18:27:03;Jackie Wu;Group;2/22/2012;18:26;Series 3/5/2012 Wednesday 7:15 PM Am. Smooth Level 2 - V. Waltz, Series 3/5/2012 Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba;;;Group-ED-PunchCard-PrePaid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 9:59:34;Jackie Wu;Group;2/27/2012;9:59;Series Tuesday 8:00 PM Am. Rhythm Level 3 - Cha Cha,Series Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba,Drop-in Saturday 7:15 PM Cha Cha;;;Group-Free;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 10:07:19;Simeon Stoynov;Payment;2/27/2012;10:07;;;;;;20;Cash;;;;;;;;2;;;;;;;;20;;;".split(';'));
gAllEntities.push("2/27/2012 10:07:33;Kora Stoynova;Payment;2/27/2012;10:07;;;;;;50;Cash;;;;;;;;5;;;;;;;;50;;;".split(';'));
gAllEntities.push("2/27/2012 10:07:49;Simeon Stoynov;Payment;2/27/2012;10:07;;;;;;20;Check;;;;;;;;2;;;;;;;;20;;;".split(';'));
gAllEntities.push("2/27/2012 10:07:56;Simeon Stoynov;Teach;2/27/2012;10:07;Series Monday 8:45 PM Intl. Standard Level 2 - Quickstep;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 10:13:45;Simeon Stoynov;Teach;2/20/2012;10:07;Series Monday 7:15 PM Am. Smooth Level 1 - Waltz,Series Monday 8:00 PM Am. Rhythm Level 1 - EC Swing,Series Monday 8:45 PM Intl. Standard Level 2 - Quickstep;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 10:14:35;Jackie Wu;Private;2/27/2012;10:14;;1;Simeon Stoynov;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 10:14:39;Jackie Wu;Private;2/22/2012;10:14;;1;Simeon Stoynov;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 10:48:14;Jackie Wu;Youth;2/27/2012;10:47;Children_2012_03_05_MON_LEVEL_1,Youth_2012_03_05_WED_17_30_LEVEL_1;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 10:49:48;Rachel Wu;Youth;2/27/2012;10:49;Children_2012_03_05_MON_LEVEL_1;;;Youth-Take-Class;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 11:00:47;Lorenzo Farris;Group;2/27/2012;11:00;Series 2012-02-27 Monday 7:15 PM Am. Smooth Level 1 - Waltz,Series 2012-02-27 Monday 8:45 PM Intl. Standard Level 2 - Quickstep;;;Group-Series-PrePaid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 11:01:16;Lorenzo Farris;Group;2/28/2012;11:00;Series 2012-02-28 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot;;;Group-Series-PrePaid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 11:01:52;Fiona Farris;Youth;2/27/2012;11:01;Children 2012-02-27 Monday 4:00 PM Children's Program Level 1;;;Youth-Take-Class;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllEntities.push("2/27/2012 11:02:03;Violeta Abramova;Teach;2/27/2012;11:01;Children 2012-02-27 Monday 4:00 PM Children's Program Level 1;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
