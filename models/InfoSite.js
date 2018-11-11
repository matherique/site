export default (sequelize, DataTypes) => {
	const InfoSite = sequelize.define('info_site', {
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		hora_abre: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		hora_ini_almoco: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		hora_fim_almoco: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},
		hora_fecha: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		hora_abre_fds: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(192),
			allowNull: false,
		},
		dia_funcional: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},

	});

	return InfoSite;
};
