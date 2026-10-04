Feature: Add to Cart and Cart Verification
  As a shopper on Sauce Demo store
  I want to add products to my shopping cart
  So that I can review them before checkout

  Background:
    Given User is on the home page

  Scenario: Add a single product to the cart successfully
    When User searches for "Classic Leather Jacket"
    And User clicks on the product "Classic Leather Jacket"
    And User clicks on the "Add to Cart" button
    Then The cart badge should update to count 1
    And User opens the cart page
    Then The product "Classic Leather Jacket" should be visible in the cart