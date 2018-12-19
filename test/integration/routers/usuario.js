import seed from '../../seed';

const { usuario } = seed;

describe('Routers: usuario', () => {
	const table = '\'usuario\'';
	const { Usuario } = app.datasource.models;
      const { create, std, update } = usuario;

   beforeEach((done) => {
		Usuario
			.destroy({ where: {} })
			.then(() => Usuario.create(std))
			.then(() => done());
	});

	describe('GET /usuario', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/usuario')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
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
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /usuario', () => {
		it(`should create a ${table}`, (done) => {
			request
				.post('/usuario')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /usuario/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/usuario/1')
				.send(update)
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
