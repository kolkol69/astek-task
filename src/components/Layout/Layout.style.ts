import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  padding: 0 32px 16px;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  background-color: aliceblue;
  height: 64px;
  padding: 0 32px;
  width: 100%;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 600;
  :hover {
    text-decoration: underline;
  }
  :visited {
    color: black;
  }
`
