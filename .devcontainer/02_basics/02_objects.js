//singleton

//object literals

//declearing symbol and use it

const mySym=Symbol("key1")


const jsuser={
    name:"hitesh",
    "full name":"prince kumar",//we cant access full name using .
    email:"princer@gmail.com",
    age:22,
    [mySym]:"key1",//this way to decelaring key of symbol
    isloggeddin:false,
}
//accesing object 
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["email"])
//console.log(jsuser.full name) cant access using .
console.log(jsuser["full name"])
console.log(jsuser[mySym]) //its a proper diffrent way to use symbol
console.log(typeof(mySym))//now you get type of is symbol

//change or overide value

jsuser.email='pk5789@gmail.com'  //first way
jsuser['email']='pk588888@gmail.com' //second way
console.log(jsuser["email"])

//freeze :now we cant change the obejct

//Object.freeze(jsuser)  //now it freeze the user 
jsuser['email']='pk511111@gmail.com'
console.log(jsuser)

//now we apply function
jsuser.greeting=function(){
    console.log('hello js user');
}
console.log(jsuser.greeting);//undifined
console.log(jsuser.greeting());

//
jsuser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`); //herewe rafer value
}
//this help to accesing all values
console.log(jsuser.greeting);
console.log(jsuser.greetingtwo());