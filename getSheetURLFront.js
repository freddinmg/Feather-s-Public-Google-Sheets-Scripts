/* @OnlyCurrentDoc */
function getSheetUrlFront() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var url = '';
  url += SS.getUrl();
  url += '#gid=0';
  return url;
}

function fillCell() {
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Front Page');
  var cellValue = getSheetUrlFront();
  sheet2.getRange('GrabbedLink').setValue(cellValue);
}
/* @OnlyCurrentDoc */
