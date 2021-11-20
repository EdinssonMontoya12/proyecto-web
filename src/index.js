const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const flash =  require('connect-flash')
const session =  require('express-session')
const mysqlstore =  require('express-mysql-session')
const passport = require('passport')

const { database } =  require('./keys')

//inicializaciones
const app = express();
require('./lib/passport')

//configuracion
app.set('port', process.env.PORT || 3500);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars.js')
}))
app.set('view engine', '.hbs');

//Middlewares
app.use(session({
    secret: 'AjaxSession',
    resave: 'false',
    saveUninitialized: 'false',
    store: new mysqlstore(database)
}))
app.use(flash())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())

//Variables globales
app.use((req, res, next) => {
    app.locals.guardado = req.flash('guardado'),
    app.locals.error = req.flash('error'),
    app.locals.user = req.user,
    next()
})


//rutas
app.use(require('./routes/index'))
app.use(require('./routes/about'))
app.use(require('./routes/authetication'))

//Archivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('El servidor esta en el puerto ', app.get('port'))
});