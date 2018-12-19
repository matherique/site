import seed from '../../seed';

const { imagem } = seed;

describe('Routers: Imagem', () => {
	const table = '\'imagem\'';
	const { Imagem } = app.datasource.models;
   const { create, std, update } = imagem;

	beforeEach((done) => {
      Imagem		
			.destroy({ where: {} })
			.then(() => Imagem.create(std))
			.then(() => done());
	});

	describe('GET /imagem', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/imagem')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /imagem/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/imagem/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /imagem', () => {
		it(`should create a ${table}`, (done) => {
         request
				.post('/imagem')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /imagem/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/imagem/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /imagem/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
            .delete('/imagem/1')
				.end((err, res) => {
               expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
