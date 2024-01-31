const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBar () {
        return $('.oxd-input.oxd-input--active');
    }

    get menuclosebtn () {
        return $('.oxd-icon.bi-chevron-left');
    }

    get menuopenbtn () {
        return $('.oxd-icon.bi-chevron-right')
    }

    get admin () {
        return $('a[href="/web/index.php/admin/viewAdminModule"]');
    }

    get pim () {
        return $('a[href="/web/index.php/pim/viewPimModule"]');
    }

    get leave () {
        return $('a[href="/web/index.php/leave/viewLeaveModule"]');
    }

    get time () {
        return $('a[href="/web/index.php/time/viewTimeModule"]');
    }

    get recruitment () {
        return $('a[href="/web/index.php/recruitment/viewRecruitmentModule"]');
    }

    get myInfo () {
        return $('a[href="/web/index.php/pim/viewMyDetails"]');
    }

    get performance () {
        return $('a[href="/web/index.php/performance/viewPerformanceModule"]');
    }

    get dashboard () {
        return $('a[href="/web/index.php/dashboard/index"]');
    }

    get directory () {
        return $('a[href="/web/index.php/directory/viewDirectory"]');
    }

    get maintenance () {
        return $('a[href="/web/index.php/maintenance/viewMaintenanceModule"]');
    }

    get cancelbtn () {
        return $('//button[@type="button"]');
    }

    get claim () {
        return $('a[href="/web/index.php/claim/viewClaimModule"]');
    }

    get buzz () {
        return $('a[href="/web/index.php/buzz/viewBuzz"]');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async items () {
        // await this.searchBar.setValue(query);
        // await this.menuclosebtn.click();
        // await this.menuopenbtn.click();
        await this.admin.click();
        await this.pim.click();
        await this.leave.click();
        await this.time.click();
        await this.recruitment.click();
        await this.myInfo.click();
        await this.performance.click();
        await this.dashboard.click();
        await this.directory.click();
        await this.maintenance.click();
        await this.cancelbtn.click();
        await this.claim.click();
        await this.buzz.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

module.exports = new DashboardPage();
