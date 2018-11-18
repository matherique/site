describe('Routers: Infos Site', () => {
	const table = '\'info_site\'';
	const { Info_site } = app.datasource.models;
	const defaultInfoSite = {
		id: 1,
		hora_abre: 2,
		hora_ini_almoco: 3,
		hora_fim_almoco: 3,
		hora_fecha: 3,
		hora_abre_fds: 3,
		email: 'emailteste@teste.com',
		dia_funcional: 3,
	};

	beforeEach((done) => {
		Info_site
			.destroy({ where: {} })
			.then(() => Info_site.create(defaultInfoSite))
			.then(() => done());
	});

	describe('GET /info-site', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/info-site')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(defaultInfoSite);
					done(err);
				});
		});
	});

	describe('GET /info-site/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/info-site/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(defaultInfoSite);
					done(err);
				});
		});
	});

	describe('POST /info-site', () => {
		it(`should create a ${table}`, (done) => {
			const newsNewsletter = {
				id: 2,
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};

			request
				.post('/info-site')
				.send(newsNewsletter)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(newsNewsletter);
					done(err);
				});
		});
	});

	describe('PUT /info-site/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			const updatedUsuario = {
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};
			request
				.put('/info-site/1')
				.send(updatedUsuario)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /info-site/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/info-site/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
