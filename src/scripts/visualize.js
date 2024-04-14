const button1 = document.getElementById("button1");
const num = document.getElementById("num");


function showImage(){
    const ul = document.getElementById("mist");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    let img = document.createElement('img');
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dIRzaS3kqAGNeCNA14MoMLWXapKRr5PEpHlN1Y2e3A&s";
    if(num.value<51)
    {
    for(let i =0; i<num.value;i++)
    {
        const clonedImg = img.cloneNode(true);
        ul.appendChild(clonedImg);
    }
}
}