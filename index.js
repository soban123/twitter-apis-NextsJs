const next = require ('next');
const express  = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3006;
const app = next({ dev });
const TweetsRouter = require('./routes/tweets');



const handle = app.getRequestHandler();

app.prepare()
.then(()=>{

    const server = express() ;

    server.use(express.json())

    server.use('/tweets' , TweetsRouter);

    server.get('*',(req , res )=>{
        return handle(req, res);
    })
    server.listen( port , err =>{
        if (err) throw err ;
        console.log('listeninng on' ,  port);
    } )
})

