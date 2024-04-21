import { $ } from '@wdio/globals';

export class MyProfile {
    Containers = {
        MyProfileContainer: $('//div[@id="form-save-profile"]')
    }; 

    Elements = {
        EmailConfirmed: this.Containers.MyProfileContainer.$('//span[@class="confirme"]')
    };
};

