describe('Update Employee', () => {
	it('updates successfully', () => {
		cy.visit('http://localhost:3000');
		cy.contains('Senior Front-End Engineer').should('not.exist');
		cy.get('[data-test-id="staff-block"]').find('>a').should('have.length', 7);	
		
		cy.contains('Help Desk Operator').click();
		cy.get('input#Position').should('have.value', 'Help Desk Operator');
		
		cy.get('input#Position').clear();
		cy.get('input#Position').type('Senior Front-End Engineer');
		cy.get('input#Position').should('have.value', 'Senior Front-End Engineer');
		cy.contains('Submit').click();

		cy.contains('Home').click();

		cy.contains('Senior Front-End Engineer').should('exist');
	})
})