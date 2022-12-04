/* Refactorizar variables globales fuera de funciones*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
const newbookList=[...arr]
 newbookList.push(bookName);
 return newbookList
;
  
  // Change code above this line
}

// Change code below this line
function remove(arr,bookName) {
 const newList =arr.filter(peli => peli !=bookName)
    return newList;

    // Change code above this line
    
}

