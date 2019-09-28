import styled from "styled-components";

export const TabBarWrapper = styled.div`
    width:100%;
    height:.7rem;
    position:fixed;
    left:0;
    bottom:0;
    z-index:10;
    background:#fff;
    border-top:1px solid #ccc;
    ul,li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
       display:flex;
       width:100%;
       height:100%;
       flex-direction:column;
       justify-content:center;
       align-items:center; 
       font-size:.3rem;
    }
    i{
        font-size:.35rem;
    }
    .active{
        color:#c33;
    }
`