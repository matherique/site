import app from './app';

app.listen(app.get('port'), () => console.log(`Listen on http://localhost:${app.get('port')}`));
