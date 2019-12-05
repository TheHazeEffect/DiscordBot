module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg, args) {
		console.log(args)
		msg.reply('pong');
        msg.channel.send('pong');
	},
};
