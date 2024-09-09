// stack (primitive data types)=>stack are used to store primitive datatypes
//Heap (non primitive datatypes)=>(heap are used to store non primitive datatypes

let name="ramanjumam"

let sec_name=name
name="radha"


console.log(name)
console.log(sec_name)
//In stack => when you change the referance of it can not affect the original value 

let obj1={
    'name':'ram',
    'email':'ram@123',
    'password':24534354
}
let obj2=obj1
obj2.email='ram@123gmail.com'
console.log(obj1)
console.log(obj2)

//In heap when we change in referance it also affect the original 