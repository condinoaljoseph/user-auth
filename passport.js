const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(
	new LocalStrategy(
		{
			userNameField: 'email',
			passwordField: 'password'
		},
		function (email, password, cb) {
			return true;
		}
	)
);
