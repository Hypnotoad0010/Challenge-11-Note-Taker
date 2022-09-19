const express= require('express');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
//Port set to 3001
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//Takes server to route files
app.use('/', htmlRoutes);
app.use('api', apiRoutes);

//Listener function
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
