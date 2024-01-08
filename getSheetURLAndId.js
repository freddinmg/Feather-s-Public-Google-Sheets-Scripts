/* @OnlyCurrentDoc */

//See description.

/*function getSheetUrlAndId1() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var ss = SS.getActiveSheet();
  var url = '';
  url += SS.getUrl();
  url += '#gid=';
  url += ss.getSheetId(); 
  return url;
}
/*
/* @OnlyCurrentDoc */
function getSheetUrlAndId2() {
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var ss = SS.getActiveSheet();
  var url3 = '';
  url3 += SS.getUrl();
  url3 += '#gid=';
  url3 += ss.getSheetId(); 
  url3 += '&range=I'; 
  return url3;
}

//DO NOT RUN THIS, RUN THE NEXT PAGE
function linkOnSpreadsheet () {
  var sheet3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Changelog');
  var sheet4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Front Page');
  var cellValue2 = getSheetUrlAndId2();
  sheet3.getRange("A2").setValue('=hyperlink("'+cellValue2+'"& COUNTA(I3:I) - 5,"To Latest")');
  sheet4.getRange("GrabbedLink2").setValue(cellValue2);
}



/* @OnlyCurrentDoc */
