const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdown () {
        return $('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
    }

    get logoutbtn () {
        return $('a[href="/web/index.php/auth/logout"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout () {
        await this.dropdown.click();
        await this.logoutbtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new LogoutPage();