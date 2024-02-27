import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://media0.giphy.com/media/MeJgB3yMMwIaHmKD4z/200w.gif?cid=6c09b952ec8uv3xh0573xosoyvb2tj9c4niry1qy7f6z3ghv&ep=v1_gifs_search&rid=200w.gif&ct=g'
              height='30'
              alt=''
              loading='lazy'
            />
            Hide and Show
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
      
    </div>
  )
}

export default Header