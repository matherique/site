export default (sequelize, DataType) => {
	const Contato = sequelize.define('contato', {
		id: {
			type: DataType.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		nome: {
			type: DataType.STRING(128),
			allowNull: false,
		},
		email: {
			type: DataType.STRING(192),
			allowNull: false,
		},
		telefone: {
			type: DataType.STRING(16),
			allowNull: false,
		},
		celular: {
			type: DataType.STRING(16),
			allowNull: false,

		},
		assunto: {
			type: DataType.STRING(64),
			allowNull: false,
		},
		mensagem: {
			type: DataType.TEXT,
			allowNull: false,
		},
	});
	return Contato;
};
