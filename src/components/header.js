import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Behance from '../assets/behance.svg';
import Linkedin from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';

const StyledHeader = styled.header`
  background: white;
  margin-bottom: 1.45rem;
  `;

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
`;

const Logo = styled.div`
  flex-grow: 1;
  margin: 0;
`;

const StyledLogoLink = styled(props => <Link {...props} />)`
  font-family: fertigo-pro, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: black;
  text-decoration: none;
  :hover {
    color: red;
  }
`;

const StyledNavLink = styled(props => <Link {...props}/>)`
  font-family: fertigo-pro, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: grey;
  margin: auto 10px;
  :hover {
    color: black;
  }
`;

const StyledBehance = styled(props => <Behance {...props}/>)`
  :hover {
    fill: black;
  }
`;

const StyledLinkedIn = styled(props => <Linkedin {...props}/>)`
  :hover {
    fill: black;
  }
`;

const StyledInstagram = styled(props => <Instagram {...props}/>)`
  :hover {
    fill: black;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Logo>
        <StyledLogoLink to="/" >
          {siteTitle}
        </StyledLogoLink>
      </Logo>
        <StyledNavLink to="/work">Work</StyledNavLink>
        <StyledNavLink to="/side-notes">Side Notes</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="https://www.behance.net/MaryChoueiter"><StyledBehance fill="grey"/></StyledNavLink>
        <StyledNavLink to="https://www.instagram.com/tahhiyakaryoka/"><StyledLinkedIn fill="grey"/></StyledNavLink>
        <StyledNavLink to="https://www.linkedin.com/in/marychoueiter"><StyledInstagram fill="grey"/></StyledNavLink>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
