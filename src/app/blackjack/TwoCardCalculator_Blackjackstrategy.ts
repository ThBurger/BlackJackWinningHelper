import { isNumber } from 'util';
import { Helper } from './Helper';

export abstract class TwoCardCalculator_Blackjackstrategy {

    public static calculate(
        dc: string,
        yc1: string,
        yc2: string): string {
        if(isNumber(yc1) && !isNumber(yc2)) {
            const changedCard = yc1;
            yc1 = yc2;
            yc2 = changedCard;
        }

        if((yc1 == "A" && Helper.cardEquals10(yc2)) || (yc2 == "A" && Helper.cardEquals10(yc1))) {
            return Helper.B;
        }

        if(yc1 == "A" && yc2 == "A") {
            return Helper.P;
        }
        if(Helper.cardEquals10(yc1) && Helper.cardEquals10(yc2)) {
            return Helper.S;
        }
        if (yc1 == "9" && yc2 == "9") {
            if (dc == "7" || Helper.cardEquals10(dc) || dc == "A") {
                return Helper.S;
            }
            return Helper.P;
        }
        if (yc1 == "8" && yc2 == "8") {
            if (Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.P;
        }
        if (yc1 == "7" && yc2 == "7") {
            if (dc == "8" || dc == "9" || dc == "A") {
                return Helper.H;
            } else if(Helper.cardEquals10(dc)) {
                return Helper.S;
            }
            return Helper.P;
        }
        if (yc1 == "6" && yc2 == "6") {
            if (dc == "7" || dc == "8" || dc == "9" || Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.P;
        }
        if (yc1 == "5" && yc2 == "5") {
            if (Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (yc1 == "4" && yc2 == "4") {
            return Helper.H;
        }
        if (yc1 == "3" && yc2 == "3") {
            if (dc == "4" || dc == "5" || dc == "6" || dc == "7") {
                return Helper.P;
            }
            return Helper.H;
        }
        if (yc1 == "2" && yc2 == "2") {
            if (dc == "3" || dc == "4" || dc == "5" || dc == "6" || dc == "7") {
                return Helper.P;
            }
            return Helper.H;
        }
        //start soft
        if (yc1 == "A" && yc2 == "9") {
            return Helper.S;
        }
        if (yc1 == "A" && yc2 == "8") {
            return Helper.S;
        }
        if (yc1 == "A" && yc2 == "7") {
            if (dc == "9" || Helper.cardEquals10(dc)) {
                return Helper.H;
            }
            return Helper.S;
        }
        if (yc1 == "A" && yc2 == "6") {
            return Helper.H;
        }
        if (yc1 == "A" && yc2 == "5") {
            return Helper.H;
        }
        if (yc1 == "A" && yc2 == "4") {
            return Helper.H;
        }
        if (yc1 == "A" && yc2 == "3") {
            return Helper.H;
        }
        if (yc1 == "A" && yc2 == "2") {
            return Helper.H;
        }
        
        let card1, card2, sum = 0;
        card1 = Helper.calculateCard(yc1);
        card2 = Helper.calculateCard(yc2);
        sum = card1 + card2;

        if (sum >= 17) {
            return Helper.S;
        }
        if (sum == 16) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (sum == 15) {
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
            if (Helper.cardEquals10(dc) || dc == "A") {
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
            if (dc == "7" || dc == "8" || dc == "9" || Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (sum == 8) {
            return Helper.H;
        }
        if (sum == 7) {
            return Helper.H;
        }
        if (sum == 6) {
            return Helper.H;
        }
        if (sum == 5) {
            return Helper.H;
        }
        return "NO ACTIONS preffered -> HIT";
    }

}