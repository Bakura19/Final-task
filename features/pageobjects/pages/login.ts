import { $ } from '@wdio/globals';

export class Login {
    Containers = {
        LoginContainer: $('//div[@class="new-modal__content"]')
    }; 

    Buttons = {
        Login: this.Containers.LoginContainer.$('//input[@data-test="auth-form-btn"]')
    };

    InputFields = {
        Email: this.Containers.LoginContainer.$('//input[@name="email"]'), 
        Password: this.Containers.LoginContainer.$('//input[@name="password"]')
    };
};