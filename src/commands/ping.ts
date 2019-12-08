import { Message } from "discord.js";
import { ICommand } from "../interfaces/ICommand";


const ping : ICommand = {
	name: 'ping',
	description: 'Ping!',
	execute(msg: Message, args: string[]) {
		console.log(args);
		msg.reply('pong');
		msg.channel.send('pong');
		return true
	},
}

module.exports = ping 
