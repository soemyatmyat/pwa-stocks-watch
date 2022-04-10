// load config file
const config=require('./config')//load the configuration from config > config.js
const express=require('express')// express is for building the Rest APIs
const cors=require('cors')// cors provides Express middleware to enable CORS with various options

module.exports=function(){
    const app=express()// create an Express App and then add body-parser (json and urlencoded)
    var corsOptions = {
        origin: 'http://localhost:'+config.port //origin is set to port 8081
    }
    app.use(cors(corsOptions))
    app.use(express.json())// parse requests of content-type - application/json
    app.use(express.urlencoded({ extended: true }))// parse requests of content-type - application/x-www-form-urlencoded
    app.set('views','./app/views') //template location
    app.set('view engine','ejs')// Node.js templating engine EJS
    // load routing file and call it as a function while passing the app
    require('../app/routes/index.server.routes.js')(app)
    
    app.use(express.static('./public')) //locate the static folder

    return app
}

