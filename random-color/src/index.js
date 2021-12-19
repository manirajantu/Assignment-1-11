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


const spanElement = document.getElementById('target');
let i = 0;

nextColor = () => {
	spanElement.style.backgroundColor = colours[i],value;
	if (i === colours.length-1){
		i = 0;
	} else {
		i++;
	}
}

const checkBoxNode = document.createElement("INPUT");
checkBoxNode.setAttribute("type", "checkbox");

const checkBoxLabel = document.createElement("label");
checkBoxLabel.appendChild(document.createTextNode(' Looping off'));

document.body.appendChild(checkBoxNode);
document.body.appendChild(checkBoxLabel);

checkBoxNode.addEventListener("change", function(){

	if(this.checked) {
		clearInterval(intervalID);
	} else {
		intervalID = setInterval(nextColor, 1000);
	}
})