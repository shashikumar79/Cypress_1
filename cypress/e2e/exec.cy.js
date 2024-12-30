// cypress/integration/example.spec.js

describe('Example of cy.exec', () => {

    before(() => {
        // Setting up an event listener to handle uncaught exceptions
        cy.on('uncaught:exception', () => {
            // Prevent Cypress from failing the test on uncaught exceptions
            return false;
        });
    });

    it('runs a system command', () => {
        // Running the first system command
        cy.exec('echo "Hello, World!"').then((result) => {
            // Logging the stdout from the command
            cy.log(result);
            // Asserting the stdout contains the expected text
            expect(result.stdout).to.contain('Hello, World!');
        });

        // Running the second system command with failOnNonZeroExit option
        cy.exec('echo Hello, World!', { failOnNonZeroExit: true }).then((result) => {
            // Asserting the stderr is empty
            expect(result.stderr).to.be.empty;
        });

        // Running a custom task
        cy.task('hello', { greeting: 'Hello', name: 'World' });
    });

});
