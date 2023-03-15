import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logoIgnite from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title='Timer'>
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title='Histórico'>
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
