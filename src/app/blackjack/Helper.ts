import { isNumber } from 'util';

export abstract class Helper {

    
    public static S = "Stand";
    public static H = "Hit";
    public static B = "BlackJack!";
    public static P = "Split";
    public static DD = "Double Down";
    public static HP = "Split if allowed to double afterwards, otherwise HIT";
    public static HR = "Surrender if allowed, otherwise HIT";
    public static SORRY = "Sorry, over 21";

    public static calculateCard(card: string): number {
        let retWert = 0;
        if (card == 'A') {
            retWert = 1;
        } else if (this.cardEquals10(card)) {
            retWert = 10;
        } else if (card.match(/^[0-9]+$/) != null) {
            retWert = Number.parseInt(card);
        }
        return retWert;
    }

    public static cardEquals10(card: string): boolean {
        if (card == "10" || card == "J" || card == "Q" || card == "K") {
            return true;
        }
        return false;
    }

    public static filterSumArray(array: number[]) : number[] {
        return array.filter(function(value, index, arr){ return value <= 21;});
    }

    public static shouldChangeCards(card1: string, card2: string): boolean {
        if (card2 == "A" && 
            (card1 == "2" ||
             card1 == "3" ||
             card1 == "4" ||
             card1 == "5" ||
             card1 == "6" ||
             card1 == "7" ||
             card1 == "8" ||
             card1 == "9" ||
             card1 == "10")) {
            return true;
        }
        return false;
    }
}