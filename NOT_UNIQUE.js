//Gotta look for the source for this! Sorry, it's deep in my bookmarks.

function NOT_UNIQUE(range) { 
   
  var allValues = ''; 
  var duplicates = []; 
 
  for (i in range) { 
    var thisRow = range[i]; 
    var thisRowString = thisRow.toString(); 
    var rowStringLength = thisRowString.legnth; 
    var thisRowString = thisRowString+rowStringLength;
    
    if (allValues.indexOf(thisRowString) == -1) { 
      allValues = allValues + thisRowString; 
    } else { 
      var duplicatesString = duplicates.toString(); 
      if (duplicatesString.indexOf(thisRowString) == -1) { 
        duplicates.push(thisRow); 
      } 
    } 
  } 
  return duplicates; 
} 
