function SendFile(){
    let file = document.getElementById("file").files[0];

    let body = new FormData();
    body.append('Files', file);

    console.log(file);

    let req = fetch("UploadFile", {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    console.log(req);
}