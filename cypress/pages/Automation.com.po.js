class register_user{

signupbtn(){

    return cy.get('a[href="/login"]')
}
signupbtnasrt(){

    return cy.contains('New User Signup!')
}
usernamefield(){

    return cy.get('input[data-qa="signup-name"]')
}
email(){

    return cy.get('[data-qa="signup-email"]')
}

signuppbtn(){

    return cy.get('[data-qa="signup-button"]')
}





}
const register= new register_user()
export default register