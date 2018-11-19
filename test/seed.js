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
faker.seed(113);
seed.usuario.create = {
	id: 2,
	nome: faker.name.findName(),
	usuario: faker.internet.userName(),
	senha: faker.internet.password(),
	email: faker.internet.email(),
	nivel: 2,
};
faker.seed(123);
seed.usuario.update = {
	id: 1,
	nome: faker.name.findName(),
	usuario: faker.internet.userName(),
	senha: faker.internet.password(),
	email: faker.internet.email(),
	nivel: 2,
};

// ENDERECO
seed.endereco = {};
seed.endereco.default = {
	id: 1,
	logradouro: faker.address.streetName(),
	numero: faker.random.number(),
	bairro: faker.address.state(),
	complemento: faker.address.secondaryAddress(),
	cep: faker.address.zipCode(),
	cidade: 1,
	uf: 11,
	googlemaps: 'https://maps.google.com.br/',
	ordem: 2,
	info_site: 1,
};
faker.seed(127);
seed.endereco.create = {
	id: 2,
	logradouro: faker.address.streetName(),
	numero: faker.random.number(),
	bairro: faker.address.state(),
	complemento: faker.address.secondaryAddress(),
	cep: faker.address.zipCode(),
	cidade: 2,
	uf: 10,
	googlemaps: 'https://maps.google.com.br',
	ordem: 2,
	info_site: 1,
};
faker.seed(133);
seed.endereco.update = {
	id: 1,
	logradouro: faker.address.streetName(),
	numero: faker.random.number(),
	bairro: faker.address.state(),
	complemento: faker.address.secondaryAddress(),
	cep: faker.address.zipCode(),
	cidade: 2,
	uf: 10,
	googlemaps: 'https://maps.google.com.br',
	ordem: 2,
	info_site: 1,
};


// INFO SITE
seed.info_site = {};
seed.info_site.default = {
	id: 1,
	hora_abre: 2,
	hora_ini_almoco: 3,
	hora_fim_almoco: 3,
	hora_fecha: 3,
	hora_abre_fds: 3,
	email: faker.internet.email(),
	dia_funcional: 3,
};
faker.seed(4213);
seed.info_site.create = {
	id: 2,
	hora_abre: 2,
	hora_ini_almoco: 3,
	hora_fim_almoco: 1,
	hora_fecha: 3,
	hora_abre_fds: 3,
	email: faker.internet.email(),
	dia_funcional: 3,

};
faker.seed(1245);
seed.info_site.update = {
	hora_abre: 4,
	id: 1,
	hora_ini_almoco: 1,
	hora_fim_almoco: 2,
	hora_fecha: 4,
	hora_abre_fds: 1,
	email: faker.internet.email(),
	dia_funcional: 1,
};

// CONFIG
seed.config = {};
seed.config.default = {
	id: 1,
	title: faker.lorem.words(),
	keywords: faker.lorem.sentense().split(' ').jon(', '),
	description: faker.lorem.lines(),
	cache_control: 2,
	language: 1,
	robots: 2,
	rodape: faker.lorem.words(),
	info_site: 1,
};
faker.seed(42356);
seed.config.create = {
	id: 2,
	title: faker.lorem.words(),
	keywords: faker.lorem.sentense().split(' ').jon(', '),
	description: faker.lorem.lines(),
	cache_control: 3,
	language: 1,
	robots: 1,
	rodape: faker.lorem.words(),
	info_site: 1,
};
faker.seed(223141);
seed.config.update = {
	id: 1,
	title: faker.lorem.words(),
	keywords: faker.lorem.sentense().split(' ').jon(', '),
	description: faker.lorem.lines(),
	cache_control: 2,
	language: 1,
	robots: 2,
	rodape: faker.lorem.words(),
	info_site: 1,
};

// NEWSLETTER
seed.newsletter = {};
seed.newsletter.default = {
	id: 1,
	nome: faker.name.findName(),
	email: faker.internet.email(),
};
faker.seed(413);
seed.newsletter.create = {
	id: 2,
	nome: faker.name.findName(),
	email: faker.internet.email(),
};
faker.seed(51214);
seed.newsletter.update = {
	id: 1,
	nome: faker.name.findName(),
	email: faker.internet.email(),
};

