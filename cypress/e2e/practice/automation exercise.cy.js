
describe('automation exercise practice', () => {
    it('automationexercise e commerce', () => {

        // buttons
        // textFields
        // checkbox
        // radiobox
        // alerts
        // iframes
        // Tabss
        // mouseevents
        // draganddrop
        // shadowElement
        // links
        // tablesss
        // customcommand
        // fileupload
        // filedowload
        // readfile
        // writefiless
        // sessionn

        cy.visit('https://automationexercise.com/')
        cy.get('[class="title text-center"]').first().scrollIntoView()
        cy.contains('Add to cart').click()
        cy.contains('View Cart').click()
        cy.contains('Blue Top').should('be.visible').and('contain', 'Blue Top')
        cy.contains('Home').click()
        cy.contains('Men Tshirt').scrollIntoView()
        cy.contains('View Product').click()
        cy.get('[alt="ecommerce website products"]').first().should('be.visible')
        cy.contains('Rs. 500').should('contain', 'Rs. 500')
        cy.url().should('eq', 'https://automationexercise.com/product_details/1')


    })
    // it.only('example',()=>{
    //     cy.visit('https://www.wikipedia.org/')
    //     var arr=[]
    //     cy.get('span[class="other-project-title jsl10n"]').each((txt)=>{
    //         var data=txt.text()
    //         cy.log(data)
    //         arr.push(data)
    //     })
    //     cy.log(arr)
    //     var exp=cy.get('nav[aria-label="Other projects"]')
    //     for(let i=0;i<=arr.length-1;i++){
    //     if(exp.contains(arr[i])){
    //         cy.contains(arr[i]).click()
    //     }
    //     break;
    // }
    // })
    it('example', () => {
        cy.visit('https://www.wikipedia.org/')

        var arr = []

        // Collecting all project titles
        cy.get('span[class="other-project-title jsl10n"]').each(($el) => {
            const data = $el.text()
            cy.log(data)
            arr.push(data) // Pushing each text to the array
        }).then(() => {
            cy.log(arr) // Logging the collected array once it's fully populated

            // Now iterate over the array and check if the project exists
            var exp = cy.get('nav[aria-label="Other projects"]')

            for (let items = 0; items <= arr.length - 1; items++) {
                if (exp.contains(arr[items])) {
                    cy.contains(arr[items]).click()
                }// Clicking the item
                // Breaking the loop after the first match

                break;
            }
        })
    })
})