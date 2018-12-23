import ImagemController from '../../../controllers/imagem';
import seed from '../../seed.js';

const { imagem } = seed;

describe('Controller: imagem', () => {
	const table = '\'imagem\'';
   const { create, update, std } = imagem;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const Imagem = {
				findAll: td.function(),
			};
		   
			td.when(Imagem.findAll({})).thenResolve(std);
			const controller = new ImagemController(Imagem);

			return controller.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const Imagem = {
				findOne: td.function(),
			};

			td.when(Imagem.findOne({ where: { id: 1 } })).thenResolve(std);
			const controller = new ImagemController(Imagem);

			return controller.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const Imagem = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(Imagem.create(requestBody)).thenResolve(std);

			const controller = new ImagemController(Imagem);

			return controller.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const Imagem = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(Imagem.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const controller = new ImagemController(Imagem);

			return controller.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const Imagem = {
				destroy: td.function(),
			};

			td.when(Imagem.destroy({ where: { id: 1 } })).thenResolve({});

			const controller = new ImagemController(Imagem);

			return controller.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
