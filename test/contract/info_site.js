describe('Contract: info_site', () => {
	const table = '\'info_site\'';
	const { Info_site } = app.datasource.models;
	const defaultInfoSite = {
		id: 1,
		hora_abre: 3,
		hora_ini_almoco: 3,
		hora_fim_almoco: 3,
		hora_fecha: 3,
		hora_abre_fds: 3,
		email: 'emailteste2@teste.com',
		dia_funcional: 3,
	};

	beforeEach((done) => {
		Info_site
			.destroy({ where: {} })
			.then(() => Info_site.create(defaultInfoSite))
			.then(() => done());
	});

	describe('GET /info-site', () => {
		it(`should return a list of  ${table}`, (done) => {
			const newsletterList = Joi.array().items(Joi.object().keys({
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
					joiAssert(res.body, newsletterList);
					done(err);
				});
		});
	});

	describe('GET /info-site/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const infosite = Joi.object().keys({
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
					joiAssert(res.body, infosite);
					done(err);
				});
		});
	});

	describe('POST /info-site', () => {
		it(`should create a ${table}`, (done) => {
			const newNewsletter = {
				id: 2,
				hora_abre: 4,
				hora_ini_almoco: 4,
				hora_fim_almoco: 4,
				hora_fecha: 4,
				hora_abre_fds: 4,
				email: 'emailteste2@teste.com',
				dia_funcional: 4,
			};

			const newsletter = Joi.object().keys({
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
				.send(newNewsletter)
				.end((err, res) => {
					joiAssert(res.body, newsletter);
					done(err);
				});
		});
	});

	describe('PUT /info-site/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedNewsletter = {
				id: 2,
				hora_abre: 4,
				hora_ini_almoco: 4,
				hora_fim_almoco: 4,
				hora_fecha: 4,
				hora_abre_fds: 4,
				email: 'emailteste3@teste.com',
				dia_funcional: 4,
			};
			const updatedCount = Joi.array().items(1);
			request
				.put('/info-site/1')
				.send(updatedNewsletter)
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
