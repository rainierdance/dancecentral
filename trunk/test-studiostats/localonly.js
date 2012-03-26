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


//gAllRawEntities.push("log".split(';'));

/*
gAllRawEntities.push("2/22/2012 0:04:01;Rachel Wu;Group;2/22/2012;;Series Monday 8:00 PM Am. Rhythm Level 1 - EC Swing,Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot;;;Paid;;;;;;;;;;;;;;;;;;;;;;".split(';'));


gAllRawEntities.push("2/22/2012 15:47:58;Lorenzo Farris;Group;2/22/2012;15:47;Series 3/5/2012 Wednesday 8:00 PM Intl. Latin Level 3 - Paso Doble;;;Paid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 15:48:18;Lorenzo Farris;Group;2/22/2012;15:48;Party Thursday 9:30 PM Ballroom Practice Party;;;Party-Only;;10;Cash;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 15:48:25;Lorenzo Farris;Youth;2/22/2012;15:48;Children 3/5/2012 Wednesday 4:00 PM Children's Program Level 1;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 11:02:03;Violeta Abramova;Teach;2/27/2012;11:01;Children 2012-02-27 Monday 4:00 PM Children's Program Level 1;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/23/2012 15:48:29;Lorenzo Farris;Private;2/22/2012;15:48;;1;Simeon Stoynov;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/24/2012 15:48:35;Lorenzo Farris;Practice;2/22/2012;15:48;;1;;Practice-Free;TODO practice;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 15:48:46;Lorenzo Farris;Payment;2/22/2012;15:48;;;;;Special;65;Check;;;3;;;;;;;;65;;;;;;Wedding Special;;".split(';'));
gAllRawEntities.push("2/22/2012 15:48:59;Lorenzo Farris;Payment;3/25/2012;15:48;;;;;;65;CreditCard;;;3;;;;;;;;65;;;;;;Wedding Special;;".split(';'));


gAllRawEntities.push("1/27/2012 10:07:19;Simeon Stoynov;Payment;2/27/2012;10:07;;;;;;20;Cash;;;;;;;;2;;;;;;;;20;;;".split(';'));
gAllRawEntities.push("2/28/2012 10:07:33;Kora Stoynova;Payment;2/27/2012;10:07;;;;;;50;Cash;;;;;;;;5;;;;;;;;50;;;".split(';'));
gAllRawEntities.push("2/28/2012 10:07:49;Simeon Stoynov;Payment;1/20/2012;10:07;;;;;;20;Check;;;;;;;;2;;;;;;;;20;;;".split(';'));
gAllRawEntities.push("3/27/2012 10:07:56;Simeon Stoynov;Teach;2/27/2012;10:07;Series Monday 8:45 PM Intl. Standard Level 2 - Quickstep,Series Monday 7:15 PM Am. Smooth Level 1 - Waltz;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("3/27/2012 10:07:56;Simeon Stoynov;Teach;2/27/2012;10:07;Series Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("3/7/2012 10:13:45;Simeon Stoynov;Teach;2/20/2012;10:07;Series Monday 7:15 PM Am. Smooth Level 1 - Waltz,Series Monday 8:00 PM Am. Rhythm Level 1 - EC Swing,Series Monday 8:45 PM Intl. Standard Level 2 - Quickstep;;;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 10:49:48;Rachel Wu;Youth;2/27/2012;10:49;Children_2012_03_05_MON_LEVEL_1;;;Youth-Take-Class;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 11:00:47;Lorenzo Farris;Group;2/27/2012;11:00;Series 2012-02-27 Monday 7:15 PM Am. Smooth Level 1 - Waltz,Series 2012-02-27 Monday 8:45 PM Intl. Standard Level 2 - Quickstep;;;Paid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 11:01:16;Lorenzo Farris;Group;2/28/2012;11:00;Series 2012-02-28 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot;;;Paid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 11:01:52;Fiona Farris;Youth;2/27/2012;11:01;Children 2012-02-27 Monday 4:00 PM Children's Program Level 1;;;Youth-Take-Class;;;;;;;;;;;;;;;;;;;;;;".split(';'));

gAllRawEntities.push("2/25/2012 15:48:42;Jackie Wu;Payment;1/22/2012;15:48;;;;;Some TODO note here;50;Cash;;4;1;;;;;;;16;21;;;;;;Intro Special;4;13".split(';'));
gAllRawEntities.push("3/14/2012 22:39:13;Jackie Wu;Payment;3/14/2012;22:21;;;;;;1103;;1;2;3;7;5;4;6;;40.2;24;197;70;240;230;240;;;8;64".split(';'));
gAllRawEntities.push("2/27/2012 9:59:34;Jackie Wu;Group;2/27/2012;9:59;Series Tuesday 8:00 PM Am. Rhythm Level 3 - Cha Cha,Series Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba,Drop-in Saturday 7:15 PM Cha Cha;;;Paid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 0:07:28;Jackie Wu;Group;2/22/2012;;Series 3/5/2012 Wednesday 8:45 PM Intl. Standard Level 3 - Foxtrot;;;Free;TODO group;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 0:07:49;Jackie Wu;Group;2/22/2012;;Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot;;;Free;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 18:25:06;Jackie Wu;Private;2/20/2012;12:25;;1;Simeon Stoynov;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/22/2012 18:27:03;Jackie Wu;Group;2/22/2012;18:26;Series 3/5/2012 Wednesday 7:15 PM Am. Smooth Level 2 - V. Waltz, Series 3/5/2012 Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba;;;Paid;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 10:14:35;Jackie Wu;Private;2/27/2012;10:14;;1;Simeon Stoynov;;TODO here;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 10:14:39;Jackie Wu;Private;2/22/2012;10:14;;1;Simeon Stoynov;;;;;;;;;;;;;;;;;;;;;;;".split(';'));
gAllRawEntities.push("2/27/2012 10:48:14;Jackie Wu;Youth;2/27/2012;10:47;Children_2012_03_05_MON_LEVEL_1,Youth_2012_03_05_WED_17_30_LEVEL_1;;;;TODO some;;;;;;;;;;;;;;;;;;;;;".split(';'));
*/
//gAllRawEntities.push("log".split(';'));

