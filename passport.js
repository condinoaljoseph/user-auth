const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models');

passport.use(
	new LocalStrategy(
		{
			userNameField: 'email',
			passwordField: 'password'
		},
		function (email, password, cb) {
			return User.findOne({ where: { email } })
				.then((user) => {
					if (!user) {
						return cb(null, false, { message: 'Incoret email or password' });
					}

					return cb(null, user, { message: 'Logged In Successfully' });
				})
				.catch((err) => cb(err));
		}
	)
);
