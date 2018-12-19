export default (sequelize, DataType) => {
  const Config = sequelize.define('config', {
    id : {
      type: DataType.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataType.STRING(128),
      allowNull: false,
    },
    keywords: {
      type: DataType.TEXT(),
      allowNull: true,
    },
    description: {
      type: DataType.STRING(255),
      allowNull: false,
    },
    cache_control: {
      type: DataType.INTEGER(5),
      allowNull: false,
    },
    language: {
      type: DataType.INTEGER(5),
      allowNull: false,
    },
    robots: {
      type: DataType.INTEGER(5),
      allowNull: false,
    },
    rodape: {
      type: DataType.TEXT(),
      allowNull: false,
    },
  })
  return Config;
};
