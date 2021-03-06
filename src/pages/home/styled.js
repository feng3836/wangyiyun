import styled from "styled-components";

export const HomeWrapper = styled.div`
    width:100%;
    position:fixed;
    top:0;
    bottom:0;
    padding-bottom:.7rem;
    .header{
        width:100%;
        height:1.6rem;
        background-color:#d43c33;
        position:fixed;
        z-index:10;
        left:0;
        top:0;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .3rem 0 .3rem;
    }
    .header>span:nth-child(1){
        font-size:.4rem;
        letter-spacing:.05rem;
        color:#fff;
    }
    .header>span:nth-child(1)>.iconfont{
        font-size:.45rem;
        vertical-align:middle;
        margin-right:.08rem;
    }
    .header>span:nth-child(2){
        width:2rem;
        height:.72rem;
        background-color:#fff;
        border-radius:.36rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.3rem;
        color:#d43c33;
    }
    .header>span:nth-child(2)>.iconfont{
        font-size:.35rem;
        vertical-align:middle;
        margin-right:.26rem;
    }
    ul{
        width:100%;
        height:.8rem;
        background:#fff;
        border-bottom:.01rem solid #ccc;
        position:fixed;
        z-index:10;
        left:0;
        top:1.6rem;
        display:flex;
    }
    ul>li{
        width:100%;
        height:100%;
    }
    ul>li>a{
        display:block;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
    }
    ul>li>a>p{
        height:.8rem;
        display:block;
        float:left;
        padding:0 .1rem 0 .1rem;
        font-size:.3rem;
        color:#333;
        font-wight:bolder;
        line-height:.7rem;  
    }
    .active>p{
        color:#c33;
        border-bottom:.04rem solid #d43c33;
    }
`;