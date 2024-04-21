import { $ } from '@wdio/globals';
export class Promo{
    Containers = {
        MainPromoContainer: $('//div[@id="contentBox"]')
    };

    Boxes = {
        Tournuments: this.Containers.MainPromoContainer.$('(//a[@href="/tournaments"])[3]'),
        Bonuses: this.Containers.MainPromoContainer.$('(//a[@href="/bonus"])[3]'),
        Statuses: this.Containers.MainPromoContainer.$('(//a[@href="/status"])[3]'),
        Cashback: this.Containers.MainPromoContainer.$('(//a[@href="/cashback"])[3]'),
        Lotteries: this.Containers.MainPromoContainer.$('(//a[@href="/lottery"])[3]'),
    }
}

