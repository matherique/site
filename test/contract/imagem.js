import seed from '../seed';

const { imagem } = seed;

describe('Contract: imagem', () => {
	const table = '\'imagem\'';
   const { Imagem } = app.datasource.models;
   const { create, update, std } = imagem;

	beforeEach((done) => {
		Imagem
			.destroy({ where: {} })
			.then(() => Imagem.create(std))
			.then(() => done());
	});

	describe('GET /imagem', () => {
		it(`should return a list of ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            imagem: Joi.string(),
            situacao: Joi.number(),
            ordem: Joi.number(),
            legenda: Joi.string(),
         }));

			request
				.get('/imagem')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /imagem/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            imagem: Joi.string(),
            situacao: Joi.number(),
            ordem: Joi.number(),
            legenda: Joi.string(),
			});

			request
				.get('/imagem/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /imagem', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            imagem: Joi.string(),
            situacao: Joi.number(),
            ordem: Joi.number(),
            legenda: Joi.string(),
		   });

			request
				.post('/imagem')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /imagem/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/imagem/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /imagem/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/imagem/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
