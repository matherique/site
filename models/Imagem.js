import Galeria from './Galeria';

export default (sequelize, DataType) => {
	const Imagem = sequelize.define('imagem', {
		id: {
			type: DataType.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		imagem: {
			type: DataType.STRING(128),
			allowNull: false,
		},
		situacao: {
			type: DataType.INTEGER(4),
			allowNull: false,
		},
		ordem: {
			type: DataType.INTEGER(4),
			allowNull: false,
		},
		legenda: {
			type: DataType.STRING(64),
			allowNull: true,
		},
	});

	Imagem.belongsTo(sequelize.models.galeria, { as: 'galeria', foreingkey: 'fk_galeria'});

	return Imagem;
}
