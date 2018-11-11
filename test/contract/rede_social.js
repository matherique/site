describe('Contract: rede social', () => {
	const table = '\'rede_social\'';
	const { Rede_social } = app.datasource.models;
	const defaultRedeSocial = {
		id: 1,
		url: 'https://facebook.com.br/teste',
		rede: 1,
	};

	beforeEach((done) => {
		Rede_social
			.destroy({ where: {} })
			.then(() => Rede_social.create(defaultRedeSocial))
			.then(() => done());
	});

	describe('GET /rede-social', () => {
		it(`should return a list of  ${table}`, (done) => {
			const adminList = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				url: Joi.string(),
				rede: Joi.number(),
			}));

			request
				.get('/rede-social')
				.end((err, res) => {
					joiAssert(res.body, adminList);
					done(err);
				});
		});
	});

	describe('GET /rede-social/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const admin = Joi.object().keys({
				id: Joi.number(),
				url: Joi.string(),
				rede: Joi.number(),
			});

			request
				.get('/rede-social/1')
				.end((err, res) => {
					joiAssert(res.body, admin);
					done(err);
				});
		});
	});

	describe('POST /rede-social', () => {
		it(`should create a ${table}`, (done) => {
			const newUsuario = {
				id: 2,
				url: 'https://facebook.com.br/teste2',
				rede: 4,
			};

			const admin = Joi.object().keys({
				id: Joi.number(),
				url: Joi.string(),
				rede: Joi.number(),
			});

			request
				.post('/rede-social')
				.send(newUsuario)
				.end((err, res) => {
					joiAssert(res.body, admin);
					done(err);
				});
		});
	});

	describe('PUT /rede-social/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedUsuario = {
				id: 2,
				url: 'https://facebook.com.br/teste2',
				rede: 3,
			};
			const updatedCount = Joi.array().items(1);
			request
				.put('/rede-social/1')
				.send(updatedUsuario)
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
