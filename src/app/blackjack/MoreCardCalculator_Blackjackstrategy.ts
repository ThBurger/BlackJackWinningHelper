import { Helper } from './Helper';

export abstract class MoreCardCalculator_Blackjackstrategy {

    public static calculate(
        dc: string,
        yc1: string,
        yc2: string,
        yc3: string,
        yc4: string,
        yc5: string): string {

        // start SUM
        let card1, card2, card3, card4, card5, sum, aces = 0;
        card1 = Helper.calculateCard(yc1);
        card2 = Helper.calculateCard(yc2);
        card3 = Helper.calculateCard(yc3);
        card4 = Helper.calculateCard(yc4);
        card5 = Helper.calculateCard(yc5);
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
        var filteredSumArray = Helper.filterSumArray(sumArray);

        console.log('hier')
        console.log(filteredSumArray)
        if (filteredSumArray.length == 0) {
            return Helper.SORRY;
        }
        if(filteredSumArray.includes(21)) {
           return Helper.B;
        }

        if(filteredSumArray.includes(20)
           || filteredSumArray.includes(19)
           || filteredSumArray.includes(18)
           || filteredSumArray.includes(17)) {
            return Helper.S;
        }
        if (filteredSumArray.includes(16)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (filteredSumArray.includes(15)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (filteredSumArray.includes(14)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (filteredSumArray.includes(13)) {
            if (dc == "2" || dc == "3" || dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (filteredSumArray.includes(12)) {
            if (dc == "4" || dc == "5" || dc == "6") {
                return Helper.S;
            }
            return Helper.H;
        }
        if (filteredSumArray.includes(11)) {
            if (Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (filteredSumArray.includes(10)) {
            if (Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (filteredSumArray.includes(9)) {
            if (dc == "7" || dc == "8" || dc == "9" || Helper.cardEquals10(dc) || dc == "A") {
                return Helper.H;
            }
            return Helper.DD;
        }
        if (filteredSumArray.includes(8)) {
            return Helper.H;
        }
        return Helper.H;
    }

}