gAllRawEntities.push("3/5/2012 23:32:35;Cecilia Wang;Private;3/2/2012;19:30:00;;60;Simeon Stoynov".split(';'));
gAllRawEntities.push("3/16/2012 13:19:36;Cecilia Wang;Payment;3/2/2012;13:18:00;;;;;EDS floor fee;16;;;;1.33;;;;;;;;16".split(';'));
gAllRawEntities.push("3/12/2012 17:59:18;Cecilia Wang;Private;3/7/2012;18:30:00;;45;Simeon Stoynov;;with Ed".split(';'));
gAllRawEntities.push("3/16/2012 13:21:30;Cecilia Wang;Payment;3/7/2012;13:21:00;;;;;EDS floor fee;12;;;;1;;;;;;;;12".split(';'));
gAllRawEntities.push("3/11/2012 15:38:04;Cecilia Wang;Group;3/8/2012;20:10:00;Drop-in 2012-03-08 Thursday 8:00 PM Standard Technique;;;Free".split(';'));
gAllRawEntities.push("3/16/2012 14:39:26;Cecilia Wang;Private;3/14/2012;18:50:00;;45;Kora Stoynova".split(';'));
gAllRawEntities.push("3/25/2012 17:17:57;Cecilia Wang;Payment;3/14/2012;18:50:00;;;;;EDS floor fee;12;;;;1;;;;;;;;12".split(';'));

gAllRawEntities.push("3/8/2012 12:03:59;Diane Johnson;Private;3/8/2012;12:15:00;;45;Simeon Stoynov".split(';'));
gAllRawEntities.push("3/8/2012 12:03:59;Diane Johnson;Private;3/8/2012;13:00:00;;45;Simeon Stoynov".split(';'));
gAllRawEntities.push("3/16/2012 13:21:58;Diane Johnson;Payment;3/8/2012;13:21:00;;;;;EDS floor fee;24;;;;2;;;;;;;;24".split(';'));
gAllRawEntities.push("3/16/2012 14:52:02;Diane Johnson;Private;3/15/2012;11:45:00;;45;Simeon Stoynov".split(';'));
gAllRawEntities.push("3/21/2012 14:17:31;Diane Johnson;Private;3/15/2012;12:45:00;;60;Simeon Stoynov".split(';'));
gAllRawEntities.push("3/22/2012 12:44:01;Diane Johnson;Private;3/22/2012;23:45:00;;120;Simeon Stoynov".split(';'));
gAllRawEntities.push("3/25/2012 17:01:14;Diane Johnson;Payment;3/15/2012;11:45:00;;;;;EDS floor fee;12;;;;1;;;;;;;;12".split(';'));
gAllRawEntities.push("3/25/2012 17:01:44;Diane Johnson;Payment;3/15/2012;13:45:00;;;;;EDS floor fee;16;;;;1.33;;;;;;;;16".split(';'));
gAllRawEntities.push("3/26/2012 17:01:44;Diane Johnson;Payment;3/16/2012;13:45:00;;;;;EDS floor fee;32;;;;2.67;;;;;;;;32".split(';'));

