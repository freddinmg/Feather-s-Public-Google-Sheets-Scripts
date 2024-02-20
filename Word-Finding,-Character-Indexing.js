/* @OnlyCurrentDoc */
function wordsIndex() {
  var wholeString = "Effect a part of a concatenated sentence. (1.5)";
  //var wholeString = "Effect a part of a concatenated sentence. (1.5)";
  var subString = 'part';
  //var subString = 'part';
  var start = wholeString.indexOf(subString);
  //var startOffset = start + 1;

  function cellWordsArray(cell) {
  var arr = cell.split(" ");
  return arr;
  }
  var stringArray = cellWordsArray(wholeString);
  var wordIndex = stringArray.indexOf(subString);
  var wordNumber = wordIndex + 1;

  console.log('The substring "' + subString + '" is at index ' + wordIndex + ' of the string: "'+ wholeString + '"');
  console.log('That means that "'+ subString +'" is substring number '+ wordNumber + ' in the whole string.') 

}


function lettersIndex() {
  var wholeString = "Don't (Do NOT) put peanut butter on the dog's nose.";
  //var wholeString = "Effect a part of a concatenated sentence. (1.5)";
  var subString = "put";
  //var subString = 'sentence';
  var start = wholeString.indexOf(subString);
  var sSLength = subString.length;
  var wSLength = wholeString.length;
  var indexNum1 = start + sSLength;

  console.log('There are '+ start + ' characters before "'+subString+'."');
  console.log('These characters begin at index '+ start + ' and end at index '+ indexNum1+'.');
  console.log('Keep in mind that punctuation touching the string might also be counted!');
  console.log('The string "'+ wholeString +'" has a length of: ' + wSLength);  

}


function substringLength() {
  var wholeString = "Effect a part of a concatenated sentence. (1.5)";
  //var wholeString = "Effect a part of a concatenated sentence. (1.5)";
  var subString = 'Effect';
  //var subString = 'Effect';
  var sSLength = subString.length;
  var wSLength = wholeString.length;

  console.log('The substring "' + subString + '" has a length of: '+ sSLength);
  console.log('The string "'+ wholeString +'" has a length of: ' + wSLength);  
}


//Source for this code: https://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string
function nthIndexLetter (search, n) {
  var wholeString = "Effect a part of a concatenated sentence. (1.5). More sentence.";
  //var wholeString = "Effect a part of a concatenated sentence. (1.5). More sentence.";
  var search = 'sentence';
  //var search = 'sentence';
  //n = searching for occurence number what? 1 to 2 in the example case.
  var n = 1;

  var myArray = [];
    for(var i = 0; i < wholeString.length; i++) { //loop thru string to check for occurrences
        if(wholeString.slice(i, i + search.length) === search) { //if match found...
            myArray.push(i); //store index of each occurrence           
        }
    } 
    console.log('Occurence number '+ n + ' of the substring "'+search+'" starts at (character) index '+ myArray[n - 1] + '.');
    return myArray[n - 1]; //first occurrence stored in index 0
}


 //Source for a majority of this code: https://javascript.plainenglish.io/how-to-find-indexes-of-all-occurrences-of-an-element-in-a-javascript-array-7504c7ee3da7 (Also uses above soource.)
function nthIndexWord (search, n) {
  //var wholeString = "Effect a part of a concatenated sentence. (1.5). More sentence.";
  var wholeString = "Effect a part of a concatenated sentence. (1.5). More sentence.";
  //Keep in mind: you may need the punctuation the get the results you want. If there is an occurrence of the relevant substring with/without different punctuation, it will count separately.
  var search = 'sentence.';
  //n = searching for occurence number what? Start at 1. 1 to 2 in the example case.
  var n = 1;
  
  function cellWordsArray(cell) {
  var arr = cell.split(" ");
  return arr;
  } 
  var theWords = cellWordsArray(wholeString);

  const myArray = theWords.reduce((a, e, i) => {
    if (e === search)
      a.push(i);
    return a;
    }, []);
    
  var wordIndex =  myArray[n -1];

  console.log(myArray);
  console.log('Occurence number '+ n +' of the substring "'+ search +'" is at (string) index '+ wordIndex +'.');
  console.log('This means this specific instance of the searched substring is string number '+ (wordIndex + 1) +'.');
  return wordIndex;

}

