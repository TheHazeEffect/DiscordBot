import { ping } from './ping';
import { sendEmail } from './sendEmail';
import { say } from './say';
// eslint-disable-next-line import/no-cycle
import { help } from './help';
import { advice } from './advice';
import { server } from './server';

export const botCommands = [ping, sendEmail, say, help, server, advice];
