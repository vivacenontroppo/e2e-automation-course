
import { HomePage } from './pages/HomePage';


describe("First test description", () => {


    var homePage = new HomePage();

    it("should pass without any issues", () => {

        homePage.openBrowser('http://localhost:8808/');

        homePage.getAllHeadings();

        homePage.clickFirstHeading();

    });

    it("should not pass", () => {

        let b = 1
        expect(b).toBeDefined("Not defined")

    });

});