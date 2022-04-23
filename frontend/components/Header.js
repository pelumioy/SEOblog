import { useState } from 'react';
import Link from 'next/link';
import Nprogress from 'nprogress'
import Admin from './auth/admin';
import Router from 'next/router'
import {signout, isAuth} from '../actions/auth'
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Private from './auth/Private';
import Search from './blog/Search'

// implementing progress bar
Router.onRouteChangeStart = url => Nprogress.start()  
Router.onRouteChangeComplete = url => Nprogress.done()  
Router.onRouteChangeError = url => Nprogress.done()  

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar color="light" light expand="md">
        <Link href="/">
        <NavLink style={{cursor: 'pointer'}} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>    
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="" navbar>
              {isAuth() && isAuth().role === 1 && (
                <Admin>
                        <NavItem>
                        <Link href="/admin">
                            <NavLink style={{cursor: 'pointer'}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                        </Link>
                        </NavItem>
                </Admin>

              )}
              {isAuth() && isAuth().role === 0 && (
                <Private>
                        <NavItem>
                        <Link href="/user">
                            <NavLink style={{cursor: 'pointer'}}>{`${isAuth().name}'s Dashboard`}</NavLink>
                        </Link>
                        </NavItem>
                </Private>

              )}
                <NavItem>
                  <Link href="/blogs">
                      <NavLink style={{cursor: 'pointer'}}>Blogs</NavLink>
                  </Link>
                </NavItem>
            {!isAuth() && (
                <NavItem>
                <Link href="/signin">
                    <NavLink style={{cursor: 'pointer'}}>Signin</NavLink>
                </Link>
                </NavItem>
            )}
            {!isAuth() && (
                <NavItem>
                <Link href="/signup">
                    <NavLink style={{cursor: 'pointer'}}>Signup</NavLink>
                </Link>
                </NavItem>
                
            )}
            {isAuth() && (
                <NavItem>
                    <NavLink style={{cursor: 'pointer'}} onClick={() => signout(() => Router.replace('/signin'))}>Logout</NavLink>
                </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </>
  );
};

export default Header;