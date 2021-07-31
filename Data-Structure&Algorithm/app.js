// javascriptloops
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s


// function vowelsAndConsonants(s) {
//   var a = s.split("");
//   var arr = [];
//   for (var i = 0; i < a.length; i++) {
//     var b = a.join("");
//     var c = b.charCodeAt(i);
//     arr.push(c);
//   }
//   return arr.sort((a, b) => a - b);
// }
// // console.log(String);
// var ok = vowelsAndConsonants("javascriptloops");

// ok.map((el) => {
//   console.log(String.fromCharCode(el));
//   if(ok.indexOf(el))
//   String.fromCharCode(el);
// });


// console.log(res);
// for(var j=0;j<ok.length;j++){
// //    console.log(String.fromCharCode(ok[j]));
//     return String.fromCharCode(ok[j])
// };

// 2.Vowels
// function vowel(a) {
//     var vowels=['a','e','i','o','u'];
//     // console.log(...a);

//     var arr2 = a.split('');
//     for (var i=0; i<arr2.length; i++){
//         // console.log(vowels[i]);
//         if(vowels.indexOf(arr2[i]) > -1){
//             console.log(arr2[i]);
//         }
//     }

//     for (var j=0; j<arr2.length; j++){
//         if(vowels.indexOf(arr2[j]) < 0){
//             console.log(arr2[j]);
//         }
//     }
    
// }

// vowel('javascriptloop');
// console.log();
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s


// 3. Task

// Complete the following functions in the editor below:

// getArea(length, width): Calculate and return the area of a rectangle having sides  and .
// getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides  and .
// The values returned by these functions are printed to stdout by locked stub code in the editor.


// function getArea(length, width) {
//     let area;
//     // Write your code here
//     area = length * width
//     return area;
// }


// function getPerimeter(length, width) {
//     let perimeter;
//     // Write your code here
//     perimeter =  2*(length + width) ;
//     return perimeter;
// }

// var a = getArea(3, 4.5);
// var p = getPerimeter(3, 4.5);
// console.log(p);


// 4.

// function regexVar() {
//     /*
//      * Declare a RegExp object variable named 're'
//      * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
//      */
    
    
//     /*
//      * Do not remove the return statement
//      */
//     const re = {
//         vowels: 'a,e,i,o,u',
//         checkfunction: ()=> {
//             console.log('this',this.vowels.split(','));
//         }
//     }
//     return re;
// }

// const a = regexVar();
// console.log(a);
// console.log(a.vowels);

// 5. Array sun in sigle value

// function simpleArraySum(ar) {
//     // Write your code here
//     console.log(ar);
//   var a= ar.reduce((acc, current)=> {
//     return acc + current;
//     }, 0);

//     console.log(a);
//     return a

// }

// var b=simpleArraySum([1,2,3,4,10,11]);
// console.log(b);

// Compare Tuples
//indexOf
function compareTriplets(a, b) {
    // Write your code here
    var winPrediction = 0;
    var resArr = [];
    for (var i = 0; i<a.length; i++){
        // console.log(a.indexOf(a[i]));
        for (var j = 0; j < b.length; j++){
            if(a.indexOf(a[i]) === b.indexOf(b[j])){
                resArr.push(winPrediction);
                resArr.splice(0,1);
                console.log(a.indexOf(1));
         }
        else {
            resArr.push(1);
            // resArr.splice(0)
        }
        }
    }
    console.log('resArr',resArr);
    return resArr;
};

compareTriplets([2,3,2],[1,2,3])

// function compareTriplets(a, b) {
//     // Write your code here
//    [...a,...b].reduce((acc = [], currentValue)=> {
//       // acc.push(currentValue);
//       if(currentValue){
//          acc.push(true)

//       }

//    }, []);
   
// };

// compareTriplets([1,2,3],[3,2,1]);

// var arr = [1,2,3];

// var a =arr.reduce((acc, cur)=> {
//    console.log(acc);
//    return acc + cur;
// }, 0);

// console.log(a);



// return random element from an array