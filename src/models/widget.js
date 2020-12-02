import data from './paymentSystems.json'
import validateNumber from './validateNumber'
import validateLuhn from './validateLuhn'
import detectPaymentSystem from './detectPaymentSystem'

import visa from '../assets/images/visa.png'
import mc from '../assets/images/mc.png'
import amex from '../assets/images/amex.png'
import jcb from '../assets/images/jcb.png'
import diners from '../assets/images/diners.png'
import discover from '../assets/images/discover.png'
import mir from '../assets/images/mir.png'

const logos = [
  visa, mc, amex, jcb, diners, discover, mir
]

export default class CardWidget {
  constructor() {
    this.paymentSystems = data
    this.logosContainer = document.getElementById('logos')
    let html = ''
    for (const logo of logos) {
      html += `<img src="${logo}" data-logo="${logo.id}" id="logo-${logo.id}" class="logo-img" alt="${logo.name}">`
    }
    this.logosContainer.innerHTML = html
    this.form = document.getElementById('form')
    this.input = document.getElementById('form-input')
    this.submit = document.getElementById('form-submit')
    this.error = document.getElementById('error-message')
  }

  // async init() {
  //   let html = ''
  //   for (const logo of this.paymentSystems) {
  //     const url = import(`../assets/images/${logo.id}.png`)
  //     const response = await url
  //     html += `<img src="${response.default}" data-logo="${logo.id}" id="logo-${logo.id}" class="logo-img" alt="${logo.name}">`
  //   }
  //   this.logosContainer.innerHTML = html
  // }

  validate() {
    // понимаю, что достаточно трудночитаемая фигня, но наводить красоту пока лень
    if (this.input.value) {
      this.clearError()
      if (validateNumber(this.input.value)) {
        if (validateLuhn(this.input.value)) {
          if (detectPaymentSystem(this.input.value)) {
            this.highlightLogo(detectPaymentSystem(this.input.value))
          } else this.showError('Unknown payment system')
        } else this.showError('Your number is not a card number')
      } else this.showError('Your number is not a number')
    } else this.showError('Enter something')
  }

  clearError() {
    this.error.textContent = ''
  }

  showError(text) {
    this.switchOffLogo()
    this.error.textContent = text
  }

  highlightLogo(system) {
    this.switchOffLogo()
    document.getElementById(`logo-${system}`).classList.add('logo-active')
  }

  switchOffLogo() {
    const highlighted = document.querySelector('img.logo-active')
    if (highlighted) {
      highlighted.classList.remove('logo-active')
    }
  }
}
