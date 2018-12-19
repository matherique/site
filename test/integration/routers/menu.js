import seed from '../../seed';

const { menu } = seed;

describe('Routers: Infos Site', () => {
	const table = '\'menu\'';
	const { Menu } = app.datasource.models;
   const { create, std, update } = menu;

	beforeEach((done) => {
		Menu
			.destroy({ where: {} })
			.then(() => Menu.create(std))
			.then(() => done());
	});

	describe('GET /menu', () => {
		it(`should return a list of ${table}`, (done) => {
			request
				.get('/menu')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body[0]).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('GET /menu/{id}', () => {
		it(`should return a ${table} by id`, (done) => {
			request
				.get('/menu/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					expect(res.body).to.be.eql(std);
					done(err);
				});
		});
	});

	describe('POST /menu', () => {
		it(`should create a ${table}`, (done) => {
            request
				.post('/menu')
				.send(create)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res.body).to.be.eql(create);
					done(err);
				});
		});
	});

	describe('PUT /menu/{id}', () => {
		it(`should update a ${table} by id`, (done) => {
			request
				.put('/menu/1')
				.send(update)
				.end((err, res) => {
					expect(res.body).to.be.eql([1]);
					done(err);
				});
		});
	});

	describe('DELETE /menu/{id}', () => {
		it(`should delete a ${table} by id`, (done) => {
			request
				.delete('/menu/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
