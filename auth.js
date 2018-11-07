import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';


export default (app) => {
	const Admin = app.datasource.models.ADMIN;
	const opts = {};
	opts.secretOrKey = app.config.jwtSecret;
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

	const strategy = new Strategy(opts, (payload, done) => {
		Admin.findById(payload.ADMIN_ID)
			.then((user) => {
				if (user) {
					return done(null, {
						id: user.ADMIN_ID,
						email: user.EMAIL,
					});
				}
				return done(null, false);
			})
			.catch(erro => done(erro, null));
	});

	passport.use(strategy);

	return {
		initialize: () => passport.initialize(),
		authenticate: () => passport.authenticate('jwt', app.config.jwtSecret),
	};
};
