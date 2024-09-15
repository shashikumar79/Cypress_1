import addemp from "../pages/orangehrm.po"
import data1 from '../fixtures/orangeaddempdata.json'
describe('add emp and search', () => {


    it('orangehrm add emp and search edit and delete', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.orangelogin()


        addemp.pim().click()
        addemp.addempbtn().click()
        var r = (Math.random() + 1).toString(33).substring(8);
        addemp.firstnameinput().type(data1.FirstName + r)
        addemp.lastnameinput().type(data1.LastName + r)
        addemp.submitbtn().click()
        addemp.successmsg().should('be.visible')
        var k = Math.floor(Math.random() * 899988 + 100088)
        addemp.fullnamefirstname().should('have.text', data1.FirstName + r + ' ' + data1.LastName + r)
        addemp.fullnamelastname().eq(2).type(k)
        addemp.ELemployeid().eq(2).type(k + '1')
        addemp.ELempsavebtn().eq(0).click()
        addemp.ELsavesuccessupdate().should('be.visible')
        addemp.ELmenu().click()
        addemp.ELsearchempname().eq(0).type(data1.FirstName + r)
        addemp.ELsearchbtn().click()
        addemp.deletecheckbox().eq(1).click()
        addemp.deleteselectedbtn().click()
        addemp.yesdeletebtn().click()
        addemp.successfullydeleted().should('be.visible')

    })
})
