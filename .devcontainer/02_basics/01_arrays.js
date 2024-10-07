//++++++++++Aray+++++++
//array is collection of diffrent types of elements or same timps its and elements
//array is also mutable changeable 
// const myarr=[0,2,4,5,6,78,52,"prince"]
// const arr3=new Array('ram','nam','hai','mera')//array declearation by using contrctore
// console.log(myarr[3])


// //++++++++++methoids++++++
// const arr=[3,4,6,3,8,3,5]
// arr.push(8)//push the element end of array we can push array also with diffrent type of element
// arr.pop()//remove the last elements
// arr.unshift(11)//add the element starting of array
// arr.shift()//remove frist elemnt

// console.log(arr.includes(9))//we get value in boolean
// console.log(arr.indexOf(999));//get the index of given number when that num is not exists it give -1


// const newarr=arr.join()//its change the type of array to string
// console.log(typeof(newarr))

//slice
// const arr=[3,4,6,3,8,3,5]
// const new_arr=arr.slice(1,3) //its given pices of array but (less then end)
// console.log(new_arr)

// //splice
// const new_arr1=arr.splice(1,3) //its given part of array but it include end (imp it also menuplate the its cut the splice part form original array)
// console.log(new_arr1)

const arr1=['ram','shayam','thor','rita']
const arr2=['ramu','shayamu','thori','ritu']
// const mynew=arr1.concat(arr2)//it combine the two arr in new and assine in new object
// console.log(mynew)

//spread
// const my=[...arr1,...arr2]
// console.log(my)

//flat
const arr3=['ramu','shayamu','thori','ritu',[34,2848,278],7,282,[13,4,2,[882,24,224]]]
const arr4=arr3.flat(2) //it convert the nested array in in simple array we can also pass depth mean how much depth you want
console.log(arr4)

///

console.log(Array.isArray("prince"))  //it gives true and false according to given elents in side
console.log(Array.from("rampura village")) //its convert string to array when it able to chagnge it give empty array

console.log(Array.from({name:'ritesh'})) //it give empty array when it not able to change
