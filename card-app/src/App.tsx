import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'
import CreditCard from './components/CreditCard'
import { ICreditCardData } from './components/CreditCardData'

type Inputs = {
  name: string
  number: number
  cvv: number
  expiry: {
    month: number
    year: number
  }
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('cvv'))
  let inputData: ICreditCardData = {
    name: watch('name'),
    number: watch('number'),
    cvv: watch('cvv'),
    expiry: {
      month: watch('expiry.month'),
      year: watch('expiry.year'),
    },
  }

  return (
    <div className="app-container">
      <div className="main-bg">
        <div className="credit-card-front">
          <CreditCard
            data={inputData}
            side="front"
          />
        </div>
        <div className="credit-card-back">
          <CreditCard
            data={inputData}
            side="back"
          />
        </div>
      </div>
      <div className="main-form">
        <div className="form-component">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>CARDHOLDER NAME</label>
              <input
                {...register('name', {
                  required: true,
                })}
                placeholder="e.g. Jane Appleseed"
              />
              {errors.number && (
                <span className="fielderror">Required field!</span>
              )}
            </div>
            <div>
              <label>CARD NUMBER</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                {...register('number', {
                  required: true,
                  pattern: /[0-9]{16}/,
                })}
                placeholder="e.g. 1234567812345678"
              />
              {/* errors will return when field validation fails  */}
              {errors.number && (
                <span className="fielderror">
                  Required field! Please enter exactly 16 numbers!
                </span>
              )}
            </div>
            <div>
              <div>
                <label>EXP. DATE (MM/YY)</label>
                <input
                  {...register('expiry.month', {
                    required: true,
                    pattern: /[0-9]{2}/,
                  })}
                  placeholder="MM"
                />
                {/* errors will return when field validation fails  */}
                {errors.expiry?.month && (
                  <span className="fielderror">
                    Required field! Please enter exactly 2 numbers!
                  </span>
                )}
                <input
                  {...register('expiry.year', {
                    required: true,
                    pattern: /[0-9]{2}/,
                  })}
                  placeholder="YY"
                />
                {/* errors will return when field validation fails  */}
                {errors.expiry?.year && (
                  <span className="fielderror">
                    Required field! Please enter exactly 2 numbers!
                  </span>
                )}
              </div>
              <div>
                <label>CVV</label>
                <input
                  {...register('cvv', {
                    required: true,
                    pattern: /[0-9]{3}/,
                  })}
                  placeholder="e.g. 123"
                />
                {errors.cvv && (
                  <span className="fielderror">
                    Required field! Please enter exactly 3 numbers!
                  </span>
                )}
              </div>
            </div>

            <div>
              <button type="submit">Submint</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
