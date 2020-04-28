import { Message, Client } from 'discord.js';
import { Command } from '../interfaces/ICommand';

export const ping: Command = {
    name: 'ping',
    description: 'Check the Server Ping!',
    args: 'No Prgs',
    async execute(bot: Client, msg: Message, args: string[]) {
        try {
            const pingmsg = await msg.channel.send('Pinging...');

            if (!(pingmsg instanceof Message)) throw Error("variable 'ping' is not of Type Message");

            pingmsg.edit(
                `pong \n` +
                    `Latency is ${Math.floor(pingmsg.createdTimestamp - msg.createdTimestamp)}\n` +
                    `API Latency ${Math.round(bot.ping)}ms`,
            );
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
};
