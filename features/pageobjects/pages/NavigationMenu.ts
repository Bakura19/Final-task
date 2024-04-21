import { $ } from '@wdio/globals';

export class NavigationMenu {
    Containers = {
        UserMenuContainer: $('//div[@class="main-block1 js-header"]')
    }; 

    Buttons = {
        UserName: this.Containers.UserMenuContainer.$('//p[@data-test="main_profile_login_name"]')
    };

    Elements = {
        Status: this.Containers.UserMenuContainer.$('//p[@class="main-status-text"]')
    }
};

