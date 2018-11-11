import NewsletterController from '../../../controllers/newsletter';

describe('Controller: rede social', () => {
	const table = '\'rede_social\'';

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Newsletter = {
				findAll: td.function(),
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome teste',
				email: 'emailteste@email.com'
			};
			td.when(Newsletter.findAll({})).thenResolve(expectedResponse);
			const newsletterController = new NewsletterController(Newsletter);

			return newsletterController.getAll()
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Newsletter = {
				findOne: td.function(),
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome teste',
				email: 'emailteste@email.com'
			};
			td.when(Newsletter.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);
			const newsletterController = new NewsletterController(Newsletter);

			return newsletterController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Newsletter = {
				create: td.function(),
			};
			const requestBody = {
				nome: 'nome teste',
				email: 'emailteste@email.com'
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome teste',
				email: 'emailteste@email.com'
			};

			td.when(Newsletter.create(requestBody)).thenResolve(expectedResponse);

			const newsletterController = new NewsletterController(Newsletter);

			return newsletterController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Newsletter = {
				update: td.function(),
			};
			const requestBody = {
				nome: 'nome teste',
				email: 'emailteste@email.com'
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome teste',
				email: 'emailteste@email.com'
			};

			td.when(Newsletter.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

			const newsletterController = new NewsletterController(Newsletter);

			return newsletterController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Newsletter = {
				destroy: td.function(),
			};

			td.when(Newsletter.destroy({ where: { id: 1 } })).thenResolve({});

			const newsletterController = new NewsletterController(Newsletter);

			return newsletterController.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
