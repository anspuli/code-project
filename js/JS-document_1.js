//for loops
<p id="lang"></p>

<script>
var lang = ["HTML", "JavaScript", "Python", "Bootstrap", "SQL", "PHP"];
var text = "";
var i;
for (i = 0; i < lang.length; i++) {
  text += lang[i] + "<br>";
}
document.getElementById("lang").innerHTML = text;
</script>


//while loops

<p id="w-loop"></p>

<script>
var text = "";
var i = 0;
while (i < 20) {
  text += "<br> Number " + i;
  i++;
}
document.getElementById("w-loop").innerHTML = text;
</script>

//scope
<p id="id1"></p>

<p id="id2"></p>

<script>
myFunction();

function myFunction() {
  var langName = "HTML";
  document.getElementById("id1").innerHTML = typeof langName + " " + langName;
}
document.getElementById("id2").innerHTML = typeof langName;
</script>
