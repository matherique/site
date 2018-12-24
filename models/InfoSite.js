export default (sequelize, DataTypes) => {
	const InfoSite = sequelize.define('info_site', {
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		hora_abre: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
		hora_ini_almoco: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
		hora_fim_almoco: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
		},
		hora_fecha: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
		hora_abre_fds: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(192),
			allowNull: false,
		},
		dia_funcional: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
  });
  sequelize.models.config.belongsTo(InfoSite, { as: 'info_site' });
  sequelize.models.endereco.belongsTo(InfoSite, { as: 'info_site'} );

  return InfoSite;

}
