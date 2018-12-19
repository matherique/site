export default (sequelize, DataType) => {
  const Menu = sequelize.define('menu', {
    id: {
      type: DataType.INTEGER(11),
      primaryKey: true,
      autoIncremente: true,
    },
    nome_menu: {
      type: DataType.STRING(32),
      allowNull: false,
    },
    situacao: {
      type: DataType.INTEGER(5),
      allowNull: false,
    },
  });
  return Menu;
}
