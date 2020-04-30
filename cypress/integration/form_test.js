// describe, it, context, specify, beforeEach
// Our context/describe is the overall "theme" of the project
// it/specify are talking about a specific test. Found within a context wrapper
// beforeEach is a block of code that will run before each test is ran

/* global cy */
describe("Test our form input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Adds text to inputs", () => {
    // Find the name input. We set data attributes to our input to better select a unique thing
    // Type a name into the input field and assert that the value is the same of the name
    cy.get("[data-cy='name']")
      .type("Fake Name")
      .should("have.value", "Fake Name");

    cy.get("[data-cy='email']")
      .type("fake_email@email.com")
      .should("have.value", "fake_email@email.com");

    cy.get("textarea")
      .type("I want to help")
      .should("have.value", "I want to help");

    cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");

    cy.get("[type='checkbox']").check().should("be.checked");

    //cy.contains("Submit").click();

    cy.get("form").submit();
  });

  /*
   *it("Second test", () => {});
   */
});
