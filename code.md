# HTML - Code

``Copyright (c)``  

## Chat app

==================

I have been working on this for a few weeks, but I always get a syntax error!>>

``database error, error^..``
But dont undrstand why?

## Java-Game 

I planned to create a game using JAVA, but I just think I should finish the chat app first. I know it is not easy to code ``JAVA``. Actually I already made a game using ``JS`` and ``HTML``. you can find in the directory ``website/wbs1`` But its not a online game.


## Js DOM

Here are some JS ``DOM`` stuff I created ~ learned>>

``<!DOCTYPE html>
<html>
<style>
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: black;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: blue;
}
</style>
<body>

<p><button onclick="myMove()">Animation</button></p> 

<div id ="container">
  <div id ="animate"></div>
</div>

<script>
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
</script>

</body>
</html>``
