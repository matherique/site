import seed from '../../seed';

const { galeria } = seed;

describe('Routers: Galeria', () => {
	const table = '\'galeria\'';
	const { Galeria } = app.datasource.models;
   const { create, std, update } = galeria;

	beforeEach((done) => {
      Galeria		
			.destroy({ where: {} })
			.then(() => Galeria.create(std))
			.then(() => done());
	});

	describe('GET /galeria', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/galeria')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /galeria/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/galeria/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /galeria', () => {
		it(`should create a ${table}`, (done) => {
         request
				.post('/galeria')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /galeria/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/galeria/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /galeria/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
            .delete('/galeria/1')
				.end((err, res) => {
               expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
