//  filter: creates a new array filled with elements that pass a test provided by a function

const array = [1, 7, 3, 9, 4, 6]
function number(array) {
    return array>=4
}
console.log(array.filter(number))


// // map: Definition and Usage
// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// console.log(newArr);

// function myFunction(num) {
//   return num * 10;
// }


// difference between filter and map

// They both return a new array. map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically). filter returns a new array of the elements of the original array (with no change to the original values). filter will only return elements where the function you specify returns a value of true for each element passed to the function.

// So map returns the same number of elements as the original, but the element value will be changed

// Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Array.prototype.map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.