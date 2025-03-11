const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => res.render('home'));
app.get('/index', (req, res) => res.render('index'));
app.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page' });
});
const users = [
    { name: "John Doe", age: 25, phoneno: "123-456-7890", email: "john@example.com" },
    { name: "Jane Smith", age: 30, phoneno: "987-654-3210", email: "jane@example.com" }
];
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/register', (req, res) => res.render('register'));


const readUsersFile = () => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        return []; 
    }
};


app.post('/login', (req, res) => {
    const { name, age, phoneno, email } = req.body;
    const users = readUsersFile();

    const user = users.find(u => 
        u.name === name && 
        u.age == age && 
        u.phoneno === phoneno && 
        u.email === email
    );

    if (user) {
        res.redirect('/dashboard');
    } else {
        res.redirect('/register');
    }
});


app.post('/register', (req, res) => {
    const { name, age, phoneno, email } = req.body;
    const users = readUsersFile();

    users.push({ name, age, phoneno, email });

    fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Error saving registration data');
        }
        res.redirect('/');
    });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
