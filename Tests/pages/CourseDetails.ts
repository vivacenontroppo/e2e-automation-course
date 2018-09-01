import { BasePage, IdentyficationType } from "./BasePage";

const Locators = {
  Duration: {
    type: IdentyficationType[IdentyficationType.xpath],
    value: "//Duration"
  }
};

export class CourseDetailsPage extends BasePage {
  Duration = this.elementLocator(Locators.Duration);

  clickDuration() {
    this.Duration.click();
  }
}
