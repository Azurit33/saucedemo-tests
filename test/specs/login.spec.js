const loginPage = require('../pageobjects/login.page');
const users = require('../../data/users');
const { expect } = require('chai');

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('UC-1: Should show error when username and password are empty', async () => {
        await loginPage.login('', '');
        const errorText = await loginPage.errorMessage.getText();
        expect(errorText).to.include('Username is required');
    });

    it('UC-2: Should show error when only username is entered', async () => {
        await loginPage.login(users.valid.username, '');
        const errorText = await loginPage.errorMessage.getText();
        expect(errorText).to.include('Password is required');
    });

    it('UC-3: Should login successfully with valid credentials', async () => {
        await loginPage.login(users.valid.username, users.valid.password);
        const titleText = await loginPage.titleHeader.getText();
        expect(titleText).to.equal('Swag Labs');
    });
});