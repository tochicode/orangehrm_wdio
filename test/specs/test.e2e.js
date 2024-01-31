const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
// const DashboardPage = require('../pageobjects/dashboard.page')
// const LogoutPage = require('../pageobjects/logout.page')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin123')
    })
})

