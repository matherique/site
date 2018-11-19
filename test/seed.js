import faker from 'faker';

faker.locale = 'pt_BR';


const seed = {};

// usuario
seed.usuario = {};
seed.usuario.default = {
	id: 1,
	nome: faker.name.findName(),
	usuario: faker.internet.userName(),
	senha: faker.internet.password(),
	email: faker.internet.email(),
	nivel: 2,
};
seed.usuario.create = {
	id: 2,
	nome: faker.name.findName(),
	usuario: faker.internet.userName(),
	senha: faker.internet.password(),
	email: faker.internet.email(),
	nivel: 2,
};

seed.usuario.update = {
	id: 1,
	nome: faker.name.findName(),
	usuario: faker.internet.userName(),
	senha: faker.internet.password(),
	email: faker.internet.email(),
	nivel: 2,
};

seed.endereco = {
	default: {
		id: 1,
		logradouro: 'rua sebastiao eduardo de morais',
		numero: '415',
		bairro: 'enseada',
		complemento: 'sobrado, casa de esquina',
		cep: '11602310',
		cidade: 1,
		uf: 11,
		googlemaps: 'https://maps.google.com.br/',
		ordem: 2,
		info_site: 1,
	},
	create: {
		id: 2,
		logradouro: 'rua sebastiao eduardo de morais2',
		numero: '4152',
		bairro: 'enseada2',
		complemento: 'sobrado, casa de esquina2',
		cep: '11602312',
		cidade: 2,
		uf: 10,
		googlemaps: 'https://maps.google.com.br',
		ordem: 2,
		info_site: 1,
	},
	update: {
		id: 1,
		logradouro: 'att rua sebastiao eduardo de morais',
		numero: '1415',
		bairro: 'att enseada',
		complemento: 'att sobrado, casa de esquina',
		cep: '12602310',
		cidade: 2,
		uf: 10,
		googlemaps: 'https://maps.google.com.br',
		ordem: 2,
		info_site: 1,
	},
};
seed.info_site = {
	default: {
		id: 1,
		hora_abre: 2,
		hora_ini_almoco: 3,
		hora_fim_almoco: 3,
		hora_fecha: 3,
		hora_abre_fds: 3,
		email: 'emailteste@teste.com',
		dia_funcional: 3,
	},
	create: {
		id: 2,
		hora_abre: 2,
		hora_ini_almoco: 3,
		hora_fim_almoco: 1,
		hora_fecha: 3,
		hora_abre_fds: 3,
		email: 'emailteste2@teste.com',
		dia_funcional: 3,

	},
	update: {
		id: 1,
		hora_abre: 4,
		hora_ini_almoco: 1,
		hora_fim_almoco: 2,
		hora_fecha: 4,
		hora_abre_fds: 1,
		email: 'emailteste2@teste.com',
		dia_funcional: 1,
	},
};
seed.config = {
	default: {
		id: 1,
		title: 'titulo site',
		keywords: 'keyword1, keyword2',
		description: 'descricao do site',
		cache_control: 2,
		language: 1,
		robots: 2,
		rodape: 'rodape do site',
		info_site: 1,
	},
	create: {
		id: 2,
		title: 'titulo site 2',
		keywords: 'keyword1, keyword2',
		description: 'descricao do site 2',
		cache_control: 1,
		language: 3,
		robots: 1,
		rodape: 'rodape do site 2',
		info_site: 1,
	},
	update: {
		id: 1,
		title: 'att titulo site 2',
		keywords: 'att keyword1, keyword2',
		description: 'att descricao do site 2',
		cache_control: 3,
		language: 3,
		robots: 3,
		rodape: 'att rodape do site 2',
		info_site: 1,
	},
};

export default seed;
