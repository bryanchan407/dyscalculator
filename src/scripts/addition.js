function generateBoxes() {
    var x = parseInt(document.getElementById("xInput").value);
    var y = parseInt(document.getElementById("yInput").value);

    var boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = '';

    for (var i = 0; i < x; i++) {
        var redBox = document.createElement("div");
        redBox.classList.add("box", "red");
        redBox.innerHTML = i + 1;
        redBox.style.textAlign = 'center';
        redBox.style.color = 'white';
        redBox.innerHTML = i + 1;
        boxContainer.appendChild(redBox);
    }

    boxContainer.appendChild(document.createElement("br"));


    for (var i = 0; i < y; i++) {
        var blueBox = document.createElement("div");
        blueBox.classList.add("box", "blue");
        blueBox.innerHTML = i + 1;
        blueBox.style.textAlign = 'center';
        blueBox.style.color = 'white';
        blueBox.innerHTML = i + 1;
        boxContainer.appendChild(blueBox);
    }

    boxContainer.appendChild(document.createElement("br"));

    for (var i = 0; i < x + y; i++) {
        var purpleBox = document.createElement("div");
        purpleBox.classList.add("box", "purple");
        purpleBox.style.textAlign = 'center';
        purpleBox.style.color = 'white';
        purpleBox.innerHTML = i + 1;
        boxContainer.appendChild(purpleBox);
    }

    boxContainer.appendChild(document.createElement("br"));

    var difference = x - y;
    difference = difference < 0 ? 0 : difference; // Ensure no negative value for green boxes

    for (var i = 0; i < difference; i++) {
        var greenBox = document.createElement("div");
        greenBox.classList.add("box", "green");
        greenBox.innerHTML = i + 1;
        greenBox.style.textAlign = 'center';
        greenBox.style.color = 'white';
        greenBox.innerHTML = i + 1;
        boxContainer.appendChild(greenBox);
    }
}