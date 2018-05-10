// var d = new Date();
// var n = d.toLocaleDateString("en-US");
//
// console.log(n);

//
// var x=[3,4,5,12,2];
// var max=x[0];
// for (var i = 1; i < x.length; i++) {
//   if(x[i]>max)
//   max = x[i];
// }
// console.log(max);

// var x=Array.from('134645');
// var str="";
// for (var i = 0; i < x.length-1; i++) {
//   str+=x[i];
//   if(x[i]%2 == 0 && x[i+1] %2 == 0)
//   str+="-";
// }
// str+=x[x.length-1];
//
// console.log(str);

// function f1(x){
//   if (x<60) {
//     return "F";
//   }else if (x<70) {
//     return "D";
//   }else if (x<80) {
//     return "C";
//   }else if (x<90) {
//     return "B";
//   }else {
//     return "A";
//   }
// }
// let sum=0;
// class Student {
//
//   constructor( name, marks ) {
//     this.name=name;
//     this.marks=marks;
//     this.grade= f1(marks);
//     sum+=marks;
//
//   }
//
//
// }
// var obj =[new Student("David",80),new Student("Vinoth",77),new Student("Divya",88 ),new Student("Ishitha ",95),new Student("Thomas",68)];
// console.log(obj);
// console.log(sum/5);

// var x= Array.from('webmaster');
// x.sort();
// console.log(x.join(""));

// function f2(str,l) => {
//   str
//   for (var i = 0; i < str.length; i++) {
//     array[i] =
//   }
// }

//
// var myObj = Array.from([5, [22], [[14]], [[4]],[5,6]]);
//
// console.log(myObj.toString().split(",").map(Number));


// var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
// obj = JSON.parse(jsonStr);
// console.log(obj);

// var obj = { "One":"1", "Two":"2", "Three":"3", "Four":"4" }
// var x=[];
// for (var key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(obj[key]);
//     x.push( obj[key]);
//   }
// }
// console.log(x);


// function average(a, b) {   return a + b / 2; } console.log(average(2, 1));

// function f(a,b,c) {
//   m=["1","2","3"];
//   a = 3;
//   b[0]= "X";
//   c.first = false;
// }
// var x = 4;
// var y = ["A", "B", "C"];
// var z = {first: true};
// f(x,y,z);
// console.log(x, y, z);
// function g(a){
//   a={first: true};
//   console.log(a);
// }
//  g(z);
// console.log(z);
//
//
// (function() {
//   setTimeout(function()
//   {console.log(4)}, 0);
//    console.log(1);
//    setTimeout(function()
//   {console.log(2)}, 1000);
//  setTimeout(function()
//  {console.log(3)}, 0);
//  console.log(4); })();
//
// function sum(x) {
// return sum.arguments[0]+sum.arguments[1];
// }
//  console.log(sum(3,4));

// var x= 5;
// function check(){
//   y = 10;
//   console.log(x);
//    }
//   function check2(){
//   console.log(y); }
//   check();
  // check2();

// var arrayList =['a','b','c','d','e','f'];
// arrayList.splice(0);
// console.log(arrayList);
//
//  var a = (2, 3, 5);
//  var a =typeof ba;
//  console.log( 18 && 722)
//    var x=5 instanceof Object;
//
// console.log( typeof 3);

var x=.1+.2 != .3
 // var foo = 'outside'; function logIt(){console.log(foo); var foo = 'inside';} logIt();
 // console.log(3 in [1,2,3]);
 var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

for (var key in myObj) {
  if (myObj.hasOwnProperty(key)&&myObj[key].occupation=="Programmer")
  {console.log(myObj[key]); }
}
myObj.sort(function(obj1,obj2){
  return obj1.age - obj2.age;
})
var x={'Programmer': [] , 'Team Leader': []};
for (var key in myObj) {
  if (myObj.hasOwnProperty(key)&&myObj[key].occupation=="Programmer")
  { x.Programmer.push('name:'+myObj[key].name +" ,age:" +myObj[key].age);
}else if(myObj.hasOwnProperty(key)&&myObj[key].occupation=="Team Leader"){
  { x["Team Leader"].push('name:'+myObj[key].name +" ,age:" +myObj[key].age);
}
}



}

console.log(myObj);
console.log(x);
