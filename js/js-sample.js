<!DOCTYPE html>
<html>
<body>
//variable

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x * y;
document.getElementById("demo").innerHTML =
"Answer is: " + z;
</script>

//*= Operater

<p id="operator"></p>

<script>
var x = 10;
x *= 5;
document.getElementById("operater").innerHTML = x;
</script>


//functions

<p id="Func"></p>

<script>
function myFunction(f1, f2) {
  return f1 * f2;
}
document.getElementById("Func").innerHTML = myFunction(5, 6);
</script>

//strings


<p id="string"></p>

<script>

var langName1 = "JavaScript"; 
var langName2 = 'HTML'; 

document.getElementById("string").innerHTML =
langName1 + " " + langName2; 

</script>



//JS objects
<p id="object"></p>

<script>

var person = {
  firstName: "Rigved's",
  lastName: "Pulickal",
  age: 9,
  eyeColor: "black"
};

document.getElementById("object").innerHTML =
person.firstName + " eycolor is " + person.eyeColor + " ";
</script>


//false-booleans
<button onclick="myFunction()">try the boolean</button>

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = 0 > 0;
}
</script>




//true-booleans
<button onclick="myFunction()">try the boolean</button>

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = 11 > 16;
}
</script>

//Debuging
<script>
x = 7;
y = 8;
z = a + b;
console.log(c);
</script>


</body>
</html>


