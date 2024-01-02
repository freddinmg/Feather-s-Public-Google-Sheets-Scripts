/* @OnlyCurrentDoc */

//DONT @ ME LMAOOO I still need to rework this script. It's so resource heavy.

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var displaySheet = ss.getSheetByName("Display");
var startCell = displaySheet.getRange("A1");

var spareEquations = ss.getSheetByName("Spare Equations");
var allSolidBool = spareEquations.getRange("IsAllCompareSolid").getValue();
var allLiquidBool = spareEquations.getRange("IsAllCompareLiquid").getValue();
var allGasBool = spareEquations.getRange("IsAllCompareGas").getValue();
var allMatchBool = spareEquations.getRange("IsAllCompareMatching").getValue(); //Script used in 34, 35, 36: are any true?


function onEdit(e) {
var tempStyle = displaySheet.getRange("G2").getValue();

    function alertMessage (message) {
  SpreadsheetApp.getUi().alert(message);
}

if (e && e.authMode == ScriptApp.AuthMode.LIMITED && (e.range.getA1Notation() == "G2" || e.range.getA1Notation() == "C25" || e.range.getA1Notation() == "E25")) {
    alertMessage("Loading conversion units/calculations...");}

    var gasT = sheet.getRange("GasTemps");
    var liquidT1 = sheet.getRange("LiquidTemps1");
    var liquidT2 = sheet.getRange("LiquidTemps2");
    var liquidT3 = sheet.getRange("LiquidTemps3");
    var stoneT1 = sheet.getRange("StoneTemps1");
    var stoneT2 = sheet.getRange("StoneTemps2");
    var metalT1 = sheet.getRange("MetalTemps1");
    var metalT2 = sheet.getRange("MetalTemps2");
    var otherT1 = sheet.getRange("OtherTemps1");
    var otherT2 = sheet.getRange("OtherTemps2");
    var cCells = [
        liquidT1, liquidT2, liquidT3, gasT
    ];
    var kCells = [
        stoneT1, stoneT2, metalT1, metalT2, otherT1, otherT2
    ];
    var all1 = displaySheet.getRange("DynamicListAll1");
    var all2 = displaySheet.getRange("DynamicListAll2");

  
    // °C °F
    //Format for All: Solid
    // 1
    var numberFormatKelvinA1 = [['#,##0.##" K"'], ['#,##0.##'], ['#,##0.##'] , ["#,##0.##"] , ['#,##0.##'] , ['#,##0.##'] , ['#,##0.##" K"'] , ['@'] , ['#,##0.0##" K"'] , ['#,##0.##"kg"'] , ['#,##0.0##'] , ['#,##0.00#'] , ['#,##0.##" kg/mol"'] , ['@' ], ['@']];
    var numberFormatCelsiusA1 = [['#,##0.##"°C"'], ['#,##0.##'], ['#,##0.##'] , ["#,##0.##"] , ['#,##0.##'] , ['#,##0.##'] , ['#,##0.##"°C"'] , ['@'] , ['#,##0.0##"°C"'] , ['#,##0.##"kg"'] , ['#,##0.0##'] , ['#,##0.00#'] , ['#,##0.##" kg/mol"'] , ['@' ], ['@']];
    var numberFormatFahrenheitA1 = [['#,##0.##"°F"'], ['#,##0.##'], ['#,##0.##'] , ["#,##0.##"] , ['#,##0.##'] , ['#,##0.##'] , ['#,##0.##"°F"'] , ['@'] , ['#,##0.0##"°F"'] , ['#,##0.##"kg"'] , ['#,##0.0##'] , ['#,##0.00#'] , 
    ['#,##0.##" kg/mol"'] , ['@' ], ['@']];

    //Format for All: Liquid
    // 2
    var numberFormatKelvinA2 = [ ['#,##0.##" K"'] , ['#,##0.##" K"'] , ['#,##0.##" K"'] , ['#,##0.##" K"'] , ['#,##0.##'] , ['#,##0.##'] , ["#,##0.##"], ['#,##0.##"kg"'], ['#,##0.##" K"'] , ['@'], ['@'], ['@'], ['@'], ['@'], ['@']];
    var numberFormatCelsiusA2 = [  ['#,##0.##"°C"'] , ['#,##0.##"°C"'] , ['#,##0.##"°C"'] , ['#,##0.##"°C"'] , ['#,##0.##'] , ['#,##0.##'] , ["#,##0.##"], ['#,##0.##"kg"'], ['#,##0.##"°C"'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@']];
    var numberFormatFahrenheitA2= [ ['#,##0.##"°F"'] , ['#,##0.##"°F"'] , ['#,##0.##"°F"'] , ['#,##0.##"°F"'] , ['#,##0.##'] , ['#,##0.##'] , ["#,##0.##"], ['#,##0.##"kg"'], ['#,##0.##"°F"'], ['@'], ['@'], ['@'], ['@'], ['@'],['@']];

    //Format for All: Gas
    // 3
    var numberFormatKelvinA3 = [ ['#,##0.##" K"'] , ['#,##0.##" K"'], ['#,##0.##'], ['#,##0.##'], ['#,##0.##'], ['#,##0.##"kg"'] , ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'] ];
    var numberFormatCelsiusA3 = [ ['#,##0.##"°C"'] , ['#,##0.##"°C"'], ['#,##0.##'], ['#'], ['#,##0.##'], ['#,##0.##"kg"'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'] ];
    var numberFormatFahrenheitA3 = [['#,##0.##"°F"'], ['#,##0.##"°F"'], ['#,##0.##'], ['#,##0.##'], ['#,##0.##'], ['#,##0.##"kg"'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@'], ['@']];

    //Format for general
    var numberFormatsGeneral = [['#,##0.##'] , ['#,##0.##'] , ['#,##0.##'] , ['#,##0.##'] , ['#,##0.##'] , ['#,##0.##'] , ["#,##0.##"], ['#,##0.##'], ['#,##0.##'], ['@'], ['@'], ['@'], ['@'], ['@'],['@']];

    function TempK(value) {
        value.setNumberFormat('#,##0.0##" K"');
    };

    function TempC(value) {
        value.setNumberFormat('#,##0.0##"°C"');
    };

    function TempF(value) {
        value.setNumberFormat('#,##0.000"°F"');
    };

    function tempAllSolid(x) {  
        switch (x) {
            case 'Kelvin':
                all1.setNumberFormats(numberFormatKelvinA1); all2.setNumberFormats(numberFormatKelvinA1);
                break;
                case 'Mixed':
                all1.setNumberFormats(numberFormatKelvinA1); all2.setNumberFormats(numberFormatKelvinA1);
                break;
            case 'Celsius':
                all1.setNumberFormats(numberFormatCelsiusA1); all2.setNumberFormats(numberFormatCelsiusA1);
                break;
            case 'Fahrenheit':
                all1.setNumberFormats(numberFormatFahrenheitA1); all2.setNumberFormats(numberFormatFahrenheitA1);
                break;
        }
    }

    function tempAllLiquid(x) { 
        switch (x) { 
            case 'Kelvin':
                all1.setNumberFormats(numberFormatKelvinA2); all2.setNumberFormats(numberFormatKelvinA2);
                break;
            case 'Celsius':
                all1.setNumberFormats(numberFormatCelsiusA2); all2.setNumberFormats(numberFormatCelsiusA2);
                break;
                case 'Mixed':
                all1.setNumberFormats(numberFormatCelsiusA2); all2.setNumberFormats(numberFormatCelsiusA2);
                break;
            case 'Fahrenheit':
                all1.setNumberFormats(numberFormatFahrenheitA2); all2.setNumberFormats(numberFormatFahrenheitA2);
                break;
        }
    }

    function tempAllGas(x) { 
        switch (x) {
            case 'Kelvin':
                all1.setNumberFormats(numberFormatKelvinA3); all2.setNumberFormats(numberFormatKelvinA3);
                break;
            case 'Celsius':
                all1.setNumberFormats(numberFormatCelsiusA3); all2.setNumberFormats(numberFormatCelsiusA3);
                break;
                case 'Mixed':
                all1.setNumberFormats(numberFormatCelsiusA3); all2.setNumberFormats(numberFormatCelsiusA3);
                break;
            case 'Fahrenheit': 
                all1.setNumberFormats(numberFormatFahrenheitA3); all2.setNumberFormats(numberFormatFahrenheitA3);
                break;
            }
        }
    

    if (allMatchBool == false) {
        all1.setNumberFormats(numberFormatsGeneral);
        all2.setNumberFormats(numberFormatsGeneral); 
    } else if (allMatchBool == true && allSolidBool == true ) { 
        tempAllSolid(tempStyle);
    } else if (allMatchBool == true && allLiquidBool == true ) {
        tempAllLiquid(tempStyle);
    } else if (allMatchBool == true && allGasBool == true ) {
        tempAllGas(tempStyle);
    };

    if (tempStyle == "Kelvin") {
        cCells.forEach(TempK);
        kCells.forEach(TempK);
    };
    if (tempStyle == "Mixed") {
        cCells.forEach(TempC);
        kCells.forEach(TempK);
    };
    if (tempStyle == "Celsius") {
        cCells.forEach(TempC);
        kCells.forEach(TempC);

    };
    if (tempStyle == "Fahrenheit") {
        cCells.forEach(TempF);
        kCells.forEach(TempF);

    };
if (e && e.authMode == ScriptApp.AuthMode.LIMITED && (e.range.getA1Notation() == "G2" || e.range.getA1Notation() == "C25" || e.range.getA1Notation() == "E25")) {
    alertMessage("Conversion units and calculations loaded!");
    }
  
};

