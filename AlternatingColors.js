    /**
    *  * A function to make an alternating row table have text that matches the other row's colors.
    * @param {string} arg1 - Some sheet (to use from.) Remember to put this in quotation marks.
    * @param {string} arg2 - Some range (to use from.) Remember to put this in quotation marks.

    * @customFunction
    **/ 
function changeFontColorAltBanding(arg1, arg2) {
  //This function works on tables with alternating rows!! Column banding won't work with this.
  //You just have to change the ranges to fit the situation. It can even be part of a table instead of a whole one!
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh =  ss.getSheetByName(arg1) || ss.getSheetByName("Sheet1");
  var range =   sh.getRange(arg2) || sh.getRange("K3:N29");
  var tableR1 = range.getBandings()[0].getFirstRowColorObject().asRgbColor().asHexString();
  var tableR2 = range.getBandings()[0].getSecondRowColorObject().asRgbColor().asHexString();
  //Can be whatever color you'd like; in this case, I used a color used in a row below.
  var tableHead = tableR1;
  //Can be whatever color you'd like; in this case, I used a color used in a row below.
  var tableFoot = tableR1;
  var rowAmount = range.getNumRows();
  var columnAmount = range.getNumColumns();
  
function copiedTableColors(){
const newFormatMatrix = [];
const rows = rowAmount;
const columns = columnAmount;
const alternateR = 2;
const lastRow = rowAmount - 1;


//-----------------------------------------

for (let i = 0; i < rows ; i++) {
  newFormatMatrix[i] = [];
  for (let j = 0; j < columns; j ++) {
    if (i % alternateR == 0) {
      newFormatMatrix[i][j] = tableR1;
    } else {newFormatMatrix[i][j] = tableR2};
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
