// function ShowImg(){
//     let imgs = document.getElementById("img").files[0];

//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(imgs);
//     img.width = 200;
//     img.height = 200;

//     document.getElementById("area").appendChild(img);
// }

// 2 Opção 

function ShowImg(){
    let imgs = document.getElementById("img").files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;
        img.height = 200;
        document.getElementById("area").appendChild(img);
    }  

    reader.readAsDataURL(imgs);
}