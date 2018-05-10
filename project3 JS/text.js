// var name = [4,6,9];
// name.foo="fff";

// for (let key of name) {
//
//   console.log(key);
// }
// for (var variable in name) {
//  {
//       console.log(name[variable]);
//
//   }
// }
// for (var key of name) {
//     console.log(key);
// }
// var x=5;
// while (x>0) {
//   console.log(x--);
// }
// var x=5;
// do {
//   console.log(x--);
// } while (x>0);
// var x=4;
//  do {
//    console.log("hello");
// } while (x>5);
// while (x>5) {
//   console.log("hello");
// }
// var  array =[3,5,6,7];
// array.foo="hello";
//
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log(array);
// array.forEach((item,index,arr) => {
//   arr[index]=item+index;
// })
// console.log(array);

// for (var variable in array) {
//   if (array.hasOwnProperty(variable)) {
//     console.log(variable);
//     console.log(array[variable]);
//   }
//
// }

// var iterable=[5,7,9]
// var f=iterable.map((item) => {
//   return item*item;
// });
//

// // for (let key of iterable) {
// //   console.log(key);
// // }
// console.log(f);
// let arr=[1,3,4,5,6,7];
// var sum =arr.reduce((p,q, c) => {return p+q+arr[c}, 0);
// console.log(sum );

// var  a=[1,3,5,6,9]
// for (var i = 0; i < a.length; i++) {
//   console.log(i);
//   if (i==2) {
//   //  continue;
//   //break;
//   }
//
//   console.log("i is here");
// }


var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
console.log(library[5].title);
