import seed from '../seed';

const { config } = seed;

describe('Contract: config', () => {
	const table = '\'config\'';
	const { Config } = app.datasource.models;
   const { create, update, std } = config;

	beforeEach((done) => {
		Config
			.destroy({ where: {} })
			.then(() => Config.create(std))
			.then(() => done());
	});

	describe('GET /config', () => {
		it(`should return a list of  ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				title: Joi.string(),
            keywords: Joi.string(),
            description : Joi.string(),
				cache_control : Joi.number(),
				language : Joi.number(),
				robots : Joi.number(),
				rodape : Joi.string(),
			}));

			request
				.get('/config')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /config/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				title: Joi.string(),
            keywords: Joi.string(),
            description : Joi.string(),
				cache_control : Joi.number(),
				language : Joi.number(),
				robots : Joi.number(),
				rodape : Joi.string(),
			});

			request
				.get('/config/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /config', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
				title: Joi.string(),
            keywords: Joi.string(),
            description : Joi.string(),
				cache_control : Joi.number(),
				language : Joi.number(),
				robots : Joi.number(),
				rodape : Joi.string(), 
		   });

			request
				.post('/config')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /config/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/config/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /config/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/config/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
