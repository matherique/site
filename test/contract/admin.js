describe('ROTAS Usuario', () => {
	const Admin = app.datasource.models.ADMIN;
	const defaultUsuario = {
		ADMIN_ID: 1,
		NOME: 'nome',
		USUARIO: 'usuario',
		SENHA: 'password',
		EMAIL: 'email@email.com',
	};
	beforeEach((done) => {
		Admin
			.destroy({ where: {} })
			.then(() => Admin.create(defaultUsuario))
			.then(() => done());
	});

	describe('GET /usuario', () => {
		it('Deve retornar uma lista de usuarios', (done) => {
			const adminList = Joi.array().items(Joi.object().keys({
				ADMIN_ID: Joi.number(),
				NOME: Joi.string(),
				USUARIO: Joi.string(),
				SENHA: Joi.string(),
				EMAIL: Joi.string(),
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
		it('Deve retornar um usuario', (done) => {
			const admin = Joi.object().keys({
				ADMIN_ID: Joi.number(),
				NOME: Joi.string(),
				USUARIO: Joi.string(),
				SENHA: Joi.string(),
				EMAIL: Joi.string(),
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
		it('Deve criar um usuario', (done) => {
			const newUsuario = {
				ADMIN_ID: 2,
				NOME: 'nome 2',
				USUARIO: 'usuario 2',
				SENHA: 'password 2',
				EMAIL: 'email2@email.com',
			};
			const admin = Joi.object().keys({
				ADMIN_ID: Joi.number(),
				NOME: Joi.string(),
				USUARIO: Joi.string(),
				SENHA: Joi.string(),
				EMAIL: Joi.string(),
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
		it('Deve atualizar um usuario', (done) => {
			const updatedUsuario = {
				ADMIN_ID: 1,
				NOME: 'attnome 2',
				USUARIO: 'attusuario 2',
				SENHA: 'attpassword2',
				EMAIL: 'attemail2@email.com',
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
		it('Deve deletar um usuario', (done) => {
			request
				.delete('/usuario/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
