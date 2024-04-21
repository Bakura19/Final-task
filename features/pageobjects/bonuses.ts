import { $ } from '@wdio/globals';
export class Bonuses{
    Containers = {
        BonusesContainer: $('//div[@class="main-context"]')
    };

    BonusesNames = {
        BonusHb: this.Containers.BonusesContainer.$('(//div[@class="bonus-list__item-title"])[7]'),
    
    }
}