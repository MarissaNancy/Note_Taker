const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
// app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

// const { notes } = require('');//filename?? so we can generate notes

//write note
//delete note
//ex 26 6.10.21

//whatever comes back goes to apiroutes
//export

function newNote(body, notesTaken){
    const notes = body;//sets notes to body
    notesTaken.push(notes)//this will get the notesTaken and push it into the notes body
    //write fs here??
}

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));