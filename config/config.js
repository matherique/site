export default {
	database: 'painel',
	username: 'root',
	password: '',
	params: {
		dialect: 'mysql',
		operatorsAliases: false,
		logging: false,
		define: {
			timestamps: false,
			underscored: true,
		},
	},
	jwtSecret: 'huehuesession',
	jwtSession: { session: false },
};
