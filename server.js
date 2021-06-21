// const fs = require("fs");
const express = require ("express");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
// app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

const { notes } = require('./db/notes.json');//filename?? so we can generate notes


// function filternotesQuery(query, arrayNotes){
//     let filternotesQuery = arrayNotes; //this will set it equal so that we can grab it
//     if(query.title){
//         filteredResults = filteredResults.filter(
//             (note) => note.title ===query.title
//         );
//     }
//     if (query.text){
//         filteredResults = filteredResults.filter(
//             (note) => note.text === query.text
//         );
//     }
//     return filteredResults;
// }

// function findnoteId(id, arrayNotes) {
//     const result = arrayNotes.filter((note) => note.id === id)[0];
//     return result;
// }

// function creatNote(body, arrayNotes) {
//     const note = body;
//     arrayNotes.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, "./db/notes.json"),
//       JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
// }

// function validateNote(note) {
//     if (!note.title || typeof note.title !== "string") {
//       return false;
//     }
//     if (!note.text || typeof note.text !== "string") {
//       return false;
//     }
//     return true;
// }




app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));