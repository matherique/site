import { Router } from 'express';
import TelefoneController from '../controllers/telefone';

const router = Router();

export default (app) => {
  const { Telefone } = app.datasource.models;
  const controller = new TelefoneController(Telefone);

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
				res.status(response.statusCode);
				res.json(response.data);
			});
	});

	return router;
};
