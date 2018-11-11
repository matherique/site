export default (sequelize, DataTypes) => {
	const Newsletter = sequelize.define('newsletter', {
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		nome: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(192),
			allowNull: false,
		},
	});

	return Newsletter;
};
