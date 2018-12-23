import ContatoController from '../../../controllers/contato';
import seed from '../../seed.js';

const { contato } = seed;

describe('Controller: contato', () => {
	const table = '\'contato\'';
   const { create, update, std } = contato;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Contato = {
				findAll: td.function(),
			};
		   
			td.when(Contato.findAll({})).thenResolve(std);
			const controller = new ContatoController(Contato);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Contato = {
				findOne: td.function(),
			};

			td.when(Contato.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new ContatoController(Contato);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Contato = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Contato.create(requestBody)).thenResolve(std);

			const controller = new ContatoController(Contato);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Contato = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Contato.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new ContatoController(Contato);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Contato = {
				destroy: td.function(),
			};

			td.when(Contato.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new ContatoController(Contato);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
