# Testing the Project

This document outlines the user stories and their associated acceptance criteria for testing the project. It provides a clear understanding of the expected behavior of the application's features and functionalities.

## User Stories

1. As a user, I want a login page with fields for email, password, a "remember me" checkbox, and a login button.

2. As a user, I want the login page to validate my input, show an error message for incorrect information, or authenticate me and redirect me to the customer management page.

3. As a user, if I select the "remember me" checkbox during login, I want the system to save a cookie so that I'm automatically logged in on the next visit if I didn't sign out.

4. As a user, I want a customer management page with a data grid containing columns for first name, last name, email, and an active flag.

5. As a user, I want the data grid on the customer management page to support pagination and allow me to search by column.

6. As a user, I want the ability to add, edit, and delete customers from the data grid on the customer management page.

7. As a manager, I want full access to customer management actions (list, search, add, edit, delete).

8. As a salesperson, I want to be able to list and search for customers.

## Acceptance Criteria

### Acceptance Criteria 1

- `Given` I am a user on the login page
- `When` I enter valid email and password and click the login button
- `Then` I should be authenticated and redirected to the customer management page

### Acceptance Criteria 2

- `Given` I am a user on the login page
- `When` I enter invalid email or password and click the login button
- `Then` I should see an error message indicating incorrect login information

### Acceptance Criteria 3

- `Given` I am a user on the login page
- `When` I check the "remember me" checkbox, enter valid login information, and click the login button
- `Then` a cookie should be saved so that I am automatically logged in on the next visit

### Acceptance Criteria 4

- `Given` I am on the customer management page
- `Then` I should see a data grid with columns for first name, last name, email, and an active flag

### Acceptance Criteria 5

- `Given` I am on the customer management page
- `When` I have more customers than fit on one page and use pagination
- `Then` I should be able to navigate between pages of customer data

### Acceptance Criteria 6

- `Given` I am on the customer management page
- `When` I search for a customer by entering a search term in the data grid
- `Then` the data grid should display only the customers that match the search criteria

### Acceptance Criteria 7

- `Given` I am a manager
- `When` I am on the customer management page
- `Then` I should have access to all actions: list, search, add, edit, and delete

### Acceptance Criteria 8

- `Given` I am a salesperson
- `When` I am on the customer management page
- `Then` I should have access only to the list and search actions for customers
