import httpsStatus from 'http-status';

const defaultResponse = (data, statusCode = httpsStatus.OK) => ({ data, statusCode });
const errorResponse = (message, statusCode = httpsStatus.BAD_REQUEST) => {
	defaultResponse({ error: message }, statusCode);
};

export default class NewsletterController {
	constructor(newsletter) {
		this.Newsletter = newsletter;
	}

	getAll() {
		return this.Newsletter.findAll({})
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	getById(id) {
		return this.Newsletter.findOne({ where: id })
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.Newsletter.create(data)
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, id) {
		return this.Newsletter.update(data, { where: id })
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.Newsletter.destroy({ where: params })
			.then(result => defaultResponse(result, httpsStatus.NO_CONTENT))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}
}
