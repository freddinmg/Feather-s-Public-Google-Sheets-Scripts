/* @OnlyCurrentDoc */
//This code is for run indexes!

function richTextCells3() {
/**
    *  * A function to make rich text format using a cell as a reference. This is somewhat unnecessary, since I can just use .getDisplayValue() and edit it then, but. I started this and I wanna finish it!!
    * @param {number} arg1 - Some range (to use from.)
    * @param {number} arg2 - Some range (to fill.)
    * @param {array} arg3 - Word indexes.
    * @param {array} arg4 - Some strings; bold, italic,underline, strikethrough, or normal. Stacking effects not programmed yet. "Inherit" will override all other styles for that specific substring.
    * @param {array} arg5 - Some colors in hex code.
    * @param {string} arg6 - A string spelling out a font family. Does not support multiple font families.
    * @param {number} arg7 - A font size (by pixels.) Does not support multiple sizes.
    
    * @customFunction
    **/ 
    function format_Cells_3(arg1, arg2, arg3=[[18,21],[0,7],[23,26]], arg4 = [['normal'],['normal']], arg5 = [['#000000'], ['#111111']], arg6 ='Century Gothic', arg7 = '14') {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheets()[0];
        var size = arg7 || 14;
        var normal = SpreadsheetApp.newTextStyle().setBold(false).setItalic(false).setUnderline(false).setStrikethrough(false).setFontSize(size).build(); 
        var bold = SpreadsheetApp.newTextStyle().setBold(true).setFontSize(size).build();
        var italic = SpreadsheetApp.newTextStyle().setItalic(true).setFontSize(size).build();
        var strikethrough = SpreadsheetApp.newTextStyle().setStrikethrough(true).setFontSize(size).build();
        var underline = SpreadsheetApp.newTextStyle().setUnderline(true).setFontSize(size).build();
        var sourceRange = sheet.getRange(arg1) || sheet.getRange("C11");
        var targetRange = sheet.getRange(arg2) || sheet.getRange("E11");
        var sourceRangeString = sourceRange.getDisplayValue(); 
        var runNumbers = arg3 || [[18,21],[0,7],[23,26]];
        // above originally "sourceString"
        var richTextValue = SpreadsheetApp.newRichTextValue().setText(sourceRangeString);
        var style = arg4 || [[normal],[bold]];
        var font = arg6 || 'Century Gothic';
        
        var colorArr = arg5 || [['#000000'], ['#111111']];
        var style2 = [];
        

   // --------------------
      var startIndexes = [];
      var endIndexes = [];

      var i; var j; var k;
        for (i = 0,j = 0,k = 1; i < runNumbers.length; i++, j+2, k+2) {
          var sIndex = runNumbers[i][j];
          var eIndex = runNumbers[i][k];
          startIndexes.push(sIndex);
          endIndexes.push(eIndex);
        };

     var l;
      for (l = 0, m = 0; l < runNumbers.length, m < style.length; l++, m++) {


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

        if (style[m] == "bold") { style2[m] = bold } else if (style[m] == "italic") { style2[m] = italic } else if (style[m] == "underline") { style2[m] = underline } else if (style[m] == "strikethrough") { style2[m] = strikethrough } else if (style[m] == "inherit") { style2[m] = inherit2 } else { style2[m] = normal };
        

        var fontFamily = SpreadsheetApp.newTextStyle().setFontFamily(font).build();
        var color = SpreadsheetApp.newTextStyle().setForegroundColor(colorArr[l]).build();

        if (style2[m] != inherit2) {
            richTextValue.setTextStyle(startIndexes[l], endIndexes[l], style2[m]);
            richTextValue.setTextStyle(startIndexes[l], endIndexes[l], color);
            richTextValue.setTextStyle(startIndexes[l], endIndexes[l], fontFamily);
        }
        else {
            richTextValue.setTextStyle(startIndexes[l], endIndexes[l], inherit2[m]);
            richTextValue.setTextStyle(startIndexes[l], endIndexes[l], color2);
            richTextValue.setTextStyle(startIndexes[l], endIndexes[l], inheritFontFamily);
            
        };
        
      }
        
        targetRange.setRichTextValue(richTextValue.build());
   

    };

    //This is where you put the testing functions and whatnot!
    format_Cells_3("F11","J11",[[0,2],[2,5],[7,9],[10,13],[15,18],[19,22],[22,26],[40,43]],[['normal'],['bold'],['inherit'],['underline'],['bold'],['strikethrough'],['strikethrough'],['inherit']], [['#000000'],['#000000'],['#000000'],['#FF0000'],['#00BB2D'],['#A93226'],['#D2B48C'],['#734700']], arg6 ='Mate SC', arg7 = '19');
    

}


