/**
 * onEdit to uncheck checkboxes as required
 */
function onEdit(e) {
  // get event object data: sheet name, row number and column number
  const sheet = e.range.getSheet();
  const row = e.range.rowStart;
  const col = e.range.columnStart;

  switch(col) {
    // case when column B is checked
    case 2:
      sheet.getRange("C" + row + ":E" + row).uncheck();
      break;
    // case when column C is checked
    case 3:
      sheet.getRangeList(["B" + row,"D" + row + ":E" + row]).uncheck();
      break;
    // case when column D is checked
    case 4:
      sheet.getRangeList(["B" + row + ":C" + row,"E" + row]).uncheck();
      break;
    // case when column E is checked
    case 5:
      sheet.getRange("B" + row + ":D" + row).uncheck();
       break;

    // cell is outside of columns B to D
    default:
      return;
  }
};
