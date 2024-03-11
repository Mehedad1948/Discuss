import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  NavbarItem,
} from '@nextui-org/react';
import HeaderAuth from './header-auth';

const Header = () => {
  // const session = await auth();
  // This makes use of Cookies on request which make this route to be Dynamic
  //  Because Header is used in layout it make every route to be Dynamic
  // So we make HeaderAuth Client Component to work on client and left server page static

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
