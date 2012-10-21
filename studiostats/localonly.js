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


//addRawEntry("log".split(';'));
addRawEntry("2/22/2012 0:04:01	Rachel Wu	Group	2/2/2012		Youth Monday 8:00 PM Am. Rhythm Level 1 - EC Swing,Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot			Paid																						".split('	'));
addRawEntry("2/22/2012 15:47:58	Lorenzo Farris	Group	2/22/2012	15:47	Series 3/5/2012 Wednesday 8:00 PM Intl. Latin Level 3 - Paso Doble			Paid																						".split('	'));
addRawEntry("2/22/2012 15:47:58	Lorenzo Farris	Group	2/22/2012	15:47	Series 3/5/2012 Wednesday 8:00 PM Intl. Latin Level 3 - Paso Doble			Paid																						".split('	'));
addRawEntry("2/22/2012 15:48:18	Lorenzo Farris	Group	2/22/2012	15:48	Party Thursday 9:30 PM Ballroom Practice Party			Paid			Cash																			".split('	'));
addRawEntry("2/22/2012 15:48:25	Lorenzo Farris	Youth	2/22/2012	15:48	Children 3/5/2012 Wednesday 4:00 PM Children's Program Level 1																									".split('	'));
addRawEntry("2/27/2012 11:02:03	Violeta Abramova	Teach	2/27/2012	11:01	Series Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba,Children 2012-02-27 Monday 4:00 PM Children's Program Level 1																									".split('	'));
addRawEntry("2/23/2012 15:48:29	Lorenzo Farris	Private	2/22/2012	15:48		1	Simeon Stoynov																							".split('	'));
addRawEntry("2/23/2012 15:48:29	Lorenzo Farris	Private	2/22/2012	15:48		1	Simeon Stoynov																							".split('	'));
addRawEntry("2/23/2012 15:48:29	Lorenzo Farris	Private	2/22/2012	15:48		1	Simeon Stoynov																							".split('	'));
addRawEntry("2/24/2012 15:48:35	Lorenzo Farris	Practice	2/22/2012	15:48		1		Practice-Free	TODO practice																					".split('	'));
addRawEntry("2/22/2012 15:48:46	Lorenzo Farris	Payment	2/22/2012	15:48					Special	65	Check			3								65						Wedding Special		".split('	'));
addRawEntry("3/27/2012 10:07:56	Simeon Stoynov	Teach	2/27/2012	10:07	Series Monday 8:45 PM Intl. Standard Level 2 - Quickstep,Series Monday 7:15 PM Am. Smooth Level 1 - Waltz																									".split('	'));
addRawEntry("3/7/2012 10:13:45	Simeon Stoynov	Teach	2/20/2012	10:07	Series Monday 7:15 PM Am. Smooth Level 1 - Waltz,Series Monday 8:00 PM Am. Rhythm Level 1 - EC Swing,Series Monday 8:45 PM Intl. Standard Level 2 - Quickstep																									".split('	'));
addRawEntry("2/27/2012 10:49:48	Rachel Wu	Youth	2/27/2012	10:49	Children_2012_03_05_MON_LEVEL_1			Youth-Take-Class																						".split('	'));
addRawEntry("2/27/2012 11:00:47	Lorenzo Farris	Group	2/27/2012	11:00	Series 2012-02-27 Monday 7:15 PM Am. Smooth Level 1 - Waltz,Series 2012-02-27 Monday 8:45 PM Intl. Standard Level 2 - Quickstep			Paid																						".split('	'));
addRawEntry("2/27/2012 11:01:16	Lorenzo Farris	Group	2/28/2012	11:00	Series 2012-02-28 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot			Paid																						".split('	'));
addRawEntry("2/27/2012 11:01:52	Fiona  Farris	Youth	2/27/2012	11:01	Children 2012-02-27 Monday 4:00 PM Children's Program Level 1			Youth-Take-Class																						".split('	'));
addRawEntry("2/25/2012 15:48:42	Jackie Wu	Payment	1/22/2012	15:48					Some TODO note here	50	Cash		4	1							16	21						Intro Special	4	13".split('	'));
addRawEntry("3/14/2012 22:39:13	Jackie Wu	Payment	3/14/2012	22:21						1105.2		1	2	3.2	7	5	4	6		40.2	24	197	70	240	230	240			8	64".split('	'));
addRawEntry("2/27/2012 9:59:34	Jackie Wu	Group	2/27/2012	9:59	Series Tuesday 8:00 PM Am. Rhythm Level 3 - Cha Cha,Series Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba,Drop-in Saturday 7:15 PM Cha Cha			Paid																						".split('	'));
addRawEntry("2/22/2012 0:07:28	Jackie Wu	Group	2/22/2012		Series 3/5/2012 Wednesday 8:45 PM Intl. Standard Level 3 - Foxtrot			Free	TODO group																					".split('	'));
addRawEntry("2/22/2012 0:07:49	Jackie Wu	Group	2/22/2012		Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot			Free																						".split('	'));
addRawEntry("2/22/2012 18:25:06	Jackie Wu	Private	2/20/2012	12:25		1	Simeon Stoynov																							".split('	'));
addRawEntry("2/22/2012 18:27:03	Jackie Wu	Group	2/22/2012	18:26	Series 3/5/2012 Wednesday 7:15 PM Am. Smooth Level 2 - V. Waltz, Series 3/5/2012 Wednesday 8:00 PM Am. Rhythm Level 2 - Rumba			Paid																						".split('	'));
addRawEntry("2/27/2012 10:14:35	Jackie Wu	Private	2/27/2012	10:14		1	Simeon Stoynov		TODO here																					".split('	'));
addRawEntry("2/27/2012 10:14:39	Jackie Wu	Private	2/22/2012	10:14		1	Simeon Stoynov																							".split('	'));
addRawEntry("2/27/2012 10:48:14	Jackie Wu	Youth	2/27/2012	10:47	Children_2012_03_05_MON_LEVEL_1,Youth_2012_03_05_WED_17_30_LEVEL_1				TODO some																					".split('	'));
addRawEntry("3/5/2012 23:32:35	Cecilia Wang	Private	3/2/2012	19:30:00		60	Simeon Stoynov".split('	'));
addRawEntry("3/6/2012 23:32:35	Cecilia Wang	Private	3/6/2012	19:30:00		45	Simeon Stoynov".split('	'));
addRawEntry("3/7/2012 23:32:35	Cecilia Wang	Private	3/7/2012	19:30:00		45	Simeon Stoynov".split('	'));
addRawEntry("3/7/2012 23:32:35	Cecilia Wang	Private	3/5/2012	19:30:00		45	Kora Stoynov	Free".split('	'));
addRawEntry("3/7/2012 23:32:35	Cecilia Wang	Private	9/25/2012	19:30:00		Kora Stoynov	45	Paid".split('	'));
addRawEntry("3/16/2012 13:19:36	Cecilia Wang	Payment	3/2/2012	13:18:00					EDS floor fee	16				1.33								16".split('	'));
addRawEntry("3/12/2012 17:59:18	Cecilia Wang	Private	3/7/2012	18:30:00		45	Simeon Stoynov		with Ed".split('	'));
addRawEntry("3/16/2012 13:21:30	Cecilia Wang	Payment	3/7/2012	13:21:00					EDS floor fee	12				1								12".split('	'));
addRawEntry("3/11/2012 15:38:04	Cecilia Wang	Group	3/8/2012	20:10:00	Drop-in 2012-03-08 Thursday 8:00 PM Standard Technique			Free".split('	'));
addRawEntry("3/16/2012 14:39:26	Cecilia Wang	Private	3/14/2012	18:50:00		45	Simeon Stoynov".split('	'));
addRawEntry("3/25/2012 17:17:57	Cecilia Wang	Payment	3/14/2012	18:50:00					test	12				1								12".split('	'));
addRawEntry("3/25/2012 17:17:57	Cecilia Wang	Payment	3/14/2012	18:50:00					test credit	0				1								0".split('	'));
addRawEntry("3/8/2012 12:03:59	Diane Johnson	Private	3/8/2012	13:00:00		45	Simeon Stoynov".split('	'));
addRawEntry("3/16/2012 13:21:58	Diane Johnson	Payment	3/8/2012	13:21:00					EDS floor fee	24				2								24".split('	'));
addRawEntry("3/16/2012 14:52:02	Diane Johnson	Private	3/15/2012	11:45:00		45	Simeon Stoynov".split('	'));
addRawEntry("3/21/2012 14:17:31	Diane Johnson	Private	3/15/2012	12:45:00		60	Simeon Stoynov".split('	'));
addRawEntry("3/22/2012 12:44:01	Diane Johnson	Private	3/22/2012	23:45:00		120	Simeon Stoynov".split('	'));
addRawEntry("3/25/2012 17:01:14	Diane Johnson	Payment	3/15/2012	11:45:00					EDS floor fee	12				1								12".split('	'));
addRawEntry("3/25/2012 17:01:44	Diane Johnson	Payment	3/15/2012	13:45:00					EDS floor fee	16				1.33								16".split('	'));
addRawEntry("3/26/2012 17:01:44	Diane Johnson	Payment	3/16/2012	13:45:00					EDS floor fee	32				2.67								32".split('	'));
addRawEntry("3/23/2012 19:39:40	Alex and Natalia Gorobets	Group	3/22/2012	19:15:00	Drop-in 2012-03-23 Thursday 7:15 PM Latin Technique,Drop-in 2012-03-23 Thursday 8:00 PM Standard Technique			Paid	Alex".split('	'));
addRawEntry("3/19/2012 10:49:54	Alex and Natalia Gorobets	Payment	3/16/2012	10:49:00					Natalia Gorobets paid 3, 1 is recorded under Evvy.	12			2								12".split('	'));
addRawEntry("3/23/2012 19:39:26	Alex and Natalia Gorobets	Group	3/22/2012	19:15:00	Drop-in 2012-03-22 Thursday 7:15 PM Latin Technique,Drop-in 2012-03-22 Thursday 8:00 PM Standard Technique			Paid	Natalia".split('	'));
addRawEntry("3/23/2012 19:39:26	Jackie Wu	Group	3/22/2012	19:15:00	Event 2012-03-22 Thursday 7:15 PM Seminar,Drop-in 2012-03-22 Thursday 8:00 PM Standard Technique			Paid	Natalia".split('	'));
addRawEntry("3/26/2012 18:28:02	Alex and Natalia Gorobets	Payment	3/23/2012	18:27:00					March special	0			1								0".split('	'));
