import MenuController from '../../../controllers/menu';
import seed from '../../seed.js';

const { menu } = seed;

describe('Controller: menu', () => {
	const table = '\'menu\'';
   const { create, update, std } = menu;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Menu = {
				findAll: td.function(),
			};
		   
			td.when(Menu.findAll({})).thenResolve(std);
			const controller = new MenuController(Menu);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Menu = {
				findOne: td.function(),
			};

			td.when(Menu.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new MenuController(Menu);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Menu = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Menu.create(requestBody)).thenResolve(std);

			const controller = new MenuController(Menu);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Menu = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Menu.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new MenuController(Menu);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Menu = {
				destroy: td.function(),
			};

			td.when(Menu.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new MenuController(Menu);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
