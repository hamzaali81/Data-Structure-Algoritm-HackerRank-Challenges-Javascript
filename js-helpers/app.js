// const arr = ['hamza','ali','koko']

// const arr2=arr.map((el,id)=> {
 
//     return el
// //  console.log(el,id);
// })


// // OOP With Mosh
// // 4 pillars
// // Encapsulation
// // Abstraction
// // PolyMorphism
// // Inheritance

// // Procedural Implementation

// let baseSalary = 290000;
// let overtime = 10;
// let rate = 20;


// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime + rate)
    
// };

// OOP

// Encapsulation
// const employer = {
//     baseSalary: 290000,
//     overtime: 10,
//     rate: 20,
//     getWage: ()=> {
//         return this.baseSalary + (this.overtime + this.rate)
//     }
// }

// employer.getWage();

// Objects
// Creating Objects
// Factories and Constructor
// Primitives and Refrence types
// Working with properties

// Object literals


// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();

// factories and constructor


// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     }
// };

// const circle = {
//     radius: 1,
//     location: {
//         x: 2,
//         y: 2
//     }
// };

// function createCircle(radius) {
//     return  {
//         radius: 1,
//         location: {
//             x: 1,
//             y: 1
//         }
//     };
// };

// function createCircle(radius) {
//     return  {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// };

// const circle = createCircle(1);

// circle.draw();


// Constructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// };


// // Circle.call({}, 1);
// // Circle.call({}, [1,2,3,3]);
// const another = new Circle(1);
// another.location = { x: 1 };

// const propertyName = 'center';
// another[propertyName] = 'solid';

// delete another['location']

// console.log(another);

// for(let i in another){
//     // console.log(another);
//     console.log(another[i]);
// };

// var a=Object.keys(another);  // provide an array
// console.log(a);
// new String();
// new Boolean();
// new Number();




// Abstraction



function Circle(radius) {
    this.radius = radius;
   
    this.defaultLocation = {x: 0, y: 0};

    this.computeOptimumLocation = function (factory) {
        console.log(factory);
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value){
        if(!value.x || !value.y){
            throw new Error('Invalid Location');

            defaultLocation = value;
        }
        }
    })
};

const circle = new Circle(1);
circle.defaultLocation = 1;
console.log(circle);

circle.computeOptimumLocation(10)