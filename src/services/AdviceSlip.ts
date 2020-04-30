import axios from 'axios';
import { RandomAdviceResponse } from '../types/RandomAdviceResponse';

export class AdviceSlip {
    public static baseUrl = 'https://api.adviceslip.com/';

    static async RandomAdvice(): Promise<RandomAdviceResponse> {
        const response = await axios.get(`${this.baseUrl}/advice`);

        return response.data;
    }
}
