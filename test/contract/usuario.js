import seed from '../seed';

const { usuario } = seed;

describe('Contract: usuario', () => {
	const table = '\'usuario\'';
	const { Usuario } = app.datasource.models;
	const { create, std, update } = usuario;
  
	beforeEach((done) => {
		Usuario
			.destroy({ where: {} })
			.then(() => Usuario.create(std))
			.then(() => done());
	});

	describe('GET /usuario', () => {
		it(`should return a list of  ${table}`, (done) => {
			const listItens= Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				usuario: Joi.string(),
				senha: Joi.string(),
				email: Joi.string(),
				nivel: Joi.number(),
			}));
      
        
			request
				.get('/usuario')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /usuario/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				usuario: Joi.string(),
				senha: Joi.string(),
				email: Joi.string(),
				nivel: Joi.number(),
			});

			request
				.get('/usuario/1')
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /usuario', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				usuario: Joi.string(),
				senha: Joi.string(),
				email: Joi.string(),
				nivel: Joi.number(),
			});

			request
				.post('/usuario')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /usuario/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/usuario/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /usuario/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/usuario/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
