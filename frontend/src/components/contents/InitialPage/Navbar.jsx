import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate()
  return (
    <div className='my-2 drop-shadow-xl'>
    <Navbar>
      <NavbarBrand>
        <Image
        className='hover:cursor-pointer'
        onClick={()=>navigate('/')}
        width={60}
        src='https://store-images.s-microsoft.com/image/apps.26067.14066843210152934.575d9e61-8a3b-448f-98c9-63549a4e44e3.e076e50a-b5ea-4302-87a6-de8ca2337b5a'
         />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className='hover:cursor-pointer' onClick={()=>navigate('/login')}>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color='primary' className='hover:cursor-pointer' onClick={()=>navigate('/signup')} variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>   
    </div>
  )
}

export default NavBar
