import { Message, Client } from 'discord.js';
import { Command } from '../interfaces/ICommand';
import { SMessage } from '../interfaces/IMessage';
import { Slip } from '../interfaces/ISlip';
import { isMessage, isSlip } from '../types/RandomAdviceResponse';
import { AdviceSlip } from '../services/AdviceSlip';

export const advice: Command = {
    name: 'advice',
    description: 'Get a random AdviceSlip from https://adviceslip.com/ using their api at https://api.adviceslip.com/',
    args: 'No Args',
    async execute(bot: Client, msg: Message, args: string[]) {
        try {
            const Response = await AdviceSlip.RandomAdvice();

            if (isSlip(Response)) {
                msg.channel.send(`Advice#${Response.slip.slip_id}\n${Response.slip.advice}`);
            } else if (isMessage(Response)) {
                msg.channel.send(`${Response.message.type}: ${Response.message.text}`);
            } else {
                msg.channel.send('Could not determine response type');
                throw Error('Response not of type Slip or SMessage');
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
};
