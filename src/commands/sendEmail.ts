import { Message,Client } from "discord.js";
import { ICommand } from "../interfaces/ICommand";
import { GMailService } from "../services/email/GMailService";

export const sendEmail : ICommand = {
    name: "sendemail",
    description: "Send an Email to email address",
    execute: async function(bot: Client, msg: Message, args: string[]): Promise<boolean> {

        try {

            let gmailService = new GMailService();
            await gmailService.sendMail(args[0],args[1],args.slice(2,args.length).join(" "))
            msg.reply(`The Email has been sent Lord ${msg.author.username}!`)
            return true
        }catch(error) {
            console.log(error)
            throw new Error("There was an error sending Gmail")
        }

    }
} 