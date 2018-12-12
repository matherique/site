import httpsStatus from 'http-status';

const defaultResponse = (data, statusCode = httpsStatus.OK) => ({ data, statusCode });
const errorResponse = (message, statusCode = httpsStatus.BAD_REQUEST) => {
	defaultResponse({ error: message }, statusCode);
};

export default class ContatoController {
	constructor(contato) {
		this.Contato = contato;
	}

	getAll() {
		return this.Contato.findAll({})
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	getById(id) {
		return this.Contato.findOne({ where: id })
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.Contato.create(data)
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, id) {
		return this.Contato.update(data, { where: id })
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.Contato.destroy({ where: params })
			.then(result => defaultResponse(result, httpsStatus.NO_CONTENT))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}
}
