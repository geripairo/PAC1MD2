// SERVER SET UP
const express = require('express');
const path = require('path');
const app = express();

// APP SET
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// APP USE
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

// DATA IMPORT
const games = require('./data')
const users = require('./users')

app.get('/', (req, res) => res.render('index.ejs'))

app.get('/home', (req, res) => {
    res.render('home.ejs')
})

app.get('/register', (req, res) =>{
   res.render('register.ejs')
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body
    const id = name.replace(/ /g,'').toLowerCase()

    const newUser = {
        name,
        id,
        email,
        password,
        status : 'OFFLINE'
    }

    users.push(newUser)

    console.log(users)

    res.send(users)
})










// LISTENING PORT SET UP
const server = app.listen(3000, () => {
    console.log(`App started on port ${server.address().port}`);
});