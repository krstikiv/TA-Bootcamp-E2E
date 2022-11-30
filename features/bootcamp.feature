Feature: Bootcamp E2E

  Background: Newegg Homepage
    Given I am on the Newegg home page
    * I can close the promo banner if it appears

  Scenario: Search Bar
    When I enter the word Windows in the search bar located top middle
    * I click the search button
    Then I should see that at least one item appears

  Scenario: Internet shop logo button
    When I click on Todays Best Deals link
    * I click on the Internet shop logo located top right corner
    Then I should see that the main page is opened