// console.log('hello world');
// let lastName='babbar';

// let firstname=new String('love');
// let message='This is my first message';
// let words=message.split('   ');
// console.log(words);

// let date=new Date();

// let date2=new Date();
// console.log(date);

//ARRAY IN JS.
//  let numbers=[1,4,5,7];
//  numbers.push(9);
//  console.log(numbers);
//  //CHECK NUMBER EXISTANCE OF AN ARRAY.
//  console.log(numbers.includes(7));
//  console.log(numbers.indexOf(4,2));


//  let courses=[
//     {no:1,naam:'love'},
//     {no:2,naam:'Rahul'}
//  ];
//  console.log(courses);
//  //SEARCHING

//  let course=courses.find(function(course){
//     return course.naam=='love';
//  })
//  console.log(course);
 //REMOVING ELEMENT 
// let numberss=[1,2,3,4,5,6,7];
// numberss.pop();
// numberss.shift();
// numberss.splice(2,3);
// console.log(numberss);

//EMPTYING AN ARRAY.

let numberss=[1,2,3,4,5,6,7];
numberss.length=0;
console.log(numberss);

//COMBINING  && SLICING IN AN ARRAYS.
let sar=[1,2,3];
let oj=[4,5,6];
let combined=sar.concat(oj);
console.log(combined);

//SLICING.
let marks=[10,20,30,40,50,60,70,80];
let sliced=marks.slice(2,3);
console.log(sliced);

//SPREAD OPERATOR
let sar0=[1,2,3];
let ooj=[4,5,6];
let combined2=[...sar0,...ooj];
console.log(combined2);

//ITERATING AN ARRAY
// let saroj=[10,20,30,40,50];

// for(let value of saroj){
//    console.log(value);
// }

// saroj.forEach(function(numbers3){
//    console.log(numbers3);

// });


//JOINING OF ARRAYS
// let saroj2=[10,20,30,40,50];
// const joined=saroj2.join('');
// console.log(joined);

// //SPLITS MEASSAGE.
// let message='this is my';
// let parts=message.split(' ');
// console.log(parts);


//SORTING
// let number5=[2,3,6,1,0,5];
// number5.sort();
// console.log(number5);

//FILTERING ARRAYS
// let number5=[1,2,-2,-4,-8,9,0];
//  let numbers6=number5.filter(function(value){

//  return value >= 0;

// });

// console.log(numbers6);
//MAPPING ARRAYS

// let number5=[1,2,-2,-4,-8,9,0];
// let items= number5.map(function(value){
//    return 'student_no' +value;

// });
// console.log(items);


//MAPPING WITH OBJECTS
let number=[1,2,-6,-9];
let filtered=number.filter(value => value => 0);

let items= filtered.map(function(num){
   return {value : num};
})
console.log(items);