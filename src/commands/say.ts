import { Message, Client, RichEmbed } from 'discord.js';
import { Command } from '../interfaces/ICommand';
import { checkArgLength } from './helpers/checkarglen';

export const say: Command = {
    name: 'say',
    description: 'Say something',
    args: '{Optional}<embed> <Message>',
    async execute(bot: Client, msg: Message, args: string[]) {
        if (msg.deletable) msg.delete();

        await checkArgLength(args, msg, 1);

        console.log(`Hex color is ${msg.guild.me.displayHexColor}`);
        const roleColor = msg.guild.me.displayHexColor === '#000000' ? '#eeeeee' : msg.guild.me.displayHexColor;

        if (args[0].toLowerCase() === 'embed') {
            const embed = new RichEmbed()
                .setColor(roleColor)
                .setDescription(args.slice().join(' '))
                .setTimestamp()
                // .setImage(bot.user.defaultAvatarURL)
                .setAuthor(msg.author.username, msg.author.displayAvatarURL)
                .setFooter(bot.user.username, bot.user.displayAvatarURL);

            msg.channel.send(embed);
        } else {
            msg.channel.send(args.join(' '));
        }

        return true;
    },
};
