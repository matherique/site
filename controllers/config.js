import httpsStatus from 'http-status';

const defaultResponse = (data, statusCode = httpsStatus.OK) => {
	console.log(data);
	return ({ data, statusCode });
};
const errorResponse = (message, statusCode = httpsStatus.BAD_REQUEST) => {
	console.error(`ERROR: ${message}`);
	return defaultResponse({ error: message }, statusCode);
};

export default class ConfigController {
	constructor({ Config, Info_site }) {
		this.Config = Config;
		this.InfoSite = Info_site;
	}

	getAll() {
		return this.Config.findAll({})
			.then(result => defaultResponse(result, httpsStatus.OK))
			.catch(error => errorResponse(error.message, httpsStatus.NO_CONTENT));
	}

	getById(id) {
		return this.Config.findOne({ where: id })
			.then(result => defaultResponse(result))
			.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.Config.create(data)
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, id) {
		return this.Config.update(data, { where: id })
			.then(result => defaultResponse(result, httpsStatus.CREATED))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.Config.destroy({ where: params })
			.then(result => defaultResponse(result, httpsStatus.NO_CONTENT))
			.catch(error => errorResponse(error.message, httpsStatus.UNPROCESSABLE_ENTITY));
	}

	getByIdWithAssoc(params) {
		return this.Config.findAll({ where: params, include: [{ model: this.InfoSite, as: 'info_site' }] })
			.then(result => defaultResponse(result, httpsStatus.OK))
			.catch(error => errorResponse(error.message, httpsStatus.NO_CONTENT));
	}

}
