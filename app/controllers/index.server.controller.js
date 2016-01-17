var pjson = require('../../package.json');

exports.render = function(req, res) {
	res.render('index', {
		version: pjson.version
	});
}