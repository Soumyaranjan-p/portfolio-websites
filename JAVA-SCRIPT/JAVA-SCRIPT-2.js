//OBJECT  IN JS.
// let rectangle3={
//     length:1,
//     Breadth:2,

//     draw:function(){
//         console.log('draw');
//     }
// };
//FACTORY FUNCTION
// function rectangle(){
// let rectangle7={
//     length:1,
//     Breadth:2,

//     draw:function(){
//         console.log('drawing function');
//     }
// };
// return rectangle7;
// }

//CREATE OBJECT USING FACTORY FUNCTION
 
// function Rectangle(len,Bre){
// return rectangle7={
//     length:len,
//    breadth:Bre, 

//     draw(){
//         console.log('drawing function');
//     }
// };
// }


//    let rectangleobj1=Rectangle(5,4);
//    let rectangl24=Rectangle(5,4);
//    let rectang34=Rectangle(5,4);


//CONSTRUCTOR FUNCTION.
//PASCAL  NOTATION --> FIRST LETTER OF EVERY WORD IS CAPITAL NUMBETR.

// function Rectangle(){
//     this.length=len;
// this.breadth=bre;
// this.draw= function(){
//     console.log('drawing');
// }
// } 


//OBJECT CREATION USING CONSTRUCTOR FUNCTION
// let  rectangleObject=new Rectangle(4,6);
// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let rEctangle1=new Function(
//     'length',
// 'this.length=len;
// ,this.breadth=bre;
// ,this.draw= function(){
//     console.log('drawing');
// }');


// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

let rectangle={
    length:2,
    breadth:4
};

//For-in loop
// for(let key in rectangle){
  
//console.log(key);
//ACESS THYE RECATNGLE VALUE
// console.log(key,rectangle[key]);
// }

// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }
//FOR OF LOOP
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length ' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }


//OBJECT-CLONNING.
let src={
    a:10,
    b:20,
    c: 30
};

// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

//CLONNING 2
// let dest=Object.assign({},src);
// console.log(dest);
// src.a++;
// console.log(dest);

//CLONNING -3
let dest={...src};
console.log(dest);
src.a++;
console.log(dest);

