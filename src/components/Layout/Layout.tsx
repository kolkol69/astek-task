import { Outlet } from 'react-router-dom'

import { Container, Nav, NavLink, OuterContainer } from './Layout.style'

const Layout = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
      </Nav>
      <OuterContainer>
        <Container>
          <Outlet />
        </Container>
      </OuterContainer>
    </>
  )
}

export default Layout
