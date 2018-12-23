import GaleriaController from '../../../controllers/galeria';
import seed from '../../seed.js';

const { galeria } = seed;

describe('Controller: galeria', () => {
	const table = '\'galeria\'';
   const { create, update, std } = galeria;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Galeria = {
				findAll: td.function(),
			};
		   
			td.when(Galeria.findAll({})).thenResolve(std);
			const controller = new GaleriaController(Galeria);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Galeria = {
				findOne: td.function(),
			};

			td.when(Galeria.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new GaleriaController(Galeria);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Galeria = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Galeria.create(requestBody)).thenResolve(std);

			const controller = new GaleriaController(Galeria);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Galeria = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Galeria.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new GaleriaController(Galeria);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Galeria = {
				destroy: td.function(),
			};

			td.when(Galeria.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new GaleriaController(Galeria);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
