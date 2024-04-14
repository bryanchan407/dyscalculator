function generateBoxesMD() {
    var x = parseInt(document.getElementById("xInput2").value);
    var y = parseInt(document.getElementById("yInput2").value);

    var boxContainer = document.getElementById("boxContainer2");
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

    for (var i = 0; i < x * y; i++) {
        var purpleBox = document.createElement("div");
        purpleBox.classList.add("box", "purple");
        purpleBox.style.textAlign = 'center';
        purpleBox.style.color = 'white';
        purpleBox.innerHTML = i + 1;
        boxContainer.appendChild(purpleBox);
    }

    boxContainer.appendChild(document.createElement("br"));

    for (var i = 0; i < ~~(x / y); i++) {
        var greenBox = document.createElement("div");
        greenBox.classList.add("box", "green");
        greenBox.innerHTML = i + 1;
        greenBox.style.textAlign = 'center';
        greenBox.style.color = 'white';
        greenBox.innerHTML = i + 1;
        boxContainer.appendChild(greenBox);
    }

    for (var i = 0; i < x % y; i++) {
        var greenBox = document.createElement("div");
        greenBox.classList.add("box", "yellow");
        greenBox.innerHTML = i + 1;
        greenBox.style.textAlign = 'center';
        greenBox.style.color = 'black';
        greenBox.innerHTML = i + 1;
        boxContainer.appendChild(greenBox);
    }
}