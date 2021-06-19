const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

// const { notes } = require('./db/db.json');//filename?? so we can generate notes




// function findnoteId(id, arrayNotes) {
//     const result = arrayNotes.filter((note) => note.id === id)[0];
//     return result;
// }

// function creatNote(body, arrayNotes) {
//     const note = body;
//     arrayNotes.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, "./db/db.json"),
//       JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
// }
//function to delete note
//ex 26 6.10.21


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));