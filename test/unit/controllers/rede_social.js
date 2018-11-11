import RedeSocialController from '../../../controllers/rede_social';

describe('Controller: rede social', () => {
	const table = '\'rede_social\'';

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const RedeSocial = {
				findAll: td.function(),
			};
			const expectedResponse = {
				id: 1,
				url: 'https://facebook.com.br/teste',
				rede: 1,
			};
			td.when(RedeSocial.findAll({})).thenResolve(expectedResponse);
			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.getAll()
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const RedeSocial = {
				findOne: td.function(),
			};
			const expectedResponse = {
				id: 1,
				url: 'https://facebook.com.br/teste',
				rede: 1,
			};
			td.when(RedeSocial.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);
			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const RedeSocial = {
				create: td.function(),
			};
			const requestBody = {
				url: 'https://facebook.com.br/teste',
				rede: 1,
			};
			const expectedResponse = {
				id: 1,
				url: 'https://facebook.com.br/teste',
				rede: 1,
			};

			td.when(RedeSocial.create(requestBody)).thenResolve(expectedResponse);

			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const RedeSocial = {
				update: td.function(),
			};
			const requestBody = {
				url: 'https://facebook.com.br/teste',
				rede: 1,
			};
			const expectedResponse = {
				id: 1,
				url: 'https://facebook.com.br/teste',
				rede: 1,
			};

			td.when(RedeSocial.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const RedeSocial = {
				destroy: td.function(),
			};

			td.when(RedeSocial.destroy({ where: { id: 1 } })).thenResolve({});

			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
