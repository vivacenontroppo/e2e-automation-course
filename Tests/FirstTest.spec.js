"use strict";
var HomePage_1 = require('./pages/HomePage');
describe("First test description", function () {
    var homePage = new HomePage_1.HomePage();
    it("should pass without any issues", function () {
        homePage.openBrowser('http://localhost:8808/');
        homePage.getAllHeadings();
        homePage.clickFirstHeading();
    });
    it("should not pass", function () {
        var b = 1;
        expect(b).toBeDefined("Not defined");
    });
});
//# sourceMappingURL=FirstTest.spec.js.map