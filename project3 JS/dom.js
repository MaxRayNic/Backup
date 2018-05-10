function myFunction() {
  var x = document.createElement('a');
  var t = document.createTextNode("helllo");
  x.appendChild(t);
  document.body.appendChild(x);
  x.title = "my title text";
x.href = "#";
document.body.appendChild(a);

}
function myFunction2() {
  var m = document.createElement('p');
  m.style.backgroundColor="blue";
    var t = document.createTextNode("This is the blue paragraph");
    m.appendChild(t);
    document.body.appendChild(m);
}
function changeBodyColor() {
    var x = document.getElementById("frm1");

    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value ;
    }
    document.getElementById("demo").innerHTML=text;

  document.body.style.backgroundColor=text+"";
}
function f1(){
  var x1 = document.getElementById("form-control");

var x=Array.from(x1[0]);
var str="";
for (var i = 0; i < x.length-1; i++) {
  str+=x[i];
  if(x[i]%2 == 0 && x[i+1] %2 == 0)
  str+="-";
}
str+=x[x.length-1];

document.write(str);
}
