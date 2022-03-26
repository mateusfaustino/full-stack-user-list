const express = require('express')
cors = require('cors')
app = express()

// config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({credentials: true, origin:'http://localhost:3000'}))


// public folder for images
app.use(express.static('public'))

// Routes
app.get('/', function(req, res) {
    res.send('Mateus Faustino');
});

app.listen(5000)
