import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  height: 35px;
  width: 70px;
  border: solid 1px #db1c48;
  border-radius: 10px;
  color: ${props => (props.active ? '#fff' : '#db1c48')};
  background-color: ${props => (props.active ? '#db1c48' : '#fff')};
  padding: 10px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
