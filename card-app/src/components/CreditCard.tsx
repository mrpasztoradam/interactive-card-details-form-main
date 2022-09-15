import React from 'react'
import styled from 'styled-components'
import bgCardBack from '../images/bg-card-back.png'
import bgCardFront from '../images/bg-card-front.png'
import { ICreditCardData } from './CreditCardData'

const FrontContainer = styled.div`
  position: absolute;
  background-image: url(${bgCardFront});
  background-size: cover;
  border-radius: 10px;
  height: 200px;
  width: 364px;
  top: 20%;
  left: 30%;
`
const BackContainer = styled.div`
  position: absolute;
  background-image: url(${bgCardBack});
  background-size: cover;
  border-radius: 10px;
  height: 200px;
  width: 364px;
  top: 60%;
  left: 50%;
`
const CvvDiv = styled.div`
  position: absolute;
  top: 42%;
  left: 75%;
`
const NameDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 10%;
`
const NumberDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
`
const ExpiryDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 75%;
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
          {/* <CardImg src={bgCardFront}/>  */}
          <NumberDiv>
            {data?.number?.toString().slice(0, 4)}-
            {data?.number?.toString().slice(4, 8)}-
            {data?.number?.toString().slice(8, 12)}-
            {data?.number?.toString().slice(12, 16)}
          </NumberDiv>
          <NameDiv>{data?.name?.toUpperCase()}</NameDiv>
          <ExpiryDiv>
            {data?.expiry?.month} / {data?.expiry?.year}
          </ExpiryDiv>
        </FrontContainer>
      ) : (
        <BackContainer>
          <CvvDiv>{data?.cvv}</CvvDiv>
        </BackContainer>
      )}
    </>
  )
}

export default CreditCard
