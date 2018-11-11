describe('Routers: rede social', () => {
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
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/rede-social')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(defaultRedeSocial);
					done(err);
				});
		});
	});

	describe('GET /rede-social/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/rede-social/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(defaultRedeSocial);
					done(err);
				});
		});
	});

	describe('POST /rede-social', () => {
		it(`should create a ${table}`, (done) => {
			const newUsuario = {
				id: 2,
				url: 'https://facebook.com.br/teste2',
				rede: 2,
			};
			request
				.post('/rede-social')
				.send(newUsuario)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(newUsuario);
					done(err);
				});
		});
	});

	describe('PUT /rede-social/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			const updatedUsuario = {
				url: 'https://facebook.com.br/teste-atualizado',
				rede: 3,
			};
			request
				.put('/rede-social/1')
				.send(updatedUsuario)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /rede-social/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/rede-social/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
