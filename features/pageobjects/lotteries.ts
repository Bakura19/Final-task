import { $ } from '@wdio/globals';
export class Lotteries{
    Containers = {
        LotteryContainer: $('//div[@class="main-context"]')
    };

    Buttons = {
        LotteryRoxChartLearnMore: this.Containers.LotteryContainer.$('(//a[@href="/lottery/rox-chart-eur"])[2]'),
        LotteryJingleLearnMore: this.Containers.LotteryContainer.$('(//a[@href="/lottery/jinglebellrox"])[2]')
    
    }
}