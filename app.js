import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';

// Routes 
import Usuario from './routes/usuario';
import RedeSocial from './routes/rede_social';
import Newsletter from './routes/newsletter';
import InfoSite from './routes/info_site';
import Endereco from './routes/endereco';
import Config from './routes/config';
import Contato from './routes/contato';
import Conteudo from './routes/conteudo';
import Galeria from './routes/galeria';
import Imagem from './routes/imagem';
import Menu from './routes/menu';
import Telefone from './routes/telefone';
// routes 

// App Express
const app = express();

// Configs and middleware
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
const endereco = Endereco(app);
const configuration = Config(app);
const contato = Contato(app);
const conteudo = Conteudo(app);
const galeria = Galeria(app);
const imagem = Imagem(app);
const menu = Menu(app);
const telefone = Telefone(app);

//routes
app.use('/usuario', usuario);
app.use('/rede-social', redesocial);
app.use('/newsletter', newsletter);
app.use('/info-site', infosite);
app.use('/endereco', endereco);
app.use('/config', configuration);
app.use('/contato', contato);
app.use('/conteudo', conteudo);
app.use('/galeria', galeria);
app.use('/imagem', imagem);
app.use('/menu', menu);
app.use('/telefone', telefone);
// routes
export default app;
