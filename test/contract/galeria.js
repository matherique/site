import seed from '../seed';

const { galeria } = seed;

describe('Contract: galeria', () => {
	const table = '\'galeria\'';
   const { Galeria } = app.datasource.models;
   const { create, update, std } = galeria;

	beforeEach((done) => {
		Galeria
			.destroy({ where: {} })
			.then(() => Galeria.create(std))
			.then(() => done());
	});

	describe('GET /galeria', () => {
		it(`should return a list of ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            nome: Joi.string(),
            ordem: Joi.number(),
            conteudo_id: Joi.number(),
         }));

			request
				.get('/galeria')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /galeria/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            nome: Joi.string(),
            ordem: Joi.number(),
            conteudo_id: Joi.number(),
			});

			request
				.get('/galeria/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /galeria', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            nome: Joi.string(),
            ordem: Joi.number(),
            conteudo_id: Joi.number(),
		   });

			request
				.post('/galeria')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /galeria/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/galeria/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /galeria/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/galeria/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
