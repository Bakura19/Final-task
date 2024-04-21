import { $ } from '@wdio/globals';
export class Cashback{
    Containers = {
        CashbackContainer: $('//div[@class="main-context"]')
    };

    Blocks = {
        CashbackReceive: this.Containers.CashbackContainer.$('//h2[text()="Как получить Кешбэк?"]'),
    
    }
}