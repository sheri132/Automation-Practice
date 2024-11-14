// cypress/e2e/agodaTest.spec.ts

import AgodaPage from '../pages/AgodaPage';

describe('Agoda Search Test', () => {
  beforeEach(() => {
    AgodaPage.visit();
  });

  it('should search for hotels in Bali with specific dates and room requirements', () => {

    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 20); // 20 days from today

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 5); // Example: 5 days after check-in

    //Format dates to YYYY-MM-DD
    // const formatDate = (date: Date) => {
    //   const year = date.getFullYear();
    //   const month = String(date.getMonth() + 1).padStart(2, '0');
    //   const day = String(date.getDate()).padStart(2, '0');
    //   return `${year}-${month}-${day}`;
    // };

    // const formattedStartDate = formatDate(startDate);
    // const formattedEndDate = formatDate(endDate);

    // Step 1: Enter location
    AgodaPage.enterLocation('Bali');

    // Step 2: Select check-in and check-out dates
    // AgodaPage.selectDates(formattedStartDate, formattedEndDate); 
    AgodaPage.selectDates("2025-01-01", "2025-01-13"); // Adjust date format if necessary
   

    // Step 3: Select rooms and guests
    AgodaPage.selectRoomsAndGuests(2, 8, 0); // 2 room, 8 adults, 0 child

    // Step 4: Click search button
    AgodaPage.clickSearchButton();

    
  });
});
