import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import HeaderAuth from './header-auth';
import SearchInput from './search-input';
import { Suspense } from 'react';

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
          {/*  to prevent Deopt Error on build , beacuse of use of useParams in client component */}
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
