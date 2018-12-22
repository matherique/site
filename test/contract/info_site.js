import seed from '../seed.js';

const { info_site } = seed;
describe('Contract: info_site', () => {
	const table = '\'info_site\'';
	const { Info_site } = app.datasource.models;
	const { create, update, std } = info_site;
	beforeEach((done) => {
		Info_site
			.destroy({ where: {} })
         .then(() => Info_site.create(std))
			.then(() => done());
	});

	describe('GET /info-site', () => {
		it(`should return a list of  ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				hora_abre: Joi.number(),
				hora_ini_almoco: Joi.number(),
				hora_fim_almoco: Joi.number(),
				hora_fecha: Joi.number(),
				hora_abre_fds: Joi.number(),
				email: Joi.string(),
				dia_funcional: Joi.number(),
			}));

			request
				.get('/info-site')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /info-site/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				hora_abre: Joi.number(),
				hora_ini_almoco: Joi.number(),
				hora_fim_almoco: Joi.number(),
				hora_fecha: Joi.number(),
				hora_abre_fds: Joi.number(),
				email: Joi.string(),
				dia_funcional: Joi.number(),
			});

			request
				.get('/info-site/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /info-site', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
				hora_abre: Joi.number(),
				hora_ini_almoco: Joi.number(),
				hora_fim_almoco: Joi.number(),
				hora_fecha: Joi.number(),
				hora_abre_fds: Joi.number(),
				email: Joi.string(),
				dia_funcional: Joi.number(),
			});

			request
				.post('/info-site')
				.send(create)
				.end((err, res) => {
               joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /info-site/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/info-site/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /info-site/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/info-site/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
