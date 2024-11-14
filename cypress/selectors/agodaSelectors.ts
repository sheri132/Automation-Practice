const AgodaSelectors = {
    // Page selectors
    autocompleteBox: '#autocomplete-box',
    suggestionText: '.Suggestion__text',
    checkInBox: '#check-in-box > .Box-sc-kv6pi1-0 > span > .ficon',
    applyButton: '[data-testid="apply-button"]',
    roomsIncrement: '.a23d5-box.a23d5-p-s > :nth-child(3) > .a23d5-fill-inherit > .a23d5-box',
    adultsIncrement: ':nth-child(2) > .a23d5-p-s > [aria-label="Add"]',
    childrenIncrement: ':nth-child(3) > .a020a-box.a020a-p-s > .a020a-bg-base-surface',
    searchButtonBox: '[data-test="SearchButtonBox"]',
    searchButtonText: '.Searchbox__searchButton__text',
    datePickerHeading: 'div[role="heading"]',
    nextMonthButton: 'button[aria-label="Next Month"]',
  
    // Dynamic selectors
    dateSelector: (date: string) => `[data-selenium-date="${date}"]`,
  };
  
  export default AgodaSelectors;
  