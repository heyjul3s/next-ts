Feature: Filtering Posts By Entering The Full Post Title In The Search Field

  Scenario: I want to filter posts by entering the full post title
    Given that I am on the homepage
    And I enter a post title into the search field
    Then I should only see a result for that on particilar post

