import seed from '../../seed';

const { config } = seed;
describe('Routers: config', () => {
	const table = '\'config\'';
	const { Config } = app.datasource.models;
	const { create, update, std }  = config;

	beforeEach((done) => {
		Config
			.destroy({ where: {} })
			.then(() => Config.create(std))
			.then(() => done());
	});

	describe('GET /config', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/config')
				.expect('Content-Type', /json/)
				.end((err, res) => {

					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /config/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/config/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /config', () => {
		it(`should create a ${table}`, (done) => {
         const createData = {
            id : 1, 
            title: 'titulo teste', 
            keywords: 'palavra1 , palavra2, palavra3',
            description: 'descricao teste bla bla bla',
            cache_control: 2, 
            language: 2,
            robots: 2,
            rodape: 'rodape teste',
         }
		   request
				.post('/config')
				.send(createData)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
      });
	});

	describe('PUT /config/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/config/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /config/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/config/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
