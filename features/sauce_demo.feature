Feature: Sauce Demo Store Automation Scenarios

  Background:
    Given User is on the home page

  Scenario: Homepage title aur URL verify karna
    Then Page title me "Sauce Demo" hona chahiye
    And Page URL me "sauce-demo.myshopify.com" hona chahiye

  Scenario Outline: Store par product search karna
    When Search icon par click karke search input me "<product>" type karta hu
    Then Search results page display hona chahiye
    And Products list visible honi chahiye

    Examples:
      | product |
      | shirt   |
      | Jacket  |

  Scenario: Navigation links verify karna
    When Header navigation link "Catalog" par click karta hu
    Then Page URL me "collections/all" hona chahiye