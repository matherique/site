import seed from '../seed';

const { telefone } = seed;

describe('Contract: telefone', () => {
	const table = '\'telefone\'';
   const { Telefone } = app.datasource.models;
   const { create, update, std } = telefone;

	beforeEach((done) => {
		Telefone
			.destroy({ where: {} })
			.then(() => Telefone.create(std))
			.then(() => done());
	});

	describe('GET /telefone', () => {
		it(`should return a list of ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            numero: Joi.string(),
            operadora: Joi.number(),
            whats_sim: Joi.number(), 
            ordem: Joi.number(),
         }));

			request
				.get('/telefone')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /telefone/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            numero: Joi.string(),
            operadora: Joi.number(),
            whats_sim: Joi.number(), 
            ordem: Joi.number(),
			});

			request
				.get('/telefone/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /telefone', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            numero: Joi.string(),
            operadora: Joi.number(),
            whats_sim: Joi.number(), 
            ordem: Joi.number(),
		   });

			request
				.post('/telefone')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /telefone/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/telefone/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /telefone/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/telefone/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
