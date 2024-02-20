/* @OnlyCurrentDoc */
//This code is for word numbers, NOT indexes! Start count with 1 and not 0.

function richTextCells2() {
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
    function format_Cells_2(arg1, arg2, arg3 = [2, 6], arg4 = [['normal'], ['normal']], arg5 = [['#000000'], ['#111111']], arg6 = 'Century Gothic', arg7 = '14') {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    var size = arg7 || 14;
    var normal = SpreadsheetApp.newTextStyle().setBold(false).setItalic(false).setUnderline(false).setStrikethrough(false).setFontSize(size).build();
    var bold = SpreadsheetApp.newTextStyle().setBold(true).setFontSize(size).build();
    var italic = SpreadsheetApp.newTextStyle().setItalic(true).setFontSize(size).build();
    var strikethrough = SpreadsheetApp.newTextStyle().setStrikethrough(true).setFontSize(size).build();
    var underline = SpreadsheetApp.newTextStyle().setUnderline(true).setFontSize(size).build();
    var sourceRange = sheet.getRange(arg1) || sheet.getRange("C23");
    var targetRange = sheet.getRange(arg2) || sheet.getRange("E23");
    var sourceRangeString = sourceRange.getDisplayValue();
    var stringNumber = arg3 || [2, 6];
    var richTextValue = SpreadsheetApp.newRichTextValue().setText(sourceRangeString);
    var style = arg4 || [[normal], [bold]];
    var font = arg6 || 'Century Gothic';

    var colorArr = arg5 || [['#000000'], ['#111111']];
    var style2 = [];


    function cellWordsArray(cell) {
        var arr = cell.split(" ");
        return arr;
    }

    var theWords = cellWordsArray(sourceRangeString);

    var stringIndex = stringNumber.map((x) => x - 1);

var g; var h; var charCount = [];
for(g = 0, h = 0; g < theWords.length, h < stringIndex.length ; h++, g = stringIndex[h]) {
  var prevWords = theWords.slice(0,stringIndex[h]);
  var wordsChars = prevWords.join(" ");
  charCount.push(wordsChars.length+1);
};

var indexValues = [];
var startIndexes = charCount;
var valueLengths = [];

var i;
for (i = 0; i < stringNumber.length; ++i) {
    var valueAtIndex = theWords.at(stringIndex[i]);
    valueLength = valueAtIndex.length;
    indexValues.push(valueAtIndex);
    valueLengths.push(valueLength);

};

var endIndexes = startIndexes.map(function (num, idx) {
return num + valueLengths[idx];
});

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

    if (style[k] == "bold") { style2[k] = bold } else if (style[k] == "italic") { style2[k] = italic } else if (style[k] == "underline") { style2[k] = underline } else if (style[k] == "strikethrough") { style2[k] = strikethrough } else if (style[k] == "inherit") { style2[k] = inherit2 } else { style2[k] = normal };

    var fontFamily = SpreadsheetApp.newTextStyle().setFontFamily(font).build();
    var color = SpreadsheetApp.newTextStyle().setForegroundColor(colorArr[k]).build();

    if (style2[k] != inherit2) {
        richTextValue.setTextStyle(startIndexes[j], endIndexes[j], style2[k]);
        richTextValue.setTextStyle(startIndexes[j], endIndexes[j], color);
        richTextValue.setTextStyle(startIndexes[j], endIndexes[j], fontFamily);
    }
    else {
        richTextValue.setTextStyle(startIndexes[j], endIndexes[j], inherit2[k]);
        richTextValue.setTextStyle(startIndexes[j], endIndexes[j], color2);
        richTextValue.setTextStyle(startIndexes[j], endIndexes[j], inheritFontFamily);

    };
}

targetRange.setRichTextValue(richTextValue.build());

    };

    //This is where you put the testing functions and whatnot!
    format_Cells_2("F7","J7",[2,4,5,11,13,33,34,37,38,39],[['bold'],['italic'],['normal'],['inherit'],['inherit'],['normal'],['bold'],['normal'],['inherit'],['italic']], [['#287233'], ['#F39F18'],['#3D642D'],['#F54021'],['#CF9FFF'],['#3E5F8A'],['#592321'],['#CF9FFF'],['#E63244'],['#000000']], arg6 ='Bubblegum Sans', arg7 = '14');
    
}

