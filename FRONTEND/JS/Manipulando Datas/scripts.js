
// formas de definir datas manuais
//let d = new Date('2020-01-01 12:30');
//let d = new Date(2020, 0, 01, 12, 30); 

// Manipulando
let d = new Date();

//let newValue = d.getFullYear();
//let newValue = d.getMonth();
//let newValue = d.getDay(); dia da semana 0 é domingo
//let newValue = d.getDate();

// setar datas
let data = new Date();
data.setFullYear(2025);
data.setHours(10);
data.setMonth(1);
data.setTime(2025);

console.log(data);