export default (sequelize, DataType) => {
	const Conteudo = sequelize.define('conteudo', {
		id: {
			type: DataType.INTEGER(11),
			primaryKey: true,
			autoIncremente: true,
		},
		titulo: {
			type: DataType.TEXT('tiny'),
			allowNull: false,
		},
		subtitulo: {
			type: DataType.TEXT,
			allowNull: false,
		},
		conteudo: {
			type: DataType.TEXT,
			allowNull: false
		},
		menu_id: {
			type: DataType.INTEGER(),
			references: { model: 'info_site', key: 'id' },
			onDelete: 'CASCADE',
			allowNull: false,
		}
	});

	Conteudo.associate = (models) => {
		Conteudo.belongsTo(models.menu, {
			foreingKey: 'menu_id',
		});
	};

	return Conteudo;
}
