export default (sequelize, DataType) => {
  const Galeria = sequelize.define('galeria', {
    id: {
      type: DataType.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataType.STRING(128),
      allowNull: false,
    },
    ordem: {
      type: DataType.INTEGER(11),
      allowNull: false,
    },
    conteudo_id: {
      type: DataType.INTEGER(11),
      allowNull: true,
    },
  });
  return Galeria;
};
