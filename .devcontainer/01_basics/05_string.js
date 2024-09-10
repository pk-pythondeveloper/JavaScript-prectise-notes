// const name="ramanujam";
// console.log(typeof(name))
// console.log(name[2])

const newstr=new String("paritosh-shahu") //new keyword is used to create an instance of an object that has a constructor function
// console.log(newstr)
// console.log(typeof(newstr))
// console.log(newstr[2])

// //+++++++++++++++++string methods++++++++++++++++ 
// console.log(newstr.length)//to find the length of string
// // console.log(newstr.toUpperCase())
// console.log(newstr.charAt(4));//Find the charcter according to index wise
// console.log(newstr.indexOf('s'));//find the index of charcter
// console.log(newstr.substring(2,6));//get the substring note(its slice less thenlength) its not working on negative indexs

//+++++++++slice+++++
const str1=new String('prince yadav')
// console.log(str1.slice(2,6))
console.log(str1.slice(-1,-8))

const name=new String("           hitesh     ")
console.log(name)
console.log(name.trim())//its used to time spaces it has two more function starttrim and endtrim

const gmail=new String('princeyadav5972@gmail.com')

console.log(gmail.replace('princeyadav','pk'))//its is replace the word woth given word
console.log(gmail.includes('@123'))//its use to check give value is in string or not

// +++++++++++++split+++++++++++++++imp
const str2=new String("to ioih kjd ssg")
console.log(typeof(str2))  //we get type is object
console.log(str2.split('-'))//its split according to dash
console.log(str2.split(' '))//it split according to space






