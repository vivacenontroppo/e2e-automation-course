import { browser, element, by, $$ } from 'protractor';
import { IdentyficationType, BasePage } from './BasePage'

const Locators = {
    heading: {
        type: IdentyficationType[IdentyficationType.xpath],
        value: "//course-thumb[1]/div[1]/h2[contains(text(),'Selenium Framework development')]"
    },
    headings: {
        type: IdentyficationType[IdentyficationType.xpath],
        value: "//span[contains(text(),'(4th quater)')]"
    }
};

export class HomePage extends BasePage {

    heading = this.elementLocator(Locators.heading).element(by.xpath("//span[contains(text(),'(4th quater)')]"));

    headings = this.elementLocator(Locators.headings);

    openBrowser(url: string){
        browser.get(url);
    }

    getAllHeadings(){
        this.headings.getText().then((text) => {
            console.log('Text of headings are: ' + text);
        });
    }

    clickFirstHeading(){
        this.heading.click();
    }

}