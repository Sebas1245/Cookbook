require('dotenv').config()
const   express = require('express'), 
        app = express(),
        dbConfig = require('./dbConfig');
        PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('cors')());

// initialize db
dbConfig();

app.get('/', (req, res) => {
    res.json({msg: 'Hello from Cookbook index route!'});
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 
