import seed from '../seed.js';

const { newsletter } = seed;

describe('Contract: newsletter', () => {
	const table = '\'newsletter\'';
	const { Newsletter } = app.datasource.models;
   const { create, update, std } = newsletter;

	beforeEach((done) => {
		Newsletter
			.destroy({ where: {} })
			.then(() => Newsletter.create(std))
			.then(() => done());
	});

	describe('GET /newsletter', () => {
		it(`should return a list of  ${table}`, (done) => {
         const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				email: Joi.string(),
			}));

			request
				.get('/newsletter')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /newsletter/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const newsletter = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				email: Joi.string(),
			});

			request
				.get('/newsletter/1')
				.end((err, res) => {
					joiAssert(res.body, newsletter);
					done(err);
				});
		});
	});

	describe('POST /newsletter', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				email: Joi.string(),
			});

			request
				.post('/newsletter')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /newsletter/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/newsletter/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /newsletter/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/newsletter/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
