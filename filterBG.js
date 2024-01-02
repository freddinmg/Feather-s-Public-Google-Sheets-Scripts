/* @OnlyCurrentDoc */
var filterSheet = ss.getSheetByName("Filters");
var newName1 = filterSheet.getRange("B19").getValue();
var newName2 = filterSheet.getRange("E19").getValue();
var newName3 = filterSheet.getRange("H19").getValue();
var newName4 = filterSheet.getRange("K19").getValue();
var newName5 = filterSheet.getRange("N19").getValue();
var propertyCell = "A1";
var filterCell = "B1";
var refTables = ss.getSheetByName("Reference Tables");


  function filterGas() {
    var newSheet = ss.insertSheet();
    newSheet.setName(newName1);
    var allPage = newSheet.getRange("A1:Z1000");
    allPage.applyRowBanding().setHeaderRowColor("#8bc34a").setSecondRowColor("#eef7e3");
    var firstColumn = newSheet.getRange("A1:A");
    var firstRow = newSheet.getRange("A1:1");
    var dataArea1 = refTables.getRange("Z25").getValue();
    var dataArea2 = dataArea1.toString();
    var dataArea3 = newSheet.getRange(dataArea2);
    ss.getSheetByName(newName1).getRange("A1").setFormula("=ARRAYFORMULA(GasA)")
    ss.getSheetByName(newName1).getRange("B1").setFormula("=TRANSPOSE(SORT(TRANSPOSE(INDIRECT(GasFRange)),FilGasProp,FilGasOr))")
    firstColumn.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setFontColor("#6aa84f");
    firstRow.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setTextRotation(45).setFontColor("white");
    dataArea3.setFontSize(16).setFontFamily("Iceland");

  };

   function filterLiquid() {
    var newSheet = ss.insertSheet();
    newSheet.setName(newName2);
    var allPage = newSheet.getRange("A1:Z1000");
    allPage.applyRowBanding().setHeaderRowColor("#4dd0e1").setSecondRowColor("#e0f7fa");
    var firstColumn = newSheet.getRange("A1:A");
    var firstRow = newSheet.getRange("A1:1");
    var dataArea1 = refTables.getRange("Z26").getValue();
    var dataArea2 = dataArea1.toString();
    var dataArea3 = newSheet.getRange(dataArea2);
    ss.getSheetByName(newName2).getRange("A1").setFormula("=ARRAYFORMULA(LiquidA)")
    ss.getSheetByName(newName2).getRange("B1").setFormula("=TRANSPOSE(SORT(TRANSPOSE(INDIRECT(LiquidFRange)),FilLiquidProp,FilLiquidOr))")
    firstColumn.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setFontColor("#45818e");
    firstRow.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setTextRotation(45).setFontColor("white");
    dataArea3.setFontSize(16).setFontFamily("Iceland");

  };

   function filterStone() {
    var newSheet = ss.insertSheet();
    newSheet.setName(newName3);
    var allPage = newSheet.getRange("A1:Z1000");
    allPage.applyRowBanding().setHeaderRowColor("#bdbdbd").setSecondRowColor("#f3f3f3");
    var firstColumn = newSheet.getRange("A1:A");
    var firstRow = newSheet.getRange("A1:1");
    var dataArea1 = refTables.getRange("Z27").getValue();
    var dataArea2 = dataArea1.toString();
    var dataArea3 = newSheet.getRange(dataArea2);
    ss.getSheetByName(newName3).getRange("A1").setFormula("=ARRAYFORMULA(StoneA)")
    ss.getSheetByName(newName3).getRange("B1").setFormula("=TRANSPOSE(SORT(TRANSPOSE(INDIRECT(StoneFRange)),FilStoneProp,FilStoneOr))")
    firstColumn.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setFontColor("#666666");
    firstRow.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setTextRotation(45).setFontColor("white");
    dataArea3.setFontSize(16).setFontFamily("Iceland");
    
  };

   function filterMetal() {
    var newSheet = ss.insertSheet();
    newSheet.setName(newName4);
    var allPage = newSheet.getRange("A1:Z1000");
    allPage.applyRowBanding().setHeaderRowColor("#f7cb4d").setSecondRowColor("#fef8e3");
    var firstColumn = newSheet.getRange("A1:A");
    var firstRow = newSheet.getRange("A1:1");
    var dataArea1 = refTables.getRange("Z28").getValue();
    var dataArea2 = dataArea1.toString();
    var dataArea3 = newSheet.getRange(dataArea2);
    ss.getSheetByName(newName4).getRange("A1").setFormula("=ARRAYFORMULA(MetalA)")
    ss.getSheetByName(newName4).getRange("B1").setFormula("=TRANSPOSE(SORT(TRANSPOSE(INDIRECT(MetalFRange)),FilMetalProp,FilMetalOr))")
    firstColumn.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setFontColor("#bf9000");
    firstRow.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setTextRotation(45).setFontColor("white");
    dataArea3.setFontSize(16).setFontFamily("Iceland");
  };

   function filterOther() {
    var newSheet = ss.insertSheet();
    newSheet.setName(newName5);
    var allPage = newSheet.getRange("A1:Z1000");
    allPage.applyRowBanding().setHeaderRowColor("#cca677").setSecondRowColor("#f8f2eb");
    var firstColumn = newSheet.getRange("A1:A");
    var firstRow = newSheet.getRange("A1:1");
    var dataArea1 = refTables.getRange("Z29").getValue();
    var dataArea2 = dataArea1.toString();
    var dataArea3 = newSheet.getRange(dataArea2);
    ss.getSheetByName(newName5).getRange("A1").setFormula("=ARRAYFORMULA(OtherA)")
    ss.getSheetByName(newName5).getRange("B1").setFormula("=TRANSPOSE(SORT(TRANSPOSE(INDIRECT(OtherFRange)),FilOtherProp,FilOtherOr))")
    firstColumn.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setFontColor("#b45f06");
    firstRow.setFontSize(14).setFontFamily("Comfortaa").setFontWeight("bold").setTextRotation(45).setFontColor("white");
    dataArea3.setFontSize(16).setFontFamily("Iceland");
  };
  
