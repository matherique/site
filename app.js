import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
// import authorization from './auth';
import Usuario from './routes/usuario';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('port', 5000);
app.use(bodyParser.json());

// const auth = authorization(app);
// app.use(auth.initialize());
// app.auth = auth;

const usuario = Usuario(app);

app.use('/usuario', usuario);

export default app;
