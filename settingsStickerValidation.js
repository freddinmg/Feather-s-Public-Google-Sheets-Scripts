/* @OnlyCurrentDoc */
function onChange(e) {

var settingsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Some Settings');
//var stickerRangeAll = settingsSheet.getRange("D3:F4");
var stickerRange1 = settingsSheet.getRange("D3:D4");
var stickerRange2 = settingsSheet.getRange("E3:E4");
var stickerRange3 = settingsSheet.getRange("F3:F4");
//var testCell1 = settingsSheet.getRange("I2");
//var testCell2 = settingsSheet.getRange("D3");
//var testRange1 = settingsSheet.getRange("D10:E10");
var stickerRange2 = settingsSheet.getRange("E3:E4");
var stickerRange3 = settingsSheet.getRange("F3:F4");
var startSticker1 = "✨";
var startSticker2 = "🌠";
var noSticker = "❓";
var noBlank = "⛔️";
var blank = "—";

/*
//OLD CONSOLE TESTING

console.log(stickerRange1.getValues());

if (testCell1.isBlank) {console.log("1 is blank")} else {"1 is not blank"};
if (testCell2.isBlank) {console.log("2 is blank")} else {"2 is not blank"};
if (testRange1.isBlank) {console.log("3 is blank")} else {"3 is not blank"};
if (stickerRange1.isBlank) {console.log("4 is blank")} else {"4 is not blank"};
*/

function checkMissingSticker(x,y,z) {
 var range = x;
 var values = range.getValues();
 var value1 = range.getValue();
 var value2 = value1.toString();
 var value3 = range.getFormula();
 values.forEach(function(col) {
   col.forEach(function(row) {
     if (range !== "" && value3 != '=IFERROR("","'+ y +'")') {console.log("has stuff");range.setFormula('=IFERROR("' + value2 + '","' + y+'")');console.log("has stuff")} else if  (range.isBlank){console.log("blank");range.setValue(y);console.log("blank")} else {console.log("not blank");range.setFormula('=IFERROR("' + z + '","' + y+'")');};
   });
 });
}
checkMissingSticker(stickerRange1,noSticker,startSticker1);
checkMissingSticker(stickerRange2,noBlank,blank);
checkMissingSticker(stickerRange3,noSticker,startSticker2);


};
