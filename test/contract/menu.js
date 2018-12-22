import seed from '../seed';

const { menu } = seed;

describe('Contract: menu', () => {
	const table = '\'menu\'';
   const { Menu } = app.datasource.models;
   const { create, update, std } = menu;

	beforeEach((done) => {
		Menu
			.destroy({ where: {} })
			.then(() => Menu.create(std))
			.then(() => done());
	});

	describe('GET /menu', () => {
		it(`should return a list of ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            nome_menu: Joi.string(),
            situacao: Joi.number(),
         }));

			request
				.get('/menu')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /menu/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            nome_menu: Joi.string(),
            situacao: Joi.number(),
			});

			request
				.get('/menu/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /menu', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            nome_menu: Joi.string(),
            situacao: Joi.number(),
		   });

			request
				.post('/menu')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /menu/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/menu/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /menu/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/menu/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
