import seed from '../seed';

const { conteudo, menu } = seed;

describe('Contract: conteudo', () => {	
	const table = '\'conteudo\'';
	const { Conteudo, Menu } = app.datasource.models;
   const { create, std, update } = conteudo;
   const std_menu = menu.std;

	beforeEach((done) => {
      Menu
         .destroy({ where: {} })
			.then(() => Menu.create(std_menu))
			.then(() => {      
            Conteudo
               .destroy({ where: {} })
               .then(() => Conteudo.create(std))
               .then(() => done());         
         });
	});

	describe('GET /conteudo', () => {
		it(`should return a list of  ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            titulo: Joi.string(),
            subtitulo: Joi.string(),
            conteudo : Joi.string(),
         }));

			request
				.get('/conteudo')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /conteudo/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            titulo: Joi.string(),
            subtitulo: Joi.string(),
            conteudo : Joi.string(),
			});

			request
				.get('/conteudo/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /conteudo', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            titulo: Joi.string(),
            subtitulo: Joi.string(),
            conteudo : Joi.string(),
		   });

			request
				.post('/conteudo')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /conteudo/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/conteudo/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /conteudo/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/conteudo/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
