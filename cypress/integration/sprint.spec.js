describe('Spring', () => {
    describe('inputs and submit button',() => {
        it('can navigate to http://localhost:3000', () => {
            cy.visit('http://localhost:3000')
        })
        it('can type something in the "text" input and submit', () =>{
            cy.get('input[name="username"]').type('elbeg')
            cy.get('#submit').click()
            cy.contains('elbeg').should('exist')
        })
        
    })

})