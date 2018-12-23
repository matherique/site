import ConteudoController from '../../../controllers/conteudo';
import seed from '../../seed.js';

const { conteudo } = seed;

describe('Controller: conteudo', () => {
	const table = '\'conteudo\'';
   const { create, update, std } = conteudo;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Conteudo = {
				findAll: td.function(),
			};
		   
			td.when(Conteudo.findAll({})).thenResolve(std);
			const controller = new ConteudoController(Conteudo);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Conteudo = {
				findOne: td.function(),
			};

			td.when(Conteudo.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new ConteudoController(Conteudo);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Conteudo = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Conteudo.create(requestBody)).thenResolve(std);

			const controller = new ConteudoController(Conteudo);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Conteudo = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Conteudo.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new ConteudoController(Conteudo);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Conteudo = {
				destroy: td.function(),
			};

			td.when(Conteudo.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new ConteudoController(Conteudo);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
