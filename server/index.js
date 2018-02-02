const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const booksController=require('./controllers/books_controller');

const port = 3000;

app.use(bodyParser.json());
app.use(express.static('/../public/build'));


app.post('/api/books',booksController.create);
app.get('/api/books',booksController.read);
app.put('/api/books/:id',booksController.update);
app.delete('/api/books/:id',booksController.delete);

app.listen(port, function(){console.log('listening on port', port)});
    //run "nodemon server/index.js"    in console, will run in git bash