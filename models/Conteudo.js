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
	});
   
   return Conteudo;
}
