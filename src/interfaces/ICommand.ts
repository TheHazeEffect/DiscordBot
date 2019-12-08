import { Message } from "discord.js";


export interface ICommand {
    name: string,
    description: string,
    execute: (msg:Message,args: string[]) =>  boolean
      
}

