import { Helper } from './Helper';

export abstract class ThreeCardCalculator {

    public static calculate(
        dc: string,
        yc1: string,
        yc2: string,
        yc3: string): string {

            let card1, card2, card3, sum = 0;
            card1 = Helper.calculateCard(yc1);
            card2 = Helper.calculateCard(yc2);
            card3 = Helper.calculateCard(yc3);
            sum = card1 + card2 + card3;
            
            // start SUM
            if(sum = 21) {
                return Helper.B;
            }
            if (sum > 21) {
                return Helper.SORRY;
            }

            if(sum < 17) {
                return Helper.H;
            } 
            return Helper.S;
    }

}