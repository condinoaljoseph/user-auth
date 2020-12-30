const express = require('express');
const app = express();
require('./passport');

const auth = require('./routes/auth');

const PORT = 8080;

app.use('/auth', auth);

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'api' });
});

app.listen(PORT, () => console.log('running on port ' + PORT));
