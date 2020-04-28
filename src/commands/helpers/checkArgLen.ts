import { Message } from 'discord.js';

export const checkArgLength = async (args: string[], msg: Message, length: number): Promise<void> => {
    if (args.length < length) {
        const reply = await msg.reply(`This Command requires ${length} arguments`);

        if (reply instanceof Message) {
            reply.delete(5000);
            throw new Error('insufficient arguments');
        } else throw new Error('Message is not an instance of Message');
    }
};
