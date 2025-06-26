const { $, browser } = require('@wdio/globals');

class LoginPage {
    get inputUsername() { return $('//input[@id="user-name"]'); }
    get inputPassword() { return $('//input[@id="password"]'); }
    get btnLogin() { return $('//input[@id="login-button"]'); }
    get errorMessage() { return $('//h3[@data-test="error"]'); }
    get titleHeader() { return $('//div[@class="app_logo"]'); }

    async open() {
	console.log('[LoginPage] Opening login page...');
        await browser.url('/');
    }

    async login(username, password) {
	console.log(`[LoginPage] Attempting login with user: "${username}"`);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();