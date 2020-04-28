import { Message, Client } from 'discord.js';
import { GMailService } from '../services/email/GMailService';
import { Command } from '../interfaces/ICommand';
import { checkArgLength } from './helpers/checkarglen';

export const sendEmail: Command = {
    name: 'sendemail',
    description: 'Send an email to given address',
    args: '<EmailAddress> <Subject> <Message>',
    async execute(bot: Client, msg: Message, args: string[]): Promise<boolean> {
        try {
            await checkArgLength(args, msg, 3);

            const sending = await msg.channel.send('Sending...');

            if (!(sending instanceof Message)) throw Error("varaible 'Sending' is not of Type Message");

            const gmailService = new GMailService();
            await gmailService.sendMail(args[0], args[1], args.slice(2, args.length).join(' '));
            sending.edit(`The Email has been sent Lord ${msg.author.username}!`);

            return true;
        } catch (error) {
            console.log(error);
            throw new Error('There was an error sending Gmail');
        }
    },
};
