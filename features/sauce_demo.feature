@regression
Feature: Sauce Demo Store Automation Scenarios

  @smoke
  Scenario: Homepage title aur URL verify karna
    Given User store ke homepage par hai
    Then Homepage ka title "Sauce Demo" hona chahiye

  Scenario Outline: Store par product search karna
    Given User store ke homepage par hai
    When User search bar me "<product>" type karta hai
    Then Search result me "<product>" dikhna chahiye

    Examples:
      | product |
      | Jacket  |
      | Shirt   |