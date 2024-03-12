/* @OnlyCurrentDoc */
function dValue () {
    /**
    *  * A function to copy the display value of a range.
    * @param {string} arg1 - Some sheet (to use from.) Remember to put this in quotation marks.
    * @param {string} arg2 - Some range (to use from.) Remember to put this in quotation marks.
    * @param {string} arg3 - Some range (to apply to.) Remember to put this in quotation marks.
    

    * @customFunction
    **/ 

function copyDisplayValue(arg1= "Sheet1",arg2="C9",arg3="G9") {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh =   ss.getSheetByName(arg1) || ss.getSheetByName("Sheet1");
  var range1 =  sh.getRange(arg2) || sh.getRange("C9");
  var range2 =  sh.getRange(arg3) || sh.getRange("G9");
  var displayValue = range1.getDisplayValue();

  range2.setValue(displayValue);

}
// This is where you call the function, for as many ranges or pages needed! Know that all valid code will be executed, including the example calls (unless commented out or deleted)

// The code in the line right below can be commented out or deleted; it's just to show the defalut values.
copyDisplayValue();
// The code in the line right below shows how to call the function with your ranges; this can also be commented out or deleted.
copyDisplayValue("Sheet1","C13", "G13" );
}

/* @OnlyCurrentDoc */
