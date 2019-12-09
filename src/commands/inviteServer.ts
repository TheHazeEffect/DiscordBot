import { Message,Client } from "discord.js";
import { ICommand } from "../interfaces/ICommand";



export const inviteServer : ICommand = {
    name: "inviteAll",
    description: "Invite All members on server",
    execute: async function(bot: Client, msg: Message, args: string[]) {

        // bot.fetchUser(msg.)
        return true
    }
} 