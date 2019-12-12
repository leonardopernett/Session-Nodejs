const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const router = require('./router/index.js')
const session = require('express-session')
const flash   = require('connect-flash')


app.set('port', process.env.PORT || 4000)

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:'my-secret-key'
}))


app.use(flash())

app.use((req,res,next)=>{
    app.locals.message = req.flash('success')
    next()
})

//router 
app.use(router)

//static
app.use(express.static(path.join(__dirname,'public')))

//server
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'))
})