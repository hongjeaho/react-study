import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

export const Nav = styled.nav`
  flex: 1;
  overflow: auto;
  padding-top: 1rem;

  nav a span {
    float: right;
    color: #eeb004;
  }
  a.active span {
    color: inherit;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    margin: 0.25rem 0;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  white-space: pre;
  padding: 0.5rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  gap: 1rem;

  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: hsl(224, 98%, 58%);
    color: white;
  }
  &.pending {
    color: hsl(224, 98%, 58%);
  }
`