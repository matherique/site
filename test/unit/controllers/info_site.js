import InfoSiteController from '../../../controllers/info_site';
import seed from '../../seed.js';

const { info_site } = seed;

describe('Controller: info site', () => {
	const table = '\'info_site\'';
   const { create, update, std } = info_site;

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const InfoSite = {
				findAll: td.function(),
			};
		   
			td.when(InfoSite.findAll({})).thenResolve(std);
			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.getAll()
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const InfoSite = {
				findOne: td.function(),
			};
			td.when(InfoSite.findOne({ where: { id: 1 } })).thenResolve(std);
			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(std));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const InfoSite = {
				create: td.function(),
			};
         const requestBody = std;
         delete requestBody.id;			

			td.when(InfoSite.create(requestBody)).thenResolve(std);

			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const InfoSite = {
				update: td.function(),
			};
			const requestBody = std;
         delete requestBody.id;


			td.when(InfoSite.update(requestBody, { where: { id: 1 } })).thenResolve(std);

			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(std);
				});
		});
	});

	describe(`Delete a ${table} by id: dalete()`, () => {
		it(`should delete a ${table} by id`, () => {
			const InfoSite = {
				destroy: td.function(),
			};

			td.when(InfoSite.destroy({ where: { id: 1 } })).thenResolve({});

			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.delete({ id: 1 })
				.then(response => expect(response.statusCode).to.be.eql(204));
		});
	});
});
