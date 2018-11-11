import InfoSiteController from '../../../controllers/info_site';

describe('Controller: rede social', () => {
	const table = '\'rede_social\'';

	describe(`Get all ${table}: getAll()`, () => {
		it(`should return a list of ${table}`, () => {
			const InfoSite = {
				findAll: td.function(),
			};
			const expectedResponse = {
				id: 1,
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};

			td.when(InfoSite.findAll({})).thenResolve(expectedResponse);
			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.getAll()
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Get a ${table} by id: getById()`, () => {
		it(`should return a ${table} by id`, () => {
			const InfoSite = {
				findOne: td.function(),
			};
			const expectedResponse = {
				id: 1,
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};
			td.when(InfoSite.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);
			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.getById({ id: 1 })
				.then(response => expect(response.data).to.be.eql(expectedResponse));
		});
	});

	describe(`Create a ${table}: create()`, () => {
		it(`should create a ${table}`, () => {
			const InfoSite = {
				create: td.function(),
			};
			const requestBody = {
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};
			const expectedResponse = {
				id: 1,
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};

			td.when(InfoSite.create(requestBody)).thenResolve(expectedResponse);

			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.create(requestBody)
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
				});
		});
	});

	describe(`Update a ${table} by id: update()`, () => {
		it(`should update a ${table} by id`, () => {
			const InfoSite = {
				update: td.function(),
			};
			const requestBody = {
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};
			const expectedResponse = {
				id: 1,
				hora_abre: 3,
				hora_ini_almoco: 3,
				hora_fim_almoco: 3,
				hora_fecha: 3,
				hora_abre_fds: 3,
				email: 'emailteste2@teste.com',
				dia_funcional: 3,
			};

			td.when(InfoSite.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

			const infoSiteController = new InfoSiteController(InfoSite);

			return infoSiteController.update(requestBody, { id: 1 })
				.then((response) => {
					expect(response.statusCode).to.be.eql(201);
					expect(response.data).to.be.eql(expectedResponse);
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
