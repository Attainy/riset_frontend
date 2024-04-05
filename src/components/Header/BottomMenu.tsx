import styled, { css } from "styled-components";
import { ReactComponent as Hamburger } from "../../assets/bottomNav/bottom-hamburger.svg";
import { ReactComponent as Board } from "../../assets/bottomNav/bottom-board.svg";
import { ReactComponent as Home } from "../../assets/bottomNav/bottom-home.svg";
import { ReactComponent as Commute } from "../../assets/bottomNav/bottom-commute.svg";
import { ReactComponent as Chat } from "../../assets/bottomNav/bottom-chat.svg";

const List = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-brand-main);
  padding: 0 1rem;
  z-index: 100;
`;

const Item = styled.li`
  padding: 10px;
`;

const CommonMenu = css`
  cursor: pointer;
  path {
    stroke: var(--color-white);
  }
`;

const HamburgerMenu = styled(Hamburger)`
  ${CommonMenu}
`;

const BoardMenu = styled(Board)`
  ${CommonMenu}
`;

const HomeMenu = styled(Home)`
  ${CommonMenu}
`;

const CommuteMenu = styled(Commute)`
  ${CommonMenu}
`;

const ChatMenu = styled(Chat)`
  ${CommonMenu}
`;

interface SideMenuOpen {
  handleSideMenuOpen: () => void;
}

export default function BottomMenu({ handleSideMenuOpen }: SideMenuOpen) {
  return (
    <List>
      <Item>
        <HamburgerMenu onClick={handleSideMenuOpen} />
      </Item>
      <Item>
        <BoardMenu />
      </Item>
      <Item>
        <HomeMenu />
      </Item>
      <Item>
        <CommuteMenu />
      </Item>
      <Item>
        <ChatMenu />
      </Item>
    </List>
  );
}
