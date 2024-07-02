describe('challenging dom elements', () => {

    it('challenging dom element values', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains("Challenging DOM").click()
        cy.get(".large-2.columns").find('a').each(($el, index, $list) => {
        const textvalue = $el.text();
        cy.wrap($el).click()
        cy.log("textvalue" + $el.parent())
        
        });
    });
})