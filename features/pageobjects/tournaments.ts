import { $ } from '@wdio/globals';
export class Tournuments{
    Containers = {
        TournamentsContainer: $('//div[@class="main-context"]')
    };

    Tournaments = {
        Points: this.Containers.TournamentsContainer.$('//p[text()[normalize-space()="Турнир по POINTS"]]' )
    }
}