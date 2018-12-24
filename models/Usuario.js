import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
	const Usuario = sequelize.define('usuario', {
		id: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		usuario: {
			type: DataTypes.STRING(16),
			allowNull: true,
		},
		senha: {
			type: DataTypes.STRING(16),
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		nivel: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
		},
	},
		{
			hooks: {
				beforeCreate: (user) => {
					const salt = bcrypt.genSaltSync();
					user.set('password', bcrypt.hashSync(user.senha, salt));
				},
			},
			classMethods: {
				isPassword: (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword),
			},
		});

	return Usuario;
};
