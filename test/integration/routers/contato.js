import seed from '../../seed';

const { contato } = seed;

describe('Routers: Contato', () => {
	const table = '\'contato\'';
	const { Contato } = app.datasource.models;
   const { create, std, update } = contato;

	beforeEach((done) => {
		Contato
			.destroy({ where: {} })
			.then(() => Contato.create(std))
			.then(() => done());
	});

	describe('GET /contato', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/contato')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /contato/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/contato/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /contato', () => {
		it(`should create a ${table}`, (done) => {
         request
				.post('/contato')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /contato/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/contato/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /contato/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/contato/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
