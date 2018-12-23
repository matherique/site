import TelefoneController from '../../../controllers/telefone';
import seed from '../../seed.js';

const { telefone } = seed;

describe('Controller: telefone', () => {
	const table = '\'telefone\'';
   const { create, update, std } = telefone;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Telefone = {
				findAll: td.function(),
			};
		   
			td.when(Telefone.findAll({})).thenResolve(std);
			const controller = new TelefoneController(Telefone);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Telefone = {
				findOne: td.function(),
			};

			td.when(Telefone.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new TelefoneController(Telefone);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Telefone = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Telefone.create(requestBody)).thenResolve(std);

			const controller = new TelefoneController(Telefone);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Telefone = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Telefone.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new TelefoneController(Telefone);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Telefone = {
				destroy: td.function(),
			};

			td.when(Telefone.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new TelefoneController(Telefone);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
