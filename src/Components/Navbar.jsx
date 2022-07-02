import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: pink;
  color: white;
  padding: 20px;
  font-size:16px;
`;

const StyledLink = styled(Link)`
  color: green;
  text-decoration:none;
`;

const Navbar = () => {
    const {isAuth, handleAuth}=React.useContext(AuthContext)
  return <NavbarWrapper>
    {
        isAuth ? (<>
                    <StyledLink to="/home">Home</StyledLink>
                    <button onClick={handleAuth} style={{border:"none",background:"pink", color:"green", cursor:"pointer", fontSize:"14px"}}>Logout</button>
                 </>
                 ) 
                 : (<><p style={{margin:'auto',color:"green", marginRight:0,marginLeft:0}}>Home</p>
            <StyledLink to="/">Login</StyledLink></>)}
       
  </NavbarWrapper>
};

export default Navbar;
