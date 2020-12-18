import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        NFT
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/staking">
        Staking
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/faq">
        FAQ
      </StyledLink>
      {/* <StyledAbsoluteLink
        href="https://sushiswap.fi/"
        target="_blank"
      >
        SushiSwap Fi
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://lite.sushiswap.fi/#/swap"
        target="_blank"
      >
        SushiSwap Lite
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://exchange.sushiswapclassic.org"
        target="_blank"
      >
        Exchange
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://docs.sushiswap.fi/"
        target="_blank"
      >
        Help
      </StyledAbsoluteLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.linkcolor};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.linkhovercolor};
  }
  &.active {
    color: ${(props) => props.theme.linkactivecolor};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav