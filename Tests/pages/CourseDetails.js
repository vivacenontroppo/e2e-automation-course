"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasePage_1 = require("./BasePage");
var Locators = {
    Duration: {
        type: BasePage_1.IdentyficationType[BasePage_1.IdentyficationType.xpath],
        value: "//Duration"
    }
};
var CourseDetailsPage = (function (_super) {
    __extends(CourseDetailsPage, _super);
    function CourseDetailsPage() {
        _super.apply(this, arguments);
        this.Duration = this.elementLocator(Locators.Duration);
    }
    CourseDetailsPage.prototype.clickDuration = function () {
        this.Duration.click();
    };
    return CourseDetailsPage;
}(BasePage_1.BasePage));
exports.CourseDetailsPage = CourseDetailsPage;
//# sourceMappingURL=CourseDetails.js.map