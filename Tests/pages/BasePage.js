"use strict";
var protractor_1 = require("protractor");
(function (IdentyficationType) {
    IdentyficationType[IdentyficationType["id"] = 0] = "id";
    IdentyficationType[IdentyficationType["name"] = 1] = "name";
    IdentyficationType[IdentyficationType["css"] = 2] = "css";
    IdentyficationType[IdentyficationType["xpath"] = 3] = "xpath";
    IdentyficationType[IdentyficationType["linkText"] = 4] = "linkText";
    IdentyficationType[IdentyficationType["className"] = 5] = "className";
    IdentyficationType[IdentyficationType["js"] = 6] = "js";
})(exports.IdentyficationType || (exports.IdentyficationType = {}));
var IdentyficationType = exports.IdentyficationType;
var BasePage = (function () {
    function BasePage() {
    }
    BasePage.prototype.elementLocator = function (obj) {
        switch (obj.type) {
            case IdentyficationType[IdentyficationType.id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentyficationType[IdentyficationType.name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentyficationType[IdentyficationType.css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentyficationType[IdentyficationType.xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentyficationType[IdentyficationType.linkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentyficationType[IdentyficationType.className]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentyficationType[IdentyficationType.js]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map