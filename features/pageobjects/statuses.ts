import { $ } from '@wdio/globals';
export class Statuses{
    Containers = {
        StatusesContainer: $('//div[@class="main-context"]')
    };
    StatusesNames = {
        New: this.Containers.StatusesContainer.$('(//p[@class="status-title"])[1]'),
        Regular: this.Containers.StatusesContainer.$('(//p[@class="status-title"])[2]'),
        Grand: this.Containers.StatusesContainer.$('(//p[@class="status-title"])[3]'),
        Premium: this.Containers.StatusesContainer.$('(//p[@class="status-title"])[4]'),
        Vip: this.Containers.StatusesContainer.$('(//p[@class="status-title"])[5]'),
        Elite: this.Containers.StatusesContainer.$('(//p[@class="status-title"])[6]')
    }
}