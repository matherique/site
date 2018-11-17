export default (sequelize, DataTypes) => {
	const InfoSite = sequelize.define('endereco', {
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		logradouro: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		numero: {
			type: DataTypes.STRING(8),
			allowNull: false,
		},
		bairro: {
			type: DataTypes.STRING(32),
			allowNull: false,
		},
		complemento: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		CEP: {
			type: DataTypes.STRING(16),
			allowNull: false,
		},
		cidade: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
		},
		UF: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
		},
		googlemaps: {
			type: DataTypes.TEXT('tiny'),
			allowNull: false,
		},
		ordem: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	});

	return InfoSite;
};
