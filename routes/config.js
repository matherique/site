import { Router } from 'express';
import ConfigController from '../controllers/config';

const router = Router();

export default (app) => {
	const { Config, Info_site } = app.datasource.models;
	const controller = new ConfigController({ Config, Info_site });

	router.get('/', (_, res) => {
		controller.getAll()
			.then((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			}).catch((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	router.get('/:id', (req, res) => {
		controller.getById(req.params)
			.then((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			}).catch((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	router.post('/', (req, res) => {
		controller.create(req.body)
			.then((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			}).catch((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	router.put('/:id', (req, res) => {
		controller.update(req.body, req.params)
			.then((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			}).catch((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	router.delete('/:id', (req, res) => {
		controller.delete(req.params)
			.then((response) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	router.get('/:id/info-site', (req, res) => {
		controller.getByIdWithAssoc(req.params)
			.then((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			}).catch((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	router.get('/info-site', (req, res) => {
		controller.getAllIdWithAssoc()
			.then((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			}).catch((resp) => {
				res.status(resp.statusCode);
				res.json(resp.data);
			});
	});

	return router;
};
