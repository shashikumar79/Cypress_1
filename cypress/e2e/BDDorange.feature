Feature: orangehrm verify login functionality

vefifying login withpositive and negitive tests 

Scenario: vefify login with valid username and valid password
Given user launch the application
When User enter username "Admin" and password "admin123"
And User clicks on login button 
Then User should be navigated to dashboard


Scenario: verify login with valid username invalid password 
Given user launch the application
When User enter username "Admin" and password "admt7tin123"
And User clicks on login button 
Then User should get the login error message

Scenario: verify login with invalid username valid password 
Given user launch the application
When User enter username "Admintd7t" and password "admin123"
And User clicks on login button 
Then User should get the login error message

Scenario: verify login with invalid username invalid password 
Given user launch the application
When User enter username "Admingii" and password "a8f8dmin123"
And User clicks on login button 
Then User should get the login error message