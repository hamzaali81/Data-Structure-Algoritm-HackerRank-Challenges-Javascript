function myFunc(a,b) {
    var newArr= [...a,...b]
    var arr=[];
    for(var i = 0; i<newArr.length;i++){
        console.log(i);
        if(newArr.indexOf(newArr[i]) === i){      
            arr.push(newArr[i]);
        }
    }
    return arr
    }
    

myFunc([1, 2, 3], [3, 4, 5]);
var result=myFunc([1, 2, 3], [3, 4, 5]);
console.log(result);

// var arr1 = [1,2,3];
// var arr2 = [3,4,5];

// var arrRes = [];
// console.log(arrRes.push(...arr1,...arr2));

// 02 Case

// Sample Input 0

// 3
// 4.5
// Sample Output 0

// 13.5
// 15

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
// **/
// function getArea(length, width) {
//     let area;
//     // Write your code here
    
//     return area;
// }

// /**
// *   Calculate the perimeter of a rectangle.
// *	
// *	length: The length of the rectangle.
// *   width: The width of the rectangle.
// *   
// *	Return a number denoting the perimeter of a rectangle.
// **/
// function getPerimeter(length, width) {
//     let perimeter;
//     // Write your code here
    
//     return perimeter;
// }

// Data Structure & Algorithm