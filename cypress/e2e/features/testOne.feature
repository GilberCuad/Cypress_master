Feature: DemoQA Test

  Scenario: Fill the text box form
    Given I visit demoqa
    When I upload name
    When I upload email
    When I upload address
    Then I validate name the page
