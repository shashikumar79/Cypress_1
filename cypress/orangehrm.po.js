class addemppage {


    pim() {

        return cy.contains('PIM')
    }


    addempbtn() {

        return cy.contains('Add Employee')
    }


    firstnameinput() {

        return cy.get('[placeholder="First Name"]')

    }
    lastnameinput() {


        return cy.get('[name="lastName"]')
    }

    empid() {

        return '[class="oxd-input oxd-input--active"]'

    }

    submitbtn() {

        return cy.get('[type="submit"]')
    }

    successmsg() {


        return cy.get('[id="app"]')
    }
    fullnamefirstname() {

        return cy.get('[class="oxd-text oxd-text--h6 --strong"]')
    }

    fullnamelastname() {

        return cy.get('[class="oxd-input oxd-input--active"]')
    }

    ELemployeid() {

        return cy.get('[class="oxd-input oxd-input--active"]')
    }

    ELempsavebtn() {

        return cy.get('[type="submit"]')
    }

    ELsavesuccessupdate() {

        return cy.contains('Successfully Updated')
    }
    ELmenu() {

        return cy.contains('Employee List')
    }

    ELsearchempname() {

        return cy.get('[placeholder="Type for hints..."]')
    }

    ELsearchbtn() {

        return cy.contains(' Search ')
    }
    deletecheckbox() {

        return cy.get('[class="oxd-icon bi-check oxd-checkbox-input-icon"]')
    }

    deleteselectedbtn() {

        return cy.contains(' Delete Selected ')
    }

    yesdeletebtn() {

        return cy.contains(' Yes, Delete ')
    }
    successfullydeleted() {

        return cy.contains('Successfully Deleted')
    }



}
const addemp = new addemppage()
export default addemp