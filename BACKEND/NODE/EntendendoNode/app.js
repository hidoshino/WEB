const express = require('express');
const mustache = require('mustache-express');
// routes
const router = express.Router();
router.get('/', (req, res) => {
    
    res.send('Response');
});

// Settings 
const app = express();

app.use('/', router);
app.use(express.json());
app.engine('mst', mustache());
app.set('view engine', 'mst');
app.set('views', __dirname + '/Views');

module.exports = app;
