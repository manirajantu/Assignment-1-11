/*
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <span> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/


const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];
function doTimes(j) {
	for (let k=0; k < j; k++) {
	  for (let i=0; i < colours.length; i++) {
		 // This is the formula to keep track of the loop count in a nested loop
		 // I didn't come up with this myself I just googled and found the formula here: https://stackoverflow.com/questions/43660757/iteration-counter-for-double-loops
		 let loopCount = i + ( colours.length * k);
		 let breakSeconds = (loopCount+1)*1000;
		 setTimeout(() => { 
		  document.querySelector("#span").style.backgroundColor = colours[i].color;
		  console.log("Setting Color: " + [colours[i].color]);
		}, breakSeconds); 
	  }
	}
  }
  
  doTimes(3);