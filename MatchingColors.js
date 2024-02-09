    /**
    *  * A function to make an alternating row table have text that matches its own row's colors.
    * @param {string} arg1 - Some sheet (to use from.) Remember to put this in quotation marks.
    * @param {string} arg2 - Some range (to use from.) Remember to put this in quotation marks.

    * @customFunction
    **/ 
function changeFontColorToBanding(arg1, arg2) {
  //This function works on tables with alternating rows!! Column banding won't work with this.
  //You just have to change the ranges to fit the situation. It can even be part of a table instead of a whole one!
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh =   ss.getSheetByName(arg1) || ss.getSheetByName("Sheet1");
  var range =  sh.getRange(arg2) || sh.getRange("B3:E29");
  var tableHead = range.getBandings()[0].getHeaderRowColorObject();
  var tableFoot = range.getBandings()[0].getFooterRowColorObject();
  var tableR1 = range.getBandings()[0].getFirstRowColorObject().asRgbColor().asHexString();
  var tableR2 = range.getBandings()[0].getSecondRowColorObject().asRgbColor().asHexString();
  var rowAmount = range.getNumRows();
  var columnAmount = range.getNumColumns();
  
function copiedTableColors(){
const newFormatMatrix = [];
const rows = rowAmount;
const columns = columnAmount;
const alternateR = 2;
const lastRow = rowAmount - 1;
//-----------------------------------------
function getColorHead() {
if (tableHead != null) {tableHead = tableHead.asRgbColor().asHexString()} else {false}
};
function getColorFoot() {
if (tableFoot != null) {tableFoot = tableFoot.asRgbColor().asHexString();} else {false}
};
//-----------------------------------------

getColorHead();
getColorFoot();

//-----------------------------------------

for (let i = 0; i < rows ; i++) {
  newFormatMatrix[i] = [];
  for (let j = 0; j < columns; j ++) {
    if (i % alternateR == 0) {
      newFormatMatrix[i][j] = tableR2;
    } else {newFormatMatrix[i][j] = tableR1};
  }
};

range.setFontColors(newFormatMatrix);

//-----------------------------------------

if(tableHead != null) {newFormatMatrix[0].fill(tableHead)};
range.setFontColors(newFormatMatrix);

if(tableFoot != null) {newFormatMatrix[lastRow].fill(tableFoot)};

//-----------------------------------------

range.setFontColors(newFormatMatrix);
};

//-----------------------------------------

copiedTableColors();

};


