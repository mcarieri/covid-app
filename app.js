const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');

// temp const
const db = require('./models')
// temp const end

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
});