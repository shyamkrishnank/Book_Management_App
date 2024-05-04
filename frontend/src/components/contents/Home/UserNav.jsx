import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,User} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../Slices/AuthSlice';
import { axiosInstance } from '../axios/AxiosInterceptor';

function UserNav() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () =>{
    localStorage.removeItem('auth_token')
    axiosInstance.defaults.headers['Authorization'] = null
    axiosInstance.defaults.headers['Refresh-token'] = null
    dispatch(logout())
    navigate('/')

  }

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
        <NavbarItem>
        <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src=""
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem onClick={()=>navigate('/user/myreadings')}   key="readings" color="success">
            My Reading
          </DropdownItem>
          <DropdownItem onClick={()=>navigate('/user/mybooks')}  key="Books" color="success">
            My Books
          </DropdownItem>
          <DropdownItem onClick={handleLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </NavbarItem>
      </NavbarContent>
    </Navbar>   
    </div>
  )
}

export default UserNav
