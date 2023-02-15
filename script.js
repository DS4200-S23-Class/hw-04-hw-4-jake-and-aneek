// allows users to click on points and have them highlight or un-highlight
function clickPoint(id) {
    let point = document.getElementById(id);
    point.classList.toggle("addStroke");

    let newText = "Last Point Clicked: " + id; 
    document.getElementById("lastPoint").innerHTML = newText;
}

// allows users to add points to graph
function addPoint() {
    let xCoord = document.getElementById("xCoord").value;
    let yCoord = document.getElementById("yCoord").value;
    
    // https://dev.to/gavinsykes/appending-a-child-to-an-svg-using-pure-javascript-1h9g
    let newPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newPoint.setAttribute("r", "10");
    newPoint.setAttribute("class", "point");
    newPoint.setAttribute("cx", xCoord);
    newPoint.setAttribute("cy", yCoord);

    let id = "(" + xCoord.substring(0,1) + "," + (10 - yCoord.substring(0,1)) + ")"; 

    newPoint.setAttribute("id", id);
    document.getElementById("frame").appendChild(newPoint);
    newPoint.addEventListener("click", () => clickPoint(newPoint.id));
}

// add points when button is clicked 
document.getElementById("addPoint").addEventListener("click", addPoint);

/*
Utilized method from this link:  
https://stackoverflow.com/questions/50111215/add-replace-border-with-onclick 
*/ 

// collects all points 
let points = document.getElementsByClassName("point");

// loops through all points looking for a click 
for (let i = 0; i < points.length; i++) {
    document.getElementsByClassName("point")[i].addEventListener("click", () => {clickPoint(points[i].id)});
}
