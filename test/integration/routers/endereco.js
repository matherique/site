import seed from '../../seed';

const { endereco } = seed;

describe('Routers: Endereco', () => {
	const table = '\'endereco\'';
	const { Endereco } = app.datasource.models;
   const { create, std, update } = endereco;

	beforeEach((done) => {
      Endereco		
			.destroy({ where: {} })
			.then(() => Endereco.create(std))
			.then(() => done());
	});

	describe('GET /endereco', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/endereco')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /endereco/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/endereco/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /endereco', () => {
		it(`should create a ${table}`, (done) => {
         request
				.post('/endereco')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /endereco/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/endereco/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /endereco/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/endereco/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
