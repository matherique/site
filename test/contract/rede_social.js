import seed from '../seed.js';

const { rede_social } = seed;

describe('Contract: rede social', () => {
	const table = '\'rede_social\'';
	const { Rede_social } = app.datasource.models;
	const { create, update, std } = rede_social;

	beforeEach((done) => {
		Rede_social
			.destroy({ where: {} })
			.then(() => Rede_social.create(std))
			.then(() => done());
	});

	describe('GET /rede-social', () => {
		it(`should return a list of  ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				url: Joi.string(),
				rede: Joi.number(),
			}));

			request
				.get('/rede-social')
				.end((err, res) => {
               joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /rede-social/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				url: Joi.string(),
				rede: Joi.number(),
			});

			request
				.get('/rede-social/1')
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /rede-social', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				url: Joi.string(),
				rede: Joi.number(),
			});

			request
				.post('/rede-social')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /rede-social/{id}', () => {
		it(`should update a ${table}`, (done) => {         
			const updatedCount = Joi.array().items(1);
			request
				.put('/rede-social/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /rede-social/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/rede-social/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
