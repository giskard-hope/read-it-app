describe('Application initial load', () => {
    it('successfully loads and displays posts', () => {
        // 1. Visit the app's base URL
        cy.visit('http://localhost:5173/');

        // 2. Look for main content area
        cy.get('main')
            // 3. Find <article> elements within it
            .find('article')
            // 4. Assert that there is at least one post rendered
            .should('have.length.greaterThan', 0);
    });
});