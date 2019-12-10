import { Message,Client } from "discord.js";
import { ICommand } from "../interfaces/ICommand";


export const ping : ICommand = {
	name: 'ping',
	description: 'Check the Server Ping!',
	args: "No Prgs",
	execute: async function (bot: Client,msg: Message, args: string[]) {

		try {
			const ping = await msg.channel.send('Pinging...')

			if(!(ping instanceof Message))
				throw Error("ping is not of Type Message")

			ping.edit(
			  `pong \n` 
			+ `Latency is ${Math.floor(ping.createdTimestamp - msg.createdTimestamp)}\n`
			+ `API Latency ${Math.round(bot.ping)}ms`)
			return true
		}catch(error){
			console.log(error)
			return false
		}
	},
}
