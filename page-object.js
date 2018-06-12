function Page() {
    this.featuresLink=element(by.css('[href="features"]'));
    this.resourcesName=element(by.css('[title="Resources"]'));
    this.searchField=element(by.css('[type="search"]'));
    this.searchResTitle=element(by.css('aio-search-results'));
    this.homeLink=element(by.css('.nav-link.home'));
    this.navigationBar=element(by.css('ul [role="navigation"]'));
    this.searchReasults=element(by.css('.search-area'));
    this.docsMenuItem=element(by.css('[title="Docs"]'));
    this.buttonVertMenu=element(by.css('.hamburger.mat-button'));
    this.sideNav=element(by.css('.sidenav.mat-drawer'));
    this.verticalMenuItem=element(by.css('.vertical-menu-item.heading.ng-star-inserted'));
    this.submenuElement=element(by.css('.heading-children.level-1.expanded'));
    this.vertMenuItem=element(by.css('[title="The fundamentals of Angular"]'));
    this.subItem=element(by.css('[title="The basic building blocks of Angular applications."]'));
    this.subSubMenuItem=element(by.css('.heading-children.level-2.expanded'));
    this.title=element(by.css('#what-is-angular'));
}
module.exports=new Page();