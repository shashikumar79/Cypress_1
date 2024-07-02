class orangehrmpim
{

pimtext()
{
    return cy.contains('PIM')
}

pimaddemp()
{
    return cy.contains('Add Employee')
}

addempfirstname()
{
    return cy.get('input[class="oxd-input oxd-input--active orangehrm-firstname"]')
}

addemplastname()
{
    return cy.get('input[name="lastName"]')
}
addempempid()
{
    return cy.get('input[class="oxd-input oxd-input--active"]').first()
}
addempsavebtn()
{
    return cy.get('button[type="submit"]')
}
addempsuccessassert()
{
    return cy.contains('Successfully Saved')
}
emplisttext()
{
    return cy.contains('Employee List')
}
emplistempname()
{
    return cy.get('input[placeholder="Type for hints..."]').first()
    
}
emplistsearchbtn()

{
    return cy.get('button[type="submit"]')
}
emplistthomastextclick()
{

    return cy.contains('thomas')
}
pimemplistprofileclick()
{
    return cy.get('img[class="employee-image"]')
}
pimemplistprofileupload()
{
    return cy.get('i[class="oxd-icon bi-plus"]')
}
pimemplistprofilesavebtn()
    {
return cy.get('button[type="submit"]')
    }
pimprofileerrmsg()
{
    return cy.contains('Required')
}
pimthomasclick()
{
    return cy.contains('thomas')
}
pimpersonaldetailsimageclick()
{
    return cy.get('img[class="employee-image"]')
}
pimprofileattach()
{
    return cy.get('i[class="oxd-icon bi-plus"]')
}
pimprofilesavebtn()
{
    return cy.get('button[type="submit"]')
}
personaldetailsclick()
{
    return cy.contains('Personal Details')
}
personaldetailsassert()
{
    return cy.contains('Personal Details')
}



}
const orangepimpage= new orangehrmpim
 export default orangepimpage
 