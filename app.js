
//string reverse program

function stringReverse(string){

    document.write("<h1>Cheack Reverse String</h1> <br>");
    var emptyString = "";
    var stringLength = string.length - 1;

    for(var i = stringLength  ; i >= 0; i-- ){

        emptyString += string[i];
    }

    return emptyString;
}

var result = stringReverse("332145");
document.write("The Reverse Of 332145 is :" + result);



// cheak string is pailandrome or not

function cheackPalandrome(checkString){

    document.write("<h1>Cheack palandrome String</h1> <br>");
    var emptyString = "";
    var stringLength = checkString.length - 1;

    for(var i = stringLength  ; i >= 0; i-- ){

        emptyString += checkString[i];
    }

    if(checkString === emptyString){
        document.write("The String Is Palandrome :");
    }

    else {
        document.write("The String Is Not Palandrome :");
    }

    return checkString;
}

var answer = cheackPalandrome("popi");
document.write(answer);


// sort in aplphabetial order

function alphabeticalOrder(word){
    document.write("<h1>Sort In Alphabetical Order</h1> <br>");
    
    return word.split('').sort().join('');
  }

document.write(alphabeticalOrder("azaib"));


// Each word Caps in String


function capEachWord(){

    document.write("<h1>Captilize Each Word </h1> <br>");
    var mySentence = "my name is azaib";
    var words = mySentence.split(" ");

    for (var i = 0; i < words.length; i++) {
        
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

var updated = words.join(" ");
return updated;
}

document.write(capEachWord()); 


// logest word in string

function findLongestWord(str) {
    document.write("<h1>Longest Word in string</h1> <br>");
    var strSplit = str.split(' ');
    var longestWord = 0;
    
    for(var i = 0; i < strSplit.length; i++){
    
        if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
var long = findLongestWord("azaib meer farhanmeer ");
document.write(long); 

// cheak vowels in string

function vowelCount(string) { 

    document.write("<h1>Count Vowels in String </h1> <br>");
    var count = string.match(/[aeiou]/gi).length;
    return count;
}

var result = vowelCount("the string");

document.write("the number of vowels  is :" + result);



// cheak a prime Number

function cheackPrimeNumber(cheackNum){

  document.write("<h1>Cheak Prime Number </h1> <br>");
    var isPrime = true;


if (cheackNum === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (cheackNum > 1) {

    
    for (var i = 2; i < cheackNum; i++) {
        if (cheackNum % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
       document.write("is a prime number ");
    } else {
        document.write("is a not prime number ");
    }
}
 return cheackNum;
}

document.write(cheackPrimeNumber("13"));


// return type of the data


function detect_data_type(value){

document.write("<h1>cheak type of data</h1> <br>");

var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
document.write(detect_data_type(false));
