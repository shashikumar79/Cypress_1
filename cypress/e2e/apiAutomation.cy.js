const cypress = require("cypress")

describe('reqres api automation', () => {


    it('get api automatin', () => {

        cy.request("GET", "https://reqres.in/api/users?page=1").then((response) => {

            cy.writeFile("cypress/fixtures/getrespons.json", response)
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("per_page", 6)
            expect(response.body).to.have.property("total_pages", 2)
            expect(response.body.data[0].email).to.equal("george.bluth@reqres.in")
        })

    })



    it('HRM get employees', () => {
   
        cy.request({
            url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
            method: "GET",
            headers: {
                cookie:cypress.env("cookie") // Fetch cookie from environment
            }
        }).then((response) => {
            // Assert the response status
            expect(response.status).to.equal(200);
    
            // Validate response body structure
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('array').and.not.to.be.empty;
    
            // Write response data to a JSON file
            cy.writeFile("cypress/fixtures/getemphrm.json", response);
        });
    });
})





