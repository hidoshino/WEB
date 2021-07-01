window.onload = function(){
    fetch("https://jsonplaceholder.typicode.com/photos",{
        headers: {
            "Content-type": "Application/json",
            "accept": "Application/json"
        }
    }).then(function(result){
       return result.json();
    }).then(function(Json){
        console.log(Json);
    })
}