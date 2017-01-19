function sayHello(){
	alert("Hello my friend!");
}

function goHiking(){
	var r = confirm("Go hiking?");
	if (r == true) {
		alert("Ok! Have fun!");
	} else {
	    alert("Maybe next time:D");
	}
}

function changeColor(){
	var divElement1 = document.getElementById("div1");
	var divElement2 = document.getElementById("div2");
	divElement1.className = "blueback";
	divElement2.className = "orangeback";
}

function changeText(){
	var divElement1 = document.getElementById("div1");
	var divElement2 = document.getElementById("div2");
	divElement1.innerHTML = "Hello fridens!";
	divElement2.innerHTML = "This is a small test for learning fron-end programming";
}

function changeButton(){
	var divElement1 = document.getElementById("button1");
	divElement1.buttonValue = "Now i have changed!";
}

function doBlue(){
	var canvas = document.getElementById("canvas1"); 
	canvas.style.backgroundColor = "blue";
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "yellow";
	ctx.fillRect(10,10,60,60);
	ctx.fillRect(80,10,60,60);

	ctx.fillStyle = "black";
	ctx.font = "20px Arial";
	ctx.fillText("Hello", 15, 45);
}

function doColor(){
	var canvas = document.getElementById("canvas1"); 
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	canvas.style.backgroundColor = "orange";
}

function doColor2(){
	var canvas = document.getElementById("can3");
	var clr = document.getElementById("clr");
	canvas.style.backgroundColor = clr.value;
}

function dosquare(){
	var canvas = document.getElementById("can4");
	canvas.style.backgroundColor = "green";
	var ctx = canvas.getContext("2d");
	var sizeInput = document.getElementById("sldr");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 10, sizeInput.value, sizeInput.value);
}









