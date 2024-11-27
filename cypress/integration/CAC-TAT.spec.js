/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it('Verifica o título da aplicação', function() {
        cy.visit('./src/index.html')
        cy.title()
          .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatrios e envia o formulário', function() {
        cy.visit('./src/index.html')

        cy.get('input[id="firstName"]')
          .type('Josivalda')
          .should('have.value', 'Josivalda')

        cy.get('input[id="lastName"]')
          .type('Marinho')
          .should('have.value', 'Marinho')

        cy.get('input[id="email"]')
          .type('josivaldinha@gmail.com')
          .should('have.value', 'josivaldinha@gmail.com')

        cy.get('input[id="phone"]')
          .type('88912345678')
          .should('have.value', '88912345678')

        cy.get('textarea[id="open-text-area"]')
          .type('Help')
          .should('have.value', 'Help')

        cy.get('button[type="submit"]')
          .should('be.visible')
          .click()
    })
})
  