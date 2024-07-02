class orangelogin {

    dashboardassertion()
    {
      return  cy.contains('Dashboard')
    }
    
    invalidusernameerrmsg()
    {
        return cy.contains('Invalid credentials')
    }
    invalidpassworderrmsg()
    {
    return cy.contains('Invalid credentials')
    }
    invaliduserpasserrmsg()
    {
        return cy.contains('Invalid credentials')
    }
    
    }
        
    const orangeloginpage = new orangelogin()
    export default orangeloginpage