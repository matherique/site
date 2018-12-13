import seed from '../../seed';

const { newsletter } = seed;

describe('Routers: newsletter', () => {
	const table = '\'newsletter\'';
	const { Newsletter } = app.datasource.models;
	const defaultNewsletter = newsletter.default;

	beforeEach((done) => {
		Newsletter
			.destroy({ where: {} })
			.then(() => Newsletter.create(defaultNewsletter))
			.then(() => done());
	});

	describe('GET /newsletter', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/newsletter')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(defaultNewsletter);
					done(err);
				});
		});
	});

	describe('GET /newsletter/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/newsletter/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(defaultNewsletter);
					done(err);
				});
		});
	});

	describe('POST /newsletter', () => {
		it(`should create a ${table}`, (done) => {
			const newsNewsletter = newsletter.create;

			request
				.post('/newsletter')
				.send(newsNewsletter)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(newsNewsletter);
					done(err);
				});
		});
	});

	describe('PUT /newsletter/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			const updatedUsuario = newsletter.update;

			request
				.put('/newsletter/1')
				.send(updatedUsuario)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /newsletter/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/newsletter/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
