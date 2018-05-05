var po = require("../page-object");

describe('testing the https://angular.io/docs page', function() {

    beforeEach(function () {
        browser.get('https://angular.io/docs');
    });

    it('checks whether submenus in vertical menu are displayed', function () {
        po.verticalMenuItem.click();
        expect(po.submenuElement.isPresent()).toBe(true);
    });

    it('checks TAB key', function () {
        po.docsMenuItem.sendKeys(protractor.Key.TAB);
        expect(po.resourcesName.getText()).toEqual('RESOURCES');
    });
 
    xit('checks links to other page', function () {
        po.resourcesLink.click();
        expect(po.resourcesMenuItem.getText()).toEqual('EXPLORE ANGULAR RESOURCES');
    });

   it('matches url', function () {
        po.featuresLink.click();
        expect(browser.getCurrentUrl()).toMatch(/\/features/);
    });

    it('checks whether vertical menu is closed after clicking on the button ', function () {
        po.buttonVertMenu.click();
        expect(po.sideNav.isDisplayed()).toBe(false);
    });

    it('tests the search field', function () {
        po.searchField.sendKeys('fdffd', protractor.Key.ENTER);
        browser.sleep(7000);
        expect(po.searchResTitle.getText()).toEqual('No results found.');
    });

    it('displays the search area', function () {
        po.searchField.sendKeys('a', protractor.Key.ENTER);
        browser.sleep(7000);
        expect(po.searchReasults.isPresent()).toBe(true);
    });

    it('goes to the home page', function () {
        po.homeLink.click();
        expect( browser.getCurrentUrl()).toEqual('https://angular.io/');
    });

    it('minimize the window', function () {
        browser.driver.manage().window().setSize(1000, 500);
        expect(po.navigationBar.isPresent()).toBe(false);
    });
});