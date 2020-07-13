import { isNumber } from 'util';

export abstract class Helper {

    
    public static S = "Stand";
    public static H = "Hit";
    public static B = "BlackJack Congrats";
    public static P = "Split";
    public static DD = "Double Down";
    public static HP = "Split if allowed to double afterwards, otherwise HIT";
    public static HR = "Surrender if allowed, otherwise HIT";
    public static SORRY = "Sorry, over 21";

    public static calculateCard(card: string): number {
        let retWert = 0;
        if (this.cardEquals10(card)) {
            retWert = 10;
        } else if (card.match(/^[0-9]+$/) != null) {
            retWert = Number.parseInt(card);
        }
        return retWert;
    }

    public static cardEquals10(card: string) {
        if (card == "10" || card == "J" || card == "Q" || card == "K") {
            return true;
        }
        return false;
    }
}