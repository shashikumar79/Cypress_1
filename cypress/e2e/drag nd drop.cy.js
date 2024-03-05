

describe('dragand drop',()=>{


    it('drag drop element',()=>{

        cy.on('uncaught:exception', () => {

            return false
        })
cy.visit('https://www.globalsqa.com/demo-site/draganddrop/#Photo%20Manager')

// const datatranfer = new DataTransfer()
// cy.pause()
// cy.get('img[src="images/high_tatras3_min.jpg"]').trigger('dragstart',{datatranfer})
// cy.wait(2000)
// cy.get('div#trash').trigger('drop',{datatranfer})
cy.contains('Frames And Windows').invoke('removeAttr','target').click({force:true})
 

    })
})