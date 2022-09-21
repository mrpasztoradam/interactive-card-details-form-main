import React from 'react'
import styled from 'styled-components'
import bgCardBack from '../images/bg-card-back.png'
import bgCardFront from '../images/bg-card-front.png'
import { ICreditCardData } from './CreditCardData'

const FrontContainer = styled.div`
  background-image: url(${bgCardFront});
  background-size: cover;
  width: inherit;
  height: inherit;
  border-radius: inherit;
`
const BackContainer = styled.div`
  background-image: url(${bgCardBack});
  background-size: cover;
  width: inherit;
  height: inherit;
  border-radius: inherit;
`
const CvvDiv = styled.div`
  position: absolute;
  top: 43%;
  left: 82%;
  font-size: 16px;
`
const NameDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 10%;
  font-size: 16px;
`
const NumberDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 12%;
`
const ExpiryDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 75%;
  font-size: 16px;
`

interface ICreditCard {
  data?: ICreditCardData
  width?: string
  height?: string
  side?: 'front' | 'back'
}

const CreditCard = ({ data, side, width, height }: ICreditCard) => {
  return (
    <>
      {side === 'front' ? (
        <FrontContainer>
          <svg
            style={{ position: 'absolute', top: '10px', left: '10px' }}
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="23.478"
              cy="23.5"
              rx="23.478"
              ry="23.5"
              fill="#fff"
            />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
          <NumberDiv>
            {data?.number?.toString().slice(0, 4)}-
            {data?.number?.toString().slice(4, 8)}-
            {data?.number?.toString().slice(8, 12)}-
            {data?.number?.toString().slice(12, 16)}
          </NumberDiv>
          <NameDiv>{data?.name?.toUpperCase().slice(0, 20)}</NameDiv>
          <ExpiryDiv>
            {data?.expiry?.month?.toString().slice(0, 2)} /{' '}
            {data?.expiry?.year?.toString().slice(0, 2)}
          </ExpiryDiv>
        </FrontContainer>
      ) : (
        <BackContainer>
          <CvvDiv>{data?.cvv?.toString().slice(0, 3)}</CvvDiv>
        </BackContainer>
      )}
    </>
  )
}

export default CreditCard
