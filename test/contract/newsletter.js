describe('Contract: newsletter', () => {
	const table = '\'newsletter\'';
	const { Newsletter } = app.datasource.models;
	const defaultNewsletter = {
		id: 1,
		nome: 'teste',
		email: 'emailteste@email.com',
	};

	beforeEach((done) => {
		Newsletter
			.destroy({ where: {} })
			.then(() => Newsletter.create(defaultNewsletter))
			.then(() => done());
	});

	describe('GET /newsletter', () => {
		it(`should return a list of  ${table}`, (done) => {
			const newsletterList = Joi.array().items(Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				email: Joi.string(),
			}));

			request
				.get('/newsletter')
				.end((err, res) => {
					joiAssert(res.body, newsletterList);
					done(err);
				});
		});
	});

	describe('GET /newsletter/{id}', () => {
		it(`should return a ${table}`, (done) => {
			const admin = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				email: Joi.string(),
			});

			request
				.get('/newsletter/1')
				.end((err, res) => {
					joiAssert(res.body, admin);
					done(err);
				});
		});
	});

	describe('POST /newsletter', () => {
		it(`should create a ${table}`, (done) => {
			const newNewsletter = {
				id: 2,
				nome: 'teste2',
				email: 'emailteste2@email.com',
			};

			const newsletter = Joi.object().keys({
				id: Joi.number(),
				nome: Joi.string(),
				email: Joi.string(),
			});

			request
				.post('/newsletter')
				.send(newNewsletter)
				.end((err, res) => {
					joiAssert(res.body, newsletter);
					done(err);
				});
		});
	});

	describe('PUT /newsletter/{id}', () => {
		it(`should update a ${table}`, (done) => {
			const updatedNewsletter = {
				id: 2,
				nome: 'teste4',
				email: 'emailteste4@email.com',
			};
			const updatedCount = Joi.array().items(1);
			request
				.put('/newsletter/1')
				.send(updatedNewsletter)
				.end((err, res) => {
					joiAssert(res.body, updatedCount);
					done(err);
				});
		});
	});

	describe('DELETE /newsletter/{id}', () => {
		it(`should deleta a ${table}`, (done) => {
			request
				.delete('/newsletter/1')
				.end((err, res) => {
					expect(res.statusCode).to.be.eql(204);
					done(err);
				});
		});
	});
});
