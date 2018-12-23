import EnderecoController from '../../../controllers/endereco';
import seed from '../../seed.js';

const { endereco } = seed;

describe('Controller: endereco', () => {
	const table = '\'endereco\'';
   const { create, update, std } = endereco;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Endereco = {
				findAll: td.function(),
			};
		   
			td.when(Endereco.findAll({})).thenResolve(std);
			const controller = new EnderecoController(Endereco);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Endereco = {
				findOne: td.function(),
			};

			td.when(Endereco.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new EnderecoController(Endereco);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Endereco = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Endereco.create(requestBody)).thenResolve(std);

			const controller = new EnderecoController(Endereco);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Endereco = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Endereco.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new EnderecoController(Endereco);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Endereco = {
				destroy: td.function(),
			};

			td.when(Endereco.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new EnderecoController(Endereco);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
