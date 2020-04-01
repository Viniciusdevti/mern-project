const express = require ('express')
const bodyParser = require ('body-parser')
var cors = require('cors')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


require('../controller/authController')(app);

app.listen(8081);

console.log('servidor iniciado ');