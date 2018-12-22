import seed from '../seed';

const { endereco } = seed;

describe('Contract: endereco', () => {
	const table = '\'endereco\'';
   const { Endereco } = app.datasource.models;
   const { create, update, std } = endereco;

	beforeEach((done) => {
		Endereco
			.destroy({ where: {} })
			.then(() => Endereco.create(std))
			.then(() => done());
	});

	describe('GET /endereco', () => {
		it(`should return a list of ${table}`, (done) => {
			const listItens = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
            logradouro: Joi.string(),
            numero: Joi.string(),
            bairro : Joi.string(),
            complemento: Joi.string(),
            CEP: Joi.string(),
            cidade: Joi.number(),
            UF: Joi.number(),
            googlemaps: Joi.string(),
            ordem: Joi.number(),
         }));

			request
				.get('/endereco')
				.end((err, res) => {
					joiAssert(res.body, listItens);
					done(err);
				});
		});
	});

	describe('GET /endereco/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const item = Joi.object().keys({
				id: Joi.number(),
            logradouro: Joi.string(),
            numero: Joi.string(),
            bairro : Joi.string(),
            complemento: Joi.string(),
            CEP: Joi.string(),
            cidade: Joi.number(),
            UF: Joi.number(),
            googlemaps: Joi.string(),
            ordem: Joi.number(),
			});

			request
				.get('/endereco/1')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('POST /endereco', () => {
		it(`should create a ${table}`, (done) => {
			const item = Joi.object().keys({ 
            id: Joi.number(),
            logradouro: Joi.string(),
            numero: Joi.string(),
            bairro : Joi.string(),
            complemento: Joi.string(),
            CEP: Joi.string(),
            cidade: Joi.number(),
            UF: Joi.number(),
            googlemaps: Joi.string(),
            ordem: Joi.number(),
		   });

			request
				.post('/endereco')
				.send(create)
				.end((err, res) => {
					joiAssert(res.body, item);
					done(err);
				});
		});
	});

	describe('PUT /endereco/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedCount = Joi.array().items(1);
			request
				.put('/endereco/1')
				.send(update)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /endereco/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/endereco/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
