// DEMONSTRATE NESTED OBJECT DESTRUCTURING //

/* ALGORITHM OF THIS PROGRAMME

*.DECLARING VARIABLES
*CREATING OBEJECT 
*DECLARING ANOTHER VARIABLE AND MAKING AS OBEJECT 
*AFTER WE DO CONSOLE.LOG 
*/

let student = {
    name:'Dhaksh',
    age:23,
    course:'backend developement',
    fees:60000
}
let { name ,age ,course ,fees } = student;

console.log(name);
console.log(age);
console.log(course);
console.log(fees);