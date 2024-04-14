const button1 = document.getElementById("button1");
const num = document.getElementById("num");


function showImage(){
    const ul = document.getElementById("mist");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    
    let arr = [];
    let i = 2;
    while (num.value > 0) {
        arr[i] = num.value % 10;
        num.value = ~~(num.value / 10)
        i--;
    }
    
    for (let i = 0; i < arr[0]; i++) {
        let img = document.createElement('img');
        img.src="https://ecdn.teacherspayteachers.com/thumbitem/Base-Ten-Blocks-Clip-Art-Set-Whimsy-Workshop-Teaching-1936930-1674758060/original-1936930-3.jpg";
        img.width = 100;
        img.length = 100;
        const clonedImg = img.cloneNode(true);
        ul.appendChild(clonedImg);
    }

    
    for (let i = 0; i < arr[1]; i++) {
        let img = document.createElement('img');
        img.src="https://lh4.googleusercontent.com/proxy/IBut4pV7EA8xMJiVNxU17L5Q_kmaGNR26ewJ6Ei9Tp3ExD_n6YUpu4cdHl83eLOAdS9fYtVaVBzFmPINlOfXuMeEufVPy1oyNk0xd6BJhGdo1b7YkoHN";
        img.width = 100;
        img.length = 100;
        const clonedImg = img.cloneNode(true);
        ul.appendChild(clonedImg);
    }

    for (let i = 0; i < arr[2]; i++) {
        let img = document.createElement('img');
        img.src="https://lh5.googleusercontent.com/proxy/ZLvenwUKsuNUiUFmgcC8i3MBIdcVoZuvSRiYgmqXyvucHt8oYaRe8-58EnwwsxelRiNh0BFrEUV0DXFRB76lZC7MbwUh3OKjE76ZLwxsn73LKNuHZvX0";
        img.width = 100;
        img.length = 100;
        const clonedImg = img.cloneNode(true);
        ul.appendChild(clonedImg);
    }

    ul.appendChild(x)
}
