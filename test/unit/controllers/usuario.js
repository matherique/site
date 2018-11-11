import UsuarioController from '../../../controllers/usuario';

describe('Controller: usuario', () => {
	const table = '\'usuario\'';

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Usuario = {
				findAll: td.function(),
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome',
				usuario: 'usuario',
				senha: 'password',
				email: 'email@email.com',
				nivel: 2
			};
			td.when(Usuario.findAll({})).thenResolve(expectedResponse);
			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.getAll()
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Usuario = {
				findOne: td.function(),
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome',
				usuario: 'usuario',
				senha: 'password',
				email: 'email@email.com',
				nivel: 2
			};
			td.when(Usuario.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);
			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Usuario = {
				create: td.function(),
			};
			const requestBody = {
				nome: 'nome 1',
				usuario: 'usuario 1',
				senha: 'password 1',
				email: 'email1@email.com',
				nivel: 2
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome 1',
				usuario: 'usuario 1',
				senha: 'password 1',
				email: 'email1@email.com',
				nivel: 2
			};

			td.when(Usuario.create(requestBody)).thenResolve(expectedResponse);

			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Usuario = {
				update: td.function(),
			};
			const requestBody = {
				nome: 'nome 1',
				usuario: 'usuario 1',
				senha: 'password 1',
				email: 'email1@email.com',
				nivel: 2
			};
			const expectedResponse = {
				id: 1,
				nome: 'nome 1',
				usuario: 'usuario 1',
				senha: 'password 1',
				email: 'email1@email.com',
				nivel: 2
			};

			td.when(Usuario.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Usuario = {
				destroy: td.function(),
			};

			td.when(Usuario.destroy({ where: { id: 1 } })).thenResolve({});

			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
