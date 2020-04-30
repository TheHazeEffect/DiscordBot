import { SMessage } from '../interfaces/IMessage';
import { Slip } from '../interfaces/ISlip';

export type RandomAdviceResponse = Slip | SMessage;

export function isSlip(object: RandomAdviceResponse): object is Slip {
    return (object as Slip).slip !== undefined;
}

export function isMessage(object: RandomAdviceResponse): object is SMessage {
    return (object as SMessage).message !== undefined;
}
