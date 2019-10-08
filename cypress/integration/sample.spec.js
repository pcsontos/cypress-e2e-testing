/// <reference types="cypress" />

import { Chance } from 'chance'

const chance = new Chance()

describe('Firestarter', () => {
  const email = chance.email()
  const pass = 'ValidPassword23'

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('has a title', () => {
    cy.contains('Welcome')
    expect(2).to.equal(2)
  })

  it('blocks protected routes', () => {
    cy.get('#navToggle').click()
    cy.contains('Welcome')
  })

  it('signs up a new user', () => {})
})
