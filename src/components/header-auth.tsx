'use client';

import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  Button,
  Avatar,
  NavbarItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { auth } from '@/auth';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

const HeaderAuth = () => {
  const session = useSession();
  // This makes use of Cookies on request which make this route to be Dynamic
  //  Because Header is used in layout it make every route to be Dynamic
  // So we make HeaderAuth Client Component to work on client and left server page static
  let authContent: React.ReactNode;
  if (session.status === 'loading') {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement='left'>
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className='p-4'>
            <form action={actions.signOut}>
              <Button type='submit' color='primary' variant='flat'>
                Sign Up
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type='submit' color='secondary' variant='bordered'>
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type='submit' color='primary' variant='flat'>
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
};

export default HeaderAuth;
