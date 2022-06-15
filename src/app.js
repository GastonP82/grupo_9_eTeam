const express = require('express');
const path = require('path')
const mainRouter = require('./routers/main');

const app = express();

app.set('view engine','ejs');


app.use(express.static('public'));

app.use('/', mainRouter);
app.set('views',path.resolve(__dirname,'./views'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('servidor iniciado en el puerto: '+ port)
});
