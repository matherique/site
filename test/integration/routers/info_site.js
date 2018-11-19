import seed from '../../seed';

const { info_site } = seed;

describe('Routers: Infos Site', () => {
	const table = '\'info_site\'';
	const { Info_site } = app.datasource.models;
	const defaultInfoSite = info_site.default;

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
			const newsNewsletter = info_site.create;

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
			const updatedUsuario = info_site.update;
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
