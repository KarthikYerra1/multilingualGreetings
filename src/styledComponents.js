import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  background-size: cover;
  font-family: 'Roboto';
  min-height: 100vh;
`

export const AppHeading = styled.h1`
  font-size: 30px;
  font-weight: 700px;
  margin-bottom: 1em;
  color: #1e293b;
`
export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`

export const Image = styled.img`
  height: 70%;
  width: 40%;
`
