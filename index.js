const easyvk = require('easyvk')
easyvk.callbackAPI.listen({
	port: process.env.PORT || 8080,

	groupId: 178597356,
	secret: '6ir6GqcbpgXgsv5tyuA8hPfZs',
	confirmCode: 'f79dca5c'
}).then(({connection, app}) => {

	connection.on("message_new", (msg) => {

		console.log('Боту пришло сообщение!', msg);

	})

});