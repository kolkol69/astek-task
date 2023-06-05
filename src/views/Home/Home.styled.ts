import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const List = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  padding: 32px;
  background-color: #f8f8f8;
  border-radius: 5px;

  &:hover {
    background-color: #e8e8e8;
  }
`
