import React from 'react';
import styled from "styled-components";
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, provider} from '../firebase';





function Login() {

    const [user, loading, error] = useAuthState(auth);
    function SignIn(e){
      e.preventDefault();
     auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }

const SignOut = ()=>{
    auth.signOut();
}
    
    user !==null && console.log(user.email + user.displayName);
    console.log(user);

    return (
        <LoginContainer>
        <PersonIcon/>
        <Button onClick={SignIn} variant="contained" color="primary">
        Sign in with google 
      </Button>
      <Button onClick={SignOut} variant="contained" color="primary">
        SignOut
      </Button>


        </LoginContainer>
    )
}

export default Login



const LoginContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;
display: flex;
align-items: center;
flex-direction: column;
background-color: grey;
> .MuiSvgIcon-root{
    color: white;
}
`;
