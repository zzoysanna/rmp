context('App init', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	});

	it('find content on page', () => {
		cy.get('.input-section').should('be.visible');
		cy.get('.film-list').should('be.visible');
	});

	it('search input disabled if text is short', () => {
		cy.get('.input-section input')
			.type('te').should('have.value', 'te');

		cy.get('.input-section button')
			.should('be.disabled')
	});

	it('search input enabled', () => {
		cy.get('.input-section input')
			.type('test').should('have.value', 'test');

		cy.get('.input-section button')
			.should('not.be.disabled')
	});

	it('sort list by rating', () => {
		const ratingBtn = cy.get('.radio-buttons button').contains('rating');
		ratingBtn.click();
		ratingBtn.should('have.class', 'active');
	});
});
