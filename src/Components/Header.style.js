import styled from "styled-components";
import {Avatar} from '@material-ui/core';


export const HeaderContainer = styled.div`
width: 100%;
background-color: var(--headerColor) ;
color: white;
display: flex;
position: fixed;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px 0;
`;

export const HeaderLeft = styled.div`
flex: 0.3;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 0 0 0 20px;
padding-right: 20px;
`;

export const HeaderAvatar = styled(Avatar)`
cursor:pointer;
:hover{
  opacity: 0.8;
}
`;

export const HeaderSearch = styled.div`
flex:0.4;
display: flex;
opacity: 1;
padding: 0 50px;
text-align:center;
color: gray;
border: 1px solid gray;
background-color: #421f44;
border-radius: 6px;
>input{
  border:none;
  background-color: transparent;
  text-align: center;
  outline: 0;
  color:white;
  min-width: 30vw;
}



`;

export const HeaderRight = styled.div`
flex:0.3;
display: flex;
align-items: flex-end;
> .MuiSvgIcon-root{
   margin-left: auto;
   margin-right:30px;
}

`;