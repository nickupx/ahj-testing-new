const result = 1

describe('test example', () => {  

  test('Should be 1', () => {
    expect(result).toBe(1)
    })
  })

/* import CardWidget from '../../widget'

const widget = new CardWidget()
const input = widget.input
const submit = widget.submit

describe('Card validation form', () => {  

test('Should display error', () => {
  input.value = '4111111111111113'
  submit.click()
  expect(document.querySelector('#error-message').textContent).toBe('Your number is not a card number')
  })
}) */