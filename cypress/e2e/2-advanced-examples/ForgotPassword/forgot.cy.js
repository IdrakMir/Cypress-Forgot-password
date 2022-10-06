describe("Finverity", function() {
    it("Forgot Password", function() {
        cy.viewport(1920, 1080);
        cy.visit("https://staging.finverity.com/");
        cy.get('.forgot-pass__link').click()
        cy.get('#reset-password-email').type('idrakmirzoyev@gmail.com')
        cy.get('.button').click()
        cy.wait(3000)
        cy.contains('OK').click()
        cy.visit("password reset link");
        //Email link didn't arrive
    })
})