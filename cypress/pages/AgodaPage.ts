
import AgodaSelectors from "../selectors/agodaSelectors";
//import { select } from '@testing-library/dom'; // Assuming usage of @testing-library/dom

class AgodaPage {
  visit(): void {
    cy.visit('https://www.agoda.com');
  }

  enterLocation(location: string): void {
    cy.get(AgodaSelectors.autocompleteBox).click().type(location);
    cy.get(AgodaSelectors.suggestionText).contains(location).click();
  
  }

  // selectDates(startDate: string, endDate: string): void {
  //   cy.get(AgodaSelectors.dateSelector(startDate)).click({ force: true });
  //   cy.get(AgodaSelectors.dateSelector(endDate)).click({ force: true });
  // }

  selectDates(startDate: string, endDate: string): void {
    const [startYear, startMonth, startDay] = startDate.split("-");
    const [endYear, endMonth, endDay] = endDate.split("-");


    // Function to navigate to the correct year and month
    function navigateToDate(targetYear: string, targetMonth: string) {
      cy.get(AgodaSelectors.datePickerHeading).then(($heading) => {
        const [currentMonth, currentYear] = $heading.text().split(" ");

        if (parseInt(currentYear) < parseInt(targetYear) || (currentYear === targetYear && currentMonth !== targetMonth)) {
          cy.get(AgodaSelectors.nextMonthButton).click();
          navigateToDate(targetYear, targetMonth);
        } 
      });
    }

    // Navigate and select the start date
    navigateToDate(startYear, startMonth);
    cy.get(AgodaSelectors.dateSelector(startDate)).click();

    // Navigate and select the end date
    navigateToDate(endYear, endMonth);
    cy.get(AgodaSelectors.dateSelector(endDate)).click({force:true});
  }




  selectRoomsAndGuests(rooms: number, adults: number, children: number): void {
    for (let i = 1; i < rooms; i++) {
      cy.get(AgodaSelectors.roomsIncrement).click({ force: true });
    }

    for (let i = 1; i < adults - 1; i++) {
      cy.get(AgodaSelectors.adultsIncrement).click({ force: true });
    }

    for (let i = 0; i < children; i++) {
      cy.get(AgodaSelectors.childrenIncrement).click({ force: true });
    }
  }

  clickSearchButton(): void {
    cy.get(AgodaSelectors.searchButtonBox).click();
    cy.get(AgodaSelectors.searchButtonText).click();
  }
}

export default new AgodaPage();
