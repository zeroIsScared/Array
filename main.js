
  // 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
  
// const camelize = (str)=>{
//   const strCamelized= [];

// for(i=0; i< str.length; i++){
//   if(str[i] !== '-' ){
//      if(str[i-1] === '-' ){
//        strCamelized.push( str[i].toUpperCase());
//     } 
//     else 
//     {strCamelized.push( str[i]);

//     }

//   }
 
// }
// return strCamelized.join('');
// }
//_______________________________________________________________________________________


// 2. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
// equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// function filterRange(arr, a, b){
 
//    return filtered = arr.filter(value =>  value >= a && value <= b);

  
// }
// let arr = [5,8,9,45,78,12];
// filterRange(arr,5,10);
// console.log(filtered);
//______________________________________________________________________________________

// 3. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those 
// that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// function filterRangeInPlace(arr, a, b){

// const elementsToDelete = [];
// arr.forEach (function(element){
//   if(!( a <= element && element <= b)){
// elementsToDelete.push(element);
//   }

// });
  
//  elementsToDelete.forEach(function(element) {
//   if (arr.includes(element)){
//     arr.splice(arr.indexOf(element),1);
//     console.log((element));
//   }
//  });  
 
// }

// let arr = [5,88,45,3,10,12];
// filterRangeInPlace(arr,5,10);
// console.log(arr);
//____________________________________________________________________________________

// 4.Sort in decreasing order
// function sortDesc (arr){
//  return arr.sort((a, b) => b - a);
// }

// let arr = [5,88,45,3,10,12];
// console.log(sortDesc(arr));
//________________________________________________________________________________

// 5.We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// function copySorted(arr){
//   return copyArr = arr.slice().sort();  
  
// }

// let arr = ['a', 'f','g', 'b'];
// console.log(copySorted(arr));
// console.log(arr);

//__________________________________________________________________________________

//7.You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// console.log(users[0].name);

// function names (users){
//   return  names = users.map(element => element.name);
// }

// console.log(names(users));
//________________________________________________________________________________________________________

// 8. You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName,
//  where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// const newUsers = users.map((element,index) =>
//  users[index]= {  fullName :users[index]= `${element.name} ${element.surname}`, id: element.id});


// console.log(newUsers);
// console.log(users);
//________________________________________________________________________________________________________

//9. Sort users by age
// 
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// function sortByAge(users) {
//   const agesSorted = users
//                           .map(element => element.age)
//                           .sort((a,b)=>a-b);
// console.log(agesSorted);

// users.forEach(element => {
//   users.find
// });
// }

//__________________________________________________________________________________________________________
// 10.Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// const arr = [5, 7, 10];

// function shuffle(array) {
//     const initialArray = array.slice();
//     const indexArray = [];
//     let newIndex = null;

//     // console.log(initialArray);
//     for (let i = 0; i < initialArray.length; i++) {
//         newIndex = Math.floor(Math.random() * array.length);


//         console.log(i === 0);
//         console.log(indexArray.includes(newIndex));
//         console.log(indexArray.includes(newIndex));
//         if (i === 0) {
//             array[newIndex] = initialArray[i];
//             indexArray.push(newIndex);
//         }

//         else if (indexArray.includes(newIndex)) {

//             let anotherIndex;
//             do { anotherIndex = Math.floor(Math.random() * initialArray.length); }
//             while (indexArray.includes(anotherIndex));

//             array[anotherIndex] = initialArray[i];
//             indexArray.push(anotherIndex);
//         }

//         else if (!indexArray.includes(newIndex)) {
//             array[newIndex] = initialArray[i];
//             indexArray.push(newIndex);


//         }
//     }
//     return array;
// }

// console.log(shuffle(arr));

//---------------------------------------------------------------------------------------------

//11. Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(users) {

//     const ages = users.map(element => element.age);

//     return average = ages.reduce((a, b) => a + b, 0) / users.length;

// }

// console.log(getAverageAge(arr));

//__________________________________________________________________________________________

//12.Filter unique array members
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.
// function unique(arr) {
//   let uniqueItems = [];


//   for (i = 0; i < arr.length; i++) {
//       const occuranes = arr.filter(item => item.toLowerCase() === arr[i].toLowerCase());

//       if (occuranes.length === 1) {
//           uniqueItems.push(arr[i]);
//       }
//   }
//   return uniqueItems;
// }



// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O", "lana"
// ];
// console.log(unique(strings));

//_____________________________________________________________________________________
// 13.Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];



function groupById(arr){
const user = new Object();
arr.forEach((element) =>{
user[element.id] = {
element

}

});
return user;
}

let usersById = groupById(users);

console.log(usersById);