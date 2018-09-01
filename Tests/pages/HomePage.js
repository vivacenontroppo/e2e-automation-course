"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var protractor_1 = require('protractor');
var BasePage_1 = require('./BasePage');
var Locators = {
    heading: {
        type: BasePage_1.IdentyficationType[BasePage_1.IdentyficationType.xpath],
        value: "//course-thumb[1]/div[1]/h2[contains(text(),'Selenium Framework development')]"
    },
    headings: {
        type: BasePage_1.IdentyficationType[BasePage_1.IdentyficationType.xpath],
        value: "//span[contains(text(),'(4th quater)')]"
    }
};
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.apply(this, arguments);
        this.heading = this.elementLocator(Locators.heading).element(protractor_1.by.xpath("//span[contains(text(),'(4th quater)')]"));
        this.headings = this.elementLocator(Locators.headings);
    }
    HomePage.prototype.openBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    HomePage.prototype.getAllHeadings = function () {
        this.headings.getText().then(function (text) {
            console.log('Text of headings are: ' + text);
        });
    };
    HomePage.prototype.clickFirstHeading = function () {
        this.heading.click();
    };
    return HomePage;
}(BasePage_1.BasePage));
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map