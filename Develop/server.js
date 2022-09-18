//creating express server
const app = express();

const express= require('express');
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/', htmlRoutes);
app.use('api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


