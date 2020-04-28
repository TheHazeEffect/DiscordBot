import { Message, Client, RichEmbed } from 'discord.js';
import { Command } from '../interfaces/ICommand';
// eslint-disable-next-line import/no-cycle
import { botCommands } from '.';

export const help: Command = {
    name: 'help',
    description: 'Shows the description of all commands',
    args: 'No Args',
    async execute(bot: Client, msg: Message, args: string[]): Promise<boolean> {
        try {
            const fiveSpaces = '\u0020\u0020\u0020\u0020\u0020';
            let helpBody = '';

            const sortedCommands = botCommands.sort((cmd1: Command, cmd2: Command) => {
                if (cmd1.name < cmd2.name) {
                    return -1;
                }
                return 1;
            });

            sortedCommands.forEach((cmd: Command) => {
                helpBody += `${cmd.name.toUpperCase()}\n${fiveSpaces}desc: ${cmd.description}\n${fiveSpaces}Args: ${
                    cmd.args
                }\n\n`;
            });

            const embed = new RichEmbed()
                .setDescription(helpBody)
                .setTimestamp()
                // .setImage(bot.user.defaultAvatarURL)
                // .setAuthor(msg.author.username, msg.author.displayAvatarURL)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTitle('List of commands')
                .setColor('#aaaaaa');

            msg.reply(embed);

            return true;
        } catch (error) {
            throw new Error('There was an error running help');
        }
    },
};
