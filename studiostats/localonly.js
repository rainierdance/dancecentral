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


gAllEntities.push('2/22/2012 0:04:01,Jackie Wu,Group,2/22/2012,,Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot,,,Group-Series-PrePaid,,,,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push('2/22/2012 0:07:28,Jackie Wu,Group,2/22/2012,,Series 3/5/2012 Wednesday 8:45 PM Intl. Standard Level 3 - Foxtrot,,,Group-Free,,,,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push('2/22/2012 0:07:49,Jackie Wu,Group,2/22/2012,,Series 3/5/2012 Tuesday 7:15 PM Am. Smooth Level 3 - Foxtrot,,,Group-Free,,,,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push('2/22/2012 15:47:58,Lorenzo Farris,Group,2/22/2012,15:47,Series 3/5/2012 Wednesday 8:00 PM Intl. Latin Level 3 - Paso Doble,,,Group-Drop-in-Package-PrePaid,,,,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push('2/22/2012 15:48:18,Lorenzo Farris,Party,2/22/2012,15:48,Party Thursday 9:30 PM Ballroom Practice Party,,,Party-Only,,10,Cash,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push("2/22/2012 15:48:25,Lorenzo Farris,Youth,2/22/2012,15:48,Children 3/5/2012 Wednesday 4:00 PM Children's Program Level 1,,,,,,,,,,,,,,,,,,,,,,,,,".split(','));
gAllEntities.push('2/22/2012 15:48:29,Lorenzo Farris,Private,2/22/2012,15:48,,1,Kora Stoynova,,,,,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push('2/22/2012 15:48:35,Lorenzo Farris,Practice,2/22/2012,15:48,,1,,Practice-Free,,,,,,,,,,,,,,,,,,,,,,'.split(','));
gAllEntities.push('2/22/2012 15:48:42,Lorenzo Farris,Payment,2/22/2012,15:48,,,,,,50,Cash,,4,1,,,,,,,16,21,,,,,,Intro Special,4,13'.split(','));
gAllEntities.push('2/22/2012 15:48:46,Lorenzo Farris,Payment,2/22/2012,15:48,,,,,,65,Check,,,3,,,,,,,,65,,,,,,Wedding Special,,'.split(','));
gAllEntities.push('2/22/2012 15:48:59,Lorenzo Farris,Payment,2/22/2012,15:48,,,,,,65,CreditCard,,,3,,,,,,,,65,,,,,,Wedding Special,,'.split(','));



