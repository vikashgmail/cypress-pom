describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().contains('JOIN NOW').click()
  })
})