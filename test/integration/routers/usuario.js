describe('Routers: usuario', () => {
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
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/usuario')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(defaultUsuario);
					done(err);
				});
		});
	});

	describe('GET /usuario/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/usuario/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(defaultUsuario);
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
			request
				.post('/usuario')
				.send(newUsuario)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(newUsuario);
					done(err);
				});
		});
	});

	describe('PUT /usuario/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			const updatedUsuario = {
				id: 1,
				nome: 'attnome 2',
				usuario: 'attusuario2',
				senha: 'attpassword2',
				email: 'attemail2@email.com',
			};
			request
				.put('/usuario/1')
				.send(updatedUsuario)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /usuario/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/usuario/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
