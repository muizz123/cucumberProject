Feature: Surching Product

@SmokeTest
Scenario Outline: User Shouldbe able to surch product by name
Given User is on landing page
When User type "<Name>" on surch box
Then "<Name>" should be display on the list

Examples:
|Name|
|Cucumber|
|Brocolli |
|Tomato|