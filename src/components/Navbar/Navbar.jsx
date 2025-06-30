import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.header`
  background: linear-gradient(to right, #1e1e2f, #2c2c3e);
  padding: 1.5rem 2rem;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBrand = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color:rgb(54, 52, 192); /* amber-400 */
  margin-bottom: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: #e0e0e0;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      color:rgb(147, 151, 212); /* amber hover */
      border-bottom: 2px solidrgb(204, 197, 179);
    }
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <StyledNavbar>
        <NavBrand>🎬 Movie App</NavBrand>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/movie/create">Add Movie</Link>
          </NavItem>
          <NavItem>
            <Link to="/movie/popular">Popular</Link>
          </NavItem>
          <NavItem>
            <Link to="/movie/now">Now Playing</Link>
          </NavItem>
          <NavItem>
            <Link to="/movie/top">Top Rated</Link>
          </NavItem>
        </NavList>
      </StyledNavbar>
    </NavContainer>
  );
}

export default Navbar;
