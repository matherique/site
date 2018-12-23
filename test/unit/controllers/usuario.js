import UsuarioController from '../../../controllers/usuario';
import seed from '../../seed';

const { usuario } = seed;

describe('Controller: usuario', () => {
	const table = '\'usuario\'';
   const { create, update, std } = usuario;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Usuario = {
				findAll: td.function(),
			};
			
			td.when(Usuario.findAll({})).thenResolve(std);
			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Usuario = {	findOne: td.function(), };
		
			td.when(Usuario.findOne({ where: { id: 1 } })).thenResolve(std);
			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Usuario = {
				create: td.function(),
			};
    
			const requestBody = usuario.create;
         delete requestBody.id;
         
			td.when(Usuario.create(requestBody)).thenResolve(std);

			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Usuario = {
				update: td.function(),
			};
         const requestBody = std;
			delete requestBody.id;                   

			td.when(Usuario.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const usuarioController = new UsuarioController(Usuario);

			return usuarioController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
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
