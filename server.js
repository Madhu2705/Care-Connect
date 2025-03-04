// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const querystring = require('querystring');

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         switch (req.url) {
//             case '/': {
//                 fs.readFile(path.join(__dirname, 'home.html'), 'utf-8', (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the Home page');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/index.html': { // Serve the services page when visiting '/index.html'
//                 fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the Services page');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/login': {
//                 fs.readFile(path.join(__dirname, 'login.html'), 'utf-8', (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the login page');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/dashboard': {
//                 fs.readFile(path.join(__dirname, 'dashboard.html'), 'utf-8', (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the dashboard page');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/register': {
//                 fs.readFile(path.join(__dirname, 'register.html'), 'utf-8', (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the registration page');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/cardiology.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'cardiology.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/neurology.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'neurology.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/images/Care_Connect-removebg-preview.png': {
//                 fs.readFile(path.join(__dirname, 'images', 'Care_Connect-removebg-preview.png'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             // Serve doctor.jpg image
//             case '/images/doctor.jpg': {
//                 fs.readFile(path.join(__dirname, 'images', 'doctor.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//                     res.end(data);
//                 });
//                 break;
//             }
            
            
//             case '/orthopedics.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'orthopedics.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/pedia.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'pedia.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/der.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'der.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/onco.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'onco.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/radio.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'radio.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/emer.jpg': {
//                 fs.readFile(path.join(__dirname, 'images','emer.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             case '/gynac.jpg': {
//                 fs.readFile(path.join(__dirname,'images', 'gynac.jpg'), (err, data) => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Error reading the image');
//                         return;
//                     }
//                     res.writeHead(200, { 'Content-Type': 'image/png' });
//                     res.end(data);
//                 });
//                 break;
//             }
//             default: {
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.end('Not Found');
//             }
//         }
//     } else if (req.method === 'POST') {
//         switch (req.url) {
//             case '/login': {
//                 let body = '';
//                 req.on('data', chunk => {
//                     body += chunk.toString();
//                 });

//                 req.on('end', () => {
//                     const { name, age, phoneno, email } = querystring.parse(body);
//                     fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, data) => {
//                         if (err) {
//                             res.writeHead(500, { 'Content-Type': 'text/plain' });
//                             res.end('Error reading user data');
//                             return;
//                         }
//                         const users = JSON.parse(data);
//                         const user = users.find(u => u.name === name && u.age === parseInt(age) && u.phoneno === phoneno && u.email === email);

//                         if (user) {
//                             res.writeHead(302, { 'Location': '/dashboard' });
//                             res.end();
//                         } else {
//                             res.writeHead(302, { 'Location': '/register' });
//                             res.end();
//                         }
//                     });
//                 });
//                 break;
//             }
//             case '/register': {
//                 let body = '';
//                 req.on('data', chunk => {
//                     body += chunk.toString();
//                 });

//                 req.on('end', () => {
//                     const { name, age, phoneno, email } = querystring.parse(body);
//                     const userData = { name, age, phoneno, email };
//                     fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, data) => {
//                         let users = [];

//                         if (!err) {
//                             users = JSON.parse(data);
//                         }

//                         users.push(userData);
//                         fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2), (err) => {
//                             if (err) {
//                                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                                 res.end('Error saving registration data');
//                                 return;
//                             }
//                             res.writeHead(302, { 'Location': '/' });
//                             res.end();
//                         });
//                     });
//                 });
//                 break;
//             }
//             default: {
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.end('Not Found');
//             }
//         }
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
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

// Helper function to read users.json safely
const readUsersFile = () => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        return []; // Return empty array if file is missing or unreadable
    }
};

// Login route
app.post('/login', (req, res) => {
    const { name, age, phoneno, email } = req.body;
    const users = readUsersFile();

    const user = users.find(u => 
        u.name === name && 
        u.age == age && // Loose comparison to handle number/string mismatch
        u.phoneno === phoneno && 
        u.email === email
    );

    if (user) {
        res.redirect('/dashboard');
    } else {
        res.redirect('/register');
    }
});

// Registration route
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

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
