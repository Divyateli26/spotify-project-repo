Feature: Catalog Page Verification
  As a shopper on Sauce Demo store
  I want to browse the catalog page
  So that I can see all listed items

  Background:
    Given User is on the home page

  Scenario: Catalog page open karna aur heading verify karna
    When Header navigation link "Catalog" par click karta hu
    Then Catalog page URL me "collections/all" hona chahiye
    And Catalog collection heading visible honi chahiye