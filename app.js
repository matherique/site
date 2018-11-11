import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
// import authorization from './auth';
import Usuario from './routes/usuario';
import RedeSocial from './routes/rede_social';
import Newsletter from './routes/newsletter';
import InfoSite from './routes/info_site';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('port', 5000);
app.use(bodyParser.json());



// const auth = authorization(app);
// app.use(auth.initialize());
// app.auth = auth;

const usuario = Usuario(app);
const redesocial = RedeSocial(app);
const newsletter = Newsletter(app);
const infosite = InfoSite(app);

app.use('/usuario', usuario);
app.use('/rede-social', redesocial);
app.use('/newsletter', newsletter);
app.use('/info-site', infosite);

export default app;
