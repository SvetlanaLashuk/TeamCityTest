var po = require("../page-object");

describe('testing the https://angular.io/docs page', function() {

    beforeEach(function () {
        browser.get('https://angular.io/docs');
    });

    it('checks whether submenus in vertical menu are displayed', function () {
        po.verticalMenuItem.click();
        expect(po.submenuElement.isDisplayed()).toBe(true);
    });

    it('checks TAB key', function () {
        po.docsMenuItem.sendKeys(protractor.Key.TAB);
        expect(po.resourcesName.getText()).toEqual('RESOURCES');
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

    it("checks whether subitems of the submenu in vertical menu are displayed", function () {
        po.vertMenuItem.click();
        po.subItem.click();
        expect(po.subSubMenuItem.isDisplayed()).toBe(true);
    });

    it('displays the search area', function () {
        po.searchField.sendKeys('a', protractor.Key.ENTER);
        browser.sleep(10000);
        expect(po.searchReasults.isDisplayed()).toBe(true);
    });

    it('verifies that the header matches the expected header', function () {
        expect(po.title.getText()).toEqual('What is Angular?');
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