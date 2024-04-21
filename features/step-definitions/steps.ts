import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import { TestData } from '../../TestData'
import { Promo } from '../pageobjects/promo';
import { Statuses } from '../pageobjects/statuses';
import { Tournuments } from '../pageobjects/tournaments';
import {Bonuses} from '../pageobjects/bonuses'
import { Lotteries } from '../pageobjects/lotteries';
import { Cashback } from '../pageobjects/cashback';

import { Login } from '../pageobjects/pages/login';
import { NavigationMenu } from '../pageobjects/pages/NavigationMenu';
import { MyProfile } from '../pageobjects/pages/myProfile';


Given(/^Открыть сайт на Промо$/, async () => {
    browser.setWindowSize(1200, 800);
    await browser.url(TestData.Url)
});

When(/^Кликнуть Статусы$/, async () => {
    await new Promo().Boxes.Statuses.click();
});

Then(/^Статус Elite отображается$/, async () => {
    await expect(new Statuses().StatusesNames.Elite).toHaveText('ELITE')
});

When(/^Кликнуть Турниры$/, async () => {
    await browser.back()
    // await browser.setTimeout({ 'implicit': 5000 })
    await new Promo().Boxes.Tournuments.click();
});

Then(/^Points турнир отображается$/, async () => {
    await expect(new Tournuments().Tournaments.Points).toBePresent()
});

When(/^Кликнуть Бонус$/, async () => {
    await browser.back()
    await new Promo().Boxes.Bonuses.click();
});

Then(/^Бонус на ДР отображается$/, async () => {
    await expect(new Bonuses().BonusesNames.BonusHb).toHaveText('ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ ДО 500 €')
});

When(/^Кликнуть Лотереи$/, async () => {
    await browser.back()
    await browser.setTimeout({ 'implicit': 5000 })
    await new Promo().Boxes.Lotteries.click();
});

Then(/^Кнопки Узнать больше отображается на лотереях Rox Chart и Jingle Bells$/, async () => {
    await expect(new Lotteries().Buttons.LotteryRoxChartLearnMore).toBePresent();
    await expect(new Lotteries().Buttons.LotteryJingleLearnMore).toBePresent();
});

When(/^Кликнуть Кэшбэк$/, async () => {
    await browser.back()
    await new Promo().Boxes.Cashback.click();
});

Then(/^Информация o получении кэшбэка отображается$/, async () => {
    await expect(new Cashback().Blocks.CashbackReceive).toBePresent();
});



Given(/^Открыть сайт$/, async () => {
    await browser.url(TestData.BaseUrl);
});

When(/^Кликнуть Вход$/, async () => {
    await browser.$('//div[@data-test="main_signin"]').click()
});

When(/^Ввести логин$/, async () => {
    (await new Login().InputFields.Email).setValue(TestData.Email)
});

When(/^Ввести пароль$/, async () => {
    (await new Login().InputFields.Password).setValue(TestData.Password)
});

Then(/^Пользователь успешно авторизован и кнопка Депозит отображается$/, async () => {
    await expect(new NavigationMenu().Buttons.UserName).toBeClickable();
});

Then(/^Статус пользователя New$/, async () => {
    await expect(new NavigationMenu().Elements.Status).toHaveText('New');
});

When(/^Кликнуть на имя пользователя$/, async () => {
    await new NavigationMenu().Buttons.UserName.click()
});

Then(/^Почта подтверждена$/, async () => {
    await expect (new MyProfile().Elements.EmailConfirmed).toHaveText('Подтверждена');
});

