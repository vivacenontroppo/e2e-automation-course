import { browser, element, by, $$ } from "protractor";

export enum IdentyficationType {
  id,
  name,
  css,
  xpath,
  linkText,
  className,
  js
}

export class BasePage {
  elementLocator(obj) {
    switch (obj.type) {
      case IdentyficationType[IdentyficationType.id]:
        return element(by.id(obj.value));
      case IdentyficationType[IdentyficationType.name]:
        return element(by.name(obj.value));
      case IdentyficationType[IdentyficationType.css]:
        return element(by.css(obj.value));
      case IdentyficationType[IdentyficationType.xpath]:
        return element(by.xpath(obj.value));
      case IdentyficationType[IdentyficationType.linkText]:
        return element(by.linkText(obj.value));
      case IdentyficationType[IdentyficationType.className]:
        return element(by.className(obj.value));
      case IdentyficationType[IdentyficationType.js]:
        return element(by.js(obj.value));
      default:
        break;
    }
  }
}