// TELEFONE
seed.telefone = {};
seed.telefone.default = {
	id: 1,
	numero: faker.phone.phoneNumber(),
	operadora: 2,
	whats_sim: 3,
	ordem: faker.random.number(),
	endereco_id: 1,
};
faker.seed(4253);
seed.telefone.create = {
	id: 2,
	numero: faker.phone.phoneNumber(),
	operadora: 2,
	whats_sim: 3,
	ordem: faker.random.number(),
	endereco_id: 1,
};
faker.seed(12390124);
seed.telefone.update = {
	numero: faker.phone.phoneNumber(),
	operadora: 2,
	whats_sim: 3,
	ordem: faker.random.number(),
	endereco_id: 1,
};

// CONTATO
seed.contato = {};
seed.contato.default = {
	id: 1,
	nome: faker.name.findName(),
	email: faker.internet.email(),
	telefone: faker.phone.phoneNumber(),
	celular: faker.phone.phoneNumber(),
	assunto: faker.lorem.sentense(),
	mensagem: faker.lorem.text(),
};
faker.seed(421);
seed.contato.create = {
	id: 2,
	nome: faker.name.findName(),
	email: faker.internet.email(),
	telefone: faker.phone.phoneNumber(),
	celular: faker.phone.phoneNumber(),
	assunto: faker.lorem.sentense(),
	mensagem: faker.lorem.text(),
};
faker.seed(423);
seed.contato.update = {
	id: 1,
	nome: faker.name.findName(),
	email: faker.internet.email(),
	telefone: faker.phone.phoneNumber(),
	celular: faker.phone.phoneNumber(),
	assunto: faker.lorem.sentense(),
	mensagem: faker.lorem.text(),
};

// REDE SOCIAL
seed.rede_social = {};
seed.rede_social.default = {
	id: 1,
	url: faker.internet.url(),
	icone: 2,
};
faker.seed(102312);
seed.rede_social.create = {
	id: 2,
	url: faker.internet.url(),
	icone: 2,
};
faker.seed(1231);
seed.rede_social.update = {
	id: 1,
	url: faker.internet.url(),
	icone: 2,
};

// MENU
seed.menu = {};
seed.menu.default = {
	id: 1,
	nome_menu: faker.lorem.word(),
	situacao: 1,
};
faker.seed(12355);
seed.menu.create = {
	id: 2,
	nome_menu: faker.lorem.word(),
	situacao: 1,
};
faker.seed(32355);
seed.menu.update = {
	id: 1,
	nome_menu: faker.lorem.word(),
	situacao: 1,
};

// CONTEUDO
seed.conteudo = {};
seed.conteudo.default = {
	id: 1,
	titulo: faker.lorem.word(),
	subtitulo: faker.lorem.sentense(),
	conteudo: faker.lorem.text(),
	menu_id: 1,
};
faker.seed(123555);
seed.conteudo.create = {
	id: 2,
	titulo: faker.lorem.word(),
	subtitulo: faker.lorem.sentense(),
	conteudo: faker.lorem.text(),
	menu_id: 1,
};
faker.seed(132355);
seed.conteudo.update = {
	id: 1,
	titulo: faker.lorem.word(),
	subtitulo: faker.lorem.sentense(),
	conteudo: faker.lorem.text(),
	menu_id: 1,
};

// GALERIA
seed.galeria = {};
seed.galeria.default = {
	id: 1,
	nome: faker.lorem.word(),
	ordem: 1,
	conteudo_id: 1,
};
faker.seed(1235551);
seed.galeria.create = {
	id: 2,
	nome: faker.lorem.word(),
	ordem: 2,
	conteudo_id: 1,
};
faker.seed(1323552);
seed.galeria.update = {
	id: 1,
	nome: faker.lorem.word(),
	ordem: 1,
	conteudo_id: 1,
};

// IMAGEM
seed.imagem = {};
seed.imagem.default = {
	id: 1,
	galeria_id: 1,
	imagem: faker.image.image(),
	situacao: 1,
	ordem: 1,
	legenda: faker.lorem.sentense(),
};
faker.seed(12355511);
seed.imagem.create = {
	id: 2,
	galeria_id: 1,
	imagem: faker.image.image(),
	situacao: 1,
	ordem: 11,
	legenda: faker.lorem.sentense(),
};
faker.seed(13235252);
seed.imagem.update = {
	id: 1,
	galeria_id: 1,
	imagem: faker.image.image(),
	situacao: 2,
	ordem: 15,
	legenda: faker.lorem.sentense(),
};


export default seed;
