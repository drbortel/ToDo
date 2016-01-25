var x = document.getElementsByClassName("listItem");
$( x ).click(function() {
    console.log(this);
    $( this ).parent().fadeOut(1000);
});

document.getElementById("myTime").innerHTML = Date();

function validateForm() {
    var myTask = document.getElementById("addTask");
    var myTaskDesc = document.getElementById("addTaskDesc");
    var myTaskPri = document.getElementById("taskPriority");
    console.log(myTask);
}

function addItem() {
    var myDiv = document.getElementById("myList");
    var newLI = document.createElement("LI");
    newLI.setAttribute("class","title");
    console.log(newLI);
    var newH3 = document.createElement("H3");
    var myText = document.createTextNode("Clean the Gutters");
    newLI.appendChild(myText);
    newH3.appendChild(newLI);
    myDiv.appendChild(newH3);
    return newLI;
}

function removeItem(evt) {
    /* console.log(tElement); */
    var parent = evt.target.parentNode.parentNode;
    console.log(parent);
    var data = parent.querySelector(".label").firstChild.data;
    console.log(data);

    parent.parentNode.removeChild(parent.parentNode);
    /* data.target.parentNode.parentNode.removeChild(data.parentNode); */
    /* tElement.parentNode.parentNode.removeChild(tElement.parentNode); */
}
