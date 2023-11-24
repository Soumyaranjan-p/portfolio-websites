//JS-4-FUNCTIONS
 
// function run(){
//     console.log('run');
// }
// //function call or INVOKE
// run();


//FUNCTION ASSIGNMENT
//  let stand =function walk() {
//     console.log('walking');
// };
// stand();
 

// let x=1;
// x='a';
// console.log(x);
// function  sum (a, b){
//     return a+b;
// }
// console.log(sum(1,2));


// let x=1;
// x='a';
// console.log(x);

// function  sum (a, b){
//     console.log(arguments);
//     return a+b;
// }

// let ans=sum(1,2);


 //SPREAD OPERATOR
//  function sum(...args){
//     console.log(args);
//  }
//  sum(1,2,3,4,5,6);

//DEFAULT PARAMETERS
// function intrest(p,r=6,y=10){
//    return p*r*y/100;
//  }
//  console.log(intrest(10));

//GETTER AND SETTER
// let person={
//     fname:'saroj',
//     lname:'hiii',
//     get  fullname()  {
//         return  '${person.fname} ${person.lname}';
//     },
//    set fullname(value)  {
//        let parts=value.split(' ');
//        this.fname=parts[0];
//        this.lname=parts[1];
//     }
   
// };
// // console.log(person);
// person.fullname ='rahul kumar';

// console.log(person.fullname());



 //TRY AND CATCH BLOCK
//  let person={
//     fname:'saroj',
//     lname:'hiii',
//     get  fullname()  {
//         return  '${person.fname} ${person.lname}';
//     },
//    set fullname(value)  {
//     if(typeof value!==string){
//         throw new error("you have not sent an error.");
//     }
//        let parts=value.split(' ');
//        this.fname=parts[0];
//        this.lname=parts[1];
//     }
   
// };
// try{
   
// person.fullname =true;
// }
// catch(e){
//     alert(e);

// }

// console.log(person.fullname);

///SCOPE
// {
//     let a=89;
//     console.log(a);
// }
// for(let i=0;i<10;i++){
//     console.log(i);
// }
 

