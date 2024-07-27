# CloudonixAssessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Component library

 - [ng-bootstrap](https://ng-bootstrap.github.io/)


## Application workflow

 - Login form, where user should enter non-empty string
 - This string is saving in local-storage and using in inteceptor to set Authorization Bearer token
 - If there is no token, app should redirect to login form (guard)
 - If token exist, user can see products page, where he can see products table
 - (Optional) User can click logout - token will be removed from local storage and angular will redirect browser to login form
 - After the table user can see product form, where he can add new product
 - User can click to table tow. In the bottom of the table product form will be filled by product details
 - 5.d didn't do (not enough time)

