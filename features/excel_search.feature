@regression @excel
Feature: Excel Data Driven Search Automation

  @smoke
  Scenario: Verify store search functionality using Excel test data
    Given User is on the store homepage
    When User searches products using Excel file "data/search_data.xlsx"
    Then All Excel search results should be validated successfully