import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is authenticated", function () {
  cy.log("Inside `Given` - the user is authenticated");
});
When("W1", function () {
  cy.log("W1");
});
Then("T1", function () {
  cy.log("T1");
});

Given("G2", function () {
  cy.log("G2");
});
When("W2", function () {
  cy.log("W2");
});
Then("the user is authenticated", function () {
  cy.log("Inside `Then` - the user is authenticated");
  cy.log("This will never get logged");
});
