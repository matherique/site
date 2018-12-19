import seed from '../../seed';

const { telefone } = seed;

describe('Routers: Telefone', () => {
	const table = '\'telefone\'';
	const { Telefone } = app.datasource.models;
   const { create, std, update } = telefone;

	beforeEach((done) => {
      Telefone		
			.destroy({ where: {} })
			.then(() => Telefone.create(std))
			.then(() => done());
	});

	describe('GET /telefone', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/telefone')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /telefone/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/telefone/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /telefone', () => {
		it(`should create a ${table}`, (done) => {
         request
				.post('/telefone')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /telefone/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/telefone/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /telefone/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/telefone/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
