export default (sequelize, DataTypes) => {
    const Telefone = sequelize.define('telefone', {
      id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		numero: {
			type: DataTypes.STRING(16),
			allowNull: false,
		},
	   operadora: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
		},
      whats_sim: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
      ordem: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
		},
	});

	return Telefone;
};
