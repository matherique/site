import httpsStatus from 'http-status';

const defaultResponse = (data, statusCode = httpsStatus.OK) => ({ data, statusCode });
const errorResponse = (message, statusCode = httpsStatus.BAD_REQUEST) => {
	defaultResponse({ error: message }, statusCode);
};

export default class InfoSiteController {
	constructor(infosite) {
		this.InfoSite = infosite;
	}

	getAll() {
		return this.InfoSite.findAll({})
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	getById(id) {
		return this.InfoSite.findOne({ where: id })
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.InfoSite.create(data)
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, id) {
		return this.InfoSite.update(data, { where: id })
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.InfoSite.destroy({ where: params })
			.then(result => defaultResponse(result, httpsStatus.NO_CONTENT))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}
}
