import ConfigController from '../../../controllers/info_site';
import seed from '../../seed.js';

const { config } = seed;

describe('Controller: config', () => {
	const table = '\'config\'';
   const { create, update, std } = config;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Config = {
				findAll: td.function(),
			};
		   
			td.when(Config.findAll({})).thenResolve(std);
			const controller = new ConfigController(Config);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Config = {
				findOne: td.function(),
			};

			td.when(Config.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new ConfigController(Config);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Config = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Config.create(requestBody)).thenResolve(std);

			const controller = new ConfigController(Config);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Config = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Config.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new ConfigController(Config);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Config = {
				destroy: td.function(),
			};

			td.when(Config.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new ConfigController(Config);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
