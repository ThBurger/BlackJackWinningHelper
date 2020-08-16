import { Helper } from './Helper';

export abstract class MoreCardCalculator_Johnslots {

    public static calculate(
        dc: string,
        yc1: string,
        yc2: string,
        yc3: string,
        yc4: string,
        yc5: string): string {

        // start SUM
        let card1, card2, card3, card4, card5, sum, aces = 0;
        card1 = yc1 != 'A' ? Helper.calculateCard(yc1) : 1;
        card2 = yc2 != 'A' ? Helper.calculateCard(yc2) : 1;
        card3 = yc3 != 'A' ? Helper.calculateCard(yc3) : 1;
        card4 = yc4 != 'A' ? Helper.calculateCard(yc4) : 1;
        card5 = yc5 != 'A' ? Helper.calculateCard(yc5) : 1;
        sum = card1 + card2 + card3 + card4 + card5;
        
        aces = yc1 == 'A' ? aces += 1 : aces += 0;
        aces = yc2 == 'A' ? aces += 1 : aces += 0;
        aces = yc3 == 'A' ? aces += 1 : aces += 0;
        aces = yc4 == 'A' ? aces += 1 : aces += 0;
        aces = yc5 == 'A' ? aces += 1 : aces += 0;

        let sumArray = [ sum ];
        for (let i = 0; i < aces; i++) {
            sumArray.push(sumArray[i]+10);
        }
        //TODO sum auf sumArray aendern
        if(sum == 17) {
            return Helper.S;
        }
        if (sum == 16) {
            if (dc == "9" || Helper.cardEquals10(dc) || dc == "A") {
                return Helper.HR;
            }
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            
            return Helper.H;
        }
        if (sum == 15) {
            if (Helper.cardEquals10(dc)) {
                return Helper.HR;
            }
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (sum == 14) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (sum == 13) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (sum == 12) {
            if (dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (sum == 11) {
            if (dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (sum == 10) {
            if (Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (sum == 9) {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.DD;
            }
            return Helper.H;
        }
        if (sum == 8) {
            return Helper.H;
        }
        return Helper.H;
    }

}
