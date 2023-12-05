import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/007-crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartDropdown from '../../components/card-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>

                <NavLinks>
                    <LogoContainer to='/shop'>
                        SHOP
                    </LogoContainer>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon></CartIcon>
                </NavLinks>
                {
                    isCartOpen && <CartDropdown></CartDropdown>
                }
            </NavigationContainer>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;
