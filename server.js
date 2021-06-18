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

// const { notes } = require('');//filename?? so we can generate notes



//function to delete note
//ex 26 6.10.21


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));