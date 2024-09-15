import logindatacreds from "../fixtures/orangehrm_login_credsdata.json"
import orangeloginpage from "../pages/orange.po"
import orangepimpage from "../pages/orangepim.po"

describe('orange hrm application', () => {
    cy.on('uncaught:exception', () => {

        return false
    })
    it('1 orangehrm login with valid creds', () => {

        cy.visit('/web/index.php/auth/login')
        cy.orangelogibncreds(logindatacreds.case1.username, logindatacreds.case1.password)
        orangeloginpage.dashboardassertion().should('be.visible')
    })
    it('2 orangehrm login with invalid username', () => {

        cy.visit('/web/index.php/auth/login')
        cy.orangelogibncreds(logindatacreds.case2.username, logindatacreds.case2.password)
        orangeloginpage.invalidusernameerrmsg().should('be.visible')
    })
    it('3 orangehrm login with invalid password', () => {


        cy.visit('/web/index.php/auth/login')
        cy.orangelogibncreds(logindatacreds.case3.username, logindatacreds.case3.password)
        orangeloginpage.invalidpassworderrmsg().should('be.visible')
    })
    it('4 orangehrm login with invalid username and password', () => {


        cy.visit('/web/index.php/auth/login')
        cy.orangelogibncreds(logindatacreds.case4.username, logindatacreds.case4.password)
        orangeloginpage.invaliduserpasserrmsg().should('be.visible')
    })
    it('5 orangehrm pim module click add emp', () => {

        cy.visit('/web/index.php/dashboard/index')
        cy.orangelogibncreds(logindatacreds.case5.username, logindatacreds.case5.password)
        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.url().should('include', "/web/index.php/dashboard/index")
        orangepimpage.pimtext().click()
        orangepimpage.pimaddemp().click()
        orangepimpage.addempfirstname().type('shashijhon')
        orangepimpage.addemplastname().type('thomas')
        var k = Math.floor(Math.random() * 899988 + 100088)
        orangepimpage.addempempid().type(k + '1')
        cy.get('i[class="oxd-icon bi-plus"]').attachFile('Passport Size Photo_page-0001.jpg')
        orangepimpage.addempsavebtn().click()
        orangepimpage.addempsuccessassert().should('be.visible')

    })
    it('6 orangehrm pim module click emp list', () => {
        cy.on('uncaught:exception', () => {

            return false
        })
        cy.visit('/web/index.php/dashboard/index')
        cy.orangelogibncreds(logindatacreds.case5.username, logindatacreds.case5.password)
        orangepimpage.pimtext().click()
        orangepimpage.emplisttext().click()
        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        orangepimpage.emplistempname().type('shashijhon thomas')
        orangepimpage.emplistsearchbtn().click()
        orangepimpage.emplistthomastextclick().click()
        orangepimpage.pimemplistprofileclick().click()
        orangepimpage.pimemplistprofileupload().attachFile('Passport Size Photo_page-0001.jpg')
        orangepimpage.pimemplistprofilesavebtn().click()
        orangepimpage.pimprofileerrmsg().should('be.visible')
    })
it.only('7 pim emplist personal details',()=>{

    cy.visit('/web/index.php/dashboard/index')
    cy.orangelogibncreds(logindatacreds.case5.username, logindatacreds.case5.password)
    orangepimpage.pimtext().click()
    orangepimpage.emplisttext().click()
    orangepimpage.emplistempname().type('shashijhon  thomas')
    orangepimpage.emplistsearchbtn().click()
    orangepimpage.pimthomasclick().click()
    orangepimpage.pimpersonaldetailsimageclick().click()
    orangepimpage.pimprofileattach().attachFile('Passport Size Photo_page-0001.jpg')
    orangepimpage.pimprofilesavebtn().click()
    orangepimpage.personaldetailsclick().click()
    orangepimpage.personaldetailsassert().should('be.visible')
cy.get('input[class="oxd-input oxd-input--active"]').eq(3).type('dl123456sh')
cy.get('[placeholder="yyyy-dd-mm"]').first().type('2020-20-02')
cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click   ('American')
cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(1).select('Single')
cy.get('input[class="oxd-input oxd-input--active"]').eq(5).type('1999-02-03')
cy.contains('Male').click()
cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').first().click()


    
})


})
