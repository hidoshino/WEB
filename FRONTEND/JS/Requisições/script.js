// Promisses 
function GetTemperature(){
    return new Promise(function(resolve, reject){
        console.log("Geting Temp....");

        setTimeout(function(){
            resolve('40°C Current Time');
        },2000);
    })
}

//GetTemperature();

var PromiseTemp = GetTemperature();

PromiseTemp.then(function(resultado){
  return console.log(resultado.json());
}).then(function json(){
    console.log(json);
})
PromiseTemp.catch(function(error){
    console.log("Erro search temp")
})

console.log(GetTemperature());