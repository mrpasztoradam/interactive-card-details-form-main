export interface ICreditCardData {
  name?: string
  number?: number
  expiry?: {
    month?: number
    year?: number
  }
  cvv?: number
}

export const CreditCardData: ICreditCardData = {
  name: 'teszt',
  // eslint-disable-next-line no-octal
  number: 1000000000000000,
  expiry: {
    month: 10,
    year: 24,
  },
  cvv: 100,
}
