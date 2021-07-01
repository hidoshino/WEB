const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

// Connect DB
mongoose.connect(`${process.env.DATABASE}/blog"`, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (error) => {
//     console.error("ERRO: "+error.message);
// })

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
    console.log("Server runing in port: "+ server.address().port);
    
});