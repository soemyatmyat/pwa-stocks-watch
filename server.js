
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config =require('./config/config') //load the configuration from config > config.js > env > x.js
const express=require('./config/express') //load express.js from config
const webpush=require('./config/webpush') //load webpush.js from config


const app=express()//initialize the express

// listen on port specified in configuration file
app.listen(config.port)
// exports object is contained in each module and allow exposing pieces of 
// code when the module is loaded
// module object was orginally used to provide metadata information about the module. It also contains the pointer to an exports object as a property
module.exports=app
//module.exports=webpush
///module.exports=axios

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Backend world!" });
});

console.log(process.env.NODE_ENV + ' server running at http://localhost:'
 + config.port);
