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
  return Imagem;
}