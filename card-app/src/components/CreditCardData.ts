
export interface ICreditCardData {
    name?: string
    number?: number
    expiry?: {
        month?: number
        year?: number
    }
    cvv?: number
}

export const CreditCardData:ICreditCardData = 
    {name: 'teszt',
    number: 1234123412341234,
    expiry: {
        month: 10,
        year: 24,
    },
    cvv: 100
    }
