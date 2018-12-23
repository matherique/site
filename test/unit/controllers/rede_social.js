import RedeSocialController from '../../../controllers/rede_social';
import seed from '../../seed.js';

const { rede_social }  = seed;


describe('Controller: rede social', () => {
	const table = '\'rede_social\'';
   const { create, update, std } = rede_social;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const RedeSocial = {
				findAll: td.function(),
			};
		   td.when(RedeSocial.findAll({})).thenResolve(std);
			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const RedeSocial = {
				findOne: td.function(),
			};
         td.when(RedeSocial.findOne({ where: { id: 1 } })).thenResolve(std);
			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const RedeSocial = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;
			
			td.when(RedeSocial.create(requestBody)).thenResolve(std);

			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const RedeSocial = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;

			td.when(RedeSocial.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const redeSocialController = new RedeSocialController(RedeSocial);

			return redeSocialController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
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
