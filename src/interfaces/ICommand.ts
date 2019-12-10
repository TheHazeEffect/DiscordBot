import { Message,Client } from "discord.js";


export interface ICommand {
    name: string,
    description: string,
    args: string,
    execute: (bot: Client,msg:Message,args: string[])  =>  Promise<boolean>
      
}

