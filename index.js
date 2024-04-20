const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthRoutes = require('./routes/AuthRoutes');



dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(AuthRoutes);
app.get('/', function(req, res) {
    res.send('JC CRUD API MONGO DB');
  });

  dbConnect().catch(err => console.log('Falha ao conectar ao Banco de dados.'));

async function dbConnect() {
  await mongoose.connect(process.env.DB_CONNECTION);
  console.log('Conectado ao banco de dados com sucesso.')
}


app.listen(process.env.PORT,()=>{
   console.log('SERVIDOR EXECUTANDO NA PORTA ' + process.env.PORT);
});