import styled from "styled-components";

export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    min-height: 100vh;

`
export const H1 = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 25px 0 76px 0;
`
export const Label = styled.label`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    display: flex;
    flex-direction: column;
    gap: 15px;
    select, input{
        width: 342px;
        height: 58px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 14px;
        border: none;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        outline: none;
        padding-left: 15px;
        margin-bottom: 30px;
    }
    option{
        background: #C4C4C4;
    }

`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    border: none;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }

`
export const Image = styled.img`
    margin-top: 15px;
`