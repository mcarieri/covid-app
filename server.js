const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// commented out basic database connection and authentication 
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// for authentication **
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

const hbs = exphbs.create({
    helpers: {
      format_date: date => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      }
    }
  });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const html_routes = require('./routes/html/htmlRoutes');
app.use(html_routes);

// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
// });