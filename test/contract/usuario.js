describe('Contract: usuario', () => {
	const table = '\'usuario\'';
	const { Usuario } = app.datasource.models;
	const defaultUsuario = {
		id: 1,
		nome: 'nome',
		usuario: 'usuario',
		senha: 'password',
		email: 'email@email.com',
	};

	beforeEach((done) => {
		Usuario
			.destroy({ where: {} })
			.then(() => Usuario.create(defaultUsuario))
			.then(() => done());
	});

	describe('GET /usuario', () => {
		it(`should return a list of  ${table}`, (done) => {
			const adminList = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				usuario: Joi.string(),
				senha: Joi.string(),
				email: Joi.string(),
			}));

			request
				.get('/usuario')
				.end((err, res) => {
					joiAssert(res.body, adminList);
					done(err);
				});
		});
	});

	describe('GET /usuario/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const admin = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				usuario: Joi.string(),
				senha: Joi.string(),
				email: Joi.string(),
			});

			request
				.get('/usuario/1')
				.end((err, res) => {
					joiAssert(res.body, admin);
					done(err);
				});
		});
	});

	describe('POST /usuario', () => {
		it(`should create a ${table}`, (done) => {
			const newUsuario = {
				id: 2,
				nome: 'nome 2',
				usuario: 'usuario 2',
				senha: 'password 2',
				email: 'email2@email.com',
			};

			const admin = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				usuario: Joi.string(),
				senha: Joi.string(),
				email: Joi.string(),
			});

			request
				.post('/usuario')
				.send(newUsuario)
				.end((err, res) => {
					joiAssert(res.body, admin);
					done(err);
				});
		});
	});

	describe('PUT /usuario/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedUsuario = {
				id: 2,
				nome: 'nome 2',
				usuario: 'usuario 2',
				senha: 'password 2',
				email: 'email2@email.com',
			};
			const updatedCount = Joi.array().items(1);
			request
				.put('/usuario/1')
				.send(updatedUsuario)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /usuario/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/usuario/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
