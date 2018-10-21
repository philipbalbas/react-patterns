import styled from 'styled-components'

export const Demo = styled.div`
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const View = styled.div`
  background: lightgray;
  border-radius: 5px;
  height: 35px;
  font-size: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavbarStyle = styled.div`
  border-bottom: 1px solid rgba(144, 144, 144, 0.24);
  position: sticky;
  width: 100%;
  display: flex;
  align-items: center;
`

export const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Logo = styled.img`
  height: 60px;
`

export const CounterStyle = styled.div`
  position: relative;
`

export const Menu = styled.div`
  position: absolute;
`

export const NavLink = styled.span`
  /* color: red; */
  border-left: 2px solid gray;
  padding: 10px;

  > a {
    text-decoration: none;
    color: #2d92ec;
  }
`
