import React, { Component } from 'react'
import './Login.css'
import {ThemeProvider} from 'styled-components'
import BodyLogin from '../styleComponents/BodyLogin'
import SectionLogin from '../styleComponents/SectionLogin'
import AreaInputLogin from '../styleComponents/AreaInputLogin'
import LoginBox from '../styleComponents/LoginBox'
import LoginInnerBox from '../styleComponents/LoginInnerBox'
import LoginLogo from '../styleComponents/LoginLogo'
import Logo from '../styleComponents/Logo'
import AreaInputLoginLabel from '../styleComponents/AreaInputLoginLabel'
import InputLogin from '../styleComponents/InputLogin'
import InputMainArea from '../styleComponents/InputMainArea'
import InputMainArea2 from '../styleComponents/InputMainArea2'
import Input from '../styleComponents/Input'
import LoginLowArea from '../styleComponents/LoginLowArea'
import ButtonArea from '../styleComponents/ButtonArea'
import Button from '../styleComponents/ButtonLogin'
import LoginSpan from '../styleComponents/LoginSpan'
import LoginSpan2 from '../styleComponents/LoginSpan2'
import AreaTextLogin from '../styleComponents/AreaTextLogin'
import LoginMainText1 from '../styleComponents/LoginMainText1'
import SignUpLogin from '../styleComponents/SignUpLogin'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

import logoImg from '../../images/sociallift.png'

const theme = {
  font:"Montserrat"
}
const InputEmail = () => {
  return (
    <MDBInput hint='Email Address *' type='email' />
  );
}

const InputPassword = () => {
  return (
    <MDBInput hint='Password *' type='password' />
  );
}

class Login1 extends Component {
  render() {
    return (
        <BodyLogin>
        <SectionLogin>
           
             <LoginBox>
               <LoginInnerBox>
                 <LoginLogo>
                   <Logo src={logoImg}/>
                 </LoginLogo>
                 <form>
                   <AreaInputLogin>
                     <AreaInputLoginLabel></AreaInputLoginLabel>
                     {/* <InputLogin>
                       <InputMainArea>
                         <InputMainArea2>
                           <Input placeholder='Email Address *' type='text'/>
                         </InputMainArea2>
                       </InputMainArea>
                     </InputLogin> */}
                     <InputEmail/>
                   </AreaInputLogin>
   
                   <AreaInputLogin>
                     <AreaInputLoginLabel></AreaInputLoginLabel>
                     {/* <InputLogin>
                       <InputMainArea>
                         <InputMainArea2>
                           <Input placeholder='Password *' type='password'/>
                         </InputMainArea2>
                       </InputMainArea>
                     </InputLogin> */}
                     <InputPassword/>
                   </AreaInputLogin>
                   
                   <LoginLowArea>
                       <ButtonArea>
                         <Button type='submit' className='hoverButton'>
                         <LoginSpan>Login</LoginSpan>
                         <LoginSpan2></LoginSpan2>
                         </Button>
                       </ButtonArea>
   
                       <AreaTextLogin>
                         <LoginMainText1>Do not have an account?</LoginMainText1>
                         <SignUpLogin href='#'>Sign Up</SignUpLogin>
                       </AreaTextLogin>
                   </LoginLowArea>
                   
   
                 </form>
   
               </LoginInnerBox>
             </LoginBox>
   
        </SectionLogin>
       </BodyLogin>
    )
  }
}

export default Login1;