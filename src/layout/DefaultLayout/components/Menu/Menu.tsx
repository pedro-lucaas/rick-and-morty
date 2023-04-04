import React from 'react';

import { useDisclosure } from '../../../../hooks/useDisclosure';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../../../routes/routes';

import { MdMenu, MdClose } from 'react-icons/md';
import { MenuButton, MenuBody, MenuCloseButton, MenuItem } from './Menu.style';

const Menu: React.FC = () => {
  const navigate = useNavigate()
  const { toggle: onToggleMenu, isOpen: menuIsOpen } = useDisclosure();
  const pathname = window.location.pathname;

  const handleNavigate = (route: string) => {
    navigate(route);
    onToggleMenu();
  }

  return (
    <>
      <MenuButton onClick={onToggleMenu} >
        <MdMenu />
      </MenuButton>
      <MenuBody isOpen={menuIsOpen}>
        <MenuCloseButton onClick={onToggleMenu}>
          <MdClose />
        </MenuCloseButton>
        <MenuItem isCurrent={pathname === routes.CHARACTERS} onClick={() => handleNavigate(routes.CHARACTERS)}>
          Characters
        </MenuItem>
        <MenuItem isCurrent={pathname === routes.WATCHLIST} onClick={() => handleNavigate(routes.WATCHLIST)}>
          Watchlist
        </MenuItem>
      </MenuBody>
    </>
  );
}


export default Menu;