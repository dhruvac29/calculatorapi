const express = require('express');
const app = express();
const port = 4000;
var cors = require('cors')


app.use(cors({
    origin: ['http://localhost:3000', 'https://funnyapp-five.vercel.app/']
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.get('/:operator/:num1/:num2', (req, res) => {
    const { operator, num1, num2 } = req.params;
    let result;

    switch (operator) {
        case 'addition':
            result = parseInt(num1) + parseInt(num2);
            break;
        case 'subtraction':
            result = parseInt(num1) - parseInt(num2);
            break;
        case 'multiplication':
            result = parseInt(num1) * parseInt(num2);
            break;
        default:
            result = 'Invalid operator';
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`API server started on http://localhost:${port}`);
});
