import seed from '../../seed';

const { conteudo } = seed;

describe('Routers: Conteudo', () => {
	const table = '\'conteudo\'';
	const { Conteudo } = app.datasource.models;
   const { create, std, update } = conteudo;

	beforeEach((done) => {
      Conteudo		
			.destroy({ where: {} })
			.then(() => Conteudo.create(std))
			.then(() => done());
	});

	describe('GET /conteudo', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/conteudo')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /conteudo/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/conteudo/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /conteudo', () => {
		it(`should create a ${table}`, (done) => {
         request
				.post('/conteudo')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /conteudo/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/conteudo/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /conteudo/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/conteudo/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
