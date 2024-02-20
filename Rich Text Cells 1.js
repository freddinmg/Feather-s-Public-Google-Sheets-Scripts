/* @OnlyCurrentDoc */

function richTextCells() {
    /**
    *  * A function to make rich text format using a cell as a reference. This is somewhat unnecessary, since I can just use .getDisplayValue() and edit it then, but. I started this and I wanna finish it!!
    * @param {number} arg1 - Some range (to use from.)
    * @param {number} arg2 - Some range (to fill.)
    * @param {array} arg3 - Strings to find in phrase.
    * @param {array} arg4 - Some strings; bold, italic,underline, strikethrough, or normal. Stacking effects not programmed yet. "Inherit" will override all other styles for that specific substring.
    * @param {array} arg5 - Some colors in hex code.
    * @param {string} arg6 - A string spelling out a font family. Does not support multiple font families.
    * @param {number} arg7 - A font size (by pixels.) Does not support multiple sizes.
    
    * @customFunction
    **/ 
    function format_Cells_1(arg1, arg2, arg3=['Number','example'], arg4 = [['normal'],['normal']], arg5 = [['#000000'], ['#111111']], arg6 ='Century Gothic', arg7 = '14') {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheets()[0];
        var size = arg7 || 14;
        var normal = SpreadsheetApp.newTextStyle().setBold(false).setItalic(false).setUnderline(false).setStrikethrough(false).setFontSize(size).build(); 
        var bold = SpreadsheetApp.newTextStyle().setBold(true).setFontSize(size).build();
        var italic = SpreadsheetApp.newTextStyle().setItalic(true).setFontSize(size).build();
        var strikethrough = SpreadsheetApp.newTextStyle().setStrikethrough(true).setFontSize(size).build();
        var underline = SpreadsheetApp.newTextStyle().setUnderline(true).setFontSize(size).build();
        var sourceRange = sheet.getRange(arg1) || sheet.getRange("K11");
        var targetRange = sheet.getRange(arg2) || sheet.getRange("O11");
        var sourceRangeString = sourceRange.getDisplayValue(); 
        var targetRangeString = targetRange.getDisplayValue(); 
        //Currently unused, but may change in the future.
        var sourceString = arg3 || ['Number','example'];
        var richTextValue = SpreadsheetApp.newRichTextValue().setText(sourceRangeString);
        var style = arg4 || [[normal],[bold]];
        var font = arg6 || 'Century Gothic';
        
        var colorArr = arg5 || [['#000000'], ['#111111']];
        var style2 = [];
        

   // --------------------
    function cellWordsArray(cell) {
        var arr = cell.split(" ");
        return arr;
    }
    
    var theWords = cellWordsArray(sourceRangeString);
    
    var theWordsCopy = theWords.slice() ;
    
    // --------------------
    
     const findIndexes = (param1, param2) => {
      sourceString = [...param1];
      theWords = [...param2];
      //swap the arrays if the no. of array elements 
      //in the second array are greater than first
      if(sourceString.length < theWords.length) {
      [sourceString, theWords] = [theWords, sourceString];
      }
      //Loop through all the items of the smaller array
      //check if the element is present in the bigger array
      return theWords.map(s2 => sourceString.findIndex(s1 => s1 === s2));
      };
    
        
      var theWordsIndex2 = findIndexes(sourceString, theWordsCopy);

      var indexValues = [];
      var startIndexes = [];
      var valueLengths = [];

      var i;
        for (i = 0; i < theWordsIndex2.length; ++i) {
          var valueAtIndex = theWordsCopy.at(theWordsIndex2[i]);
          valueLength = valueAtIndex.length;
          indexValues.push(valueAtIndex);
          valueLengths.push(valueLength);
          sIndexes = sourceRangeString.indexOf(indexValues[i]);
          startIndexes.push(sIndexes);
        };

      // --------------------
      var j;
      for (j = 0, k = 0; j < indexValues.length, k < style.length; j++, k++) {


        var inherit1 = sourceRange.getRichTextValue();
        var inheritStyle = inherit1.getTextStyle();
        var inheritColor = inheritStyle.getForegroundColorObject();
        var inheritFont = inheritStyle.getFontFamily();
        var inheritSize = inheritStyle.getFontSize();
        var inheritBold = inheritStyle.isBold();
        var inheritItalic = inheritStyle.isItalic();
        var inheritStrike = inheritStyle.isStrikethrough();
        var inheritULine = inheritStyle.isUnderline();

        var inherit2 = SpreadsheetApp.newTextStyle().setFontFamily(inheritFont).setFontSize(inheritSize).setBold(inheritBold).setItalic(inheritItalic).setUnderline(inheritULine).setStrikethrough(inheritStrike).build();
        var inheritFontFamily = SpreadsheetApp.newTextStyle().setFontFamily(inheritFont).setFontSize(inheritSize).setBold(inheritBold).setItalic(inheritItalic).setUnderline(inheritULine).setStrikethrough(inheritStrike).build();

        var color2 = SpreadsheetApp.newTextStyle().setForegroundColorObject(inheritColor).build();
          
        // --------------------

        if (style[k] == "bold") { style2[k] = bold } else if (style[k] == "italic") { style2[k] = italic } else if (style[k] == "underline") { style2[k] = underline } else if (style[k] == "strikethrough") { style2[k] = strikethrough } else if (style[k] == "inherit") { style2[k] = inherit2 } else { style2[k] = normal };
        

        var fontFamily = SpreadsheetApp.newTextStyle().setFontFamily(font).build();
        var color = SpreadsheetApp.newTextStyle().setForegroundColor(colorArr[k]).build();

        if (style2[k] != inherit2) {
            richTextValue.setTextStyle(startIndexes[j], startIndexes[j] + valueLengths[j], style2[k]);
            richTextValue.setTextStyle(startIndexes[j], startIndexes[j] + valueLengths[j], color);
            richTextValue.setTextStyle(startIndexes[j], startIndexes[j] + valueLengths[j], fontFamily);
        }
        else {
            richTextValue.setTextStyle(startIndexes[j], startIndexes[j] + valueLengths[j], inherit2[k]);
            richTextValue.setTextStyle(startIndexes[j], startIndexes[j] + valueLengths[j], color2);
            richTextValue.setTextStyle(startIndexes[j], startIndexes[j] + valueLengths[j], inheritFontFamily);
            
        };
        
      }
        
        targetRange.setRichTextValue(richTextValue.build());

    };

    //This is where you put the testing functions and whatnot!
    
    format_Cells_1("F3", "J3", ['swung','landed', 'get', 'expected'], [['bold'],['underline'],['inherit'],['italic']], [["#ff00ff"],["#ffe599"],['#7ed66e'],['#256D7B']], 'Iceland', 16);

}
/* @OnlyCurrentDoc */

