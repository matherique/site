import seed from '../seed';

const { contato } = seed;

describe('Contract: contato', () => {
	const table = '\'contato\'';
   const { Contato } = app.datasource.models;
   const { create, update, std } = contato;

	beforeEach((done) => {
		Contato
			.destroy({ where: {} })
			.then(() => Contato.create(std))
			.then(() => done());
	});

	describe('GET /contato', () => {
		it(`should return a list of  ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            nome: Joi.string(),
            email: Joi.string(),
            telefone : Joi.string(),
				celular : Joi.string(),
				assunto : Joi.string(),
				mensagem : Joi.string(),
			}));

			request
				.get('/contato')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /contato/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            nome: Joi.string(),
            email: Joi.string(),
            telefone : Joi.string(),
				celular : Joi.string(),
				assunto : Joi.string(),
				mensagem : Joi.string(),
			});

			request
				.get('/contato/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /contato', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            nome: Joi.string(),
            email: Joi.string(),
            telefone : Joi.string(),
				celular : Joi.string(),
				assunto : Joi.string(),
				mensagem : Joi.string(),
		   });

			request
				.post('/contato')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /contato/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/contato/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /contato/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/contato/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
