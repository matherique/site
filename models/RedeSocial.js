export default (sequelize, DataTypes) => {
	const RedeSocial = sequelize.define('rede_social', {
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		url: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		rede: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
		},
	});

	return RedeSocial;
};
