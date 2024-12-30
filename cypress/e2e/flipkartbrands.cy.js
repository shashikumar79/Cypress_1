describe("testsute for flipcart",()=>{
    it("test case",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.get('input[title="Search for Products, Brands and More"]').type("laptops{enter}")
        var valuewithoutdolour
        var arr=[]
        cy.get('div[class="Nx9bqj _4b5DiR"]').each((value)=>{
            var value2=value.text()
            cy.log(value)
            valuewithoutdolour=value2.replace('₹',"").replace(',',"")
            valuewithoutdolour=Number(valuewithoutdolour)
            cy.log(valuewithoutdolour)
            arr.push(valuewithoutdolour)
            cy.log(arr)
            })
            cy.get('div[class="Nx9bqj _4b5DiR"]').its('length').then((length)=>{
            cy.log(length)
            for(let i=0;i<=arr.length-1;i++){
                if(arr[i]>30000){
                    cy.log(arr[i])
                    cy.get('div[class="KzDlHZ"]').eq(i).then((txt)=>{
                        var name=txt.text()
                        cy.log(name)
                    })
                }
            }
        })
    })

})
