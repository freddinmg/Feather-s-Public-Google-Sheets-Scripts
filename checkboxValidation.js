// Either can be used; start with onEdit and take it from there. You might wanna take one of the functions off, depending on what button orientation you're needing to validate.
// source: https://kierandixon.com/radio-buttons-google-sheets/

function onEdit(e) {
//HORIZONTAL CHECKBOXES
//----------------------------------------------------------
  //Only run radio button function if edited cell
  //changed from false to true (as happens with checkboxes)
  if (e.value === "TRUE" && e.oldValue === "false") {
    horizontalRadios(e);
  }

}

//Function to manage horizontal radio buttons
function horizontalRadios(e) {

  //Setup the clicked sheet and get its data
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  //Get the event data
  //ASSUMPTION MADE: only one cell is edited
  const range = e.range;
  const row = range.rowStart;
  const col = range.columnStart;

  //Convert the row and column numbers to indexes (zero-based)
  const rowIndex = row - 1;
  const colIndex = col - 1;

  //Variables for the first and last columns of adjacent checkboxes
  //Default value is first and last column
  let firstCol = 1;
  let lastCol = data[0].length;

  //Loop to the left of the event
  for (let i = colIndex - 1; i >= 0; i--) {

    //In the first cell that isn't true or false
    //Assign the first column (index + 2) and stop the loop
    if (data[rowIndex][i] !== true && data[rowIndex][i] !== false) {
      firstCol = i + 2;
      break;
    }

  }

  //If the event column isn't the same as the first column
  //Get the range to the left of the event and uncheck it
  if (col !== firstCol) {
    sheet.getRange(row, firstCol, 1, col - firstCol).uncheck();
  }

  //Loop to the right of the event
  for (let i = colIndex + 1; i < data[0].length; i++) {

    //In the first cell that isn't true or false
    //Assign the last column (same as index) and stop the loop
    if (data[rowIndex][i] !== true && data[rowIndex][i] !== false) {
      lastCol = i;
      break;
    }

  }

  //If the event column isn't the same as the last column
  //Get the range to the right of the event and uncheck it
  if (col !== lastCol) {
    sheet.getRange(row, col + 1, 1, lastCol - col).uncheck();
  }
//You will need the bracket below if you're ONLY using horizontalRadios(e)
//}
  
//----------------------------------------------------------
//VERTICAL CHECKBOXES
// If you're only using this one, delete all between the divider and the onEdit(e) line (including opening curly bracket).
  
  //Only run radio button function if edited cell
  //changed from false to true (as happens with checkboxes)
  if (e.value === "TRUE" && e.oldValue === "false") {
    verticalRadios(e);
  }

}

//Function to manage vertical radio buttons
function verticalRadios(e) {

  //Setup the clicked sheet and get its data
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  //Get the event data
  //ASSUMPTION MADE: only one cell is edited
  const range = e.range;
  const row = range.rowStart;
  const col = range.columnStart;

  //Convert the row and column numbers to indexes (zero-based)
  const rowIndex = row - 1;
  const colIndex = col - 1;

  //Variables for the first and last rows of adjacent checkboxes
  //Default value is first and last row
  let firstRow = 1;
  let lastRow = data.length;

  //Loop up from the event
  for (let i = rowIndex - 1; i >= 0; i--) {

    //In the first cell that isn't true or false
    //Assign the first row (index + 2) and stop the loop
    if (data[i][colIndex] !== true && data[i][colIndex] !== false) {
      firstRow = i + 2;
      break;
    }

  }

  //If the event row isn't the same as the first row
  //Get the range above the event and uncheck it
  if (row !== firstRow) {
    sheet.getRange(firstRow, col, row - firstRow, 1).uncheck();
  }

  //Loop down from the event
  for (let i = rowIndex + 1; i < data.length; i++) {

    //In the first cell that isn't true or false
    //Assign the last row (same as index) and stop the loop
    if (data[i][colIndex] !== true && data[i][colIndex] !== false) {
      lastRow = i;
      break;
    }

  }

  //If the event column isn't the same as the last column
  //Get the range under the event and uncheck it
  if (row !== lastRow) {
    sheet.getRange(row + 1, col, lastRow - row, 1).uncheck();
  }

}
