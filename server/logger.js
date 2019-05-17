const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
	fs.readFile('server/db/stats.json', 'utf-8', (err, data) => {
		if (err) {
			console.log("Can't read file");
		} else {
			const stat = JSON.parse(data);
			stat.push ({
				time: moment().format('DD MM YYYY, h:mm:ss a'),
				prod_name: name,
				action: action
			});
			fs.writeFile('server/db/stats.json', JSON.stringify(stat), (err) => {
				if (err) {
					console.log("Can't read file");
				}
			})
		}
	})
}

module.exports = logger;