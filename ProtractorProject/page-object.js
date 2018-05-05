function Page() {
    this.featuresLink=element(by.css('[href="features"]'));
    this.resourcesLink=element(by.css('[href="resources"]'));
    this.resourcesName=element(by.css('[title="Resources"]'));
    this.searchField=element(by.css('[type="search"]'));
    this.searchResTitle=element(by.css('aio-search-results'));
    this.homeLink=element(by.css('.nav-link.home'));
    this.navigationBar=element(by.css('ul [role="navigation"]'));
    this.searchReasults=element(by.css('.search-area'));
    this.docsMenuItem=element(by.css('[title="Docs"]'));
    this.resourcesMenuItem=element(by.css('.banner-headline'));
    this.buttonVertMenu=element(by.css('.hamburger.mat-button'));
    this.sideNav=element(by.css('.sidenav.mat-drawer'));
    this.verticalMenuItem=element(by.css('.vertical-menu-item.heading.ng-star-inserted'));
    this.submenuElement=element(by.css('.vertical-menu-item.level-2'));
}
module.exports=new Page();