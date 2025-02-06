Feature: DemoQA Test

  Scenario: Fill the text box form
    Given I visit demoqa
    When I upload name Gilber
    When I upload email
    When I upload address
    Then I validate name the page

  Scenario: Fill the text box form case 2
    Given I visit demoqa
    When I upload name <username>
    When I upload email <email>
    And I upload address <dir1>
    And I upload address <dir2>
    And click in button
    Then I validate name the page

    Examples:
      | username | email              | dir1      | dir2      |
      | Gilber   | cuadrado@gmail.com | addrees 1 | address 2 |
      | Carls    | uioashn@gmail.com  | addien    | hjkasiu   |
