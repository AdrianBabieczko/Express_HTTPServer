const express = require('express');
const uuid = require('uuid');

const app = express();

const db = [
    { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
    { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
    { id: 3, author: 'Adrian Babieczko', text: 'Test info.' },
];

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/testimonials', (req, res) => {
    res.send(getAll());
})

app.get('/testimonials/:id', (req, res) => {
    res.send(getElementById(req.params.id));
})

app.get('/testimonialsRandom', (req, res) => {
    res.send(getRandomElement());
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});


function getAll() {
    return db;
}

function getElementById(id) {
    return db.find(x => x.id == id);
}

function getRandomElement(){
    const item = db[Math.floor(Math.random()*db.length)];

    console.log(randomId);

    const el = db.find(x=>x.id == item.id);

    return el;
}