import seed from '../../seed';

const { info_site } = seed;

describe('Routers: Infos Site', () => {
	const table = '\'info_site\'';
	const { Info_site } = app.datasource.models;
   const { create, std, update } = info_site;

	beforeEach((done) => {
		Info_site
			.destroy({ where: {} })
			.then(() => Info_site.create(std))
			.then(() => done());
	});

	describe('GET /info-site', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/info-site')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
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
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /info-site', () => {
		it(`should create a ${table}`, (done) => {
            request
				.post('/info-site')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /info-site/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/info-site/1')
				.send(update)
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
